const services = [
  {
    icon: "💻",
    title: "Website Development",
    description:
      "From basic landing pages to full eCommerce stores — built for your brand.",
  },
  {
    icon: "📣",
    title: "Meta Ads",
    description:
      "Facebook & Instagram ad strategy, setup, and campaign management to drive sales.",
  },
  {
    icon: "🤝",
    title: "Personal Mentorship",
    description:
      "One-on-one support to help you plan, launch, and grow your clothing brand.",
  },
  {
    icon: "⚙️",
    title: "Custom Digital Solutions",
    description:
      "Tailored services as per your brand's unique goals and requirements.",
  },
];

export default function BeyondPrinting() {
  return (
    <section className="bg-white px-6 py-20 lg:px-10" id="services">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mx-auto max-w-[700px] text-center">
          <span className="inline-flex rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0284C7]">
            Beyond Printing
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#102f3a] sm:text-4xl">
            We Help You Build the Whole Business
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-base leading-7 text-[#102f3a]/60">
            From your website to social media ads — we&apos;ve got you covered.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="min-h-[190px] rounded-xl bg-[#f8fbfc] p-6"
            >
              <div className="text-2xl">{service.icon}</div>

              <h3 className="mt-5 text-base font-bold leading-5 tracking-[-0.02em] text-[#102f3a]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#102f3a]/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note + CTA */}
        <p className="mt-6 text-center text-sm leading-6 text-[#102f3a]/50">
          Charges based on scope; timelines/deliverables discussed before
          starting.{" "}
          <a
            href="https://tadda-web.web.app/#contact"
            className="font-semibold text-[#31515A]"
          >
            Get a quote →
          </a>
        </p>
      </div>
    </section>
  );
}
