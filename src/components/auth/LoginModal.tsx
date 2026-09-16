"use client";

import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister?: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onRegister,
}: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Backend authentication will be connected later.
    console.log("Login submitted", { email, password });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl leading-none text-[#102f3a]/50 transition hover:text-[#102f3a]"
          aria-label="Close"
        >
          ×
        </button>

        {/* Heading */}
        <div className="pr-8">
          <h2 className="text-2xl font-bold text-[#102f3a]">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#102f3a]/60">
            Login to your T-Adda Brand Owner account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
              Email Address<span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
              Password<span className="text-red-500">*</span>
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#102f3a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#31515A]"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="mt-6 text-center text-sm text-[#102f3a]/60">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={onRegister}
            className="font-semibold text-[#102f3a] underline underline-offset-2 transition hover:text-[#31515A]"
          >
            Start Your Brand
          </button>
        </div>
      </div>
    </div>
  );
}