import { Users, Heart, Eye, CalendarDays, TrendingUp } from "lucide-react";
import type {
  Kpi, SeriesPoint, NamedValue, Campaign, Conversation, CalendarPost, Client,
} from "@/types";

const VIOLET = "#8B5CF6";
const BLUE = "#2563EB";
const PINK = "#EC4899";

export const kpis: Kpi[] = [
  { label: "Total Followers", value: "4.2M", delta: "+12.4%", icon: Users, tint: VIOLET },
  { label: "Engagement Rate", value: "8.7%", delta: "+1.9%", icon: Heart, tint: PINK },
  { label: "Monthly Reach", value: "32M", delta: "+8.1%", icon: Eye, tint: BLUE },
  { label: "Scheduled Posts", value: "146", delta: "+23", icon: CalendarDays, tint: "#0EA5E9" },
  { label: "Campaign ROI", value: "+340%", delta: "+54%", icon: TrendingUp, tint: "#22C55E" },
];

export const audienceGrowth: SeriesPoint[] = [
  { m: "Jan", f: 2.6 }, { m: "Feb", f: 2.9 }, { m: "Mar", f: 3.1 },
  { m: "Apr", f: 3.3 }, { m: "May", f: 3.6 }, { m: "Jun", f: 3.9 }, { m: "Jul", f: 4.2 },
];

export const engagement: NamedValue[] = [
  { name: "Likes", v: 84 }, { name: "Comments", v: 42 },
  { name: "Shares", v: 31 }, { name: "Saves", v: 58 },
];

export const platformSplit: NamedValue[] = [
  { name: "Instagram", v: 42, c: PINK },
  { name: "TikTok", v: 28, c: "#0EA5E9" },
  { name: "Facebook", v: 18, c: BLUE },
  { name: "YouTube", v: 12, c: "#EF4444" },
];

export const heatDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const heatHours = ["6a", "9a", "12p", "3p", "6p", "9p"];
export const heatmap: number[][] = heatDays.map((_, i) =>
  heatHours.map((_, j) => Math.round(20 + 80 * Math.abs(Math.sin(i * 1.3 + j * 0.9)))),
);

export const campaigns: Campaign[] = [
  { id: "c1", name: "Summer Launch — KSA", budget: "$18,400", spent: 72, roi: "+412%", status: "Live", tint: PINK },
  { id: "c2", name: "Ramadan Retargeting", budget: "$9,800", spent: 55, roi: "+287%", status: "Live", tint: VIOLET },
  { id: "c3", name: "New Product Teaser", budget: "$5,200", spent: 30, roi: "+164%", status: "Review", tint: BLUE },
  { id: "c4", name: "Brand Awareness Gulf", budget: "$24,000", spent: 91, roi: "+503%", status: "Live", tint: "#0EA5E9" },
];

export const conversations: Conversation[] = [
  { id: "m1", name: "Layla Hassan", platform: "instagram", color: PINK, message: "Do you ship to Jeddah? Need it before the weekend 🙏", tag: "Sales", priority: "High", time: "2m" },
  { id: "m2", name: "Omar Khaled", platform: "facebook", color: BLUE, message: "Loved the new collection! When's the next drop?", tag: "Fan", priority: "Low", time: "11m" },
  { id: "m3", name: "@nada.styles", platform: "instagram", color: PINK, message: "Collab request for a reel — DM me the rates?", tag: "Partnership", priority: "Med", time: "34m" },
  { id: "m4", name: "Youssef M.", platform: "youtube", color: "#EF4444", message: "The tutorial helped a lot, subscribed!", tag: "Fan", priority: "Low", time: "1h" },
  { id: "m5", name: "Sara A.", platform: "twitter", color: "#0EA5E9", message: "My order #4821 hasn't shipped yet, any update?", tag: "Support", priority: "High", time: "2h" },
];

export const calendarPosts: Record<number, CalendarPost[]> = {
  3: [{ title: "Reel — Behind the scenes", color: PINK }],
  7: [{ title: "Carousel — 5 tips", color: VIOLET }, { title: "Story poll", color: BLUE }],
  12: [{ title: "Campaign launch", color: "#0EA5E9" }],
  15: [{ title: "UGC repost", color: PINK }],
  18: [{ title: "Product teaser", color: VIOLET }],
  22: [{ title: "Live Q&A", color: "#22C55E" }, { title: "Blog share", color: BLUE }],
  26: [{ title: "Testimonial", color: PINK }],
  29: [{ title: "Month recap", color: VIOLET }],
};

export const clients: Client[] = [
  { id: "cl1", name: "Arak Al-Dhahabi Dental", industry: "Healthcare", accounts: 4, status: "Active", tint: VIOLET },
  { id: "cl2", name: "NADCO Kitchens", industry: "Home & Living", accounts: 3, status: "Active", tint: BLUE },
  { id: "cl3", name: "Seham Beauty Salon", industry: "Beauty", accounts: 2, status: "Onboarding", tint: PINK },
  { id: "cl4", name: "Al-Alam Medical Complex", industry: "Healthcare", accounts: 5, status: "Active", tint: "#0EA5E9" },
];

export const suggestedHashtags = [
  "#SocialMedia", "#Marketing", "#ContentCreator", "#Riyadh", "#BrandGrowth", "#Trending",
];
