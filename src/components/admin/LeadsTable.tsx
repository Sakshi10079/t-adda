"use client";

import { useEffect, useState } from "react";
import {
  getAllLeads,
  updateLeadStatus,
  AdminLead,
} from "@/lib/api/adminLeads";

const statusClasses: Record<string, string> = {
  NEW: "bg-[#fff4f5] text-[#102f3a]",
  CONTACTED: "bg-[#f4f7f7] text-[#31515A]",
  CONVERTED: "bg-[#eef6f4] text-[#31515A]",
  CLOSED: "bg-[#f4f4f4] text-[#666666]",
};

const leadStatuses = ["NEW", "CONTACTED", "CONVERTED", "CLOSED"];

export default function LeadsTable() {
  const [leads, setLeads] = useState<AdminLead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingLeadId, setUpdatingLeadId] = useState<number | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await getAllLeads();
        setLeads(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load customer leads."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleStatusChange = async (
    id: number,
    status: string
  ) => {
    try {
      setUpdatingLeadId(id);

      const updatedLead = await updateLeadStatus(id, status);

      setLeads((currentLeads) =>
        currentLeads.map((lead) =>
          lead.id === id ? updatedLead : lead
        )
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to update lead status."
      );
    } finally {
      setUpdatingLeadId(null);
    }
  };

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
        {/* Header */}
        <div className="border-b border-black/10 px-6 py-5">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Customer Leads
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            Enquiries submitted through the T-Adda website.
          </p>
        </div>

        {isLoading ? (
          <div className="px-6 py-8">
            <p className="text-sm font-medium text-[#102f3a]/60">
              Loading customer leads...
            </p>
          </div>
        ) : error ? (
          <div className="px-6 py-8">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="px-6 py-8">
            <p className="text-sm text-[#102f3a]/60">
              No customer leads found.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[950px]">
                <thead>
                  <tr className="border-b border-black/10 text-left">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Phone
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                      Enquiry
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
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-black/5 last:border-b-0"
                    >
                      <td className="px-6 py-5">
                        <p className="text-sm font-semibold text-[#102f3a]">
                          {lead.name}
                        </p>

                        <p className="mt-1 text-xs text-[#102f3a]/45">
                          {lead.email}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                        {lead.phone}
                      </td>

                      <td className="max-w-md px-6 py-5 text-sm leading-6 text-[#102f3a]/70">
                        {lead.message}
                      </td>

                      <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                        {formatDate(lead.createdAt)}
                      </td>

                      <td className="px-6 py-5">
                        <select
                          value={lead.status}
                          onChange={(event) =>
                            handleStatusChange(
                              lead.id,
                              event.target.value
                            )
                          }
                          disabled={updatingLeadId === lead.id}
                          className={`rounded-full border-0 px-3 py-1 text-xs font-semibold outline-none ${
                            statusClasses[lead.status]
                          } ${
                            updatingLeadId === lead.id
                              ? "cursor-wait opacity-60"
                              : "cursor-pointer"
                          }`}
                        >
                          {leadStatuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="divide-y divide-black/5 lg:hidden">
              {leads.map((lead) => (
                <div key={lead.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-[#102f3a]">
                        {lead.name}
                      </p>

                      <p className="mt-1 text-xs text-[#102f3a]/45">
                        {lead.email}
                      </p>
                    </div>

                    <select
                      value={lead.status}
                      onChange={(event) =>
                        handleStatusChange(
                          lead.id,
                          event.target.value
                        )
                      }
                      disabled={updatingLeadId === lead.id}
                      className={`rounded-full border-0 px-3 py-1 text-xs font-semibold outline-none ${
                        statusClasses[lead.status]
                      } ${
                        updatingLeadId === lead.id
                          ? "cursor-wait opacity-60"
                          : "cursor-pointer"
                      }`}
                    >
                      {leadStatuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                        Phone
                      </p>

                      <p className="mt-1 text-sm text-[#102f3a]/70">
                        {lead.phone}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                        Enquiry
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#102f3a]/70">
                        {lead.message}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                        Date
                      </p>

                      <p className="mt-1 text-sm text-[#102f3a]/70">
                        {formatDate(lead.createdAt)}
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