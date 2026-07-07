import { suggestedHashtags, calendarPosts } from "@/mock-data";

/** Fake AI generation + content helpers. Replace with real endpoints later. */
export const contentService = {
  async suggestHashtags(_topic?: string) {
    return suggestedHashtags;
  },
  async getScheduledPosts() {
    return calendarPosts;
  },
  async generateCaption(prompt: string): Promise<string> {
    const drafts: Record<string, string> = {
      caption: '✨ "Small details, big statements. Our new drop is here — and it moves the way you do." Tap to shop the look.',
      tone: '"You asked, we delivered 💜 Meet the summer collection — bold, effortless, unmistakably you."',
      ideas: "1) Behind-the-scenes reel 2) Founder story 3) Customer UGC carousel 4) 'This vs That' poll 5) 60-sec how-it's-made.",
    };
    const key = prompt.toLowerCase().includes("tone")
      ? "tone"
      : prompt.toLowerCase().includes("idea")
      ? "ideas"
      : "caption";
    return drafts[key];
  },
};
