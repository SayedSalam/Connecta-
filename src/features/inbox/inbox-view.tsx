"use client";
import { useState } from "react";
import { Circle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { conversations } from "@/mock-data";
import type { Priority } from "@/types";

const PRIORITY_COLOR: Record<Priority, string> = {
  High: "#EF4444",
  Med: "#F59E0B",
  Low: "#22C55E",
};

export function InboxView() {
  const [selected, setSelected] = useState(0);
  const active = conversations[selected];

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Card className="overflow-hidden lg:col-span-1">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h3 className="font-bold">Unified inbox</h3>
          <span className="rounded-full bg-brand-pink px-2 py-0.5 text-xs font-bold text-white">
            5 new
          </span>
        </div>
        <div className="divide-y divide-border">
          {conversations.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setSelected(i)}
              className="flex w-full gap-3 p-3.5 text-left transition"
              style={{ background: selected === i ? "rgba(139,92,246,.08)" : undefined }}
            >
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
                style={{ background: c.color }}
              >
                {c.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <b className="truncate text-sm">{c.name}</b>
                  <span className="text-[10px] text-muted">{c.time}</span>
                </div>
                <div className="truncate text-xs text-muted">{c.message}</div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="rounded bg-brand-violet/10 px-1.5 py-0.5 text-[10px] font-semibold text-brand-violet">
                    {c.tag}
                  </span>
                  <span
                    className="flex items-center gap-1 text-[10px] font-semibold"
                    style={{ color: PRIORITY_COLOR[c.priority] }}
                  >
                    <Circle size={6} fill="currentColor" /> {c.priority}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col lg:col-span-2">
        <div className="flex items-center gap-3 border-b border-border p-4">
          <div
            className="grid h-10 w-10 place-items-center rounded-full font-bold text-white"
            style={{ background: active.color }}
          >
            {active.name[0]}
          </div>
          <div className="flex-1">
            <b>{active.name}</b>
            <div className="text-xs text-muted capitalize">
              {active.tag} · via {active.platform}
            </div>
          </div>
          <Button className="px-3 py-1.5 text-xs">Assign</Button>
        </div>

        <div className="min-h-[240px] flex-1 space-y-3 p-4">
          <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-slate-500/10 px-3.5 py-2.5 text-sm">
            {active.message}
          </div>
          <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-brand-violet to-brand-blue px-3.5 py-2.5 text-sm text-white">
            Hi! Thanks for reaching out — let me check that for you right away. 💜
          </div>
        </div>

        <div className="flex gap-2 border-t border-border p-3">
          <input
            placeholder="Type a reply…"
            className="flex-1 rounded-xl bg-slate-500/5 px-3.5 py-2.5 text-sm outline-none"
          />
          <Button variant="gradient" className="w-11" aria-label="Send">
            <Send size={16} />
          </Button>
        </div>
      </Card>
    </div>
  );
}
