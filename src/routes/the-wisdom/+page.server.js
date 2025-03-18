import { getAllArticles } from "$lib/hashnode";

export async function load() {
  try {
    const articles = await getAllArticles();
    return {
      articles,
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      articles: [],
    };
  }
}
