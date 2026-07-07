import { FileText, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const REPORTS = [
  { t: "Monthly performance", d: "Reach, engagement and growth across all platforms." },
  { t: "Audience insights", d: "Demographics, active hours and top locations." },
  { t: "Campaign ROI", d: "Spend, conversions and cost per result by campaign." },
  { t: "Competitor analysis", d: "Share of voice benchmarked against 5 competitors." },
];

export default function ReportsPage() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-muted">
        Generate professional, white-labelled reports and export to PDF or PowerPoint.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {REPORTS.map((r) => (
          <Card key={r.t} className="flex items-start gap-4 p-5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-violet/10">
              <FileText size={20} className="text-brand-violet" />
            </div>
            <div className="flex-1">
              <b>{r.t}</b>
              <p className="mt-1 text-sm text-muted">{r.d}</p>
              <div className="mt-3 flex gap-2">
                <Button variant="gradient" className="px-3 py-2 text-xs">
                  <Download size={13} /> PDF
                </Button>
                <Button variant="outline" className="px-3 py-2 text-xs">
                  <Download size={13} /> PowerPoint
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
