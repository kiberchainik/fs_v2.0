import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard"
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col">
        <div className="flex h-screen w-full items-center justify-center px-4">
            {children}
        </div>
    </div>
  );
}