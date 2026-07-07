import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "gradient" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-brand-violet text-white hover:opacity-90",
  gradient:
    "text-white bg-gradient-to-br from-brand-violet to-brand-blue hover:opacity-95",
  outline: "border border-border hover:bg-slate-500/5",
  ghost: "hover:bg-slate-500/10",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
