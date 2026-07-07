"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Flame } from "lucide-react";
import { navItems } from "@/config/nav";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={cn(
          "fixed z-40 flex h-full w-64 flex-col border-r border-border bg-surface transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Logo />
          <button aria-label="Close menu" className="lg:hidden" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                  active
                    ? "bg-brand-violet/10 text-brand-violet"
                    : "text-muted hover:bg-slate-500/5",
                )}
              >
                {active && (
                  <span className="absolute bottom-1.5 left-0 top-1.5 w-1 rounded-full bg-brand-violet" />
                )}
                <Icon size={18} />
                {item.label}
                {item.badge && (
                  <span className="ml-auto rounded-full bg-brand-pink px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="m-3 rounded-2xl bg-gradient-to-br from-brand-violet to-brand-blue p-3">
          <div className="mb-1 flex items-center gap-2 text-sm font-bold text-white">
            <Flame size={15} /> Upgrade to Agency
          </div>
          <p className="mb-2.5 text-xs text-white/80">
            Unlock unlimited scheduling & client reports.
          </p>
          <button className="w-full rounded-lg bg-white py-1.5 text-xs font-bold text-brand-violet">
            See plans
          </button>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}
    </>
  );
}
