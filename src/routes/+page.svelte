
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

    import Article01 from "../lib/images/MediaImages/article01.png";
    import Article03 from "../lib/images/homePageImages/article2.jpg";
    import Article02 from "../lib/images/homePageImages/article3.jpg";
    import Article04 from "../lib/images/homePageImages/article4.jpg";

    import Article05 from "../lib/images/MediaImages/Stem.png";

  const articles = [
    {
      href: "/article/climate",
      imgSrc: ClimateImage,
      altText: "Climate Change Image",
      category: "Article",
      title: "A Warming World: The Unfolding Crisis of Climate Change"
    },
    {
      href: "/article/shifts",
      imgSrc: Article02,
      altText: "Middle East Transformations",
      category: "Article",
      title: "Middle East: Transformations and Their Global Reverberations"
    },
    {
      href: "/article/peace",
      imgSrc: Article03,
      altText: "Global Peace Image",
      category: "Article",
      title: "Global Conflicts: The Ongoing Struggle for Peace"
    },
    {
      href: "/article/solar",
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
<main>

    <div class="">
    <!-- Hero Div -->
    <div class=" px-8">
        <!-- Slogan- Unite to create a future of lasting value -->
        <h1 class="text-7xl w-[800px] leading-[4.5rem] rasa ">
            Unite to create a future of lasting value
        </h1>
        <!-- Hyperlinked Text under slogan- Learn about empowerment and innovation to create lasting change for tomorrow. -->
        <p class="mt-5 text-xl border-b-2 w-[725px]  border-black">
            <a href="/">
                Learn about empowerment and innovation to create lasting change for tomorrow.
            </a>
        </p>
    </div>
    <!-- Video- 3 frame video  -->
    <div class="mt-20">
        <video loop muted autoplay width="1920">
            <source src={Video} type="video/mp4">
        </video>
            <!-- Hyperlink Text under video- Discover Solace Globals Philanthropy  to explore giving opportunities and make an impact. -->
        <p class="mt-5 text-md font-medium underline px-8">
            <a href="/">
                Learn how to make a difference
            </a>
        </p>
    </div>
    <!-- Featured Insights - article names - chess is a catalyst for knowledge, how ai effects education, robotics, climate change  -->
    <div class="mt-20">
        <div>
            <p class="text-4xl rasa">
                Featured Insights
            </p>
        </div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
    
    
    <div class="my-16 border-t-2"></div>

<!-- Partners of Solace Global- has text - How does the work of our partners come to life? How does that work create potential around the world? Watch, read, and experience the stories of good people doing great things that can lead to even greater things. -->
    <div class="grid grid-cols-5">
        <div class="col-span-3">
                    <div class="grid grid-cols-3 col-span-6 gap-8">
                        <div class="relative w-full aspect-square">
                            <img 
                                src={Sponsor01} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover "
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={Sponsor02} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={Sponsor03} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover "
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={Sponsor04} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover "
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={Sponsor05} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div class="relative w-full aspect-square">
                            <img 
                                src={Sponsor06} 
                                alt="Naihati New Life Society" 
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>

        </div>
        <div class="col-span-2">
            <p class="text-3xl px-8 my-5 ">Partners of <span class="font-semibold">Solace Global</span></p>
            <p class="px-8 mt-7">How does the work of our partners come to life? How does that work create potential around the world? Watch, read, and experience the stories of good people doing great things that can lead to even greater things.</p>
            <!-- Button under Partners of Solace Global (learn more)-  Legacy Homes, Project World Impact,Undefined Robotics, pinkberry, hackclub, shanti bhavan, + info -->
            <a href="/partners">
                <button class="mt-12 ml-8 transition border-2 border-black text-black py-3 px-9 rounded hover:text-white hover:bg-stone-800 hover:border-stone-800">Learn More</button>
            </a>
        </div>
    </div>
    
    <!-- Perspectives- Explore the latest updates, research, and stories from the foundation, Solace Global weekly updates newsletter. -->
    <div class="bg-zinc-900 px-32 py-16 text-white mt-20">
        <div class="grid grid-cols-2 justify-between items-center">
            <p class="flex justify-start font-medium text-5xl rasa">Perspectives</p>
            <div class="flex justify-end items-center text-xs font-medium">
                <p class="underline ">Learn More About Perspectives</p>
            </div>
        </div>
        <p class="my-8 text-xs">Explore the latest updates, research, and stories from the foundation, Solace Global weekly updates newsletter.</p>
    
    <div class="grid grid-cols-5 gap-8">
        <div class="col-span-3 hover:scale-105 transition  p-6 rounded-lg shadow-2xl shadow-gray-800">
            <a href="/article/trap">
                <img src={Article01} alt="Article" class="" >
                <div class="mt-6">
                    <p class="mb-3 font-semibold text-2xl rasa">Breaking Free from the Comparison Trap</p>
                    <p class="text-sm">Explore how overcoming societal pressures and embracing personal passions can redefine the path to success. </p>
                </div>
            </a>
        </div>
        <!-- Learn More Perspectives top right button- BLACK PAGE Latest update on importance issues offering diverse insights around the world, image with quote - Knowledge is the light that guides us through the darkness., under image - title - Unlocking true understanding through knowledge and impartiality. Next to image have newsletter subscription, 10 articles not on main page under image and newsletter. Videos under not on main page, under that have another sign up for newsletter(Subscribe to the The Wisdom), Partners again, -->
        <div class="col-span-2">
            <div>
                <a href="/article/stem">
                    <img src={Article05} alt="Article" class="w-96">
                    <p class="mt-3 font-semibold text-2xl rasa">Exploring STEM: A Journey of Curiosity and Innovation</p>
                </a>
            </div>
<div class="smore-list-subscribe-form p-6 max-w-md mx-auto bg-white rounded-md shadow-md mt-8">
    <form action="https://secure.smore.com/app/lists/confirm_subscribe" method="POST" class="space-y-5">
        <input type="hidden" name="list_id" value="676a51b695e1b379806173ff">

        <h3 class="text-2xl font-semibold text-gray-700 rasa">Subscribe To Our Newsletter</h3>

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
                class="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:ring-slate-400 focus:ring focus:border-slate-400 text-gray-900 px-3 py-2"
                placeholder="you@example.com"
            />
        </div>

        <div class="">
            <button
                type="submit"
                name="subscribe"
                id="smore-subscribe-button"
                class="mt-4 inline-flex items-center justify-center rounded-md bg-zinc-800 px-6 py-3 font-semibold text-white hover:bg-black transition"
            >
                Subscribe
            </button>
        </div>
    </form>
</div>
        </div>
    </div>
    </div>
    <div class="my-16"></div>

    <!-- Foundation Facts- 6650+ people affected, 3400+ - money, 50+ students, 11+ programs  -->
    <div class="">
        <div class="mb-8">
            <p class="text-4xl rasa text-center">Foundation Facts</p>
        </div>
        <div class="grid grid-cols-4 gap-8 text-center text-7xl">
            <div><div class="rasa">6650+</div> <p class="mt text-base">People affected</p> </div>
            <div><div class="rasa">$3400+</div> <p class="mt text-base">Amount raised</p> </div>
            <div><div class="rasa">50+</div> <p class="mt text-base">Volunteers</p> </div>
            <div><div class="rasa">11+</div> <p class="mt text-base">Programs</p> </div>
        </div>
    </div>
            <!-- End of Content Div -->

</main>



