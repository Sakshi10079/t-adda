"use client";

import { useState } from "react";
import { createRegistrationPaymentOrder } from "@/lib/api/registrationPayment";
import { openRazorpayCheckout } from "@/lib/razorpay";

export default function CompleteRegistrationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {
    setError("");
    setIsLoading(true);

    try {
      const storedUser = localStorage.getItem("tadda_user");

      if (!storedUser) {
        window.location.href = "/";
        return;
      }

      const user = JSON.parse(storedUser);

      const order = await createRegistrationPaymentOrder(user.token);

      openRazorpayCheckout({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        orderId: order.orderId,
        name: "T-Adda",
        description: "Brand Owner Registration",
        onSuccess: () => {
          window.location.href = "/dashboard";
        },
      });
    } catch (error) {
      console.error("Payment error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to start payment. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8fbfc] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <span className="inline-flex rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#0284C7]">
          Complete Registration
        </span>

        <h1 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-[#102f3a]">
          Complete your registration
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#102f3a]/60">
          Your account has already been created. Complete the one-time
          ₹1,799 registration payment to access your Brand Owner dashboard.
        </p>

        {error && (
          <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handlePayment}
          disabled={isLoading}
          className="mt-7 w-full rounded-lg bg-[#102f3a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#31515A] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Opening Payment..." : "Pay ₹1,799"}
        </button>

        <p className="mt-4 text-xs text-[#102f3a]/45">
          This is a one-time registration payment.
        </p>
      </div>
    </main>
  );
}