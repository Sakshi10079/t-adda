export default function OrdersHeader() {
  return (
    <section className="border-b border-black/10 bg-white px-6 py-8 lg:px-10">
      <p className="text-sm font-medium text-[#31515A]">
        Order Management
      </p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#102f3a]">
        Orders
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#102f3a]/60">
        View and manage orders received from connected Shopify stores.
      </p>
    </section>
  );
}