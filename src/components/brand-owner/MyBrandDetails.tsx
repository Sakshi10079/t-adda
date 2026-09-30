"use client";

import { useEffect, useState } from "react";
import {
  getMyBrandProfile,
  updateMyBrandProfile,
  BrandOwnerProfile,
} from "@/lib/api/brandOwnerProfile";

export default function MyBrandDetails() {
  const [brandProfile, setBrandProfile] =
    useState<BrandOwnerProfile | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    brandName: "",
    businessStage: "",
    productCategories: "",
    sellingPlatforms: "",
    socialMediaHandles: "",
    mockupExperience: "",
    mockupStyle: "",
  });

  useEffect(() => {
    const fetchBrandProfile = async () => {
      try {
        const data = await getMyBrandProfile();

        setBrandProfile(data);

        setFormData({
          brandName: data.brandName || "",
          businessStage: data.businessStage || "",
          productCategories: data.productCategories || "",
          sellingPlatforms: data.sellingPlatforms || "",
          socialMediaHandles: data.socialMediaHandles || "",
          mockupExperience: data.mockupExperience || "",
          mockupStyle: data.mockupStyle || "",
        });
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load brand details."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrandProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setSuccessMessage("");
    setError("");

    if (brandProfile) {
      setFormData({
        brandName: brandProfile.brandName || "",
        businessStage: brandProfile.businessStage || "",
        productCategories: brandProfile.productCategories || "",
        sellingPlatforms: brandProfile.sellingPlatforms || "",
        socialMediaHandles: brandProfile.socialMediaHandles || "",
        mockupExperience: brandProfile.mockupExperience || "",
        mockupStyle: brandProfile.mockupStyle || "",
      });
    }

    setIsEditing(true);
  };

  const handleCancel = () => {
    if (brandProfile) {
      setFormData({
        brandName: brandProfile.brandName || "",
        businessStage: brandProfile.businessStage || "",
        productCategories: brandProfile.productCategories || "",
        sellingPlatforms: brandProfile.sellingPlatforms || "",
        socialMediaHandles: brandProfile.socialMediaHandles || "",
        mockupExperience: brandProfile.mockupExperience || "",
        mockupStyle: brandProfile.mockupStyle || "",
      });
    }

    setError("");
    setSuccessMessage("");
    setIsEditing(false);
  };

  const handleSave = async () => {
    setError("");
    setSuccessMessage("");
    setIsSaving(true);

    try {
      const updatedProfile = await updateMyBrandProfile(formData);

      setBrandProfile(updatedProfile);
      setIsEditing(false);
      setSuccessMessage("Brand details updated successfully.");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to update brand details."
      );
    } finally {
      setIsSaving(false);
    }
  };

  const brandDetails = [
    {
      label: "Brand Name",
      value: brandProfile?.brandName || "Not added",
    },
    {
      label: "Business Stage",
      value: brandProfile?.businessStage || "Not added",
    },
    {
      label: "Product Categories",
      value: brandProfile?.productCategories || "Not added",
    },
    {
      label: "Selling Platforms",
      value: brandProfile?.sellingPlatforms || "Not added",
    },
    {
      label: "Instagram",
      value: brandProfile?.socialMediaHandles || "Not added",
    },
    {
      label: "Facebook",
      value: "Not added",
    },
  ];

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-2 border-b border-black/10 pb-6">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Brand Details
          </h2>

          <p className="text-sm leading-6 text-[#102f3a]/55">
            These details help T-Adda understand and support your brand.
          </p>
        </div>

        {isLoading ? (
          <div className="mt-6">
            <p className="text-sm font-medium text-[#102f3a]/60">
              Loading brand details...
            </p>
          </div>
        ) : error && !isEditing ? (
          <div className="mt-6">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        ) : isEditing ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Brand Name
              </label>

              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Business Stage
              </label>

              <input
                type="text"
                name="businessStage"
                value={formData.businessStage}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Product Categories
              </label>

              <input
                type="text"
                name="productCategories"
                value={formData.productCategories}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Selling Platforms
              </label>

              <input
                type="text"
                name="sellingPlatforms"
                value={formData.sellingPlatforms}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Social Media Handles
              </label>

              <input
                type="text"
                name="socialMediaHandles"
                value={formData.socialMediaHandles}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Mockup Experience
              </label>

              <input
                type="text"
                name="mockupExperience"
                value={formData.mockupExperience}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Mockup Style
              </label>

              <textarea
                name="mockupStyle"
                value={formData.mockupStyle}
                onChange={handleChange}
                rows={3}
                className="w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 sm:col-span-2">
                {error}
              </p>
            )}
          </div>
        ) : (
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {brandDetails.map((detail) => (
              <div key={detail.label}>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                  {detail.label}
                </p>

                <p className="mt-2 text-sm font-medium text-[#102f3a]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {!isEditing && successMessage && (
          <p className="mt-6 text-sm font-medium text-green-600">
            {successMessage}
          </p>
        )}

        <div className="mt-8 border-t border-black/10 pt-6">
          {isEditing ? (
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                disabled={isSaving}
                className="rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#102f3a] transition hover:bg-[#f8f9f9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleEdit}
              className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A]"
            >
              Edit Brand Details
            </button>
          )}
        </div>
      </div>
    </section>
  );
}