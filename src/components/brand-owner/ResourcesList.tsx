const resources = [
  {
    title: "Mockup Guide",
    description:
      "Learn how to create professional product mockups for your clothing brand.",
    type: "Guide",
    action: "View Resource",
  },
  {
    title: "Instagram Content Plan",
    description:
      "A practical guide to planning and organizing content for your brand's Instagram.",
    type: "PDF",
    action: "Download",
  },
  {
    title: "HD Design Bundle",
    description:
      "Access a collection of high-quality designs that you can use for your products.",
    type: "ZIP",
    action: "Download",
  },
  {
    title: "Canva Design Guide",
    description:
      "Learn the basics of creating and editing clothing designs using Canva.",
    type: "Guide",
    action: "View Resource",
  },
];

export default function ResourcesList() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="grid gap-5 md:grid-cols-2">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#102f3a]/20 hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  {resource.type}
                </p>

                <h2 className="mt-2 text-lg font-bold text-[#102f3a]">
                  {resource.title}
                </h2>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fff4f5] text-sm font-bold text-[#102f3a]">
                {resource.type}
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#102f3a]/55">
              {resource.description}
            </p>

            <button
              type="button"
              className="mt-6 text-sm font-semibold text-[#31515A] transition hover:text-black"
            >
              {resource.action} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}