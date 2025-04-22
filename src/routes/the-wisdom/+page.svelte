<!-- src/routes/the-wisdom/+page.svelte -->
<script>
  export let data;
  const { articles } = data;
</script>

<div class="container mx-auto py-8">
  <h1 class="text-3xl font-bold mb-8">The Wisdom</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each articles as article}
      <a href="/article/{article.slug}" class="article-card">
        {#if article.coverImage}
          <img src={article.coverImage} alt={article.title} class="w-full h-48 object-cover" />
        {/if}
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{article.title}</h2>
          <p class="text-gray-600 mb-2">{new Date(article.dateAdded).toLocaleDateString()}</p>
          <p class="text-gray-800">{article.brief}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .article-card {
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    display: block;
  }
  
  .article-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
</style>