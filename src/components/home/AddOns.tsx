const addOns = [
  {
    icon: "💌",
    title: "Thank You Cards",
  },
  {
    icon: "🎁",
    title: "Wrapping Sheets",
  },
  {
    icon: "🌟",
    title: "Custom Stickers",
  },
  {
    icon: "📦",
    title: "Custom Boxes",
  },
  {
    icon: "🏷️",
    title: "Hang Tags",
  },
  {
    icon: "🛍️",
    title: "Poly Mailers / Courier Bags",
  },
  {
    icon: "📱",
    title: "QR / Discount / Referral Cards",
  },
];

export default function AddOns() {
  return (
    <section className="bg-[#f8fbfc] px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mx-auto max-w-[650px] text-center">
          <span className="inline-flex rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0284C7]">
            Add-ons
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-[1.05] tracking-[-0.04em] text-[#102f3a] sm:text-4xl">
            Make Your Brand Feel Personal
          </h2>

          <p className="mx-auto mt-3 max-w-[550px] text-sm leading-6 text-[#102f3a]/60 sm:text-base sm:leading-7">
            Create a premium unboxing experience with custom packaging
            add-ons.
          </p>
        </div>

        {/* Add-on Cards */}
        <div className="mx-auto mt-8 grid max-w-[1000px] grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4">
          {addOns.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[85px] items-center gap-4 rounded-xl border border-[#102f3a]/10 bg-white px-4 py-4 sm:min-h-[90px] sm:px-5 lg:h-[100px]"
            >
              <span className="shrink-0 text-2xl">{item.icon}</span>

              <h3 className="text-sm font-bold leading-5 tracking-[-0.02em] text-[#102f3a] sm:text-base">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mx-auto mt-5 max-w-[600px] text-center text-xs leading-5 text-[#102f3a]/50 sm:text-sm sm:leading-6">
          Pricing depends on quantity, size, and pattern.{" "}
          <a
            href="/#contact"
            className="font-medium text-[#31515A] hover:underline"
          >
            Contact us
          </a>{" "}
          for an exact quote.
        </p>
      </div>
    </section>
  );
}