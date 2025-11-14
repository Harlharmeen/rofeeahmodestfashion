"use client";

import { Menu } from "lucide-react";

export function Topbar({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm flex items-center justify-between px-6 py-3">
      {/* Sidebar Toggle (Mobile) */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-gray-700 hover:text-primary"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Brand or Admin Name */}
      <h1 className="text-lg font-semibold text-primary">
        Admin Dashboard
      </h1>

      {/* Placeholder for future icons */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          Welcome 👋
        </span>
      </div>
    </header>
  );
}
