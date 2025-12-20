// article/+page.server.js
import { getAllArticles } from "$lib/hashnode.js";

export const config = {
  isr: {
    expiration: 60,
  },
};

import { error } from "@sveltejs/kit";

export async function load() {
  try {
    const articles = await getAllArticles();

    return {
      articles,
    };
  } catch (err) {
    console.error("Error fetching articles:", err);
    // Return empty array instead of throwing error to handle gracefully
    return {
      articles: [],
      error: "Failed to load articles",
    };
  }
}
