import { apiRequest } from "./client";

export type BrandOwnerProfile = {
  id: number;
  brandName: string;
  businessStage: string;
  productCategories: string;
  sellingPlatforms: string;
  socialMediaHandles: string;
  mockupExperience: string;
  mockupStyle: string;
};

export async function getMyBrandProfile(): Promise<BrandOwnerProfile> {
  const token = localStorage.getItem("tadda_user")
    ? JSON.parse(localStorage.getItem("tadda_user")!).token
    : null;

  return apiRequest<BrandOwnerProfile>("/api/brand-owner/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateMyBrandProfile(
  data: Omit<BrandOwnerProfile, "id">
): Promise<BrandOwnerProfile> {
  const token = localStorage.getItem("tadda_user")
    ? JSON.parse(localStorage.getItem("tadda_user")!).token
    : null;

  return apiRequest<BrandOwnerProfile>("/api/brand-owner/profile", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}