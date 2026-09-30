"use client";

import { useState } from "react";
import { createLead } from "@/lib/api/leads";

interface CustomerLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomerLeadModal({
  isOpen,
  onClose,
}: CustomerLeadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    try {
      await createLead({
        name,
        email,
        phone,
        message,
      });

      setSuccess(true);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl leading-none text-[#102f3a]/50 transition hover:text-[#102f3a]"
          aria-label="Close"
        >
          ×
        </button>

        <div className="pr-8">
          <h2 className="text-2xl font-bold text-[#102f3a]">
            How Can We Help?
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#102f3a]/60">
            Tell us what you need and our team will get in touch with you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
              Name<span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
            />
          </div>

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

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
              Phone Number<span className="text-red-500">*</span>
            </label>

            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
              Your Query<span className="text-red-500">*</span>
            </label>

            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you need..."
              className="w-full resize-none rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          {success && (
            <p className="text-sm font-medium text-green-600">
              Your enquiry has been submitted successfully. We&apos;ll get in
              touch with you soon.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#102f3a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#31515A] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}