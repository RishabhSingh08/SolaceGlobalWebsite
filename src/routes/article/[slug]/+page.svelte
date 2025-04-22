src/routes/article/[slug]/+page.svelte
<script>
  import { marked } from 'marked';
  export let data;
  const { article } = data;
  
  // Convert markdown to HTML
  const htmlContent = marked(article.contentMarkdown);
</script>

<div class="container mx-auto py-8 px-4">
  <a href="/the-wisdom" class="inline-block mb-6 text-blue-600 hover:underline">
    &larr; Back to Articles
  </a>
  
  {#if article.coverImage}
    <img src={article.coverImage} alt={article.title} class="w-full max-h-80 object-cover mb-6" />
  {/if}
  
  <h1 class="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
  <p class="text-gray-600 mb-8">{new Date(article.dateAdded).toLocaleDateString()}</p>
  
  <div class="prose max-w-none">
    {@html htmlContent}
  </div>
</div>