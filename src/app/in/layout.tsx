import Sidebar from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";

export const metadata = {
  title: "Dashboard - ZapGenda",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <MobileHeader />
        <main className="flex-1 w-full px-4 pt-20 pb-6 sm:px-6 md:pt-8">
          {children}
        </main>
      </div>
    </div>
  );
}
