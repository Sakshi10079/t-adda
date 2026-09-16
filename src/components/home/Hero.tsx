import Link from "next/link";

const benefits = ["No MOQ", "No Inventory", "No Investment"];

const stats = [
  {
    value: "500+",
    label: "Brands Launched",
  },
  {
    value: "24–72hr",
    label: "Dispatch Time",
  },
  {
    value: "100%",
    label: "Cotton Quality",
  },
  {
    value: "₹1799",
    label: "Lifetime Access",
  },
];

export default function Hero() {
  return (
    <section className="bg-white px-18 pb-8 pt-10 lg:px-56 lg:pt-12">
      <div className="mx-auto max-w-[1400px]">

        {/* Main Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Left Content */}
          <div className="max-w-[720px]">

            {/* Top Badge */}
            <div className="mb-5 inline-flex rounded-full  bg-[#E0F2FE] px-4 py-2">
              <span className="text-sm font-semibold text-[#31515A]">
                Print-on-Demand & Dropshipping
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[520px] text-xl font-extrabold leading-[1.08] tracking-[-0.025em] text-black sm:text-2xl lg:text-[38px]">
              Launch Your <span className="text-[#3A9D9D]"> Clothing Brand</span> — No Investment Needed
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[520px] text-base leading-7 text-[#102f3a]/65 sm:text-lg">
              T-Adda handles printing, branding & fulfillment. You focus on
              selling. We take care of the rest.
            </p>

            {/* Benefits */}
            <div className="mt-7 flex flex-wrap gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-full border border-[#e88a9b] bg-[#fff1f3] px-5 py-2 text-sm font-semibold text-[#b8324b]"
                >
                  {benefit}
                </div>
              ))}
            </div>

            {/* Getting Started */}
            <div className="mt-9">
              <p className="mb-4 text-base font-semibold text-[#102f3a]">
                How would you like to get started?
              </p>

              <div className="flex max-w-[560px] flex-col gap-4">

                {/* Customer */}
                <Link
                  href="https://taddaportal.web.app/order.html"
                  className="group rounded-2xl border border-[#102f3a]/10 bg-white p-5 shadow-[0_8px_30px_rgba(16,47,58,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,47,58,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf7fc] text-xl">
                      🛍️
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-[#102f3a]">
                        As a Customer
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-[#102f3a]/55">
                        Place a custom print or bulk clothing order
                      </p>
                    </div>

                    <span className="text-xl text-[#31515A] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>

                {/* Brand Owner */}
                <Link
                  href="/start-your-brand"
                  className="group rounded-2xl border border-[#102f3a]/10 bg-white p-5 shadow-[0_8px_30px_rgba(16,47,58,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(16,47,58,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff4d8] text-xl">
                      🚀
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-[#102f3a]">
                        As a Brand Owner
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-[#102f3a]/55">
                        Launch your own clothing brand — ₹1799 lifetime
                      </p>
                    </div>

                    <span className="text-xl text-[#31515A] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>

              </div>
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex items-center justify-center lg:justify-center">
            <div className="flex h-[150px] w-[150px] items-center justify-center sm:h-[200px] sm:w-[200px] ">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/ecuLhUDIypP6aEoL/screenshot-2026-07-30-125846-omNmCBXRFGpx8LYy.png"
                alt="T-Adda Logo"
                className="h-auto w-[230px] object-contain sm:w-[280px]"
              />
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-[#111000]">
          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-5 py-6 text-center ${
                  index !== 0
                    ? "border-t border-white/10 lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}