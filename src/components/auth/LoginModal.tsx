"use client";

import { useState } from "react";
import { loginUser } from "@/lib/api/auth";
import { useAuth } from "@/context/AuthContext";
import { getRegistrationPaymentStatus } from "@/lib/api/registrationPayment";

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
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      const response = await loginUser({
        email,
        password,
      });

      login({
        userId: response.userId,
        name: response.name,
        email: response.email,
        role: response.role,
        token: response.token,
      });

      onClose();

      if (response.role === "ADMIN") {
        window.location.href = "/admin";
        return;
      }

      const paymentStatus = await getRegistrationPaymentStatus(response.token);

      if (paymentStatus.status === "PAID") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/complete-registration";
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-2xl font-bold text-[#102f3a]">Welcome Back</h2>

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

          {error && <p className="text-sm text-red-600">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#102f3a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#31515A] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Logging in..." : "Login"}
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
