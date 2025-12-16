<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>The Wisdom | Solace Global Blog - Insights & Perspectives</title>
    <meta name="title" content="The Wisdom | Solace Global Blog - Insights & Perspectives" />
    <meta name="description" content="Explore insights, perspectives, and resources from Solace Global Foundation. Read articles on STEM education, social impact, empathy, storytelling, personal development, and creating lasting change for tomorrow." />
    <meta name="keywords" content="Solace Global blog, The Wisdom, nonprofit insights, STEM education articles, social impact stories, youth leadership blog, empathy building, storytelling, personal development, global change" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="blog" />
    <meta property="og:url" content="https://solaceglobal.xyz/the-wisdom" />
    <meta property="og:title" content="The Wisdom | Solace Global Blog" />
    <meta property="og:description" content="Insights, perspectives, and resources to create lasting change for tomorrow." />
    <meta property="og:image" content="https://solaceglobal.xyz/og-image.png" />
    <meta property="og:site_name" content="Solace Global Foundation" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://solaceglobal.xyz/the-wisdom" />
    <meta name="twitter:title" content="The Wisdom | Solace Global Blog" />
    <meta name="twitter:description" content="Insights, perspectives, and resources to create lasting change." />
    <meta name="twitter:image" content="https://solaceglobal.xyz/og-image.png" />
    
    <!-- Structured Data -->
    {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "The Wisdom - Solace Global Blog",
      "description": "Insights, perspectives, and resources from Solace Global Foundation",
      "url": "https://solaceglobal.xyz/the-wisdom",
      "publisher": {
        "@type": "Organization",
        "name": "Solace Global Foundation",
        "logo": {
          "@type": "ImageObject",
          "url": "https://solaceglobal.xyz/favicon.png"
        }
      }
    }
    </script>`}

    <link rel="canonical" href="https://solaceglobal.xyz/the-wisdom" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
</svelte:head>

<main class="container mx-auto">
    <div class="px-4 md:px-8 py-12 md:py-20">
        <div class="mb-12 md:mb-20 text-center justify-center align-middle">
            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl rasa leading-tight md:leading-snug lg:leading-[4.5rem] mb-6">
                The Wisdom
            </h1>
            
            <p class="text-base md:text-lg lg:text-xl">
                Insights, perspectives, and resources to create lasting change for tomorrow.
            </p>
        </div>
        
        {#if data.error}
            <div class="text-center py-12 md:py-16">
                <p class="text-lg text-gray-600">Unable to load articles. Please try again later.</p>
            </div>
        {:else if data.articles.length === 0}
            <div class="text-center py-12 md:py-16">
                <p class="text-lg text-gray-600">No articles found.</p>
            </div>
        {:else}
            <!-- Articles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12  mx-auto">
                {#each data.articles as article, index}
                    <article class="group">
                        <a href="/the-wisdom/{article.slug}" class="block">
                            {#if article.coverImage?.url}
                                <div class="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                                    <img src={article.coverImage.url} 
                                         alt={article.title} 
                                         class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
                                </div>
                            {/if}
                            
                            <div class="space-y-4">
                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <time class="font-medium">
                                        {formatDate(article.publishedAt)}
                                    </time>
                                    <span class="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                                        Article
                                    </span>
                                </div>
                                
                                <h2 class="text-xl md:text-2xl lg:text-3xl rasa font-medium leading-tight group-hover:text-gray-600 transition-colors">
                                    {article.title}
                                </h2>
                                
                                <p class="text-gray-600 leading-relaxed">
                                    {article.brief}
                                </p>
                                
                                <div class="inline-flex items-center text-black font-medium border-b-2 border-black group-hover:text-gray-600 group-hover:border-gray-600 transition-colors pb-1">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </article>
                {/each}
            </div>
            

        {/if}
    </div>
</main>

<style>
    .rasa {
        font-family: "Rasa", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }
</style>