const trainingTopics = [
  {
    title: "Brand & Customers",
    description: "Find your niche, target audience, and unique selling proposition.",
  },
  {
    title: "Products & Fabrics",
    description: "Understand product selection, GSM, fabrics, washes, and quality.",
  },
  {
    title: "Design & Printing",
    description: "Learn about product designing and different printing methods.",
  },
  {
    title: "Manufacturing",
    description: "Understand manufacturers, samples, MOQ, pricing, and quality checks.",
  },
  {
    title: "Marketing & Sales",
    description: "Learn content creation, advertising, customer trust, and sales.",
  },
  {
    title: "Build Your Brand",
    description: "Explore Shopify, shipping, domains, and the T-ADDA POD model.",
  },
];

export default function TrainingTopics() {
  return (
    <section className="w-full bg-[#fff7f9] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
            What You&apos;ll Learn
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Everything you need to get started
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            A practical overview of the key areas involved in starting and
            growing a clothing brand.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trainingTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-pink-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-pink-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}