"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShoppingBag,
  BookOpen,
  CreditCard,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: ShoppingBag },
  { name: "Courses", href: "/admin/courses", icon: BookOpen },
  { name: "Orders", href: "/admin/orders", icon: CreditCard },
  { name: "Shout-Outs", href: "/admin/shoutouts", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  return (
    <aside
      className={cn(
        "fixed md:static z-40 bg-white shadow-md h-full w-64 p-6 transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <h2 className="text-xl font-bold mb-8 text-primary">Modest Admin</h2>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 text-gray-700 hover:text-primary font-medium transition-colors"
            onClick={() => setOpen(false)}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
