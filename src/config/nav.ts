import {
  LayoutDashboard, BarChart3, PenSquare, CalendarDays, Megaphone,
  Inbox, Sparkles, Users, FileText, Settings,
} from "lucide-react";
import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { id: "analytics", label: "Analytics", href: "/analytics", icon: BarChart3 },
  { id: "studio", label: "Content Studio", href: "/content-studio", icon: PenSquare },
  { id: "calendar", label: "Calendar", href: "/calendar", icon: CalendarDays },
  { id: "campaigns", label: "Campaigns", href: "/campaigns", icon: Megaphone },
  { id: "inbox", label: "Inbox", href: "/inbox", icon: Inbox, badge: 5 },
  { id: "ai", label: "AI Assistant", href: "/ai-assistant", icon: Sparkles },
  { id: "clients", label: "Clients", href: "/clients", icon: Users },
  { id: "reports", label: "Reports", href: "/reports", icon: FileText },
  { id: "settings", label: "Settings", href: "/settings", icon: Settings },
];
