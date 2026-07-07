"use client";
import Link from "next/link";
import {
  Zap, Play, ArrowRight, Check, Heart, Users, CalendarDays, BarChart3,
  Sparkles, Megaphone, Globe, Instagram, Facebook, Twitter, Linkedin, Youtube,
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { audienceGrowth } from "@/mock-data";
import { site } from "@/config/site";

const FEATURES = [
  { icon: CalendarDays, t: "Content Scheduling", d: "Plan and auto-publish across every network from one calendar." },
  { icon: BarChart3, t: "Analytics Dashboard", d: "Track growth, reach and ROI with live, exportable reports." },
  { icon: Users, t: "Team Collaboration", d: "Approval workflows, comments and roles that keep everyone aligned." },
  { icon: Sparkles, t: "AI Content Assistant", d: "Generate captions, hashtags and ideas in seconds." },
  { icon: Megaphone, t: "Campaign Tracking", d: "Monitor spend, conversions and cost per result in real time." },
  { icon: Globe, t: "Platform Integration", d: "Instagram, Facebook, X, LinkedIn, TikTok and YouTube — connected." },
];

const PLATFORMS = [Instagram, Facebook, Twitter, Linkedin, Youtube, Globe];

const PLANS = [
  { name: "Creator", price: "$19", tag: "For individual creators", hot: false,
    feats: ["3 social accounts", "60 scheduled posts", "Basic analytics", "AI captions"] },
  { name: "Agency", price: "$79", tag: "For marketing teams", hot: true,
    feats: ["25 social accounts", "Unlimited scheduling", "Advanced analytics", "Approval workflow", "Client reports"] },
  { name: "Enterprise", price: "Custom", tag: "For large companies", hot: false,
    feats: ["Unlimited everything", "SSO & audit logs", "Dedicated success mgr", "Custom integrations"] },
];

export function MarketingPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <span>Features</span><span>Pricing</span><span>Customers</span><span>Resources</span>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/dashboard"
              className="rounded-lg bg-gradient-to-br from-brand-violet to-brand-blue px-4 py-2 text-sm font-semibold text-white"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-16 md:grid-cols-2">
        <div className="animate-rise">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-violet/10 px-3 py-1.5 text-xs font-semibold text-brand-violet">
            <Zap size={13} /> The social media operating system
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
            Manage every social <span className="gradient-text">moment</span> from one place
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">{site.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="pulse-glow flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-violet to-brand-pink px-5 py-3 text-sm font-semibold text-white"
            >
              Start free trial <ArrowRight size={16} />
            </Link>
            <button className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold">
              <Play size={15} /> Watch demo
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted">
            <div><b className="text-lg text-foreground">12k+</b> brands</div>
            <div><b className="text-lg text-foreground">4.9</b>★ rating</div>
            <div><b className="text-lg text-foreground">32M</b> posts/mo</div>
          </div>
        </div>

        <div className="relative animate-rise" style={{ animationDelay: ".1s" }}>
          <div className="rounded-3xl border border-border bg-surface p-4 shadow-2xl">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-pink" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-violet" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
            </div>
            <div className="relative mb-3 h-28 overflow-hidden rounded-xl bg-gradient-to-br from-brand-violet to-brand-blue">
              <div className="absolute bottom-3 left-3 text-white">
                <div className="text-xs opacity-80">Total reach</div>
                <div className="text-2xl font-extrabold">32,481,220</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Likes 84k", "Reach 32M", "ROI 340%"].map((x) => (
                <div key={x} className="rounded-lg bg-slate-500/10 p-2 text-center text-xs font-semibold">{x}</div>
              ))}
            </div>
            <div className="mt-3 h-16">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={audienceGrowth}>
                  <defs>
                    <linearGradient id="hero" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area dataKey="f" stroke="#8B5CF6" strokeWidth={2} fill="url(#hero)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="absolute -left-6 top-16 animate-floaty rounded-2xl border border-brand-pink/30 bg-surface px-3 py-2 text-xs font-semibold shadow-lg">
            <div className="flex items-center gap-2"><Heart size={14} className="text-brand-pink" /> +12.4% engagement</div>
          </div>
          <div className="absolute -right-4 bottom-10 animate-floaty rounded-2xl border border-brand-blue/30 bg-surface px-3 py-2 text-xs font-semibold shadow-lg" style={{ animationDelay: ".8s" }}>
            <div className="flex items-center gap-2"><Users size={14} className="text-brand-blue" /> 4.2M followers</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <p className="mb-5 text-center text-xs uppercase tracking-widest text-muted">Connect every network</p>
        <div className="flex flex-wrap justify-center gap-4">
          {PLATFORMS.map((P, i) => (
            <div
              key={i}
              className="grid h-14 w-14 animate-floaty place-items-center rounded-2xl border border-border bg-surface"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <P size={22} className="opacity-80" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">Everything a modern team needs</h2>
        <p className="mt-2 text-center text-muted">One platform, six superpowers.</p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-1">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-violet/10">
                <f.icon size={20} className="text-brand-violet" />
              </div>
              <h3 className="font-bold">{f.t}</h3>
              <p className="mt-1.5 text-sm text-muted">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">Simple, scalable pricing</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className="relative rounded-3xl border p-6"
              style={{
                borderColor: p.hot ? "#8B5CF6" : undefined,
                boxShadow: p.hot ? "0 20px 60px -25px rgba(139,92,246,.6)" : undefined,
              }}
            >
              {p.hot && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-br from-brand-violet to-brand-pink px-3 py-1 text-xs font-bold text-white">
                  Most popular
                </span>
              )}
              <div className="text-sm text-muted">{p.tag}</div>
              <div className="mt-1 text-xl font-extrabold">{p.name}</div>
              <div className="mt-3 text-3xl font-extrabold">
                {p.price}
                {p.price !== "Custom" && <span className="text-sm font-medium text-muted">/mo</span>}
              </div>
              <ul className="mt-5 space-y-2.5 text-sm">
                {p.feats.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check size={15} className="text-brand-violet" /> {x}
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard"
                className="mt-6 block rounded-xl py-2.5 text-center text-sm font-semibold"
                style={
                  p.hot
                    ? { background: "linear-gradient(135deg,#8B5CF6,#2563EB)", color: "#fff" }
                    : { border: "1px solid hsl(var(--border))" }
                }
              >
                {p.price === "Custom" ? "Contact sales" : "Start free trial"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-8 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted md:flex-row">
          <Logo />
          <div>© 2026 {site.name} — a next-generation MarTech platform.</div>
        </div>
      </footer>
    </div>
  );
}
