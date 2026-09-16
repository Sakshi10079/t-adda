import BrandOwnerSidebar from "@/components/brand-owner/BrandOwnerSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#f8f9f9]">
      <div className="flex min-h-screen">
        <BrandOwnerSidebar />

        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}