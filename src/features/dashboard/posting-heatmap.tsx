import { heatDays, heatHours } from "@/mock-data";

const VIOLET = "#8B5CF6";

/** Best posting time — engagement intensity by day & hour. */
export function PostingHeatmap({ data }: { data: number[][] }) {
  return (
    <div className="flex gap-1">
      <div className="flex flex-col justify-around pr-1 text-[10px] text-muted">
        {heatDays.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="flex-1">
        {data.map((row, i) => (
          <div key={i} className="mb-1 flex gap-1">
            {row.map((v, j) => (
              <div
                key={j}
                title={`${v}% engagement`}
                className="aspect-square flex-1 rounded"
                style={{ background: VIOLET, opacity: 0.12 + (v / 100) * 0.85 }}
              />
            ))}
          </div>
        ))}
        <div className="mt-1 flex gap-1 text-[10px] text-muted">
          {heatHours.map((h) => (
            <span key={h} className="flex-1 text-center">{h}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
