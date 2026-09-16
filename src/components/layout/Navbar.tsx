"use client";

import RegistrationModal from "@/components/auth/RegistrationModal";
import LoginModal from "@/components/auth/LoginModal";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/#products" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Services", href: "/#services" },
  { name: "Training", href: "/#" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-2xl font-black tracking-tight text-black">
            T-ADDA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#31515A] transition-colors hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            className="text-sm font-medium text-black transition-colors hover:text-[#102f3a]"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setRegistrationOpen(true)}
            className="rounded-full bg-[#102f3a] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
          >
            Start Your Brand
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl text-black lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {registrationOpen && (
        <RegistrationModal onClose={() => setRegistrationOpen(false)} />
      )}

      {loginOpen && (
        <LoginModal
          isOpen={loginOpen}
          onClose={() => setLoginOpen(false)}
          onRegister={() => {
            setLoginOpen(false);
            setRegistrationOpen(true);
          }}
        />
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#31515A] transition-colors hover:bg-[#fff4f5] hover:text-black"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 border-t border-black/10 pt-4">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setLoginOpen(true);
                }}
                className="block w-full px-3 py-3 text-left text-sm font-medium text-black"
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setRegistrationOpen(true);
                }}
                className="mt-2 block w-full rounded-full bg-[#102f3a] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Start Your Brand
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
