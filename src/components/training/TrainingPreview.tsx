export default function TrainingPreview() {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
            Training Preview
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Get a glimpse of what you&apos;ll learn
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Explore practical insights into building, branding, marketing,
            and growing your clothing business with Print-on-Demand.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Video 1 */}
          <div className="group">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gray-900">
              <button
                type="button"
                aria-label="Play training preview video 1"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-lg text-gray-900 shadow-lg transition group-hover:scale-105"
              >
                ▶
              </button>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Starting Your Clothing Brand
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Understand the fundamentals of choosing your niche, audience,
              products, and brand direction.
            </p>
          </div>

          {/* Video 2 */}
          <div className="group">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gray-900">
              <button
                type="button"
                aria-label="Play training preview video 2"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-lg text-gray-900 shadow-lg transition group-hover:scale-105"
              >
                ▶
              </button>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Products, Printing & POD
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Get an introduction to fabrics, printing methods, manufacturing,
              and the T-ADDA Print-on-Demand model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}