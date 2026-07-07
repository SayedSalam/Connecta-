"use client";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { useTheme } from "next-themes";
import type { SeriesPoint, NamedValue } from "@/types";

const VIOLET = "#8B5CF6";
const BLUE = "#2563EB";
const PINK = "#EC4899";
const BAR_COLORS = [VIOLET, BLUE, PINK, "#0EA5E9"];

function useAxis() {
  const { theme } = useTheme();
  const dark = theme !== "light";
  return {
    axis: dark ? "#475569" : "#94a3b8",
    grid: dark ? "#1e293b" : "#eef2f7",
    tooltip: {
      background: dark ? "#0f172a" : "#fff",
      border: "none",
      borderRadius: 12,
      boxShadow: "0 10px 30px rgba(0,0,0,.2)",
    } as React.CSSProperties,
  };
}

export function AudienceGrowthChart({ data, color = VIOLET }: { data: SeriesPoint[]; color?: string }) {
  const { axis, grid, tooltip } = useAxis();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.5} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
        <XAxis dataKey="m" stroke={axis} fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke={axis} fontSize={12} tickLine={false} axisLine={false} width={28} />
        <Tooltip contentStyle={tooltip} />
        <Area dataKey="f" stroke={color} strokeWidth={2.5} fill="url(#ag)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function EngagementChart({ data }: { data: NamedValue[] }) {
  const { axis, grid, tooltip } = useAxis();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
        <XAxis dataKey="name" stroke={axis} fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke={axis} fontSize={12} tickLine={false} axisLine={false} width={28} />
        <Tooltip cursor={{ fill: "rgba(139,92,246,.08)" }} contentStyle={tooltip} />
        <Bar dataKey="v" radius={[8, 8, 0, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function PlatformPie({ data }: { data: NamedValue[] }) {
  const { tooltip } = useAxis();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="v" innerRadius={42} outerRadius={64} paddingAngle={3}>
          {data.map((p, i) => (
            <Cell key={i} fill={p.c ?? BAR_COLORS[i % BAR_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltip} />
      </PieChart>
    </ResponsiveContainer>
  );
}
