import Link from "next/link";

export default function QuickAccess() {
  return (
    <section className="px-6 pb-10 lg:px-10">
      <h2 className="text-xl font-bold text-[#102f3a]">
        Quick Access
      </h2>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {/* Resources */}
        <Link
          href="/dashboard/resources"
          className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#102f3a]/20 hover:shadow-sm"
        >
          <h3 className="font-semibold text-[#102f3a]">
            Resources
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#102f3a]/55">
            Access mockups, design bundles, guides, and other useful
            resources.
          </p>

          <span className="mt-5 inline-block text-sm font-semibold text-[#31515A] transition group-hover:text-black">
            View Resources →
          </span>
        </Link>

        {/* Training */}
        <Link
          href="/dashboard/training"
          className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#102f3a]/20 hover:shadow-sm"
        >
          <h3 className="font-semibold text-[#102f3a]">
            Training
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#102f3a]/55">
            Learn about mockups, design creation, marketing, and sales.
          </p>

          <span className="mt-5 inline-block text-sm font-semibold text-[#31515A] transition group-hover:text-black">
            View Training →
          </span>
        </Link>
      </div>
    </section>
  );
}