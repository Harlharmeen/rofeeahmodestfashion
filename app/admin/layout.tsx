"use client";

import { Sidebar } from "@/components/sections/admin/Sidebar";
import { Topbar } from "@/components/sections/admin/Topbar";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-muted/10">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
