import { apiRequest } from "./client";

export type AdminLead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  createdAt: string;
};

function getToken(): string | null {
  const storedUser = localStorage.getItem("tadda_user");

  if (!storedUser) {
    return null;
  }

  return JSON.parse(storedUser).token;
}

export async function getAllLeads(): Promise<AdminLead[]> {
  const token = getToken();

  return apiRequest<AdminLead[]>("/api/leads", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateLeadStatus(
  id: number,
  status: string
): Promise<AdminLead> {
  const token = getToken();

  return apiRequest<AdminLead>(
    `/api/leads/${id}/status?status=${status}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}