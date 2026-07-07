"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { calendarPosts } from "@/mock-data";
import { cn } from "@/lib/utils";

const VIEWS = ["Day", "Week", "Month"] as const;
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

export function MonthCalendar() {
  const [view, setView] = useState<(typeof VIEWS)[number]>("Month");
  const cells = Array.from({ length: 35 }, (_, i) => i - 2); // start offset

  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold">July 2026</h3>
          <p className="text-xs text-muted">Drag posts to reschedule · color = campaign</p>
        </div>
        <div className="flex gap-1 rounded-lg bg-slate-500/10 p-1">
          {VIEWS.map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-semibold transition",
                view === v ? "bg-surface text-brand-violet" : "text-muted",
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-1.5 text-center text-xs font-semibold text-muted">
        {WEEKDAYS.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((day, i) => {
          const valid = day >= 1 && day <= 31;
          const posts = calendarPosts[day] ?? [];
          return (
            <div
              key={i}
              className={cn(
                "min-h-[74px] rounded-xl border border-border p-1.5",
                valid ? "bg-slate-500/5" : "opacity-25",
              )}
            >
              {valid && <div className="mb-1 text-[11px] font-semibold text-muted">{day}</div>}
              {posts.map((p, j) => (
                <div
                  key={j}
                  className="mb-1 cursor-grab truncate rounded px-1.5 py-1 text-[10px] font-medium"
                  style={{ background: `${p.color}22`, color: p.color }}
                >
                  {p.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
