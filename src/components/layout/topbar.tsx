"use client";
import { Menu, Search, Bell, Plus } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  title: string;
  onMenu: () => void;
}

export function Topbar({ title, onMenu }: TopbarProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border bg-background/70 px-4 backdrop-blur-md lg:px-6">
      <button aria-label="Open menu" className="lg:hidden" onClick={onMenu}>
        <Menu size={20} />
      </button>

      <div>
        <h1 className="text-lg font-extrabold leading-none">{title}</h1>
        <p className="hidden text-xs text-muted sm:block">Welcome back, حاتم 👋</p>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <div className="hidden w-56 items-center gap-2 rounded-xl bg-slate-500/10 px-3 py-2 md:flex">
          <Search size={15} className="opacity-50" />
          <input
            placeholder="Search…"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
        <ThemeToggle />
        <button
          aria-label="Notifications"
          className="relative grid h-9 w-9 place-items-center rounded-xl bg-slate-500/10"
        >
          <Bell size={16} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-pink" />
        </button>
        <Button variant="gradient" className="hidden sm:inline-flex">
          <Plus size={15} /> Create
        </Button>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-pink to-brand-violet text-sm font-bold text-white">
          ح
        </div>
      </div>
    </header>
  );
}
