import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">Reset your password</h1>
      <p className="mt-1 text-sm text-muted">
        Enter your email and we&apos;ll send you a reset link.
      </p>

      <div className="mt-7 space-y-3">
        <input placeholder="Work email" type="email"
          className="w-full rounded-xl border border-border bg-slate-500/5 px-3.5 py-3 text-sm outline-none" />
        <Button variant="gradient" className="w-full">Send reset link</Button>
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        <Link href="/login" className="font-semibold text-brand-violet">Back to sign in</Link>
      </p>
    </div>
  );
}
