export async function load({ params, fetch }) {
  const res = await fetch(
    `http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const { data } = await res.json();

  if (!data.length) {
    throw error(404, "Article not found");
  }

  return {
    article: data[0], // This is already a flat object
  };
}
