import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { clients } from "@/mock-data";

const STATUS_COLOR: Record<string, string> = {
  Active: "#22C55E",
  Onboarding: "#F59E0B",
  Paused: "#94A3B8",
};

export default function ClientsPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {clients.map((c) => (
        <Card key={c.id} className="p-5">
          <div className="flex items-center gap-3">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl text-sm font-bold text-white"
              style={{ background: c.tint }}
            >
              {c.name[0]}
            </div>
            <div className="min-w-0 flex-1">
              <b className="block truncate">{c.name}</b>
              <div className="text-xs text-muted">{c.industry}</div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-muted">{c.accounts} connected accounts</span>
            <Badge color={STATUS_COLOR[c.status]}>{c.status}</Badge>
          </div>
          <button className="mt-4 flex w-full items-center justify-between rounded-xl bg-slate-500/5 px-3 py-2 text-xs font-semibold text-brand-violet">
            View performance report <ChevronRight size={14} />
          </button>
        </Card>
      ))}
    </div>
  );
}
