export default function AdminHeader() {
  return (
    <section className="border-b border-black/10 bg-white px-6 py-8 lg:px-10">
      <p className="text-sm font-medium text-[#31515A]">
        T-Adda Administration
      </p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#102f3a]">
        Admin Dashboard
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#102f3a]/60">
        Monitor orders, brand owners, registrations, leads, and your
        T-Adda operations from one place.
      </p>
    </section>
  );
}