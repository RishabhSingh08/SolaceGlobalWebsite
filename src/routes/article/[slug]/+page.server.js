// src/routes/article/[slug]/+page.js
export async function load({ params, fetch }) {
  const { slug } = params;
  // Replace with your Hashnode username or publication ID
  const HASHNODE_USERNAME = "solaceglobal";

  const query = `
    query GetArticleBySlug {
      user(username: "${HASHNODE_USERNAME}") {
        publication {
          post(slug: "${slug}") {
            title
            dateAdded
            contentMarkdown
            coverImage
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const jsonResponse = await response.json();
  return {
    article: jsonResponse.data.user.publication.post,
  };
}
