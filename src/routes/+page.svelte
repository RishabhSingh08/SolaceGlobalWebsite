<script>
  import Video from "../lib/images/ActualActualFinalVideo.mp4";

  // Simplified sponsors array - removed unused imports
  import Sponsor01 from "../lib/images/Sponsors/Hack_Club_Flag_Standalone.png";
  import Sponsor05 from "../lib/images/Sponsors/shanti.png";
  import Sponsor06 from "../lib/images/Sponsors/undefined.png";
  import Sponsor07 from "../lib/images/Sponsors/amazon.png";
  import Sponsor08 from "../lib/images/Sponsors/code.png";
  import Sponsor09 from "../lib/images/Sponsors/google.png";

  const sponsors = [
      { image: Sponsor07, alt: "Amazon" },
      { image: Sponsor05, alt: "Shanti Bhavan" },
      { image: Sponsor08, alt: "Code" },
      { image: Sponsor06, alt: "Undefined Robotics" },
      { image: Sponsor09, alt: "Google" },
      { image: Sponsor01, alt: "Hack Club" },
  ];

  import { onMount } from 'svelte';
  
  let popupVisible = false;
  let popupTrigger;
  
  function togglePopup() {
      popupVisible = !popupVisible;
  }
  
  function handleClickOutside(event) {
      if (popupVisible && popupTrigger && !popupTrigger.contains(event.target) && !event.target.closest('.popup-content')) {
          popupVisible = false;
      }
  }
  
  onMount(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  });

  export let data;

  function formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
      });
  }

  // Simplified contributions data
  const contributions = [
      { name: "Google Workspace", amount: 10000 },
      { name: "Code.org Partnership", amount: 3000 },
      { name: "Pinkberry Partnership", amount: 4050 },
      { name: "Hack Club Legal Services", amount: 14000 },
      { name: "Stripe Banking", amount: 500 },
      { name: "Donations", amount: 13000 },
      { name: "Undefined Robotics (Parts)", amount: 25000 }
  ];

  const totalContributions = contributions.reduce((sum, item) => sum + item.amount, 0);
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" media="all" href="https://cdn.smore.com/css/list-form-signup.2981f49d.css"/>
</svelte:head>

<main class="container mx-auto">
  <div class="px-4 md:px-8 mt-6 md:mt-10">
      <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight md:leading-snug lg:leading-[4.5rem] max-w-full md:max-w-3xl lg:max-w-4xl">
          Unite to create a future of lasting value
      </h1>
      
      <p class="mt-3 md:mt-5 text-base md:text-lg lg:text-xl border-b-2 border-black pb-2 max-w-full md:max-w-2xl lg:max-w-[725px]">
          <a href="/about/how-we-work">
              Learn about empowerment and innovation to create lasting change for tomorrow.
          </a>
      </p>
  </div>
  
  <div class="mt-10 md:mt-20">
      <div class="relative w-full overflow-hidden">
          <video loop muted autoplay class="w-full">
              <source src={Video} type="video/mp4">
          </video>
      </div>
      <p class="mt-3 md:mt-5 text-sm md:text-md font-medium underline px-4 md:px-8">
          <a href="https://www.solaceglobal.world/beach-volley-tourney">Learn how to make a difference</a>
      </p>
  </div>
  <div class="mt-12 md:mt-20 px-4 md:px-8">
      <p class="text-2xl md:text-3xl lg:text-4xl font-serif mb-6">🎉 <a href="/beach-volley-tourney" class="underline">New Event Signup</a></p>
      
      <div class="rounded-3xl bg-red-200/20 py-8">
          <div class="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 space-y-8">
              <div class="text-center space-y-4">
                  <h2 class="text-3xl font-bold text-gray-900">Beach Volleyball Tournament</h2>
                  <p class="text-gray-600">
                      Register your team for the upcoming beach volleyball tournament.
                  </p>
              </div>

              <div class="space-y-6">
                  <form class="space-y-6">
                      <div class="space-y-1">
                          <label for="teamName" class="block text-sm font-medium text-gray-700">Team Name*</label>
                          <input
                              id="teamName"
                              type="text"
                              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out border-gray-300"
                              placeholder="Enter your team name"
                              required
                          />
                      </div>
                      <div class="space-y-1">
                          <label for="contactName" class="block text-sm font-medium text-gray-700">Primary Contact Name*</label>
                          <input
                              id="contactName"
                              type="text"
                              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out border-gray-300"
                              placeholder="Enter primary contact name"
                              required
                          />
                      </div>
                      <div class="space-y-1">
                          <label for="contactPhone" class="block text-sm font-medium text-gray-700">Primary Contact Phone Number*</label>
                          <input
                              id="contactPhone"
                              type="tel"
                              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out border-gray-300"
                              placeholder="e.g., 555-123-4567"
                              required
                          />
                      </div>
                      <div class="space-y-1">
                          <label for="contactEmail" class="block text-sm font-medium text-gray-700">Primary Contact Email*</label>
                          <input
                              id="contactEmail"
                              type="email"
                              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out border-gray-300"
                              placeholder="e.g., captain@example.com"
                              required
                          />
                      </div>
                      <div class="space-y-1">
                          <label for="numberOfSubs" class="block text-sm font-medium text-gray-700">Number of Subs</label>
                          <input
                              id="numberOfSubs"
                              type="number"
                              min="0"
                              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out border-gray-300"
                              placeholder="0"
                          />
                          <p class="text-xs text-gray-500">Each substitute adds $5 to the total fee</p>
                      </div>

                      <div class="space-y-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <h3 class="text-lg font-semibold text-gray-800">Cost Breakdown</h3>
                          <div class="flex justify-between text-sm text-gray-600">
                              <span>Base Team Fee:</span>
                              <span>$60.00</span>
                          </div>
                          <div class="flex justify-between text-sm text-gray-600">
                              <span>Subs (0 × $5):</span>
                              <span>$0.00</span>
                          </div>
                          <div class="flex justify-between text-lg font-bold text-gray-900 border-t pt-2 mt-2">
                              <span>Total Registration Fee:</span>
                              <span>$60.00</span>
                          </div>
                      </div>

                      <div class="relative flex items-start space-y-1">
                          <div class="flex items-center h-5">
                              <input
                                  id="agreeTerms"
                                  name="agreeTerms"
                                  type="checkbox"
                                  class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                                  required
                              />
                          </div>
                          <div class="ml-3 text-sm">
                              <label for="agreeTerms" class="font-medium text-gray-700">Agree to Terms*</label>
                              <p class="text-gray-500 text-xs">
                                  By checking this box, I agree to the <a href="/terms-and-conditions" target="_blank" class="underline hover:text-red-600">terms and conditions</a>.
                                  I also acknowledge that my payment of $60.00 is for tournament registration and is non-refundable.
                              </p>
                          </div>
                      </div>

                      <button
                          type="submit"
                          class="w-full px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled
                      >
                          Proceed to Payment ($60.00)
                      </button>
                  </form>
              </div>
          </div>
      </div>
  </div>
  <div class="mt-12 md:mt-20 px-4 md:px-8">
      <p class="text-2xl md:text-3xl lg:text-4xl font-serif mb-6">Featured Insights</p>

      {#if data.featured.length === 0}
          <p class="text-gray-500">No featured articles available.</p>
      {:else}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {#each data.featured as article}
                  <a href="/the-wisdom/{article.slug}" class="group block bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                      {#if article.coverImage?.url}
                          <img src={article.coverImage.url} alt={article.title} class="w-full h-40 object-cover" />
                      {/if}
                      <div class="p-4">
                          <time class="block text-sm text-gray-500 mb-1">
                              {formatDate(article.publishedAt)}
                          </time>
                          <h3 class="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                              {article.title}
                          </h3>
                          <p class="text-sm text-gray-600 mt-2">{article.brief}</p>
                      </div>
                  </a>
              {/each}
          </div>
      {/if}
  </div>
  
  <div class="my-10 md:my-16 border-t-2 mx-4 md:mx-8"></div>

  <div class="px-4 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div class="lg:col-span-3">
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
                  {#each sponsors as sponsor}
                      <div class="relative w-full aspect-square">
                          <img src={sponsor.image} alt={sponsor.alt} class="absolute inset-0 w-full h-full object-contain p-2" />
                      </div>
                  {/each}
              </div>
          </div>
          
          <div class="lg:col-span-2 mt-8 lg:mt-0">
              <p class="text-2xl md:text-3xl mb-4 md:mb-5">Partners of <span class="font-semibold">Solace Global</span></p>
              <p class="mt-2 md:mt-7">How does the work of our partners come to life? How does that work create potential around the world? Watch, read, and experience the stories of good people doing great things that can lead to even greater things.</p>
              
              <a href="/partners">
                  <button class="mt-6 md:mt-12 transition border-2 border-black text-black py-2 md:py-3 px-6 md:px-9 rounded hover:text-white hover:bg-stone-800 hover:border-stone-800">
                      Learn More
                  </button>
              </a>
          </div>
      </div>
  </div>
  
<!-- Perspectives Section - Redesigned -->
<div class="bg-zinc-900 px-6 md:px-16 py-14 text-white mt-16 md:mt-24 rounded-lg">
  <div class="flex flex-col lg:flex-row lg:justify-between items-center mb-10">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">Perspectives</h2>
    <p class="mt-4 lg:mt-0 text-sm lg:text-base max-w-xl lg:text-right">
      Explore the latest updates, research, and stories from the Solace Global Foundation through our curated articles and weekly newsletter.
    </p>
  </div>

  <div class="grid lg:grid-cols-3 gap-10">
    <!-- Main Article -->
    <a href="/perspective/breaking-free-from-the-comparison-trap" class="bg-zinc-800 rounded-xl overflow-hidden shadow-xl group transition hover:shadow-2xl border border-zinc-600">
      <img src="https://images.unsplash.com/photo-1739489248003-d57fc900afbb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Article" class="w-full h-56 object-cover">
      <div class="p-5">
        <h3 class="text-xl font-serif text-gray-300 mb-2 group-hover:text-red-600 transition-colors">Breaking Free from the Comparison Trap</h3>
        <p class="text-sm text-gray-400">Explore how overcoming societal pressures and embracing personal passions can redefine the path to success.</p>
      </div>
    </a>

    <!-- Secondary Article -->
    <a href="/perspective/shaping-future-leaders-through-interactive-stem-education" class="bg-zinc-800 rounded-xl overflow-hidden shadow-xl group transition hover:shadow-2xl border border-zinc-600">
      <img src="https://www.shutterstock.com/image-photo/diverse-school-children-students-build-600nw-2036186204.jpg" alt="Article" class="w-full h-56 object-cover">
      <div class="p-5">
        <h3 class="text-lg font-serif text-gray-300 mb-2 group-hover:text-red-600 transition-colors">Shaping Future Leaders Through Interactive STEM Education</h3>
        <p class="text-sm text-gray-400">Hands-on STEM initiatives are inspiring young minds and changing communities one innovation at a time.</p>
      </div>
    </a>

    <!-- Newsletter Signup -->
    <div class="bg-zinc-800 rounded-xl shadow-xl p-6">
      <h3 class="text-xl font-serif text-gray-300 mb-4">Subscribe To Our Newsletter</h3>
      <form action="https://secure.smore.com/app/lists/confirm_subscribe" method="POST" class="space-y-4">
        <input type="hidden" name="list_id" value="676a51b695e1b379806173ff">

        <div>
          <label for="smore-subscribe-name" class="block text-sm text-gray-400 mb-1">Name</label>
          <input type="text" name="name" id="smore-subscribe-name" class="w-full rounded-md border-gray-300 shadow-sm focus:ring-slate-400 focus:border-slate-400 px-3 py-2 text-black" placeholder="Your Name" />
        </div>

        <div>
          <label for="smore-subscribe-email" class="block text-sm text-gray-400 mb-1">Email Address <span class="text-red-500">*</span></label>
          <input type="email" name="email" id="smore-subscribe-email" required class="w-full rounded-md border-gray-300 shadow-sm focus:ring-slate-400 focus:border-slate-400 px-3 py-2 text-black" placeholder="you@example.com" />
        </div>

        <button type="submit" name="subscribe" id="smore-subscribe-button" class="w-full bg-zinc-900 border border-zinc-600 text-white py-2 rounded-md hover:bg-black transition">Subscribe</button>
      </form>
    </div>
  </div>
</div>

  
  <div class="my-10 md:my-16"></div>

  <div class="px-4 md:px-8 mb-12 md:mb-20">
      <div class="mb-6 md:mb-8">
          <p class="text-2xl md:text-3xl lg:text-4xl font-serif text-center">Foundation Facts</p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 text-center">
          <div class="p-4 relative">
              <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">${totalContributions.toLocaleString()}+</div>
              <p class="mt-2 text-sm md:text-base underline cursor-pointer hover:text-red-600 transition-colors" 
                  bind:this={popupTrigger}
                  on:click|stopPropagation={togglePopup}>
                  Raised in value
              </p>
          </div>
          
          <div class="p-4">
              <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">15k+</div>
              <p class="mt-2 text-sm md:text-base">People affected</p>
          </div>
          
          <div class="p-4">
              <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">9+</div>
              <p class="mt-2 text-sm md:text-base">Countries in operation</p>
          </div>
          
          <div class="p-4">
              <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">50+</div>
              <p class="mt-2 text-sm md:text-base">Volunteers</p>
          </div>
          
          <div class="p-4">
              <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">20+</div>
              <p class="mt-2 text-sm md:text-base">Programs</p>
          </div>
      </div>

      {#if popupVisible}
          <div class="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-opacity duration-300" 
                  on:click={() => popupVisible = false}></div>
          
          <div class="popup-content fixed z-50 bg-white shadow-2xl rounded-lg p-8 w-80 md:w-96 text-left 
                      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-100">
              <div class="relative pb-3 mb-5 border-b border-gray-200">
                  <h2 class="font-bold text-2xl text-gray-800 mt-3">Contributions Overview</h2>
              </div>
              
              <div class="text-sm space-y-4">
                  <p class="font-semibold text-base text-gray-700">Total Contributions and Savings to Date:</p>
                  
                  <div class="space-y-3">
                      {#each contributions as contribution}
                          <div class="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                              <span class="font-medium">{contribution.name}</span>
                              <span class="font-semibold text-red-600">${contribution.amount.toLocaleString()}</span>
                          </div>
                      {/each}
                  </div>
                  
                  <div class="mt-6 pt-4 border-t border-gray-200">
                      <div class="flex justify-between items-center">
                          <span class="font-bold text-lg text-gray-800">Total Value</span>
                          <span class="font-bold text-lg text-red-600">${totalContributions.toLocaleString()}</span>
                      </div>
                  </div>
              </div>
              
              <div class="mt-8 flex justify-end">
                  <button class="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500" 
                              on:click={() => popupVisible = false}>
                      Close
                  </button>
              </div>
              
              <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100" 
                              on:click={() => popupVisible = false}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </div>
      {/if}
  </div>
</main>

<style>
  .font-serif {
      font-family: "Rasa", serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;
  }
</style>