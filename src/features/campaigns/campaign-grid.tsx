import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { campaigns } from "@/mock-data";

const AD_STATS: [string, string][] = [
  ["Total spend", "$57.4k"],
  ["Clicks", "1.2M"],
  ["Conv. rate", "6.4%"],
  ["Cost / result", "$0.38"],
  ["Blended ROI", "+340%"],
];

export function CampaignGrid() {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-5">
        {AD_STATS.map(([label, value]) => (
          <Card key={label} className="p-4">
            <div className="text-xs text-muted">{label}</div>
            <div className="mt-1 text-xl font-extrabold">{value}</div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {campaigns.map((c, i) => (
          <Card
            key={c.id}
            className="animate-rise p-5"
            style={{ animationDelay: `${i * 0.06}s` } as React.CSSProperties}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.tint }} />
                  <h3 className="font-bold">{c.name}</h3>
                </div>
                <div className="mt-1 text-xs text-muted">
                  Budget {c.budget} · 14 days · Gulf audience
                </div>
              </div>
              <span
                className="rounded-full px-2 py-1 text-xs font-bold"
                style={{
                  color: c.status === "Live" ? "#22C55E" : "#F59E0B",
                  background: c.status === "Live" ? "rgba(34,197,94,.12)" : "rgba(245,158,11,.12)",
                }}
              >
                {c.status}
              </span>
            </div>

            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-muted">Budget spent</span>
                <b>{c.spent}%</b>
              </div>
              <div className="h-2 rounded-full bg-slate-500/15">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${c.spent}%`, background: `linear-gradient(90deg, ${c.tint}, #EC4899)` }}
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted">Performance ROI</div>
                <div className="text-lg font-extrabold text-emerald-500">{c.roi}</div>
              </div>
              <button className="flex items-center gap-1 text-xs font-semibold text-brand-violet">
                View report <ChevronRight size={13} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
