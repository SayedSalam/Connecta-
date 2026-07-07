"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { AiFab } from "@/components/shared/ai-fab";
import { navItems } from "@/config/nav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const title = navItems.find((n) => n.href === pathname)?.label ?? "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={title} onMenu={() => setSidebarOpen(true)} />
        <main className="thin-scrollbar flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
      <AiFab />
    </div>
  );
}
