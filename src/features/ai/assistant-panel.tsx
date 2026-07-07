"use client";
import { useState } from "react";
import { Sparkles, Wand2, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { contentService } from "@/services/content.service";

interface Msg { role: "ai" | "user"; text: string }

const QUICK = ["Write a caption", "Suggest hashtags", "Improve my tone", "5 content ideas"];

export function AssistantPanel() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "Hey! I'm your AI content assistant. Ask me to write captions, suggest hashtags, or brainstorm ideas." },
  ]);
  const [input, setInput] = useState("");

  async function send(prompt?: string) {
    const text = (prompt ?? input).trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    const reply = text.toLowerCase().includes("hashtag")
      ? (await contentService.suggestHashtags()).join("  ")
      : await contentService.generateCaption(text);
    setMessages((m) => [...m, { role: "ai", text: reply }]);
  }

  return (
    <Card className="flex h-full min-h-[460px] flex-col">
      <div className="flex items-center gap-3 border-b border-border p-4">
        <div className="pulse-glow grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-pink to-brand-violet text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <b>AI Content Assistant</b>
          <div className="text-xs text-muted">Powered by CONNECTA Intelligence</div>
        </div>
      </div>

      <div className="thin-scrollbar flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
            style={
              m.role === "user"
                ? { marginLeft: "auto", color: "#fff", background: "linear-gradient(135deg,#8B5CF6,#2563EB)", borderTopRightRadius: 4 }
                : { background: "rgba(148,163,184,.12)", borderTopLeftRadius: 4 }
            }
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 px-4 pb-2">
        {QUICK.map((q) => (
          <button
            key={q}
            onClick={() => send(q)}
            className="flex items-center gap-1 rounded-full bg-brand-violet/10 px-3 py-1.5 text-xs font-semibold text-brand-violet"
          >
            <Wand2 size={12} /> {q}
          </button>
        ))}
      </div>

      <div className="flex gap-2 border-t border-border p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask the AI anything…"
          className="flex-1 rounded-xl bg-slate-500/5 px-3.5 py-2.5 text-sm outline-none"
        />
        <button
          onClick={() => send()}
          aria-label="Send"
          className="grid w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-violet to-brand-pink text-white"
        >
          <Send size={16} />
        </button>
      </div>
    </Card>
  );
}
