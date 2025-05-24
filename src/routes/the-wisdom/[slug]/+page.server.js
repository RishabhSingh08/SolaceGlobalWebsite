import { getArticleBySlug } from "$lib/hashnode.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
      throw error(404, "Article not found");
    }

    return {
      article,
    };
  } catch (err) {
    console.error("Error fetching article:", err);
    throw error(404, "Article not found");
  }
}
