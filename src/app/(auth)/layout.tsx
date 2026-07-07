import Link from "next/link";
import { Logo } from "@/components/layout/logo";

/** Split-screen auth shell: brand illustration left, form right. */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-violet via-brand-blue to-brand-pink p-10 text-white lg:flex">
        <Link href="/"><Logo className="[&_span]:text-white" /></Link>
        <div>
          <h2 className="max-w-sm text-4xl font-extrabold leading-tight">
            Every social moment, one intelligent workspace.
          </h2>
          <p className="mt-4 max-w-sm text-white/80">
            Schedule, analyze, collaborate and grow — trusted by 12,000+ brands worldwide.
          </p>
        </div>
        <div className="flex gap-8 text-sm">
          <div><div className="text-2xl font-extrabold">4.2M</div>followers managed</div>
          <div><div className="text-2xl font-extrabold">+340%</div>avg. campaign ROI</div>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-16 right-16 h-40 w-40 rounded-full bg-white/10" />
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden"><Logo /></div>
          {children}
        </div>
      </div>
    </div>
  );
}
