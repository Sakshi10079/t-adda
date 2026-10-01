export default function TrainingBooking() {
  return (
    <section className="w-full bg-[#fff7f9] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-gray-900 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
            Book Your Training
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Start Building Your Clothing Brand
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
            Join our live online training and learn the practical steps
            involved in starting and growing your clothing brand.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 px-5 py-5">
              <p className="text-sm text-gray-400">Day</p>
              <p className="mt-1 text-lg font-semibold text-white">
                Every Sunday
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-5">
              <p className="text-sm text-gray-400">Time</p>
              <p className="mt-1 text-lg font-semibold text-white">
                11:30 AM – 2:00 PM
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-5">
              <p className="text-sm text-gray-400">Training Fee</p>
              <p className="mt-1 text-lg font-semibold text-white">
                ₹99
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-10 rounded-full bg-pink-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-700"
          >
            Book Your Slot — ₹99
          </button>

          <p className="mt-4 text-sm text-gray-400">
            Live online training • Limited slots
          </p>
        </div>
      </div>
    </section>
  );
}