import { apiRequest } from "./client";

export type CreateLeadRequest = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type LeadResponse = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  createdAt: string;
};

export async function createLead(
  data: CreateLeadRequest
): Promise<LeadResponse> {
  return apiRequest<LeadResponse>("/api/leads", {
    method: "POST",
    body: JSON.stringify(data),
  });
}