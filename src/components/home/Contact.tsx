export default function Contact() {
  return (
    <section className="bg-white px-6 py-20 lg:px-56" id="contact">
      <div className="mx-auto max-w-[1100px]">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[700px] text-center">
          <span className="inline-flex rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0284C7]">
            Get in Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#102f3a] sm:text-4xl">
            Ready to Launch Your Brand?
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-base leading-7 text-[#102f3a]/60">
            Reach out — we&apos;ll get back to you quickly.
          </p>
        </div>

        {/* Left + Right Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left Side */}
          <div className="flex flex-col">
            <div className="space-y-7">
              {/* Phone */}
              <div className="flex gap-4">
                <span className="text-2xl">📞</span>

                <div>
                  <h3 className="text-sm font-bold text-[#102f3a]">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-[#0284C7]/60">
                    <a
                      href="tel:7042828078"
                      className="hover:underline"
                    >
                      7042828078
                    </a>{" "}
                    /{" "}
                    <a
                      href="tel:9220163256"
                      className="hover:underline"
                    >
                      9220163256
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <span className="text-2xl">✉️</span>

                <div>
                  <h3 className="text-sm font-bold text-[#102f3a]">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-[#0284C7]/60">
                    <a
                      href="mailto:contact@t-adda.com"
                      className="hover:underline"
                    >
                      contact@t-adda.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <span className="text-2xl">📍</span>

                <div>
                  <h3 className="text-sm font-bold text-[#102f3a]">
                    Location
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#102f3a]/60">
                    Office No. SF-177, Gaur City Center,
                    <br />
                    Sector-4, Greater Noida West,
                    <br />
                    GB Nagar, UP — 201301
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <span className="text-2xl">📱</span>

                <div>
                  <h3 className="text-sm font-bold text-[#102f3a]">
                    Social Media
                  </h3>

                  <a
                    href="https://instagram.com/t-adda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-[#0284C7] hover:underline"
                  >
                    @T-ADDA on Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Place an Order */}
            <a
              href="https://taddaportal.web.app/order.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-lg w-fit items-center bg-[#102f3a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A]"
            >
              Place an Order →
            </a>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl bg-[#f8fbfc] p-7 lg:p-9">
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#102f3a]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#31515A]"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#102f3a]"
                >
                  Phone / WhatsApp
                </label>

                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#31515A]"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#102f3a]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#31515A]"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#102f3a]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={3}
                  className="w-full resize-none rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#31515A]"
                  placeholder="Tell us about your brand idea or ask a question"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className=" rounded-lg w-full bg-[#102f3a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}