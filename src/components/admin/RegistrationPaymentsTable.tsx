const payments = [
  {
    paymentId: "PAY-1001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    amount: "₹1,799",
    paymentMethod: "UPI",
    transactionId: "TXN123456789",
    date: "16 Sep 2026",
    status: "PAID",
  },
  {
    paymentId: "PAY-1002",
    name: "Priya Singh",
    email: "priya@example.com",
    amount: "₹1,799",
    paymentMethod: "UPI",
    transactionId: "TXN987654321",
    date: "16 Sep 2026",
    status: "PAID",
  },
];

const statusClasses: Record<string, string> = {
  PAID: "bg-[#eef6f4] text-[#31515A]",
  PENDING: "bg-[#fff8e8] text-[#8a6500]",
  FAILED: "bg-[#fff4f5] text-red-600",
};

export default function RegistrationPaymentsTable() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
        {/* Header */}
        <div className="border-b border-black/10 px-6 py-5">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Registration Payments
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            One-time registration payments received from Brand Owners.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-black/10 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Payment
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Brand Owner
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Amount
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Method
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Transaction ID
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
              {payments.map((payment) => (
                <tr
                  key={payment.paymentId}
                  className="border-b border-black/5 last:border-b-0"
                >
                  <td className="px-6 py-5 text-sm font-semibold text-[#102f3a]">
                    {payment.paymentId}
                  </td>

                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-[#102f3a]">
                      {payment.name}
                    </p>

                    <p className="mt-1 text-xs text-[#102f3a]/45">
                      {payment.email}
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-[#102f3a]">
                    {payment.amount}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {payment.paymentMethod}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {payment.transactionId}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {payment.date}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusClasses[payment.status]
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-black/5 lg:hidden">
          {payments.map((payment) => (
            <div key={payment.paymentId} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#102f3a]">
                    {payment.paymentId}
                  </p>

                  <p className="mt-1 text-xs text-[#102f3a]/45">
                    {payment.date}
                  </p>
                </div>

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    statusClasses[payment.status]
                  }`}
                >
                  {payment.status}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Brand Owner
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#102f3a]">
                    {payment.name}
                  </p>

                  <p className="mt-1 text-xs text-[#102f3a]/45">
                    {payment.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Amount
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {payment.amount}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Payment Method
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {payment.paymentMethod}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Transaction ID
                  </p>

                  <p className="mt-1 break-all text-sm text-[#102f3a]/70">
                    {payment.transactionId}
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