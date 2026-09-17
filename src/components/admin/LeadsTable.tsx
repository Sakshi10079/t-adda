const leads = [
  {
    name: "Aman Verma",
    email: "aman@example.com",
    phone: "+91 98765 43210",
    message: "Interested in bulk custom T-shirt printing.",
    date: "16 Sep 2026",
    status: "NEW",
  },
  {
    name: "Neha Kapoor",
    email: "neha@example.com",
    phone: "+91 98765 12345",
    message: "Looking for apparel fulfillment services.",
    date: "15 Sep 2026",
    status: "CONTACTED",
  },
];

const statusClasses: Record<string, string> = {
  NEW: "bg-[#fff4f5] text-[#102f3a]",
  CONTACTED: "bg-[#f4f7f7] text-[#31515A]",
  CONVERTED: "bg-[#eef6f4] text-[#31515A]",
  CLOSED: "bg-[#f4f4f4] text-[#666666]",
};

export default function LeadsTable() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
        {/* Header */}
        <div className="border-b border-black/10 px-6 py-5">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Customer Leads
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            Enquiries submitted through the T-Adda website.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[950px]">
            <thead>
              <tr className="border-b border-black/10 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Customer
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Phone
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Enquiry
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Date
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.email}
                  className="border-b border-black/5 last:border-b-0"
                >
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-[#102f3a]">
                      {lead.name}
                    </p>

                    <p className="mt-1 text-xs text-[#102f3a]/45">
                      {lead.email}
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {lead.phone}
                  </td>

                  <td className="max-w-md px-6 py-5 text-sm leading-6 text-[#102f3a]/70">
                    {lead.message}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {lead.date}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusClasses[lead.status]
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-black/5 lg:hidden">
          {leads.map((lead) => (
            <div key={lead.email} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#102f3a]">
                    {lead.name}
                  </p>

                  <p className="mt-1 text-xs text-[#102f3a]/45">
                    {lead.email}
                  </p>
                </div>

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    statusClasses[lead.status]
                  }`}
                >
                  {lead.status}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {lead.phone}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Enquiry
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#102f3a]/70">
                    {lead.message}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Date
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {lead.date}
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