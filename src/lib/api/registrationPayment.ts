import { apiRequest } from "./client";

export type RegistrationPaymentOrderResponse = {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
};

export async function createRegistrationPaymentOrder(
  token: string,
): Promise<RegistrationPaymentOrderResponse> {
  return apiRequest<RegistrationPaymentOrderResponse>(
    "/api/registration-payment/order",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export async function getRegistrationPaymentStatus(
  token: string,
): Promise<{ status: string }> {
  return apiRequest<{ status: string }>("/api/registration-payment/status", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
