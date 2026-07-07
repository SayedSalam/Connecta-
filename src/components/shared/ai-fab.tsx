"use client";
import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { AssistantPanel } from "@/features/ai/assistant-panel";

/** Floating AI assistant button + slide-up panel, available on every app page. */
export function AiFab() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 h-[460px] w-[92vw] max-w-sm animate-rise">
          <div className="h-full overflow-hidden rounded-3xl border border-border shadow-2xl">
            <AssistantPanel />
          </div>
        </div>
      )}
      <button
        aria-label="AI assistant"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-violet to-brand-pink text-white shadow-xl"
      >
        {open ? <X size={22} /> : <Sparkles size={22} />}
      </button>
    </>
  );
}
