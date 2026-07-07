import { Card } from "@/components/ui/card";
import type { Kpi } from "@/types";

export function KpiCard({ kpi, index = 0 }: { kpi: Kpi; index?: number }) {
  const Icon = kpi.icon;
  return (
    <Card
      className="animate-rise p-4"
      style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <div
          className="grid h-9 w-9 place-items-center rounded-lg"
          style={{ background: `${kpi.tint}22` }}
        >
          <Icon size={17} style={{ color: kpi.tint }} />
        </div>
        <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-xs font-bold text-emerald-500">
          {kpi.delta}
        </span>
      </div>
      <div className="mt-3 text-2xl font-extrabold">{kpi.value}</div>
      <div className="text-xs text-muted">{kpi.label}</div>
    </Card>
  );
}
