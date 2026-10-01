import { apiRequest } from "./client";

export type Resource = {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  fileUrl: string;
  status: "DRAFT" | "PUBLISHED";
  createdAt: string;
  updatedAt: string;
};

export async function getBrandOwnerResources(
  token: string
): Promise<Resource[]> {
  return apiRequest<Resource[]>("/api/brand-owner/resources", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}