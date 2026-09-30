"use client";

import { useEffect, useState } from "react";
import { getMyBrandProfile } from "@/lib/api/brandOwnerProfile";

export default function MyBrandHeader() {
  const [brandName, setBrandName] = useState("My Brand");

  useEffect(() => {
    const fetchBrandName = async () => {
      try {
        const data = await getMyBrandProfile();
        setBrandName(data.brandName || "My Brand");
      } catch {
        // Keep the default heading if the request fails.
      }
    };

    fetchBrandName();
  }, []);

  return (
    <section className="border-b border-black/10 bg-white px-6 py-8 lg:px-10">
      <p className="text-sm font-medium text-[#31515A]">
        Brand Information
      </p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#102f3a]">
        {brandName}
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#102f3a]/60">
        View and manage the information associated with your clothing brand.
      </p>
    </section>
  );
}