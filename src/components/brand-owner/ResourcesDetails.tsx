"use client";

import { useEffect, useState } from "react";
import {
  getBrandOwnerResources,
  Resource,
} from "@/lib/api/resources";

const categoryDetails: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  GETTING_STARTED: {
    title: "Getting Started",
    description:
      "Useful resources to help you get started with T-Adda.",
  },
  DESIGN_RESOURCES: {
    title: "Design Resources",
    description:
      "Free designs and mockup files for your brand.",
  },
  MARKETING: {
    title: "Marketing",
    description:
      "Resources to help you plan and promote your brand.",
  },
  IMPORTANT: {
    title: "Important",
    description:
      "Important information and resources for your T-Adda account.",
  },
};

const categoryOrder = [
  "GETTING_STARTED",
  "DESIGN_RESOURCES",
  "MARKETING",
  "IMPORTANT",
];

const getActionLabel = (type: string) => {
  switch (type) {
    case "VIDEO":
      return "Watch Session";

    case "PDF":
      return "View Resource";

    case "FOLDER":
      return "Access Files";

    case "FORM":
      return "Open Form";

    default:
      return "Open Resource";
  }
};

export default function ResourcesDetails() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadResources = async () => {
      try {
        const storedUser = localStorage.getItem("tadda_user");

        if (!storedUser) {
          throw new Error("User is not logged in.");
        }

        const user = JSON.parse(storedUser);

        if (!user.token) {
          throw new Error("Authentication token not found.");
        }

        const data = await getBrandOwnerResources(user.token);

        setResources(data);
      } catch (error) {
        console.error("Failed to load resources:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load resources."
        );
      } finally {
        setLoading(false);
      }
    };

    loadResources();
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-8 lg:px-10">
        <div className="rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
          <p className="text-sm text-[#102f3a]/60">
            Loading resources...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-8 lg:px-10">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 lg:p-8">
          <p className="text-sm font-medium text-red-700">
            {error}
          </p>
        </div>
      </section>
    );
  }

  const groupedResources = categoryOrder.map((category) => ({
    category,
    ...categoryDetails[category],
    resources: resources.filter(
      (resource) => resource.category === category
    ),
  }));

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="space-y-6">
        {groupedResources.map((section) => {
          if (section.resources.length === 0) {
            return null;
          }

          return (
            <div
              key={section.category}
              className="rounded-2xl border border-black/10 bg-white p-6 lg:p-8"
            >
              <div className="border-b border-black/10 pb-6">
                <h2 className="text-xl font-bold text-[#102f3a]">
                  {section.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#102f3a]/55">
                  {section.description}
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {section.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="rounded-xl border border-black/10 bg-[#f8f9f9] p-5 transition hover:border-[#31515A]/30"
                  >
                    <h3 className="text-base font-semibold text-[#102f3a]">
                      {resource.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#102f3a]/60">
                      {resource.description}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          resource.fileUrl,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="mt-5 rounded-lg bg-[#102f3a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#31515A]"
                    >
                      {getActionLabel(resource.type)}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}