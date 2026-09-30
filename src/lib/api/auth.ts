import { apiRequest } from "./client";

export type RegisterRequest = {
  name: string;
  email: string;
  phone: string;
  password: string;
  brandName?: string;
  businessStage?: string;
  productCategories?: string;
  sellingPlatforms?: string;
  socialMediaHandles?: string;
  mockupExperience?: string;
  mockupStyle?: string;
};

export type RegisterResponse = {
  userId: number;
  name: string;
  email: string;
  role: string;
  token: string;
  message: string;
};

export async function registerUser(
  data: RegisterRequest
): Promise<RegisterResponse> {
  return apiRequest<RegisterResponse>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  userId: number;
  name: string;
  email: string;
  role: string;
  token: string;
  message: string;
};

export async function loginUser(
  data: LoginRequest
): Promise<LoginResponse> {
  return apiRequest<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}