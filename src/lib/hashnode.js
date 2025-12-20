import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://gql.hashnode.com", {
  headers: {
    Authorization: "a875159f-f359-4789-817d-cc5c55a15dce",
  },
});

// Fetch 4 featured articles (uses getAllArticles for consistency)
export async function getFeaturedArticles() {
  const allArticles = await getAllArticles();
  const featured = allArticles.slice(0, 4);
  console.log("Featured articles:", featured.map(a => ({ title: a.title, date: a.publishedAt })));
  return featured;
}

// Query to fetch all articles
export async function getAllArticles() {
  const query = `
    query GetPublicationArticles($host: String!) {
      publication(host: $host) {
        isTeam
        title
        posts(first: 50) {
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    host: "solaceglobal.hashnode.dev",
  };

  try {
    const data = await client.request(query, variables);
    return data.publication.posts.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw error;
  }
}

// Query to fetch a single article by slug
export async function getArticleBySlug(slug) {
  const query = `
    query GetArticleBySlug($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          content {
            html
          }
          coverImage {
            url
          }
          publishedAt
          brief
          slug
          tags {
            name
            slug
          }
        }
      }
    }
  `;

  const variables = {
    host: "solaceglobal.hashnode.dev",
    slug: slug,
  };

  try {
    const data = await client.request(query, variables);
    return data.publication.post;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw error;
  }
}
