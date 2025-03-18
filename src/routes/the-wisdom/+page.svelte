<!-- <script>

import educationImg from '../../lib/images/articleImages/education.png';
import distractionImg from '../../lib/images/articleImages/distraction.png';
import areasImg from '../../lib/images/articleImages/areas.png';
import channelsImg from '../../lib/images/articleImages/channels.png';
import communitiesImg from '../../lib/images/articleImages/communities.png';
import effortsImg from '../../lib/images/articleImages/efforts.png';
import emergenciesImg from '../../lib/images/articleImages/emergencies.png';
import generosityImg from '../../lib/images/articleImages/generosity.png';
import responsibilityImg from '../../lib/images/articleImages/responsibility.png';
import solutionsImg from '../../lib/images/articleImages/solutions.png';

const images = {
    "education": educationImg,
    "distraction": distractionImg,
    "areas": areasImg,
    "channels": channelsImg,
    "communities": communitiesImg,
    "efforts": effortsImg,
    "emergencies": emergenciesImg,
    "generosity": generosityImg,
    "responsibility": responsibilityImg,
    "solutions": solutionsImg,
};



    const articles = [
        "Bridging the STEM Gap: Empowering Impoverished Communities Through Education",
        "Existentialism in Modern Society: Finding Meaning in an Age of Distraction",
        "Combating Epidemics: How Solace Global's Donation Platform Facilitates Targeted Responses to Health Emergencies",
        "Improving Healthcare in Low-Income Regions through STEM Solutions",
        "Humanitarian Aid in Conflict Zones: Supporting War Victims Through Solace Global's Neutral Donation Channels",
        "Mobilizing Aid for Healthcare Crises: A More Focused Approach to Relief Efforts",
        "Rebuilding Lives Amidst Conflict: Utilizing Solace Global's Donation Page to Aid War-Affected Communities",
        "Sustainable Development: Using STEM to Enhance Living Conditions in Impoverished Areas",
        "The Ethics of Technological Advancement: Balancing Innovation with Moral Responsibility",
        "Philosophical Perspectives on Altruism: Understanding the Motivations Behind Human Generosity",
    ];

    // Generate URLs based on article names
    const generateUrl = (title) => {
        const name = title.trim().split(' ');
        const pageName = name[name.length - 1].toLowerCase();
        return `../article/${pageName}`;
    };

const generateImage = (title) => {
    const name = title.trim().split(' ').pop().toLowerCase();
    return images[name] || '/fallback-image.png';
};



</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
</svelte:head>

<style>
    .rasa {
        font-family: "Rasa", serif;
        font-weight: 500;
    }
</style>

<main class="">

    <div class="grid grid-cols-4 gap-6">
        {#each articles as article, i}
            <a
                href={generateUrl(article)}
                class={ `p-4 bg-white hover:scale-105 transition shadow-xl rounded-lg rasa 
                ${i % 4 === 2 ? 'col-span-2' : ''} 
                ${Math.floor(i / 4) % 2 === 1 && i % 4 === 0 ? 'col-span-2 ' : ''} 
                ${i === articles.length - 1 ? 'col-span-4' : ''}`}
            >
                <img
                    src={generateImage(article)}
                    alt="Article"
                    class="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-4"
                >
                <h2 class={`font-semibold 
                    ${i % 4 === 2 || (Math.floor(i / 4) % 2 === 1 && i % 4 === 0) || i === articles.length - 1 
                        ? 'text-lg md:text-xl lg:text-2xl' 
                        : 'text-base md:text-lg'}`}
                >
                    {article}
                </h2>
            </a>
        {/each}
    </div>
</main>
 -->
<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>The Wisdom | Articles</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-8">Articles</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.articles as article}
      <a href="/article/{article.slug}" class="block bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
        {#if article.coverImage}
          <img src={article.coverImage.url} alt={article.title} class="w-full h-48 object-cover" />
        {:else}
          <div class="w-full h-48 bg-gray-200"></div>
        {/if}
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{article.title}</h2>
          <p class="text-gray-600 text-sm mb-4">{new Date(article.publishedAt).toLocaleDateString()}</p>
          <p class="text-gray-700">{article.brief}</p>
        </div>
      </a>
    {/each}
  </div>
</div>