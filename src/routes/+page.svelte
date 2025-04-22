<script>
    import Icon from "../lib/images/SolaceGlobalLogo.png";
    import Video from "../lib/images/ActualActualFinalVideo.mp4";
    import ClimateImage from "../lib/images/homePageImages/climate.png";
    import ArticleImage from "../lib/images/article1.png";
    import PartnersImage from "../lib/images/PartnersImage.png";


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

    import Article01 from "../lib/images/MediaImages/article01.png";
    import Article03 from "../lib/images/homePageImages/article2.jpg";
    import Article02 from "../lib/images/homePageImages/article3.jpg";
    import Article04 from "../lib/images/homePageImages/article4.jpg";
    import Article05 from "../lib/images/MediaImages/Stem.png";

  const articles = [
    {
      href: "/article/bridging-the-stem-gap-empowering-impoverished-communities-through-education",
      imgSrc: ClimateImage,
      altText: "Climate Change Image",
      category: "Article",
      title: "Bridging the STEM Gap: Empowering Impoverished Communities Through Education"
    },
    {
      href: "/article/existentialism-in-modern-society-finding-meaning-in-an-age-of-distraction",
      imgSrc: Article02,
      altText: "Middle East Transformations",
      category: "Article",
      title: "Existentialism in Modern Society: Finding Meaning in an Age of Distraction"
    },
    {
      href: "/article/combating-epidemics-how-solace-globals-donation-platform-facilitates-targeted-responses-to-health-emergencies",
      imgSrc: Article03,
      altText: "Global Peace Image",
      category: "Article",
      title: "Combating Epidemics: How Solace Global's Donation Platform Facilitates Targeted Responses to Health Emergencies"
    },
    {
      href: "/article/the-ethics-of-technological-advancement-balancing-innovation-with-moral-responsibility",
      imgSrc: Article04,
      altText: "Solar Research Image",
      category: "Article",
      title: "The Ethics of Technological Advancement: Balancing Innovation with Moral Responsibility"
    }
  ];

  import { onMount } from 'svelte';
  
  let popupVisible = false;
  let popupTrigger;
  
  function showPopup() {
    popupVisible = true;
    // Add scroll event listener when popup is opened
  }
  
  function hidePopup() {
    popupVisible = false;
    // Remove scroll listener when popup is closed
  }
  
  function handleScroll() {
    // Close popup on scroll
    hidePopup();
  }
  
  function handleClickOutside(event) {
    if (popupVisible && popupTrigger && !popupTrigger.contains(event.target) && !event.target.closest('.popup-content')) {
      hidePopup();
    }
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" media="all" href="https://cdn.smore.com/css/list-form-signup.2981f49d.css"/>
</svelte:head>

<style>
.rasa {
  font-family: "Rasa", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>

<main class="container mx-auto">
    <!-- Hero Section -->
    <div class="px-4 md:px-8 mt-6 md:mt-10">
        <!-- Slogan -->
        <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl rasa leading-tight md:leading-snug lg:leading-[4.5rem] max-w-full md:max-w-3xl lg:max-w-4xl">
            Unite to create a future of lasting value
        </h1>
        
        <!-- Hyperlinked Text under slogan -->
        <p class="mt-3 md:mt-5 text-base md:text-lg lg:text-xl border-b-2 border-black pb-2 max-w-full md:max-w-2xl lg:max-w-[725px]">
            <a href="/about/how-we-work">
                Learn about empowerment and innovation to create lasting change for tomorrow.
            </a>
        </p>
    </div>
    
    <!-- Video Section -->
    <div class="mt-10 md:mt-20">
        <div class="relative w-full overflow-hidden">
            <video loop muted autoplay class="w-full">
                <source src={Video} type="video/mp4">
            </video>
        </div>
        <!-- Hyperlink Text under video -->
        <p class="mt-3 md:mt-5 text-sm md:text-md font-medium underline px-4 md:px-8">
            <a href="/donate">
                Learn how to make a difference
            </a>
        </p>
    </div>

    <!-- Featured Insights Section -->
    <div class="mt-12 md:mt-20 px-4 md:px-8">
        <div>
            <p class="text-2xl md:text-3xl lg:text-4xl rasa">
                Featured Insights
            </p>
        </div>
        
        <!-- Article Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-12">
            {#each articles as { href, imgSrc, altText, category, title }}
                <a 
                    href={href} 
                    class="group block bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
                >
                    <img 
                        src={imgSrc} 
                        alt={altText} 
                        class="w-full h-40 object-cover"
                    />
                    <div class="p-4">
                        <span class="block text-sm font-semibold text-gray-500 uppercase mb-2">
                            {category}
                        </span>
                        <h3 class="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                            {title}
                        </h3>
                    </div>
                </a>
            {/each}
        </div>
    </div>
    
    <div class="my-10 md:my-16 border-t-2 mx-4 md:mx-8"></div>

    <!-- Partners Section -->
    <div class="px-4 md:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <!-- Partners Grid -->
<div class="lg:col-span-3">
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
        {#each sponsors as sponsor}
            <div class="relative w-full aspect-square">
                <img 
                    src={sponsor.image} 
                    alt={sponsor.alt} 
                    class="absolute inset-0 w-full h-full object-contain p-2"
                />
            </div>
        {/each}
    </div>
</div>
            
            <!-- Partners Text -->
            <div class="lg:col-span-2 mt-8 lg:mt-0">
                <p class="text-2xl md:text-3xl mb-4 md:mb-5">Partners of <span class="font-semibold">Solace Global</span></p>
                <p class="mt-2 md:mt-7">How does the work of our partners come to life? How does that work create potential around the world? Watch, read, and experience the stories of good people doing great things that can lead to even greater things.</p>
                
                <!-- Button -->
                <a href="/partners">
                    <button class="mt-6 md:mt-12 transition border-2 border-black text-black py-2 md:py-3 px-6 md:px-9 rounded hover:text-white hover:bg-stone-800 hover:border-stone-800">Learn More</button>
                </a>
            </div>
        </div>
    </div>
    
    <!-- Perspectives Section -->
    <div class="bg-zinc-900 px-4 sm:px-8 md:px-16 lg:px-32 py-10 md:py-16 text-white mt-12 md:mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
            <p class="flex justify-start font-medium text-3xl md:text-4xl lg:text-5xl rasa">Perspectives</p>
        </div>
        
        <p class="my-4 md:my-8 text-xs">Explore the latest updates, research, and stories from the foundation, Solace Global weekly updates newsletter.</p>
        
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
            <!-- Main Article -->
            <div class="lg:col-span-3 transition p-4 md:p-6 rounded-lg shadow-2xl hover:shadow-gray-800">
                <a href="/perspective/breaking-free-from-the-comparison-trap">
                    <img src="https://images.unsplash.com/photo-1739489248003-d57fc900afbb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Article" class="w-full">
                    <div class="mt-4 md:mt-6">
                        <p class="mb-2 md:mb-3 font-semibold text-xl md:text-2xl lg:text-3xl rasa">Breaking Free from the Comparison Trap</p>
                        <p class="text-sm">Explore how overcoming societal pressures and embracing personal passions can redefine the path to success.</p>
                    </div>
                </a>
            </div>
            
            <!-- Secondary Article and Newsletter -->
            <div class="lg:col-span-2">
                <div class=" transition p-2 md:p-2 rounded-lg shadow-2xl hover:shadow-gray-800">
                    <a href="/perspective/shaping-future-leaders-through-interactive-stem-education" class="space-y-4">
                        <img src="https://www.shutterstock.com/image-photo/diverse-school-children-students-build-600nw-2036186204.jpg" alt="Article" class="w-full">
                        <div class="p-2">
                            <p class="mb-2 md:mb-3 font-semibold text-lg rasa">Shaping Future Leaders Through Interactive STEM Education
</p>
                        </div>
                    </a>
                </div>
                
                <!-- Newsletter Signup -->
                <div class="smore-list-subscribe-form p-4 md:p-6 max-w-full mx-auto bg-white rounded-md shadow-md mt-6 md:mt-8">
                    <form action="https://secure.smore.com/app/lists/confirm_subscribe" method="POST" class="space-y-4 md:space-y-5">
                        <input type="hidden" name="list_id" value="676a51b695e1b379806173ff">

                        <h3 class="text-xl md:text-2xl font-semibold text-gray-700 rasa">Subscribe To Our Newsletter</h3>

                        <div class="field-group">
                            <label for="smore-subscribe-name" class="block text-sm font-medium text-gray-600">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="smore-subscribe-name"
                                class="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-slate-400 focus:border-slate-400 text-gray-900 px-3 py-2"
                                placeholder="Your Name"
                            />
                        </div>

                        <div class="field-group">
                            <label for="smore-subscribe-email" class="block text-sm font-medium text-gray-600">Email Address <span class="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="email"
                                id="smore-subscribe-email"
                                required
                                class="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-slate-400 focus:border-slate-400 text-gray-900 px-3 py-2"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                name="subscribe"
                                id="smore-subscribe-button"
                                class="mt-2 md:mt-4 inline-flex items-center justify-center rounded-md bg-zinc-800 px-4 md:px-6 py-2 md:py-3 font-semibold text-white hover:bg-black transition"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <div class="my-10 md:my-16"></div>

    <!-- Foundation Facts Section -->
    <div class="px-4 md:px-8 mb-12 md:mb-20">
        <div class="mb-6 md:mb-8">
            <p class="text-2xl md:text-3xl lg:text-4xl rasa text-center">Foundation Facts</p>
        </div>
        
<div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 text-center">
  <div class="p-4 relative">
    <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl rasa">$36000+</div>
    <p class="mt-2 text-sm md:text-base underline cursor-pointer hover:text-red-600 transition-colors" 
      bind:this={popupTrigger}
      on:click|stopPropagation={showPopup}>
      Raised in value
    </p>
  </div>
  
  <div class="p-4">
    <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl rasa">8000+</div>
    <p class="mt-2 text-sm md:text-base">People affected</p>
  </div>
  
  <div class="p-4">
    <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl rasa">6+</div>
    <p class="mt-2 text-sm md:text-base">Countries in operation</p>
  </div>
  
  <div class="p-4">
    <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl rasa">50+</div>
    <p class="mt-2 text-sm md:text-base">Volunteers</p>
  </div>
  
  <div class="p-4">
    <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl rasa">11+</div>
    <p class="mt-2 text-sm md:text-base">Programs</p>
  </div>
</div>

{#if popupVisible}
  <!-- Overlay background with subtle fade-in effect -->
  <div class="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-opacity duration-300" 
       on:click={hidePopup}></div>
  
  <!-- Elegantly styled popup -->
  <div class="popup-content fixed z-50 bg-white shadow-2xl rounded-lg p-8 w-80 md:w-96 text-left 
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-100">
    <!-- Title with accent bar -->
    <div class="relative pb-3 mb-5 border-b border-gray-200">
      <div class="absolute left-0 top-0 w-12 h-1  rounded-full"></div>
      <h2 class="font-bold text-2xl text-gray-800 mt-3">Contributions Overview</h2>
    </div>
    
    <!-- Content with improved typography -->
    <div class="text-sm space-y-4">
      <p class="font-semibold text-base text-gray-700">Total Contributions and Savings to Date:</p>
      
      <div class="space-y-3">
        <div class="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
          <span class="font-medium">Google Workspace</span>
          <span class="font-semibold text-red-600">$6,000</span>
        </div>
        
        <div class="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
          <span class="font-medium">Code.org Partnership</span>
          <span class="font-semibold text-red-600">$3,000</span>
        </div>
        
        <div class="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
          <span class="font-medium">Pinkberry Partnership</span>
          <span class="font-semibold text-red-600">$4,050</span>
        </div>
        
        <div class="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
          <span class="font-medium">Hack Club Legal Services</span>
          <span class="font-semibold text-red-600">$12,500</span>
        </div>
        
        <div class="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
          <span class="font-medium">Stripe Banking</span>
          <span class="font-semibold text-red-600">$350</span>
        </div>
        
        <div class="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
          <span class="font-medium">Donations</span>
          <span class="font-semibold text-red-600">$1,000</span>
        </div>
        
        <div class="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
          <span class="font-medium">Undefined Robotics (Parts)</span>
          <span class="font-semibold text-red-600">$10,000</span>
        </div>
      </div>
      
      <!-- Total sum with highlight -->
      <div class="mt-6 pt-4 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <span class="font-bold text-lg text-gray-800">Total Value</span>
          <span class="font-bold text-lg text-red-600">$36,900</span>
        </div>
      </div>
    </div>
    
    <!-- Footer with better button styling -->
    <div class="mt-8 flex justify-end">
      <button class="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 
                     shadow-md hover:shadow-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500" 
              on:click={hidePopup}>
        Close
      </button>
    </div>
    
    <!-- Improved close button -->
    <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100" 
            on:click={hidePopup}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
{/if}
    </div>
</main>