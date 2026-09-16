"use client";

import { useState } from "react";

const products = [
  {
    gsm: "180 GSM",
    name: "Regular Tee",
    price: "₹200",
    badge: "Best Seller",
    colors: ["#111111", "#ffffff", "#020629", "#8f292b", "#baffd1"],
    description: [
      "100% Cotton",
      "Regular Casual Fit",
      "Double Bio-Washed",
      "Silicon Washed & Double Stitched",
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/products/regular/regular-tee-1.jpg",
      "/products/regular/regular-tee-2.jpg",
      "/products/regular/regular-tee-3.jpg",
      "/products/regular/regular-tee-4.jpg",
      "/products/regular/regular-tee-5.jpg",
    ],
  },
  {
    gsm: "220 GSM",
    name: "Oversized Tee",
    price: "₹260",
    colors: ["#111111", "#ffffff", "#1b0d00", "#e6c173", "#336000"],
    description: [
      "100% Premium Cotton",
      "Relaxed Oversized Fit",
      "Drop Shoulder",
      "Double Bio-Washed & Silicon Washed",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/products/oversized/oversized-tee-1.jpg",
      "/products/oversized/oversized-tee-2.jpg",
      "/products/oversized/oversized-tee-3.jpg",
      "/products/oversized/oversized-tee-4.jpg",
      "/products/oversized/oversized-tee-5.jpg",
    ],
  },
  {
    gsm: "240 GSM",
    name: "Oversized Tee (Terry)",
    price: "₹280",
    colors: ["#111111", "#ffffff", "#303030", "#D5AA59"],
    description: [
      "100% Premium Terry Cotton",
      "Relaxed Oversized Fit",
      "Heavyweight 240 GSM",
      "Soft Finish & Durable Stitching",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/products/oversized(terry)/terry-tee-1.jpg",
      "/products/oversized(terry)/terry-tee-2.jpg",
      "/products/oversized(terry)/terry-tee-3.jpg",
      "/products/oversized(terry)/terry-tee-4.jpg",
    ],
  },
  {
    gsm: "220 GSM",
    name: "Polo (Collar Tee)",
    price: "₹300",
    colors: ["#111111", "#ffffff"],
    description: [
      "100% Premium Cotton",
      "Regular Polo Fit",
      "220 GSM Fabric",
      "Double Stitched & Bio-Washed",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/products/polo/polo-1.jpg",
      "/products/polo/polo-2.jpg",
    ],
  },
  {
    gsm: "350 GSM",
    name: "Sweatshirt",
    price: "₹480",
    colors: ["#111111", "#fffded", "#890d0f", "#000b27", "#c382e6"],
    description: [
      "100% Premium Cotton",
      "Regular Sweatshirt Fit",
      "Heavyweight 350 GSM",
      "Soft Inner Finish & Double Stitched",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/products/sweatshirts/sweatshirt-1.jpg",
      "/products/sweatshirts/sweatshirt-2.jpg",
      "/products/sweatshirts/sweatshirt-3.jpg",
      "/products/sweatshirts/sweatshirt-4.jpg",
      "/products/sweatshirts/sweatshirt-5.jpg",
    ],
  },
  {
    gsm: "350 GSM",
    name: "Hoodie",
    price: "₹505",
    colors: ["#111111", "#fffded", "#541501", "#5f8629", "#D5AA59"],
    description: [
      "100% Premium Cotton",
      "Comfortable Regular Fit",
      "Heavyweight 350 GSM",
      "Soft Inner Finish & Double Stitched",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/products/hoodie/hoodie-1.jpg",
      "/products/hoodie/hoodie-2.jpg",
      "/products/hoodie/hoodie-3.jpg",
      "/products/hoodie/hoodie-4.jpg",
      "/products/hoodie/hoodie-5.jpg",
    ],
  },
  {
    gsm: "180 GSM",
    name: "Kids Regular Tee",
    price: "₹145",
    colors: ["#ffffff", "#111111","#bf4b76", "#ff6800", "#baffd1"],
    description: [
      "100% Cotton",
      "Comfortable Kids Fit",
      "Double Bio-Washed",
      "Silicon Washed & Double Stitched",
    ],
    sizes: ["22", "24", "26", "28", "30"],
    images: [
      "/products/kids regular tee/kids-tee-1.jpg",
      "/products/kids regular tee/kids-tee-2.jpg",
      "/products/kids regular tee/kids-tee-3.jpg",
      "/products/kids regular tee/kids-tee-4.jpg",
      "/products/kids regular tee/kids-tee-5.jpg",
    ],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[number] | null
  >(null);

  const [selectedImage, setSelectedImage] = useState(0);

  const openProduct = (product: (typeof products)[number]) => {
    setSelectedProduct(product);
    setSelectedImage(0);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setSelectedImage(0);
  };

  return (
    <>
      <section className="bg-[#f8fbfc] px-8 py-16 lg:px-56 lg:py-20" id="products">
        <div className="mx-auto max-w-[1200px]">
          {/* Heading */}
          <div className="mx-auto max-w-[700px] text-center">
            <div className="mb-5 inline-flex rounded-full border border-[#7DD3FC] bg-[#E0F2FE] px-4 py-2">
              <span className="text-sm font-semibold text-[#0284C7]">
                Products
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-black sm:text-4xl lg:text-[32px]">
              What We <span className="text-[#3A9D9D]">Print On</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#102f3a]/65">
              Premium 100% cotton garments in a range of fits, weights, and
              colors.
            </p>
          </div>

          {/* Product Grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {products.map((product) => (
              <button
                key={product.name}
                type="button"
                onClick={() => openProduct(product)}
                className="rounded-xl border border-[#102f3a]/10 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#3A9D9D]/40 hover:shadow-[0_12px_25px_rgba(16,47,58,0.08)]"
              >
                {/* Badge + GSM */}
                <div className="flex items-center justify-between gap-2">
                  {product.badge ? (
                    <span className="rounded-full bg-[#dff4e8] px-2.5 py-1 text-[10px] font-bold text-[#34845b]">
                      {product.badge}
                    </span>
                  ) : (
                    <span />
                  )}

                  <span className="text-[16px] font-semibold text-[#102f3a]/40">
                    {product.gsm}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="mt-5 text-base font-bold leading-tight text-black">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#31515A]">
                    {product.price}
                  </span>

                  <span className="text-xs font-medium text-[#102f3a]/40">
                    /piece
                  </span>
                </div>

                {/* Colors */}
                <div className="mt-4">
                  <div className="mt-2 flex items-center gap-1.5">
                    {product.colors.map((color, index) => (
                      <span
                        key={`${product.name}-${index}`}
                        className="h-4 w-4 rounded-full border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* View */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#3A9D9D]">
                  View Colors & Sizes
                  <span className="text-sm">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closeProduct}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[950px] overflow-y-auto rounded-2xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeProduct}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#102f3a] shadow-md transition hover:bg-[#f5f5f5]"
            >
              ×
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Left - Images */}
              <div className="p-6">
                <div className="flex h-[420px] items-center justify-center rounded-xl bg-[#f7f7f7]">
                  <img
                    src={selectedProduct.images[selectedImage]}
                    alt={selectedProduct.name}
                    className="h-full w-full rounded-xl object-contain"
                  />
                </div>

                {/* Four Image Thumbnails */}
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {selectedProduct.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`h-20 overflow-hidden rounded-lg border-2 bg-[#f7f7f7] ${
                        selectedImage === index
                          ? "border-[#3A9D9D]"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedProduct.name} ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right - Product Details */}
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="text-sm font-semibold text-[#102f3a]/45">
                  {selectedProduct.gsm}
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-black">
                  {selectedProduct.name}
                </h2>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#31515A]">
                    {selectedProduct.price}
                  </span>
                  <span className="text-sm text-[#102f3a]/45">/pc</span>
                </div>

                {/* Description */}
                <ul className="mt-7 space-y-3">
                  {selectedProduct.description.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#102f3a]/70"
                    >
                      <span className="mt-0.5 shrink-0 text-base font-bold text-[#34845b]">
  ✓
</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Colors */}
                <div className="mt-7">
                  <p className="text-sm font-bold text-[#102f3a]">
                    Available Colors
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    {selectedProduct.colors.map((color, index) => (
                      <span
                        key={`${selectedProduct.name}-modal-${index}`}
                        className="h-6 w-6 rounded-full border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mt-7">
                  <p className="text-sm font-bold text-[#102f3a]">
                    Available Sizes
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <span
                        key={size}
                        className="rounded-lg border border-[#102f3a]/15 px-4 py-2 text-sm font-medium text-[#102f3a]"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Order Button */}
                <a
                  href="https://taddaportal.web.app/order.html"
                  className="mt-8 flex w-fit items-center gap-2 rounded-full bg-[#102f3a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#31515A]"
                >
                  Order Now
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}