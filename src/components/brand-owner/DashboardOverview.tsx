"use client";

import { useEffect, useState } from "react";
import { getBrandOwnerResources } from "@/lib/api/resources";

export default function DashboardOverview() {
  const [resourceCount, setResourceCount] = useState<number | null>(null);

  useEffect(() => {
    const loadResources = async () => {
      try {
        const storedUser = localStorage.getItem("tadda_user");

        if (!storedUser) {
          return;
        }

        const user = JSON.parse(storedUser);

        if (!user.token) {
          return;
        }

        const resources = await getBrandOwnerResources(user.token);

        setResourceCount(resources.length);
      } catch (error) {
        console.error("Failed to load dashboard resources:", error);
      }
    };

    loadResources();
  }, []);

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Resources */}
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-sm font-medium text-[#31515A]">
            Resources
          </p>

          <p className="mt-3 text-3xl font-bold text-[#102f3a]">
            {resourceCount ?? "—"}
          </p>

          <p className="mt-2 text-sm text-[#102f3a]/50">
            Resources available to you
          </p>
        </div>

        {/* Registration */}
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-sm font-medium text-[#31515A]">
            Registration
          </p>

          <p className="mt-3 text-3xl font-bold text-[#102f3a]">
            PAID
          </p>

          <p className="mt-2 text-sm text-[#102f3a]/50">
            Registration payment completed
          </p>
        </div>
      </div>
    </section>
  );
}