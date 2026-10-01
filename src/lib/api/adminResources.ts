import { apiRequest } from "./client";
import type { Resource } from "./resources";

export type ResourceUpdateRequest = {
  title: string;
  description: string;
  type: string;
  category: string;
  fileUrl: string;
  status: "DRAFT" | "PUBLISHED";
};

export async function getAdminResources(
  token: string
): Promise<Resource[]> {
  return apiRequest<Resource[]>("/api/admin/resources", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function createAdminResource(
  token: string,
  resource: ResourceUpdateRequest
): Promise<Resource> {
  return apiRequest<Resource>("/api/admin/resources", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(resource),
  });
}

export async function updateAdminResource(
  token: string,
  id: number,
  resource: ResourceUpdateRequest
): Promise<Resource> {
  return apiRequest<Resource>(`/api/admin/resources/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(resource),
  });
}

export async function deleteAdminResource(
  token: string,
  id: number
): Promise<void> {
  return apiRequest<void>(`/api/admin/resources/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}