import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">Welcome back</h1>
      <p className="mt-1 text-sm text-muted">Sign in to your CONNECTA workspace.</p>

      <div className="mt-7 space-y-3">
        <input placeholder="Work email" type="email"
          className="w-full rounded-xl border border-border bg-slate-500/5 px-3.5 py-3 text-sm outline-none" />
        <input placeholder="Password" type="password"
          className="w-full rounded-xl border border-border bg-slate-500/5 px-3.5 py-3 text-sm outline-none" />
        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-xs font-semibold text-brand-violet">
            Forgot password?
          </Link>
        </div>
        <Link href="/dashboard"><Button variant="gradient" className="w-full">Sign in</Button></Link>
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        New here?{" "}
        <Link href="/register" className="font-semibold text-brand-violet">Create an account</Link>
      </p>
    </div>
  );
}
