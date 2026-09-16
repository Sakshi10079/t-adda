const policies = [
  {
    icon: "🚚",
    title: "Dispatch & Delivery",
    description:
      "Orders dispatched within 24–72 business hours. Estimated delivery: 3–7 business days depending on destination.",
  },
  {
    icon: "💳",
    title: "Payment Terms",
    description:
      "Prepaid orders must be paid in full before dispatch. COD payments transferred within 2 days of successful delivery.",
  },
  {
    icon: "↩️",
    title: "Return Policy",
    description:
      "Returns fully accepted if the product delivered is torn, damaged, or dirty. Exchange provided at no extra cost.",
  },
  {
    icon: "🎨",
    title: "Design Requirements",
    description:
      "Designs must be 300 DPI HD quality in PNG format for best print results.",
  },
  {
    icon: "🔔",
    title: "Stock Updates",
    description:
      "You'll be informed in advance if any product is out of stock or if there are policy changes — via WhatsApp or email.",
  },
  {
    icon: "🎨",
    title: "Color Note",
    description:
      "Actual product colors may slightly vary due to lighting, screen settings, or fabric texture.",
  },
];

export default function TermsConditions() {
  return (
    <section className="bg-[#f8fbfc] px-6 py-20 lg:px-56">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mx-auto max-w-[700px] text-center">
          <span className="inline-flex rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0284C7]">
            Terms & Conditions
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#102f3a] sm:text-4xl">
            Clear Policies, No Surprises
          </h2>
        </div>

        {/* Policy Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {policies.map((policy) => (
            <div key={policy.title} className="rounded-xl bg-white p-6 border border-[#102f3a]/10">
              <div className="text-2xl">
                {policy.icon}
                <span className="mt-5 text-base font-bold leading-5 tracking-[-0.02em] text-[#102f3a]">
                  {policy.title}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#102f3a]/60">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
