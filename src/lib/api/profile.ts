import { apiRequest } from "./client";

export type UserProfile = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type UpdateUserProfileRequest = {
  name: string;
  email: string;
  phone: string;
};

function getToken(): string | null {
  const storedUser = localStorage.getItem("tadda_user");

  if (!storedUser) {
    return null;
  }

  return JSON.parse(storedUser).token;
}

export async function getMyProfile(): Promise<UserProfile> {
  const token = getToken();

  return apiRequest<UserProfile>("/api/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateMyProfile(
  data: UpdateUserProfileRequest
): Promise<UserProfile> {
  const token = getToken();

  return apiRequest<UserProfile>("/api/profile", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export type ChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export async function changePassword(
  data: ChangePasswordRequest
): Promise<void> {
  const token = getToken();

  await apiRequest<void>("/api/profile/password", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}