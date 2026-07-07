"use client";
import { useEffect, useState } from "react";

/** Guards against hydration mismatch for theme-aware UI. */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
