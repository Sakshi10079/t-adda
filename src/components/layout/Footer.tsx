import Link from "next/link";

const footerLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "Order Portal",
    href: "https://taddaportal.web.app/order.html",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071a21] px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Top Section */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Brand */}
          <div className="max-w-[260px]">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              T-ADDA
            </Link>

            <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/60">
              A print-on-demand brand.
              <br />
              Launch your clothing brand today.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-4 lg:pt-1">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
                {...(link.href.startsWith("http")
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-white/50">
          <p>
            © 2026 T-Adda. All rights reserved. |{" "}
            <span>
              <a href="mailto:contact@t-adda.com" className="hover:underline">
                contact@t-adda.com
              </a>
            </span>{" "}
            |
            <span>
              <a href="tel:7042828078" className="hover:underline">
                7042828078
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
