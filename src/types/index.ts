import type { LucideIcon } from "lucide-react";

export type Platform = "instagram" | "facebook" | "twitter" | "linkedin" | "tiktok" | "youtube";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}

export interface Kpi {
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  tint: string;
}

export interface SeriesPoint { m: string; f: number }
export interface NamedValue { name: string; v: number; c?: string }

export interface Campaign {
  id: string;
  name: string;
  budget: string;
  spent: number;      // percent of budget used
  roi: string;
  status: "Live" | "Review" | "Draft";
  tint: string;
}

export type Priority = "High" | "Med" | "Low";

export interface Conversation {
  id: string;
  name: string;
  platform: Platform;
  color: string;
  message: string;
  tag: string;
  priority: Priority;
  time: string;
}

export interface CalendarPost { title: string; color: string }

export interface Client {
  id: string;
  name: string;
  industry: string;
  accounts: number;
  status: "Active" | "Onboarding" | "Paused";
  tint: string;
}
