const features = [
  {
    icon: "🏭",
    title: "End-to-End Fulfillment",
    description:
      "From printing to packaging to delivery — we handle everything so you don't have to.",
  },
  {
    icon: "🎨",
    title: "Custom Branding",
    description:
      "Neck labels, hang tags, sleeve prints — every touchpoint reflects your brand identity.",
  },
  {
    icon: "📦",
    title: "No Stock Risk",
    description:
      "Order only what's sold. Zero unsold inventory. Zero capital locked.",
  },
  {
    icon: "📈",
    title: "You Keep 100% Profit",
    description:
      "Set your own margins. We don't take any share from your sales — ever.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white px-8 py-16 lg:px-56 lg:py-20" id="about">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          
          {/* Left Content */}
          <div className="max-w-[620px]">
            
            {/* Section Label */}
            <div className="mb-5 inline-flex rounded-full bg-[#E0F2FE] px-4 py-2">
              <span className="text-sm font-semibold text-[#31515A]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[560px] text-xl font-extrabold leading-[1.1] tracking-[-0.025em] text-black sm:text-4xl lg:text-[32px]">
              Empowering Creators to Build{" "}
              <span className="text-[#3A9D9D]">
                Real Clothing Brands
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[580px] text-base leading-7 text-[#102f3a]/65">
              T-Adda is a modern Print-on-Demand and Dropshipping brand that
              helps individuals and businesses launch their own clothing brands
              effortlessly.
            </p>

            <p className="mt-4 max-w-[580px] text-base leading-7 text-[#102f3a]/65">
              Founded by{" "}
              <span className="font-semibold text-[#102f3a]">
                Ankit Kumar Singh
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#102f3a]">
                Shraddha Pathaniya
              </span>
              , T-Adda provides end-to-end apparel printing, branding, and
              fulfillment solutions — allowing anyone to start and scale their
              own fashion brand without worrying about inventory, printing, or
              logistics.
            </p>

            {/* Mission */}
            <div className="mt-8 rounded-2xl border border-[#102f3a]/15 bg-white p-6">
              <div className="flex items-start gap-4">
                
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff1f3] text-xl">
                  🎯
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#102f3a]">
                    Our Mission
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#102f3a]/60">
                    To empower new entrepreneurs, designers, and creators to
                    turn their ideas into successful brands through training,
                    mentorship, and high-quality production support.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
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
        </div>
      </div>
    </section>
  );
}