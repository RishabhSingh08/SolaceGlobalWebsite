import { getFeaturedArticles } from "$lib/hashnode.js";

export const config = {
  isr: {
    expiration: 60,
  },
};


export async function load() {
  try {
    const featured = await getFeaturedArticles();
    return {
      featured,
    };
  } catch (err) {
    console.error("Error loading featured articles:", err);
    return {
      featured: [],
      error: true,
    };
  }
}
