import { Card } from "@/components/ui/card";
import { AudienceGrowthChart, EngagementChart, PlatformPie } from "@/features/dashboard/charts";
import { analyticsService } from "@/services/analytics.service";

const HEADLINE: [string, string, string][] = [
  ["Impressions", "128.4M", "#EC4899"],
  ["Profile visits", "3.9M", "#8B5CF6"],
  ["Link clicks", "812k", "#2563EB"],
  ["Avg. watch time", "0:42", "#0EA5E9"],
];

export default async function AnalyticsPage() {
  const [growth, engagement, platforms] = await Promise.all([
    analyticsService.getAudienceGrowth(),
    analyticsService.getEngagement(),
    analyticsService.getPlatformSplit(),
  ]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-4">
        {HEADLINE.map(([label, value, color]) => (
          <Card key={label} className="p-4">
            <div className="text-xs text-muted">{label}</div>
            <div className="mt-1 text-2xl font-extrabold" style={{ color }}>{value}</div>
          </Card>
        ))}
      </div>

      <Card className="p-5">
        <h3 className="mb-4 font-bold">Follower growth trend</h3>
        <div className="h-64"><AudienceGrowthChart data={growth} color="#2563EB" /></div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-5">
          <h3 className="mb-4 font-bold">Engagement mix</h3>
          <div className="h-56"><EngagementChart data={engagement} /></div>
        </Card>
        <Card className="p-5">
          <h3 className="mb-4 font-bold">Traffic by platform</h3>
          <div className="h-56"><PlatformPie data={platforms} /></div>
        </Card>
      </div>
    </div>
  );
}
