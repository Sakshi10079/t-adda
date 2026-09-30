"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/brand-owner/DashboardHeader";
import DashboardOverview from "@/components/brand-owner/DashboardOverview";
import QuickAccess from "@/components/brand-owner/QuickAccess";
import { getRegistrationPaymentStatus } from "@/lib/api/registrationPayment";

export default function DashboardPage() {
  const [isCheckingPayment, setIsCheckingPayment] = useState(true);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const storedUser = localStorage.getItem("tadda_user");

        if (!storedUser) {
          window.location.href = "/login";
          return;
        }

        const user = JSON.parse(storedUser);

        const response = await getRegistrationPaymentStatus(user.token);

        if (response.status !== "PAID") {
          window.location.href = "/";
          return;
        }

        setIsPaid(true);
      } catch (error) {
        console.error("Payment status check failed:", error);
        window.location.href = "/";
      } finally {
        setIsCheckingPayment(false);
      }
    };

    checkPaymentStatus();
  }, []);

  if (isCheckingPayment || !isPaid) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-[#102f3a]/60">
          Checking your registration status...
        </p>
      </main>
    );
  }

  return (
    <>
      <DashboardHeader />
      <DashboardOverview />
      <QuickAccess />
    </>
  );
}