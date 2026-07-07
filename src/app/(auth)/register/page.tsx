import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">Create your account</h1>
      <p className="mt-1 text-sm text-muted">Start your 14-day free trial. No card required.</p>

      <div className="mt-7 space-y-3">
        <input placeholder="Full name"
          className="w-full rounded-xl border border-border bg-slate-500/5 px-3.5 py-3 text-sm outline-none" />
        <input placeholder="Work email" type="email"
          className="w-full rounded-xl border border-border bg-slate-500/5 px-3.5 py-3 text-sm outline-none" />
        <input placeholder="Password" type="password"
          className="w-full rounded-xl border border-border bg-slate-500/5 px-3.5 py-3 text-sm outline-none" />
        <Link href="/dashboard"><Button variant="gradient" className="w-full">Create account</Button></Link>
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand-violet">Sign in</Link>
      </p>
    </div>
  );
}
