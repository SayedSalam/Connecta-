"use client";
import { useState } from "react";
import {
  Instagram, Facebook, Twitter, Linkedin, Hash, Image as ImageIcon, Wand2,
  Heart, MessageCircle, Share2, Bookmark,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { suggestedHashtags } from "@/mock-data";
import { cn } from "@/lib/utils";
import type { Platform } from "@/types";

const MAX = 2200;
const EMOJIS = ["🎉", "🔥", "✨", "💜", "📈", "🙌"];
const PLATFORMS: [Platform, typeof Instagram, string][] = [
  ["instagram", Instagram, "#EC4899"],
  ["facebook", Facebook, "#2563EB"],
  ["twitter", Twitter, "#0EA5E9"],
  ["linkedin", Linkedin, "#0A66C2"],
];

export function PostComposer() {
  const [text, setText] = useState(
    "Big news 🎉 Our summer collection just dropped — designed in Riyadh, made to move. Which look is your favourite?",
  );
  const [platform, setPlatform] = useState<Platform>("instagram");

  return (
    <div className="grid gap-5 lg:grid-cols-5">
      <Card className="space-y-4 p-5 lg:col-span-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Create a post</h3>
          <div className="flex gap-1.5">
            {PLATFORMS.map(([id, Icon, color]) => (
              <button
                key={id}
                onClick={() => setPlatform(id)}
                aria-label={id}
                className="grid h-9 w-9 place-items-center rounded-lg border transition"
                style={{
                  background: platform === id ? `${color}22` : "transparent",
                  borderColor: platform === id ? color : "transparent",
                  color: platform === id ? color : "currentColor",
                }}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={7}
          className="thin-scrollbar w-full resize-none rounded-xl border border-border bg-slate-500/5 p-3.5 text-sm outline-none"
        />

        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {EMOJIS.map((e) => (
              <button
                key={e}
                onClick={() => setText((t) => `${t} ${e}`)}
                className="grid h-8 w-8 place-items-center rounded-lg bg-slate-500/10 text-sm"
              >
                {e}
              </button>
            ))}
            <button className="grid h-8 w-8 place-items-center rounded-lg bg-slate-500/10">
              <ImageIcon size={15} />
            </button>
          </div>
          <span className={cn("text-xs text-muted", text.length > MAX * 0.9 && "text-brand-pink")}>
            {text.length}/{MAX}
          </span>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-muted">
            <Hash size={13} /> Suggested hashtags
          </div>
          <div className="flex flex-wrap gap-1.5">
            {suggestedHashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => setText((t) => `${t} ${tag}`)}
                className="rounded-full bg-brand-violet/10 px-2.5 py-1 text-xs font-medium text-brand-violet"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          <Button variant="gradient" className="flex-1">Schedule post</Button>
          <Button variant="outline">Save draft</Button>
          <Button
            className="w-11 bg-gradient-to-br from-brand-pink to-brand-violet"
            aria-label="Improve with AI"
          >
            <Wand2 size={16} />
          </Button>
        </div>
      </Card>

      <Card className="p-5 lg:col-span-2">
        <div className="mb-3 text-xs font-semibold text-muted">Live preview</div>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="flex items-center gap-2.5 p-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-violet to-brand-pink" />
            <div>
              <div className="text-sm font-bold">wsla.io</div>
              <div className="text-[11px] text-muted">Sponsored</div>
            </div>
          </div>
          <div className="grid h-44 place-items-center bg-gradient-to-br from-brand-violet to-brand-blue text-white/70">
            <ImageIcon size={30} />
          </div>
          <div className="p-3">
            <div className="mb-2 flex gap-4 opacity-80">
              <Heart size={18} /><MessageCircle size={18} /><Share2 size={18} />
              <Bookmark size={18} className="ml-auto" />
            </div>
            <div className="whitespace-pre-wrap text-sm leading-snug">{text}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
