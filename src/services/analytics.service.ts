import { audienceGrowth, engagement, platformSplit, heatmap, kpis } from "@/mock-data";

/**
 * Analytics service — swap these mock returns for real API calls later.
 * The component layer never imports mock-data directly, only this service,
 * so the backend integration surface stays in one place.
 */
export const analyticsService = {
  async getKpis() {
    return kpis;
  },
  async getAudienceGrowth() {
    return audienceGrowth;
  },
  async getEngagement() {
    return engagement;
  },
  async getPlatformSplit() {
    return platformSplit;
  },
  async getPostingHeatmap() {
    return heatmap;
  },
};
