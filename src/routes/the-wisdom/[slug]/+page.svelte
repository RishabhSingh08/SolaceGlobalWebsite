<!-- Single Article Page -->
<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let articles = data.articles;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{data.article.title} | The Wisdom - Solace Global</title>
  <meta name="title" content="{data.article.title} | The Wisdom - Solace Global" />
  <meta name="description" content={data.article.brief} />
  <meta name="author" content="Solace Global Foundation" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://solaceglobal.xyz/the-wisdom/{data.article.slug}" />
  <meta property="og:title" content={data.article.title} />
  <meta property="og:description" content={data.article.brief} />
  {#if data.article.coverImage}
  <meta property="og:image" content={data.article.coverImage.url} />
  {/if}
  <meta property="og:site_name" content="Solace Global Foundation" />
  <meta property="article:published_time" content={data.article.publishedAt} />
  <meta property="article:author" content="Solace Global" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://solaceglobal.xyz/the-wisdom/{data.article.slug}" />
  <meta name="twitter:title" content={data.article.title} />
  <meta name="twitter:description" content={data.article.brief} />
  {#if data.article.coverImage}
  <meta name="twitter:image" content={data.article.coverImage.url} />
  {/if}
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${data.article.title.replace(/"/g, '\\"')}",
    "description": "${data.article.brief.replace(/"/g, '\\"')}",
    ${data.article.coverImage ? `"image": "${data.article.coverImage.url}",` : ''}
    "datePublished": "${data.article.publishedAt}",
    "author": {
      "@type": "Organization",
      "name": "Solace Global Foundation"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Solace Global Foundation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://solaceglobal.xyz/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://solaceglobal.xyz/the-wisdom/${data.article.slug}"
    }
  }
  </script>`}

  <link rel="canonical" href="https://solaceglobal.xyz/the-wisdom/{data.article.slug}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
</svelte:head>

<main class="container mx-auto">
  <div class="px-4 md:px-8 py-12 md:py-20 max-w-4xl mx-auto">
      {#if data.article.coverImage}
          <img src={data.article.coverImage.url} 
               alt={data.article.title} 
               class="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg mb-8 md:mb-12" />
      {/if}
      
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl rasa leading-tight mb-6 md:mb-8">
          {data.article.title}
      </h1>
      
      <div class="flex flex-wrap items-center text-gray-600 mb-8 md:mb-12 pb-4 border-b-2 border-gray-200">
          <span class="text-base md:text-lg font-medium">
              {new Date(data.article.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
              })}
          </span>
          
          {#if data.article.tags && data.article.tags.length > 0}
              <span class="mx-3 hidden sm:inline">•</span>
              <div class="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {#each data.article.tags as tag}
                      <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tag.name}
                      </span>
                  {/each}
              </div>
          {/if}
      </div>
      
      <article class="prose prose-lg max-w-none article-content">
          {@html data.article.content.html}
      </article>
      
      <div class="mt-16 md:mt-20 pt-6 md:pt-8 border-t-2 border-gray-200">
          <a href="/the-wisdom" 
             class="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors border-b-2 border-black hover:border-gray-600 pb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
              Back to The Wisdom
          </a>
      </div>
  </div>
</main>

<style>
  .rasa {
      font-family: "Rasa", serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;
  }

  :global(.article-content) {
      font-size: 1.125rem;
      line-height: 1.75;
      color: #374151;
  }

  :global(.article-content p) {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
  }

  :global(.article-content h2) {
      font-family: "Rasa", serif !important;
      font-size: 2rem !important;
      font-weight: 600 !important;
      margin-top: 3rem !important;
      margin-bottom: 1.5rem !important;
      color: #111827 !important;
  }

  :global(.article-content h3) {
      font-family: "Rasa", serif !important;
      font-size: 1.5rem !important;
      font-weight: 500 !important;
      margin-top: 2rem !important;
      margin-bottom: 1rem !important;
      color: #111827 !important;
  }

  :global(.article-content ul) {
      list-style-type: disc !important;
      padding-left: 1.5rem !important;
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
  }

  :global(.article-content ol) {
      list-style-type: decimal !important;
      padding-left: 1.5rem !important;
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
  }

  :global(.article-content li) {
      margin-bottom: 0.5rem !important;
  }

  :global(.article-content li > p) {
      margin: 0 !important;
  }

  :global(.article-content blockquote) {
      border-left: 4px solid #e5e7eb !important;
      padding-left: 1.5rem !important;
      margin: 2rem 0 !important;
      font-style: italic !important;
      color: #6b7280 !important;
  }

  :global(.article-content a) {
      color: #111827 !important;
      border-bottom: 2px solid #111827 !important;
      text-decoration: none !important;
      transition: all 0.2s ease !important;
  }

  :global(.article-content a:hover) {
      color: #6b7280 !important;
      border-bottom-color: #6b7280 !important;
  }
</style>