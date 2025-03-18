<script>
  export let data;
  console.log(data.article.content.html);
</script>

<svelte:head>
  <title>{data.article.title}</title>
  <meta name="description" content={data.article.brief} />
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  {#if data.article.coverImage}
    <img src={data.article.coverImage.url} alt={data.article.title} class="w-full h-64 object-cover rounded-lg mb-6" />
  {/if}
  
  <h1 class="text-4xl font-bold mb-4">{data.article.title}</h1>
  
  <div class="text-gray-600 mb-8">
    <span>{new Date(data.article.publishedAt).toLocaleDateString()}</span>
    {#if data.article.tags && data.article.tags.length > 0}
      <span class="mx-2">•</span>
      <span>
        {#each data.article.tags as tag, i}
          <span class="bg-gray-100 px-2 py-1 rounded-full text-sm">
            {tag.name}
          </span>
          {#if i < data.article.tags.length - 1}
            <span class="mx-1"></span>
          {/if}
        {/each}
      </span>
    {/if}
  </div>
  
<article class="space-y-6">
  <div class="prose space-y-5">
    {@html data.article.content.html}
  </div>
</article>


  
  <div class="mt-12 pt-8 border-t">
    <a href="/the-wisdom" class="text-blue-600 hover:underline">← Back to Articles</a>
  </div>
</div>