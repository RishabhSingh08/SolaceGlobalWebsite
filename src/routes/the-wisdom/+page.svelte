<script>
  export let data;
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-8">The Wisdom</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.articles as article}
      <a href={`/article/${article.slug}`} class="block bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
        {#if article.cover?.url}
          <img src={`http://localhost:1337${article.cover.url}`} alt={article.title} class="w-full h-48 object-cover" />
        {:else}
          <div class="w-full h-48 bg-gray-200"></div>
        {/if}
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{article.title}</h2>
          <p class="text-gray-600 text-sm mb-4">{new Date(article.published).toLocaleDateString()}</p>
          {#if article.brief}
            <p class="text-gray-700">{article.brief}</p>
          {/if}
        </div>
      </a>
    {/each}
  </div>
</div>