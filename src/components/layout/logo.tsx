import { cn } from "@/lib/utils";

/** CONNECTA mark — connected network nodes + chat bubble. */
export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex select-none items-center gap-2.5", className)}>
      <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-violet to-brand-blue">
        <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white" />
        <span className="absolute bottom-[7px] right-[7px] h-1.5 w-1.5 rounded-full bg-brand-pink" />
        <span className="absolute bottom-2.5 left-2.5 h-1 w-1 rounded-full bg-white/70" />
        <span className="absolute h-[2px] w-4 rotate-45 bg-white/50" />
      </div>
      <span className="text-lg font-extrabold tracking-tight text-foreground">
        CONNECT
        <span className="animate-gradient bg-[linear-gradient(90deg,#8B5CF6,#2563EB,#EC4899)] bg-[length:200%_auto] bg-clip-text text-transparent">
          A
        </span>
      </span>
    </div>
  );
}
