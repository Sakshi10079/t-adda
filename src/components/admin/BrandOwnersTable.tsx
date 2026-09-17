const brandOwners = [
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    brand: "Urban Threads",
    phone: "+91 98765 43210",
    businessStage: "Just starting out",
    status: "ACTIVE",
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    brand: "Street Mode",
    phone: "+91 98765 12345",
    businessStage: "Already established",
    status: "ACTIVE",
  },
];

const statusClasses: Record<string, string> = {
  ACTIVE: "bg-[#eef6f4] text-[#31515A]",
  INACTIVE: "bg-[#fff4f5] text-[#102f3a]",
};

export default function BrandOwnersTable() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
        <div className="border-b border-black/10 px-6 py-5">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Registered Brand Owners
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            Brand owners who have registered with T-Adda.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-black/10 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Owner
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Brand
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Phone
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Business Stage
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {brandOwners.map((owner) => (
                <tr
                  key={owner.email}
                  className="border-b border-black/5 last:border-b-0"
                >
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-[#102f3a]">
                      {owner.name}
                    </p>

                    <p className="mt-1 text-xs text-[#102f3a]/45">
                      {owner.email}
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {owner.brand}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {owner.phone}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {owner.businessStage}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusClasses[owner.status]
                      }`}
                    >
                      {owner.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-black/5 lg:hidden">
          {brandOwners.map((owner) => (
            <div key={owner.email} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#102f3a]">
                    {owner.name}
                  </p>

                  <p className="mt-1 text-xs text-[#102f3a]/45">
                    {owner.email}
                  </p>
                </div>

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    statusClasses[owner.status]
                  }`}
                >
                  {owner.status}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Brand
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {owner.brand}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {owner.phone}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Business Stage
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {owner.businessStage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}