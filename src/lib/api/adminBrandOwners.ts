import { apiRequest } from "./client";

export type AdminBrandOwner = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  brandName: string;
  businessStage: string;
  createdAt: string;
};

function getToken(): string | null {
  const storedUser = localStorage.getItem("tadda_user");

  if (!storedUser) {
    return null;
  }

  return JSON.parse(storedUser).token;
}

export async function getAllBrandOwners(): Promise<AdminBrandOwner[]> {
  const token = getToken();

  return apiRequest<AdminBrandOwner[]>("/api/admin/brand-owners", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}