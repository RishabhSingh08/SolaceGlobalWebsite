
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://gql.hashnode.com", {
    headers: {
        Authorization: "a875159f-f359-4789-817d-cc5c55a15dce",
    },
});

const variables = {
    host: "solaceglobal.hashnode.dev",
};

async function getArticles(limit) {
    const query = `
      query GetPublicationArticles($host: String!) {
        publication(host: $host) {
          posts(first: ${limit}) {
            edges {
              node {
                title
                slug
                publishedAt
              }
            }
          }
        }
      }
    `;

    try {
        const data = await client.request(query, variables);
        return data.publication.posts.edges.map((edge) => edge.node);
    } catch (error) {
        console.error(`Error limit ${limit}:`, error);
        return [];
    }
}

async function run() {
    console.log("Fetching articles...");
    const articles = await getArticles(20);

    console.log(`Fetched ${articles.length} articles.`);
    articles.forEach((p, i) => {
        console.log(`${i + 1}. [${p.publishedAt}] ${p.slug}`);
    });

    const targetSlug = "wiring-your-thoughts-into-the-machine";
    const index = articles.findIndex(p => p.slug === targetSlug);

    if (index !== -1) {
        console.log(`\nTARGET FOUND at index ${index} (1-based: ${index + 1})`);
        if (index < 4) {
            console.log("It SHOULD appear in Featured (Top 4).");
        } else {
            console.log("It should NOT appear in Featured (Top 4), but SHOULD appear in The Wisdom (Top 20).");
        }
    } else {
        console.log("\nTARGET NOT FOUND in Top 20.");
    }
}

run();
