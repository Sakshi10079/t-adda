const dtfPrinting = [
  {
    size: "Pocket Size",
    dimensions: '3.5" × 3.5"',
    price: "₹25",
  },
  {
    size: "A4",
    dimensions: '8.3" × 11.7"',
    price: "₹60",
  },
  {
    size: "A3",
    dimensions: '11.7" × 16.5"',
    price: "₹90",
  },
  {
    size: "A2",
    dimensions: '16.5" × 23.4"',
    price: "₹120",
  },
];

const brandingOptions = [
  "Sleeve Branding",
  "Hem (Bottom) Branding",
  "Back Neck (Outer)",
  "Sleeve Cuff Branding",
  "Neck Label (Inner Side)",
];

const shippingRates = [
  {
    weight: "Up to 500 gm",
    prepaid: "68",
    cod: "98",
  },
  {
    weight: "500–750 gm",
    prepaid: "119",
    cod: "149",
  },
  {
    weight: "750 gm–1 kg",
    prepaid: "136",
    cod: "166",
  },
  {
    weight: "1–1.5 kg",
    prepaid: "204",
    cod: "234",
  },
  {
    weight: "1.5–2 kg",
    prepaid: "272",
    cod: "302",
  },
  {
    weight: "2–2.5 kg",
    prepaid: "249",
    cod: "279",
  },
  {
    weight: "2.5–3 kg",
    prepaid: "498",
    cod: "438",
  },
];

const samples = [
  {
    gsm: "180 GSM",
    name: "Regular Tee",
    price: "₹500",
  },
  {
    gsm: "220 GSM",
    name: "Oversized Tee",
    price: "₹540",
  },
  {
    gsm: "240 GSM",
    name: "Terry Oversized",
    price: "₹550",
  },
  {
    gsm: "220 GSM",
    name: "Polo (Matty)",
    price: "₹550",
  },
  {
    gsm: "350 GSM",
    name: "Hoodie",
    price: "₹740",
  },
  {
    gsm: "350 GSM",
    name: "Sweatshirt",
    price: "₹689",
  },
  {
    gsm: "180 GSM",
    name: "Kids Tee",
    price: "₹395",
  },
];

export default function Pricing() {
  return (
    <section className="bg-white px-6 py-20 lg:px-56 lg:py-12" id="pricing">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#7DD3FC] bg-[#E0F2FE] px-4 py-2">
            <span className="text-sm font-semibold text-[#0284C7]">
              Pricing
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-black sm:text-4xl lg:text-[32px]">
            Transparent, <span className="text-[#3A9D9D]">Simple Pricing</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#102f3a]/65">
            Know exactly what you&apos;re paying. No hidden costs.
          </p>
        </div>

        {/* Three Pricing Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* DTF Printing */}
          <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(16,47,58,0.07)] border border-[#102f3a]/10">
            <p className="text-base font-semibold text-black">DTF Printing</p>
            <p className="mt-1 text-sm leading-6 text-[#102f3a]/60">
              High-quality DTF printing for your custom designs.
            </p>

            {/* Table */}
            <div className="mt-3 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1.2fr_1fr_0.6fr] rounded-lg bg-[#f3f7f8] px-3 py-2 text-[12px] font-bold uppercase tracking-wide text-[#102f3a]/60">
                <span>Print Size</span>
                <span>Dimensions</span>
                <span className="text-right">Price</span>
              </div>

              {/* Rows */}
              <div>
                {dtfPrinting.map((item) => (
                  <div
                    key={item.size}
                    className="grid grid-cols-[1.2fr_1fr_0.6fr] items-center border-b border-[#102f3a]/10 px-3 py-2 text-sm last:border-b-0"
                  >
                    <span className="font-medium text-[#102f3a]">
                      {item.size}
                    </span>

                    <span className="text-[#102f3a]/55">{item.dimensions}</span>

                    <span className="text-right font-bold text-[#31515A]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Branding */}
          <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(16,47,58,0.07)] border border-[#102f3a]/10">
            <p className="text-base font-semibold text-black">
              Custom Branding
            </p>

            <p className="mt-3 text-sm leading-6 text-[#102f3a]/60">
              Make every product feel like yours with custom label placement.
            </p>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-[#31515A]">₹10</span>

              <span className="text-base font-semibold text-[#102f3a]/45">
                /piece
              </span>
            </div>

            <div className="mt-7 space-y-4">
              {brandingOptions.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#102f3a]/75"
                >
                  <span className="text-base font-bold text-[#3A9D9D]">→</span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Fee */}
          <div className="rounded-2xl bg-[#071a21] p-7 text-white shadow-[0_12px_35px_rgba(7,26,33,0.18)] border border-[#102f3a]/10">
            {/* Lifetime Label */}
            <div className="inline-flex rounded-2xl bg-[#0284C7] px-3 py-1.5">
              <span className="text-xs font-bold uppercase tracking-wide text-[#E0F2FE]">
                One Time
              </span>
            </div>

            <h3 className="mt-2 text-lg font-extrabold">Registration Fee</h3>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Everything you need to start your brand — forever.
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-white">₹1799</span>

              <span className="text-base text-white/50">/lifetime</span>
            </div>

            <div className="mt-6 space-y-0">
              {[
                "Lifetime order fulfillment support",
                "30-day Instagram content planner",
                "Ready-to-upload mockups",
                "Designs bundle",
                "Mockup & design creation training",
                "Marketing & sales guidance",
                "Free packaging on all orders",
                "Customer support on call",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/75"
                >
                  <span className="mt-0.5 shrink-0 text-base font-bold text-[#62a84f]">
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href=""
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#071a21] transition hover:bg-[#E0F2FE]"
            >
              Register Now
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Shipping Rates */}
        <div className="mt-6 rounded-2xl bg-[#f8fbfc] p-7 lg:p-9">
          <div className="text-left">
            <h3 className="mt-2 text-lg font-bold text-[#102f3a]">
              Shipping Rates
            </h3>
            <p className=" mt-3 max-w-[600px] text-sm leading-6 text-[#102f3a]/60">
              For COD orders — amount charged is the rate given or 2.5% of order
              value, whichever is higher.
            </p>
          </div>

          {/* Shipping Table */}
          <div className="mx-2 mt-6 max-w-[900px] overflow-hidden">
            <div className="grid grid-cols-3 rounded-lg px-2 py-1 text-xs font-bold uppercase tracking-wide text-[#102f3a]/60">
              <span>Weight</span>
              <span className="text-center">Prepaid(₹)</span>
              <span className="text-right">COD(₹)</span>
            </div>

            {shippingRates.map((item) => (
              <div
                key={item.weight}
                className="grid grid-cols-3 items-center border-b border-[#102f3a]/10 px-4 py-3 text-sm last:border-b-0"
              >
                <span className="font-medium text-black">{item.weight}</span>

                <span className="text-center  text-black">{item.prepaid}</span>

                <span className="text-right text-black">{item.cod}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-[900px] text-left text-sm leading-5 text-[#102f3a]/50">
            Shipping charges are subject to change. You will be informed in
            advance of any updates.
          </p>
        </div>

        {/* Samples */}
        <div className="mt-8 rounded-2xl border border-[#102f3a]/10 p-7 lg:p-9">
          <div className="max-w-[700px] text-left">
            <h3 className="text-xl font-bold leading-[1.1] tracking-[-0.025em] text-black sm:text-xl">
              Want to Test Our Quality First?
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#102f3a]/65">
              Order individual samples before committing. Full sample kit
              available at ₹3400.
            </p>
          </div>

          {/* Sample Grid - 2 Rows */}
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {samples.map((sample) => (
              <div
                key={sample.name}
                className="flex items-center justify-between rounded-xl bg-[#f8fbfc] p-2"
              >
                {/* GSM + Product Name */}
                <div className="flex min-w-0 items-center gap-2">
                  {sample.gsm && (
                    <span className="shrink-0 text-[14px] font-medium text-[#102f3a]/60">
                      {sample.gsm}
                    </span>
                  )}
                  <h5 className="truncate text-sm text-[#102f3a]/60">
                    {sample.name}
                  </h5>
                </div>

                {/* Price */}
                <span className="ml-4 shrink-0 text-sm font-bold  text-black">
                  {sample.price}
                </span>
              </div>
            ))}
          </div>

          {/* complete sample */}
          <div className="mb-2 mt-6 flex items-center justify-between rounded-lg border border-[#7DD3FC] bg-[#E0F2FE] px-4 py-2">
            <span className="text-base font-medium text-[#0284C7]">
              Complete Sample Kit (All Products)
            </span>
            <span className="text-[#0284C7]">₹3400</span>
          </div>

          {/* Bottom Note */}
          <p className="mt-3 text-center text-sm leading-5 text-[#102f3a]/50">
            Sample prices include printing, shipping & GST. Defective products
            will be exchanged at no extra cost.
          </p>
        </div>
      </div>
    </section>
  );
}
