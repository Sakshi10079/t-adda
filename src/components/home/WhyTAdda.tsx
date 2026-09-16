const features = [
  {
    icon: "🏅",
    title: "Premium Quality",
    description:
      "100% cotton, double bio-washed, silicon washed & double stitched for lasting quality.",
  },
  {
    icon: "🚚",
    title: "Quick Dispatch",
    description:
      "Orders dispatched within 24–72 business hours. Delivery in 3–7 business days.",
  },
  {
    icon: "✏️",
    title: "Custom Branding",
    description:
      "Sleeve, hem, neck label, back neck — brand every inch of your product at just ₹10/pc.",
  },
  {
    icon: "🎓",
    title: "Mockup & Design Help",
    description:
      "We guide you to create professional mockups and listings for Instagram or your store.",
  },
];

const supportItems = [
  {
    icon: "📅",
    text: "30-Day Instagram Content Planner",
  },
  {
    icon: "🖼️",
    text: "Ready-to-Upload Mockups",
  },
  {
    icon: "📞",
    text: "Customer Support on Call",
  },
  {
    icon: "📦",
    text: "Free Packaging",
  },
  {
    icon: "🎨",
    text: "Designs Bundle",
  },
  {
    icon: "🎥",
    text: "Mockup & Design Creation Training",
  },
  {
    icon: "📊",
    text: "Guidance on Marketing & Sales",
  },
];

export default function WhyTAdda() {
  return (
    <section className="bg-[#fffafa] px-8 py-16 lg:px-56 lg:py-20">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mx-auto max-w-[650px] text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#7DD3FC] bg-[#E0F2FE] px-4 py-2">
            <span className="text-sm font-semibold text-[#0284C7]">
              Why T-Adda
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-black sm:text-4xl lg:text-[32px]">
            Everything You Need to{" "}
            <span className="text-[#3A9D9D]">Succeed</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#102f3a]/65">
            We don&apos;t just print — we partner with you from day one.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[#102f3a]/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3A9D9D]/50 hover:shadow-[0_12px_30px_rgba(16,47,58,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0F2FE] text-xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold leading-tight text-[#102f3a]">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#102f3a]/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Free Support */}
        <div className="mt-14 rounded-2xl border border-[#102f3a]/15 bg-[#f8fbfc] p-7 lg:p-9">
          <h3 className="text-xl font-bold text-[#102f3a] sm:text-xl">
            Free Support Included with Every Registration
          </h3>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-xl border border-[#102f3a]/10 bg-white px-4 py-4"
              >
                <span className="text-xl">{item.icon}</span>

                <span className="text-sm font-medium leading-5 text-[#102f3a]/75">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}