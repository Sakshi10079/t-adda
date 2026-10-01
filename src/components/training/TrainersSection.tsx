export default function TrainersSection() {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
            Meet Your Trainer
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Learn directly from the people behind T-ADDA
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-[#fff7f9] p-6 md:grid-cols-[280px_1fr] md:p-8">
            
            {/* Trainer Image */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-200">
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                Trainer Photo
              </div>
            </div>

            {/* Trainer Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
                Trainer
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Trainer Name
              </h3>

              <p className="mt-1 text-sm font-medium text-gray-500">
                T-ADDA
              </p>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Learn practical insights into starting and building a clothing
                brand, from product selection and manufacturing to marketing,
                printing, and Print-on-Demand.
              </p>
            </div>

          </div>
        </div>

<div className="mx-auto mt-12 max-w-4xl">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-[#fff7f9] p-6 md:grid-cols-[280px_1fr] md:p-8">
            
            {/* Trainer Image */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-200">
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                Trainer Photo
              </div>
            </div>

            {/* Trainer Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
                Trainer
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Trainer Name
              </h3>

              <p className="mt-1 text-sm font-medium text-gray-500">
                T-ADDA
              </p>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Learn practical insights into starting and building a clothing
                brand, from product selection and manufacturing to marketing,
                printing, and Print-on-Demand.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}