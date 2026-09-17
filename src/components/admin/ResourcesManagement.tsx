const resources = [
  {
    title: "Mockup Guide",
    description:
      "Learn how to create professional product mockups for your clothing brand.",
    type: "Guide",
    status: "PUBLISHED",
  },
  {
    title: "Instagram Content Plan",
    description:
      "A practical guide to planning and organizing content for your brand's Instagram.",
    type: "PDF",
    status: "PUBLISHED",
  },
  {
    title: "HD Design Bundle",
    description:
      "A collection of high-quality designs that Brand Owners can use for their products.",
    type: "ZIP",
    status: "PUBLISHED",
  },
  {
    title: "Canva Design Guide",
    description:
      "Learn the basics of creating and editing clothing designs using Canva.",
    type: "Guide",
    status: "DRAFT",
  },
];

const statusClasses: Record<string, string> = {
  PUBLISHED: "bg-[#eef6f4] text-[#31515A]",
  DRAFT: "bg-[#f4f4f4] text-[#666666]",
};

export default function ResourcesManagement() {
  return (
    <section className="px-6 py-8 lg:px-10">
      {/* Top Action */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#102f3a]">
            All Resources
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            Resources available to Brand Owners.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A]"
        >
          Add Resource
        </button>
      </div>

      {/* Resource List */}
      <div className="grid gap-5 md:grid-cols-2">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="rounded-2xl border border-black/10 bg-white p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  {resource.type}
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#102f3a]">
                  {resource.title}
                </h3>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  statusClasses[resource.status]
                }`}
              >
                {resource.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#102f3a]/55">
              {resource.description}
            </p>

            <div className="mt-6 flex gap-4 border-t border-black/10 pt-5">
              <button
                type="button"
                className="text-sm font-semibold text-[#31515A] transition hover:text-black"
              >
                Edit
              </button>

              <button
                type="button"
                className="text-sm font-semibold text-red-500 transition hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}