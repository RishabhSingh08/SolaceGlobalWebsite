<script>
    import Icon from "../lib/images/SolaceGlobalLogo.png";
    import Video from "../lib/images/ActualActualFinalVideo.mp4";
    import ClimateImage from "../lib/images/homePageImages/climate.png";
    import ArticleImage from "../lib/images/article1.png";
    import PartnersImage from "../lib/images/PartnersImage.png";

    import Sponsor01 from "../lib/images/Sponsors/Hack_Club_Flag_Standalone.png";
    import Sponsor02 from "../lib/images/Sponsors/Pinkberry_logo.png";
    import Sponsor03 from "../lib/images/Sponsors/projectworld.jpeg";
    import Sponsor04 from "../lib/images/Sponsors/senior.png";
    import Sponsor05 from "../lib/images/Sponsors/shanti.png";
    import Sponsor06 from "../lib/images/Sponsors/undefined.png";
    import Sponsor07 from "../lib/images/Sponsors/amazon.png";

    const sponsors = [
        { image: Sponsor01, alt: "Hack Club" },
        { image: Sponsor02, alt: "Pinkberry" },
        { image: Sponsor03, alt: "Project World Impact" },
        { image: Sponsor04, alt: "Senior Partner" },
        { image: Sponsor05, alt: "Shanti Bhavan" },
        { image: Sponsor06, alt: "Undefined Robotics" },
        { image: Sponsor07, alt: "Amazon" }
    ];

    import Article01 from "../lib/images/MediaImages/article01.png";
    import Article03 from "../lib/images/homePageImages/article2.jpg";
    import Article02 from "../lib/images/homePageImages/article3.jpg";
    import Article04 from "../lib/images/homePageImages/article4.jpg";
    import Article05 from "../lib/images/MediaImages/Stem.png";

  const articles = [
    {
      href: "/the-wisdom",
      imgSrc: ClimateImage,
      altText: "Climate Change Image",
      category: "Article",
      title: "A Warming World: The Unfolding Crisis of Climate Change"
    },
    {
      href: "/the-wisdom",
      imgSrc: Article02,
      altText: "Middle East Transformations",
      category: "Article",
      title: "Middle East: Transformations and Their Global Reverberations"
    },
    {
      href: "/the-wisdom",
      imgSrc: Article03,
      altText: "Global Peace Image",
      category: "Article",
      title: "Global Conflicts: The Ongoing Struggle for Peace"
    },
    {
      href: "/the-wisdom",
      imgSrc: Article04,
      altText: "Solar Research Image",
      category: "Article",
      title: "Parker Solar Probe's Historic Achievement: A New Frontier in Solar Research"
    }
  ];

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
            <div class="lg:col-span-3 hover:scale-105 transition p-4 md:p-6 rounded-lg shadow-2xl shadow-gray-800">
                <a href="/article/breaking-free-from-the-comparison-trap">
                    <img src={Article01} alt="Article" class="w-full">
                    <div class="mt-4 md:mt-6">
                        <p class="mb-2 md:mb-3 font-semibold text-xl md:text-2xl lg:text-3xl rasa">Breaking Free from the Comparison Trap</p>
                        <p class="text-sm">Explore how overcoming societal pressures and embracing personal passions can redefine the path to success.</p>
                    </div>
                </a>
            </div>
            
            <!-- Secondary Article and Newsletter -->
            <div class="lg:col-span-2">
                <div class="hover:scale-105 transition p-4 md:p-6 rounded-lg shadow-2xl shadow-gray-800">
                    <a href="/the-wisdom">
                        <img src={Article05} alt="Article" class="w-full">
                        <p class="mt-3 font-semibold text-xl md:text-2xl rasa">Exploring STEM: A Journey of Curiosity and Innovation</p>
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
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div class="p-4">
                <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl rasa">$20000+</div>
                <p class="mt-2 text-sm md:text-base">Donated Resources & Services</p>
            </div>
            <div class="p-4">
                <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl rasa">6650+</div>
                <p class="mt-2 text-sm md:text-base">People affected</p>
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
    </div>
</main>