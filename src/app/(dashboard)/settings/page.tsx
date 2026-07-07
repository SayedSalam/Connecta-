"use client";
import { useState } from "react";
import { Users, Shield, Globe, ChevronRight, Palette, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ROWS = [
  { icon: Users, t: "Account & profile", d: "Name, avatar, contact info" },
  { icon: Shield, t: "Security", d: "Password, 2FA, active sessions" },
  { icon: Globe, t: "Connected platforms", d: "6 accounts connected" },
  { icon: Users, t: "Team members & roles", d: "8 members · 3 roles" },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState<"EN" | "AR">("EN");
  const isDark = theme !== "light";

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="space-y-3 lg:col-span-2">
        {ROWS.map((r) => (
          <Card key={r.t} className="flex items-center gap-3.5 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-violet/10">
              <r.icon size={18} className="text-brand-violet" />
            </div>
            <div className="flex-1">
              <b className="text-sm">{r.t}</b>
              <div className="text-xs text-muted">{r.d}</div>
            </div>
            <ChevronRight size={18} className="opacity-40" />
          </Card>
        ))}
      </div>

      <Card className="space-y-5 p-5">
        <div className="flex items-center gap-2 font-bold">
          <Palette size={16} className="text-brand-violet" /> Appearance
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setTheme("light")}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold",
              !isDark ? "bg-gradient-to-br from-brand-violet to-brand-blue text-white" : "border border-border",
            )}
          >
            <Sun size={15} /> Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold",
              isDark ? "bg-gradient-to-br from-brand-violet to-brand-blue text-white" : "border border-border",
            )}
          >
            <Moon size={15} /> Dark
          </button>
        </div>

        <div className="flex items-center gap-2 pt-1 font-bold">
          <Globe size={16} className="text-brand-violet" /> Language
        </div>
        <div className="flex gap-2">
          {(["EN", "AR"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={cn(
                "flex-1 rounded-xl py-2.5 text-sm font-semibold",
                lang === l ? "border border-brand-violet bg-brand-violet/10 text-brand-violet" : "border border-border",
              )}
            >
              {l === "EN" ? "English" : "العربية"}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
