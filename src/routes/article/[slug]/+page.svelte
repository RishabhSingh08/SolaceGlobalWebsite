<script>
  export let data;
  const article = data.article;
</script>

<svelte:head>
  <title>{article.title}</title>
  <meta name="description" content={article.brief || ''} />
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  {#if article.cover?.url}
    <img src={`http://localhost:1337${article.cover.url}`} alt={article.title} class="w-full h-64 object-cover rounded-lg mb-6" />
  {/if}
  
  <h1 class="text-4xl font-bold mb-4">{article.title}</h1>
  
  <div class="text-gray-600 mb-8">
    <span>{new Date(article.published).toLocaleDateString()}</span>
    {#if article.tags && article.tags.length > 0}
      <span class="mx-2">•</span>
      <span>
        {#each article.tags as tag, i}
          <span class="bg-gray-100 px-2 py-1 rounded-full text-sm">
            {tag.name}
          </span>
          {#if i < article.tags.length - 1}
            <span class="mx-1"></span>
          {/if}
        {/each}
      </span>
    {/if}
  </div>
  
  <article class="space-y-6">
    <div class="prose space-y-5 custom-list">
      {@html article.content}
    </div>
  </article>
  
  <div class="mt-12 pt-8 border-t">
    <a href="/the-wisdom" class="text-blue-600 hover:underline">← Back to Articles</a>
  </div>
</div>

<style>
  :global(.custom-list ul) {
    list-style-type: disc;
    padding-left: 1.25rem; 
  }
  :global(.custom-list ol) {
    list-style-type: decimal;
    padding-left: 1.25rem;
  }
</style>