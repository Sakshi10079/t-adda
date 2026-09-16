"use client";

import { useState } from "react";

type RegistrationModalProps = {
  onClose: () => void;
};

export default function RegistrationModal({
  onClose,
}: RegistrationModalProps) {
  const [businessStage, setBusinessStage] = useState("");
  const [products, setProducts] = useState<string[]>([]);
  const [sellingPlatforms, setSellingPlatforms] = useState<string[]>([]);
  const [mockupExperience, setMockupExperience] = useState("");
  const [mockupStyle, setMockupStyle] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const toggleSelection = (
    value: string,
    current: string[],
    setCurrent: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setCurrent((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    setPasswordError("");

    // Backend and payment functionality will be connected later.
    console.log("Registration form submitted");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-[760px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close registration"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-xl text-[#102f3a] transition hover:bg-black/10"
        >
          ×
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-8 sm:px-9 sm:py-10">
          {/* Header */}
          <div className="pr-10">
            <span className="inline-flex rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#0284C7]">
              Start Your Brand
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-[-0.035em] text-[#102f3a] sm:text-3xl">
              Complete your registration at just ₹1,799/-
            </h2>

            <p className="mt-3 text-sm font-medium text-[#102f3a]">
              What’s included in this one-time registration 👇
            </p>

            {/* Benefits */}
            <div className="mt-4 space-y-2">
              {[
                "Lifetime POD & Dropshipping Order Fulfilment",
                "Basic Designing Support",
                "Training on Mockups & Design Creation",
                "Guidance on Marketing & Sales",
                "30-Day Instagram Content Planner to launch your clothing brand",
                "Ready-to-use HD Quality Design Bundle",
              ].map((benefit) => (
                <p
                  key={benefit}
                  className="flex gap-2 text-sm leading-6 text-[#102f3a]/70"
                >
                  <span className="shrink-0 text-[#3A9D9D]">✓</span>
                  <span>{benefit}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-7">
            {/* Basic Details */}
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                  Name<span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
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
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                  Phone number<span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                  Business/Brand Name (if any)
                </label>

                <input
                  type="text"
                  placeholder="Enter your brand name"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                  Social Media Handles (Instagram, Facebook, etc)
                </label>

                <input
                  type="text"
                  placeholder="Instagram / Facebook / other links"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
                />
              </div>
            </div>

            {/* Account Credentials */}
            <div className="border-t border-[#102f3a]/10 pt-7">
              <h3 className="text-base font-bold leading-6 text-[#102f3a]">
                Create your account
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#102f3a]/60">
                Create a password to access your T-Adda Brand Owner dashboard
                in the future.
              </p>

              <div className="mt-5 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                    Password<span className="text-red-500">*</span>
                  </label>

                  <input
                    type="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                    placeholder="Create a password"
                    className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
                  />

                  <p className="mt-2 text-xs text-[#102f3a]/45">
                    Password must be at least 8 characters.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                    Confirm Password<span className="text-red-500">*</span>
                  </label>

                  <input
                    type="password"
                    required
                    minLength={8}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setPasswordError("");
                    }}
                    placeholder="Re-enter your password"
                    className={`w-full rounded-lg border ${
                      passwordError
                        ? "border-red-400"
                        : "border-[#102f3a]/10"
                    } bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]`}
                  />

                  {passwordError && (
                    <p className="mt-2 text-xs text-red-500">
                      {passwordError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Business Stage */}
            <FormSection title="What stage is your business currently in?">
              <RadioOption
                label="Just starting out"
                name="businessStage"
                value="Just starting out"
                checked={businessStage === "Just starting out"}
                onChange={setBusinessStage}
              />

              <RadioOption
                label="Running but want to expand"
                name="businessStage"
                value="Running but want to expand"
                checked={businessStage === "Running but want to expand"}
                onChange={setBusinessStage}
              />

              <RadioOption
                label="Already established and scaling"
                name="businessStage"
                value="Already established and scaling"
                checked={businessStage === "Already established and scaling"}
                onChange={setBusinessStage}
              />
            </FormSection>

            {/* Product Categories */}
            <FormSection title="Preferred product categories (you plan to focus on)">
              <CheckboxOption
                label="Tshirts"
                checked={products.includes("Tshirts")}
                onChange={() =>
                  toggleSelection("Tshirts", products, setProducts)
                }
              />

              <CheckboxOption
                label="Hoodies"
                checked={products.includes("Hoodies")}
                onChange={() =>
                  toggleSelection("Hoodies", products, setProducts)
                }
              />

              <CheckboxOption
                label="Sweatshirts"
                checked={products.includes("Sweatshirts")}
                onChange={() =>
                  toggleSelection("Sweatshirts", products, setProducts)
                }
              />

              <CheckboxOption
                label="Polos"
                checked={products.includes("Polos")}
                onChange={() =>
                  toggleSelection("Polos", products, setProducts)
                }
              />
            </FormSection>

            {/* Selling Platforms */}
            <FormSection title="How do you plan to sell your products?">
              <CheckboxOption
                label="Instagram"
                checked={sellingPlatforms.includes("Instagram")}
                onChange={() =>
                  toggleSelection(
                    "Instagram",
                    sellingPlatforms,
                    setSellingPlatforms
                  )
                }
              />

              <CheckboxOption
                label="Facebook"
                checked={sellingPlatforms.includes("Facebook")}
                onChange={() =>
                  toggleSelection(
                    "Facebook",
                    sellingPlatforms,
                    setSellingPlatforms
                  )
                }
              />

              <CheckboxOption
                label="Website"
                checked={sellingPlatforms.includes("Website")}
                onChange={() =>
                  toggleSelection(
                    "Website",
                    sellingPlatforms,
                    setSellingPlatforms
                  )
                }
              />
            </FormSection>

            {/* Mockup Training */}
            <div className="border-t border-[#102f3a]/10 pt-7">
              <h3 className="text-base font-bold leading-6 text-[#102f3a]">
                As part of our support, we’re offering free mockup training.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#102f3a]/60">
                Please answer the questions below so we can assist you better.
              </p>
            </div>

            <FormSection title="Do you have experience using mockup tools like Canva or Photoshop?">
              <RadioOption
                label="Yes, some experience"
                name="mockupExperience"
                value="Yes, some experience"
                checked={mockupExperience === "Yes, some experience"}
                onChange={setMockupExperience}
              />

              <RadioOption
                label="No, completely new"
                name="mockupExperience"
                value="No, completely new"
                checked={mockupExperience === "No, completely new"}
                onChange={setMockupExperience}
              />

              <RadioOption
                label="Intermediate level"
                name="mockupExperience"
                value="Intermediate level"
                checked={mockupExperience === "Intermediate level"}
                onChange={setMockupExperience}
              />
            </FormSection>

            <FormSection title="What is your preferred mockup style?">
              <CheckboxOption
                label="Realistic photos"
                checked={mockupStyle.includes("Realistic photos")}
                onChange={() =>
                  toggleSelection(
                    "Realistic photos",
                    mockupStyle,
                    setMockupStyle
                  )
                }
              />

              <CheckboxOption
                label="Simple, clean designs"
                checked={mockupStyle.includes("Simple, clean designs")}
                onChange={() =>
                  toggleSelection(
                    "Simple, clean designs",
                    mockupStyle,
                    setMockupStyle
                  )
                }
              />

              <CheckboxOption
                label="Lifestyle settings (e.g., people wearing the product)"
                checked={mockupStyle.includes(
                  "Lifestyle settings (e.g., people wearing the product)"
                )}
                onChange={() =>
                  toggleSelection(
                    "Lifestyle settings (e.g., people wearing the product)",
                    mockupStyle,
                    setMockupStyle
                  )
                }
              />

              <CheckboxOption
                label="Flat lay style"
                checked={mockupStyle.includes("Flat lay style")}
                onChange={() =>
                  toggleSelection(
                    "Flat lay style",
                    mockupStyle,
                    setMockupStyle
                  )
                }
              />

              <CheckboxOption
                label="Other"
                checked={mockupStyle.includes("Other")}
                onChange={() =>
                  toggleSelection("Other", mockupStyle, setMockupStyle)
                }
              />
            </FormSection>

            {/* Confirmation */}
            <div className="rounded-xl bg-[#f8fbfc] p-5">
              <label className="flex cursor-pointer gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#102f3a]"
                />

                <span className="text-sm leading-6 text-[#102f3a]/70">
                  I confirm that the details provided by me are accurate and
                  by registering, I understand that the fee is{" "}
                  <strong className="text-[#102f3a]">non refundable</strong>.<span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* Payment */}
            <FormSection title="How would you like to complete the payment of Rs.1799/- for registration?">
              <RadioOption
                label="UPI"
                name="paymentMethod"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={setPaymentMethod}
              />

              <RadioOption
                label="Bank Transfer"
                name="paymentMethod"
                value="Bank Transfer"
                checked={paymentMethod === "Bank Transfer"}
                onChange={setPaymentMethod}
              />
            </FormSection>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#102f3a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#31515A]"
            >
              Submit to finish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Form Components ---------- */

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold leading-6 text-[#102f3a]">
        {title}
      </h3>

      <div className="space-y-3">{children}</div>
    </div>
  );
}

function RadioOption({
  label,
  name,
  value,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#102f3a]/10 px-4 py-3 transition hover:bg-[#f8fbfc]">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="h-4 w-4 accent-[#102f3a]"
      />

      <span className="text-sm text-[#102f3a]/75">{label}</span>
    </label>
  );
}

function CheckboxOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#102f3a]/10 px-4 py-3 transition hover:bg-[#f8fbfc]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-[#102f3a]"
      />

      <span className="text-sm text-[#102f3a]/75">{label}</span>
    </label>
  );
}