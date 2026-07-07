import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-lg",
        "bg-[linear-gradient(90deg,rgba(148,163,184,.12),rgba(148,163,184,.28),rgba(148,163,184,.12))] bg-[length:1000px_100%]",
        className,
      )}
    />
  );
}
