"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Resources",
    href: "/dashboard/resources",
  },
  {
    name: "Training",
    href: "/dashboard/training",
  },
  {
    name: "My Brand",
    href: "/dashboard/my-brand",
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
  },
];

export default function BrandOwnerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-black/10 bg-white">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-black/10 px-6">
        <Link href="/" className="text-2xl font-black tracking-tight text-black">
          T-ADDA
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#102f3a] text-white"
                    : "text-[#31515A] hover:bg-[#fff4f5] hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-black/10 p-4">
        <button
          type="button"
          className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-[#31515A] transition-colors hover:bg-[#fff4f5] hover:text-black"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}