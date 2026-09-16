const trainingSessions = [
  {
    title: "Mockup Creation",
    description:
      "Learn how to create professional product mockups that showcase your designs effectively.",
    category: "Design",
  },
  {
    title: "Design Creation",
    description:
      "Learn the basics of creating attractive and print-ready designs for your clothing brand.",
    category: "Design",
  },
  {
    title: "Marketing & Sales",
    description:
      "Understand how to promote your products, reach customers, and generate sales.",
    category: "Marketing",
  },
  {
    title: "Instagram Training",
    description:
      "Learn how to build your brand presence and use Instagram to promote your products.",
    category: "Marketing",
  },
];

export default function TrainingList() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="grid gap-5 md:grid-cols-2">
        {trainingSessions.map((session) => (
          <div
            key={session.title}
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#102f3a]/20 hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
              {session.category}
            </p>

            <h2 className="mt-2 text-lg font-bold text-[#102f3a]">
              {session.title}
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#102f3a]/55">
              {session.description}
            </p>

            <button
              type="button"
              className="mt-6 text-sm font-semibold text-[#31515A] transition hover:text-black"
            >
              Start Training →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}