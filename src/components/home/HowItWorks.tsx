const steps = [
  {
    number: "01",
    title: "Register with T-Adda",
    description: (
      <>
        Pay a one-time registration fee of <strong>₹1799</strong> for lifetime
        order fulfillment support.
      </>
    ),
  },
  {
    number: "02",
    title: "Create Mockups & List",
    description:
      "We help you create mockups and list products on your Instagram or online store.",
  },
  {
    number: "03",
    title: "Promote & Get Orders",
    description: "Market your store. Customers place orders with you directly.",
  },
  {
    number: "04",
    title: "T-Adda Prints & Ships",
    description:
      "Share the order with us. We print, pack, and deliver to your customer&apos;s doorstep.",
  },
  {
    number: "05",
    title: "Earn Your Profit",
    description:
      "You keep 100% of your margin. We never take any share from your earnings.",
  },
];

const costs = [
  {
    icon: "👕",
    label: "Product Cost",
  },
  {
    icon: "🖨️",
    label: "Printing Cost",
  },
  {
    icon: "🚚",
    label: "Shipping Cost",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-8 py-16 lg:px-56 lg:py-12" id="how-it-works">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mx-auto max-w-[650px] text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#7DD3FC] bg-[#E0F2FE] px-4 py-2">
            <span className="text-sm font-semibold text-[#0284C7]">
              Process
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-black sm:text-4xl lg:text-[34px]">
            How It Works
          </h2>

          <p className="mt-5 text-base leading-7 text-[#102f3a]/65">
            From registration to earning — 5 simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-9 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-[#f8fbfc] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,47,58,0.08)]"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold tracking-[0.12em] text-[#3A9D9D]">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold leading-tight text-[#102f3a]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-[#102f3a]/60">
                {step.description}
              </p>

              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <span className="absolute -right-5 top-1/2 -translate-y-1/2 text-lg text-[#31515A]/50">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Cost Formula */}
        <div className="mt-14 rounded-2xl bg-[#071a21] p-7 lg:p-4">
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
            {costs.map((cost, index) => (
              <div key={cost.label} className="flex items-center gap-5">
                <div className="flex min-w-[150px] flex-col items-center justify-center rounded-2xl px-5 py-5">
                  <span className="text-4xl">{cost.icon}</span>

                  <span className="mt-2 text-sm font-semibold text-white">
                    {cost.label}
                  </span>
                </div>

                {index < costs.length - 1 && (
                  <span className="text-2xl font-bold text-[#3A9D9D]">+</span>
                )}
              </div>
            ))}

            <span className="hidden text-2xl font-bold text-[#3A9D9D] md:block">
              =
            </span>

            <div className="flex min-w-[170px] flex-col items-center justify-center rounded-2xl px-5 py-5">
              <span className="text-2xl">💰</span>

              <span className="mt-2 text-sm font-bold text-white">
                Your Total Cost
              </span>
            </div>
          </div>
        </div>

        {/* GST Note */}
        <p className="mt-5 text-center text-base leading-5 text-[#102f3a]/50">
          5% GST applicable on all orders. Prices are exclusive of GST and
          subject to change.
        </p>
      </div>
    </section>
  );
}