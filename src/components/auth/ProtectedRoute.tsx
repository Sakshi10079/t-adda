"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRole?: string;
}

export default function ProtectedRoute({
  children,
  allowedRole,
}: ProtectedRouteProps) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
      return;
    }

    if (allowedRole && user.role !== allowedRole) {
      router.replace("/");
    }
  }, [user, allowedRole, router]);

  if (!user) {
    return null;
  }

  if (allowedRole && user.role !== allowedRole) {
    return null;
  }

  return <>{children}</>;
}