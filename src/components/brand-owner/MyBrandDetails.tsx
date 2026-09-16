const brandDetails = [
  {
    label: "Brand Name",
    value: "Your Brand Name",
  },
  {
    label: "Business Stage",
    value: "Just starting out",
  },
  {
    label: "Product Categories",
    value: "T-shirts, Hoodies",
  },
  {
    label: "Selling Platforms",
    value: "Instagram, Website",
  },
  {
    label: "Instagram",
    value: "@yourbrand",
  },
  {
    label: "Facebook",
    value: "Not added",
  },
];

export default function MyBrandDetails() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-2 border-b border-black/10 pb-6">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Brand Details
          </h2>

          <p className="text-sm leading-6 text-[#102f3a]/55">
            These details help T-Adda understand and support your brand.
          </p>
        </div>

        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {brandDetails.map((detail) => (
            <div key={detail.label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                {detail.label}
              </p>

              <p className="mt-2 text-sm font-medium text-[#102f3a]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-black/10 pt-6">
          <button
            type="button"
            className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A]"
          >
            Edit Brand Details
          </button>
        </div>
      </div>
    </section>
  );
}