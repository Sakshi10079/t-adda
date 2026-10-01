"use client";

const getUserName = () => {
  if (typeof window === "undefined") {
    return "Brand Owner";
  }

  const storedUser = localStorage.getItem("tadda_user");

  if (!storedUser) {
    return "Brand Owner";
  }

  try {
    const user = JSON.parse(storedUser);

    return user.name || "Brand Owner";
  } catch (error) {
    console.error("Failed to read user details:", error);
    return "Brand Owner";
  }
};

export default function DashboardHeader() {
  const userName = getUserName();

  return (
    <section className="border-b border-black/10 bg-white px-6 py-8 lg:px-10">
      <p className="text-sm font-medium text-[#31515A]">
        Brand Owner Dashboard
      </p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#102f3a]">
        Welcome back, {userName} 👋
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#102f3a]/60">
        Manage your brand, resources, and account from one place.
      </p>
    </section>
  );
}