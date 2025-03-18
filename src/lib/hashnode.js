import { GraphQLClient } from "graphql-request";

// Create a GraphQL client instance
const client = new GraphQLClient("https://gql.hashnode.com", {
  headers: {
    Authorization: "fa56da6e-f515-4b66-b065-0514c91745d1",
  },
});

// Query to fetch all articles
export async function getAllArticles() {
  const query = `
    query GetPublicationArticles($host: String!) {
      publication(host: $host) {
        isTeam
        title
        posts(first: 20) {
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
