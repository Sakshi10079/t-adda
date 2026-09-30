import BrandOwnerSidebar from "@/components/brand-owner/BrandOwnerSidebar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute allowedRole="BRAND_OWNER">
      <div className="min-h-screen bg-[#f8f9f9]">
        <div className="flex min-h-screen">
          <BrandOwnerSidebar />

          <main className="min-w-0 flex-1">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}