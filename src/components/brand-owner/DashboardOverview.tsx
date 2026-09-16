export default function DashboardOverview() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Resources */}
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-sm font-medium text-[#31515A]">
            Resources
          </p>

          <p className="mt-3 text-3xl font-bold text-[#102f3a]">
            0
          </p>

          <p className="mt-2 text-sm text-[#102f3a]/50">
            Resources available to you
          </p>
        </div>

        {/* Training */}
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-sm font-medium text-[#31515A]">
            Training
          </p>

          <p className="mt-3 text-3xl font-bold text-[#102f3a]">
            0
          </p>

          <p className="mt-2 text-sm text-[#102f3a]/50">
            Training sessions available
          </p>
        </div>
      </div>
    </section>
  );
}