export default function TrainingHero() {
  return (
    <section className="w-full bg-[#fff7f9] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
            Live Training
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            How to Start a Clothing Brand?
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Learn the fundamentals of building a clothing brand — from
            choosing your products and fabrics to printing, manufacturing,
            marketing, and Print-on-Demand.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Live Training
              </p>
              <p className="mt-1 text-3xl font-bold text-gray-900">
                ₹99
              </p>
            </div>

            <button
              type="button"
              className="rounded-full bg-pink-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              Book Training — ₹99
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-3xl bg-gray-900">
            <div className="text-center text-white">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-2xl backdrop-blur-sm">
                ▶
              </div>

              <p className="mt-4 text-sm text-gray-300">
                Training Preview
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}