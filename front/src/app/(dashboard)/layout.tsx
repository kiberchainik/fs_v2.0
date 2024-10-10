import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardLayout>{children}</DashboardLayout>
  );
}