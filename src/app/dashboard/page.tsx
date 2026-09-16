import DashboardHeader from "@/components/brand-owner/DashboardHeader";
import DashboardOverview from "@/components/brand-owner/DashboardOverview";
import QuickAccess from "@/components/brand-owner/QuickAccess";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <DashboardOverview />
      <QuickAccess />
    </>
  );
}