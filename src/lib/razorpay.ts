export type RazorpayCheckoutOptions = {
  key: string;
  amount: number;
  currency: string;
  orderId: string;
  name: string;
  description: string;
  onSuccess?: () => void;
  onDismiss?: () => void;
};

export function openRazorpayCheckout(
  options: RazorpayCheckoutOptions
): void {
  const razorpayOptions = {
    key: options.key,
    amount: options.amount,
    currency: options.currency,
    name: options.name,
    description: options.description,
    order_id: options.orderId,

    handler: async function (response: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) {
      try {
        const storedUser = localStorage.getItem("tadda_user");

        if (!storedUser) {
          throw new Error("User is not logged in.");
        }

        const user = JSON.parse(storedUser);

        const verificationResponse = await fetch(
          "http://localhost:8080/api/registration-payment/verify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            }),
          }
        );

        const responseText = await verificationResponse.text();

        console.log("Verification status:", verificationResponse.status);
        console.log("Verification response:", responseText);

        if (!verificationResponse.ok) {
          throw new Error(
            responseText || "Payment verification failed"
          );
        }

        const result = responseText
          ? JSON.parse(responseText)
          : null;

        console.log("Payment verification response:", result);

        alert("Payment verified successfully!");

        options.onSuccess?.();
      } catch (error) {
        console.error("Payment verification error:", error);

        alert(
          error instanceof Error
            ? error.message
            : "Payment verification failed."
        );
      }
    },

    ondismiss: function () {
      console.log("Razorpay checkout was closed.");

      options.onDismiss?.();
    },

    theme: {
      color: "#111827",
    },
  };

  const razorpay = new window.Razorpay(razorpayOptions);

  razorpay.open();
}