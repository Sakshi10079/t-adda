const orders = [
  {
    orderId: "#TA-1001",
    brand: "Urban Threads",
    customer: "Rahul Sharma",
    product: "Oversized T-shirt",
    variant: "Black / XL",
    quantity: 1,
    date: "16 Sep 2026",
    status: "NEW",
  },
  {
    orderId: "#TA-1002",
    brand: "Street Mode",
    customer: "Priya Singh",
    product: "Regular T-shirt",
    variant: "White / M",
    quantity: 2,
    date: "16 Sep 2026",
    status: "PROCESSING",
  },
];

const statusClasses: Record<string, string> = {
  NEW: "bg-[#fff4f5] text-[#102f3a]",
  PROCESSING: "bg-[#f4f7f7] text-[#31515A]",
  PACKED: "bg-[#f4f7f7] text-[#31515A]",
  SHIPPED: "bg-[#eef6f4] text-[#31515A]",
  DELIVERED: "bg-[#eef6f4] text-[#31515A]",
};

export default function OrdersTable() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
        {/* Table Header */}
        <div className="border-b border-black/10 px-6 py-5">
          <h2 className="text-xl font-bold text-[#102f3a]">
            All Orders
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            Orders received through connected Shopify stores.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-black/10 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Order
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Brand Owner
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Customer
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Product
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  Qty
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
              {orders.map((order) => (
                <tr
                  key={order.orderId}
                  className="border-b border-black/5 last:border-b-0"
                >
                  <td className="px-6 py-5 text-sm font-semibold text-[#102f3a]">
                    {order.orderId}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {order.brand}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {order.customer}
                  </td>

                  <td className="px-6 py-5">
                    <p className="text-sm font-medium text-[#102f3a]">
                      {order.product}
                    </p>

                    <p className="mt-1 text-xs text-[#102f3a]/45">
                      {order.variant}
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {order.quantity}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#102f3a]/70">
                    {order.date}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusClasses[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-black/5 lg:hidden">
          {orders.map((order) => (
            <div key={order.orderId} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#102f3a]">
                    {order.orderId}
                  </p>

                  <p className="mt-1 text-xs text-[#102f3a]/50">
                    {order.date}
                  </p>
                </div>

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    statusClasses[order.status]
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Brand Owner
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {order.brand}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Customer
                  </p>

                  <p className="mt-1 text-sm text-[#102f3a]/70">
                    {order.customer}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    Product
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#102f3a]">
                    {order.product}
                  </p>

                  <p className="mt-1 text-xs text-[#102f3a]/45">
                    {order.variant} · Qty {order.quantity}
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