import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { KpiCard } from "@/components/shared/kpi-card";
import {
  AudienceGrowthChart, EngagementChart, PlatformPie,
} from "@/features/dashboard/charts";
import { PostingHeatmap } from "@/features/dashboard/posting-heatmap";
import { analyticsService } from "@/services/analytics.service";

export default async function DashboardPage() {
  const [kpis, growth, engagement, platforms, heatmap] = await Promise.all([
    analyticsService.getKpis(),
    analyticsService.getAudienceGrowth(),
    analyticsService.getEngagement(),
    analyticsService.getPlatformSplit(),
    analyticsService.getPostingHeatmap(),
  ]);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {kpis.map((k, i) => (
          <KpiCard key={k.label} kpi={k} index={i} />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold">Audience growth</h3>
              <p className="text-xs text-muted">Followers over the last 7 months (millions)</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
              <TrendingUp size={13} /> +61%
            </span>
          </div>
          <div className="h-56"><AudienceGrowthChart data={growth} /></div>
        </Card>

        <Card className="p-5">
          <h3 className="mb-1 font-bold">Platform performance</h3>
          <p className="mb-2 text-xs text-muted">Share of total reach</p>
          <div className="h-40"><PlatformPie data={platforms} /></div>
          <div className="mt-1 space-y-1.5">
            {platforms.map((p) => (
              <div key={p.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.c }} />
                  {p.name}
                </span>
                <b>{p.v}%</b>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <h3 className="mb-4 font-bold">Engagement analysis</h3>
          <div className="h-52"><EngagementChart data={engagement} /></div>
        </Card>
        <Card className="p-5">
          <h3 className="mb-1 font-bold">Best posting time</h3>
          <p className="mb-3 text-xs text-muted">Engagement by day &amp; hour</p>
          <PostingHeatmap data={heatmap} />
        </Card>
      </div>
    </div>
  );
}
