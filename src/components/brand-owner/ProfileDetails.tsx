"use client";

import { useEffect, useState } from "react";
import {
  getMyProfile,
  updateMyProfile,
  changePassword,
  UserProfile,
} from "@/lib/api/profile";

export default function ProfileDetails() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();

        setProfile(data);

        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
        });
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to load profile.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setError("");
    setSuccessMessage("");

    if (profile) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
      });
    }

    setIsEditing(true);
  };

  const handleCancel = () => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
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
      const updatedProfile = await updateMyProfile(formData);

      setProfile(updatedProfile);
      setIsEditing(false);
      setSuccessMessage("Profile updated successfully.");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to update profile.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPasswordError("");
    setPasswordSuccess("");

    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirm password do not match.");
      return;
    }

    setIsChangingPassword(true);

    try {
      await changePassword({
        currentPassword,
        newPassword,
      });

      setPasswordSuccess("Password changed successfully.");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setPasswordError(
        error instanceof Error ? error.message : "Failed to change password.",
      );
    } finally {
      setIsChangingPassword(false);
    }
  };

  const profileDetails = [
    {
      label: "Full Name",
      value: profile?.name || "Not added",
    },
    {
      label: "Email Address",
      value: profile?.email || "Not added",
    },
    {
      label: "Phone Number",
      value: profile?.phone || "Not added",
    },
  ];

  return (
    <section className="px-6 py-8 lg:px-10">
      <div className="rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
        <div className="border-b border-black/10 pb-6">
          <h2 className="text-xl font-bold text-[#102f3a]">
            Personal Information
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#102f3a]/55">
            Your personal details associated with your T-Adda account.
          </p>
        </div>

        {isLoading ? (
          <div className="mt-6">
            <p className="text-sm font-medium text-[#102f3a]/60">
              Loading profile...
            </p>
          </div>
        ) : error && !isEditing ? (
          <div className="mt-6">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        ) : isEditing ? (
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 sm:col-span-2">{error}</p>
            )}
          </div>
        ) : (
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {profileDetails.map((detail) => (
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
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Security */}
      <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
        <div className="border-b border-black/10 pb-6">
          <h2 className="text-xl font-bold text-[#102f3a]">Account Security</h2>

          <p className="mt-2 text-sm leading-6 text-[#102f3a]/55">
            Manage your account password and security settings.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
            Password
          </p>

          <p className="mt-2 text-sm font-medium tracking-widest text-[#102f3a]">
            ••••••••
          </p>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setPasswordError("");
              setPasswordSuccess("");
              setCurrentPassword("");
              setNewPassword("");
              setConfirmPassword("");
              setIsPasswordModalOpen(true);
            }}
            className="rounded-lg border border-[#102f3a]/15 px-5 py-3 text-sm font-semibold text-[#102f3a] transition hover:bg-[#fff4f5]"
          >
            Change Password
          </button>
        </div>
      </div>
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setIsPasswordModalOpen(false)}
              className="absolute right-5 top-5 text-2xl leading-none text-[#102f3a]/50 transition hover:text-[#102f3a]"
              aria-label="Close"
            >
              ×
            </button>

            <div className="pr-8">
              <h2 className="text-2xl font-bold text-[#102f3a]">
                Change Password
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#102f3a]/60">
                Enter your current password and choose a new password.
              </p>
            </div>

            <form onSubmit={handleChangePassword} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                  Current Password<span className="text-red-500">*</span>
                </label>

                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter your current password"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                  New Password<span className="text-red-500">*</span>
                </label>

                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#102f3a]">
                  Confirm New Password<span className="text-red-500">*</span>
                </label>

                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  className="w-full rounded-lg border border-[#102f3a]/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#102f3a]/35 focus:border-[#31515A]"
                />
              </div>

              {passwordError && (
                <p className="text-sm text-red-600">{passwordError}</p>
              )}

              {passwordSuccess && (
                <p className="text-sm font-medium text-green-600">
                  {passwordSuccess}
                </p>
              )}

              <button
                type="submit"
                disabled={isChangingPassword}
                className="w-full rounded-lg bg-[#102f3a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#31515A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isChangingPassword
                  ? "Changing Password..."
                  : "Change Password"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
