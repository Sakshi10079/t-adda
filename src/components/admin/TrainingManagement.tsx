const trainingSessions = [
  {
    title: "Mockup Creation",
    description:
      "Learn how to create professional product mockups that showcase designs effectively.",
    category: "Design",
    status: "PUBLISHED",
  },
  {
    title: "Design Creation",
    description:
      "Learn the basics of creating attractive and print-ready clothing designs.",
    category: "Design",
    status: "PUBLISHED",
  },
  {
    title: "Marketing & Sales",
    description:
      "Learn how to promote products, reach customers, and generate sales.",
    category: "Marketing",
    status: "PUBLISHED",
  },
  {
    title: "Instagram Training",
    description:
      "Learn how to build your brand presence and promote products through Instagram.",
    category: "Marketing",
    status: "DRAFT",
  },
];

const statusClasses: Record<string, string> = {
  PUBLISHED: "bg-[#eef6f4] text-[#31515A]",
  DRAFT: "bg-[#f4f4f4] text-[#666666]",
};

export default function TrainingManagement() {
  return (
    <section className="px-6 py-8 lg:px-10">
      {/* Top Action */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#102f3a]">
            All Training
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            Training sessions available to Brand Owners.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A]"
        >
          Add Training
        </button>
      </div>

      {/* Training List */}
      <div className="grid gap-5 md:grid-cols-2">
        {trainingSessions.map((session) => (
          <div
            key={session.title}
            className="rounded-2xl border border-black/10 bg-white p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  {session.category}
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#102f3a]">
                  {session.title}
                </h3>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  statusClasses[session.status]
                }`}
              >
                {session.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#102f3a]/55">
              {session.description}
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