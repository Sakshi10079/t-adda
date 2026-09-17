const overviewCards = [
  {
    label: "New Orders",
    value: "0",
    description: "Orders awaiting processing",
  },
  {
    label: "Processing",
    value: "0",
    description: "Orders currently being processed",
  },
  {
    label: "Shipped",
    value: "0",
    description: "Orders shipped to customers",
  },
  {
    label: "Brand Owners",
    value: "0",
    description: "Registered brand owners",
  },
  {
    label: "New Leads",
    value: "0",
    description: "Customer enquiries to review",
  },
];

export default function AdminOverview() {
  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {overviewCards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-black/10 bg-white p-6"
          >
            <p className="text-sm font-medium text-[#31515A]">
              {card.label}
            </p>

            <p className="mt-3 text-3xl font-bold text-[#102f3a]">
              {card.value}
            </p>

            <p className="mt-2 text-sm text-[#102f3a]/50">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="mt-8 rounded-2xl border border-black/10 bg-white">
        <div className="border-b border-black/10 px-6 py-5">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            Latest orders received from connected Shopify stores.
          </p>
        </div>

        <div className="px-6 py-10 text-center">
          <p className="text-sm font-medium text-[#102f3a]/60">
            No orders yet
          </p>

          <p className="mt-1 text-xs text-[#102f3a]/40">
            New Shopify orders will appear here.
          </p>
        </div>
      </div>
    </section>
  );
}