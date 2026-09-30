"use client";

import { useEffect, useState } from "react";
import {
  getAllRegistrationPayments,
  AdminRegistrationPayment,
} from "@/lib/api/adminRegistrationPayments";

const statusClasses: Record<string, string> = {
  PAID: "bg-[#eef6f4] text-[#31515A]",
  PENDING: "bg-[#fff8e8] text-[#8a6500]",
  FAILED: "bg-[#fff4f5] text-red-600",
};

export default function RegistrationPaymentsTable() {
  const [payments, setPayments] = useState<AdminRegistrationPayment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await getAllRegistrationPayments();
        setPayments(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load registration payments."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatAmount = (amount: number) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
        {/* Header */}
        <div className="border-b border-black/10 px-6 py-5">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Registration Payments
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            One-time registration payments received from Brand Owners.
          </p>
        </div>

        {isLoading ? (
          <div className="px-6 py-8">
            <p className="text-sm font-medium text-[#102f3a]/60">
              Loading registration payments...
            </p>
          </div>
        ) : error ? (
          <div className="px-6 py-8">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        ) : payments.length === 0 ? (
          <div className="px-6 py-8">
            <p className="text-sm text-[#102f3a]/60">
              No registration payments found.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[1000px]">
                <thead>
                  <tr className="border-b border-black/10 text-left">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Payment
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Brand Owner
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Amount
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Method
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Transaction ID
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Date
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="border-b border-black/5 last:border-b-0"
                    >
                      <td className="px-6 py-5 text-sm font-semibold text-[#102f3a]">
                        PAY-{String(payment.id).padStart(4, "0")}
                      </td>

                      <td className="px-6 py-5">
                        <p className="text-sm font-semibold text-[#102f3a]">
                          {payment.name}
                        </p>

                        <p className="mt-1 text-xs text-[#102f3a]/45">
                          {payment.email}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-sm font-semibold text-[#102f3a]">
                        {formatAmount(payment.amount)}
                      </td>

                      <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                        {payment.paymentMethod || "—"}
                      </td>

                      <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                        {payment.transactionId || "—"}
                      </td>

                      <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                        {formatDate(payment.createdAt)}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            statusClasses[payment.status]
                          }`}
                        >
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="divide-y divide-black/5 lg:hidden">
              {payments.map((payment) => (
                <div key={payment.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-[#102f3a]">
                        PAY-{String(payment.id).padStart(4, "0")}
                      </p>

                      <p className="mt-1 text-xs text-[#102f3a]/45">
                        {formatDate(payment.createdAt)}
                      </p>
                    </div>

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusClasses[payment.status]
                      }`}
                    >
                      {payment.status}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                        Brand Owner
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#102f3a]">
                        {payment.name}
                      </p>

                      <p className="mt-1 text-xs text-[#102f3a]/45">
                        {payment.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                        Amount
                      </p>

                      <p className="mt-1 text-sm text-[#102f3a]/70">
                        {formatAmount(payment.amount)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                        Payment Method
                      </p>

                      <p className="mt-1 text-sm text-[#102f3a]/70">
                        {payment.paymentMethod || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                        Transaction ID
                      </p>

                      <p className="mt-1 break-all text-sm text-[#102f3a]/70">
                        {payment.transactionId || "—"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}