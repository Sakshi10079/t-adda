import { apiRequest } from "./client";

export type AdminRegistrationPayment = {
  id: number;
  name: string;
  email: string;
  amount: number;
  paymentMethod: string;
  transactionId: string | null;
  status: string;
  paidAt: string | null;
  createdAt: string;
};

function getToken(): string | null {
  const storedUser = localStorage.getItem("tadda_user");

  if (!storedUser) {
    return null;
  }

  return JSON.parse(storedUser).token;
}

export async function getAllRegistrationPayments(): Promise<
  AdminRegistrationPayment[]
> {
  const token = getToken();

  return apiRequest<AdminRegistrationPayment[]>(
    "/api/admin/registration-payments",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}