<script>
    import OurStoryPic from "../../../lib/images/article1.png";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<style>
  .rasa {
    font-family: "Rasa", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  .cFont {
    font-family: "Caveat", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
</style>

<main class="container mx-auto px-4 py-8">
  <div class="space-y-8 md:space-y-16">
    <!-- Our Story Header -->
    <p class="text-center text-4xl md:text-6xl rasa font-bold text-black">
      Our Story
    </p>

    <!-- Main Image - Responsive width -->
    <div class="w-full">
      <img src={OurStoryPic} alt="Our Story" class="w-full h-auto object-cover rounded-lg shadow-md">
    </div>

    <!-- Main Content -->
    <div class="flex flex-col md:grid md:grid-cols-12 gap-8">
      <!-- Sidebar - Full width on mobile, side column on desktop -->
      <div class="w-full md:col-span-3 md:col-start-2 md:col-end-5 md:mb-0">
        <div class="md:space-y-16">
          <div class="text-lg md:text-xl md:mb-0">
            <a href="/" class="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <i class="fa-solid fa-arrow-left"></i>
              <span class="pb-1 border-b border-black">Home</span>
            </a>
          </div>
          
          <!-- Video section - Shows on both mobile and desktop -->
           <div class="hidden md:block">
               <div class="space-y-0 mt-8 md:mt-32 max-w-xs md:space-y-2 ">
                 <p class="rasa text-xl md:text-2xl">Watch the latest videos to learn more</p>
                 <p class="text-base">Explore the latest videos from Solace Global.</p>
                 <p class="underline text-lg">
                   <a href="https://www.youtube.com/@SolaceGlobalNPO1" class="hover:text-gray-600 transition-colors">
                     Watch our videos
                   </a>
                 </p>
               </div>
           </div>
        </div>
      </div>

      <!-- Our Story Content - Full width on mobile -->
      <div class="w-full md:col-span-7 md:col-start-5 md:col-end-12">
        <div class="space-y-6">
          <p class="text-2xl md:text-4xl rasa">Coming together as teenagers to create an initiative that to aspire real change in society,</p>
          
          <div class="space-y-4 text-zinc-700">
            <p class="text-base md:text-lg">
              Solace Global was born out of a shared desire among a group of teenagers to create positive change in society. As young people, we saw the growing challenges facing communities—whether it was limited access to education, environmental issues, or the digital divide—and we knew we couldn't just stand by.
            </p>
            <p class="text-base md:text-lg">
              We believed that change could start with us. Motivated by a passion for helping others and a deep commitment to social good, we founded Solace Global to address these challenges through outreach, education, and collaboration. We envisioned an organization that would not only provide resources to those in need but also empower individuals to take action and create lasting change in their own communities.
            </p>
            <p class="text-base md:text-lg">
              From the beginning, we understood that the world's disparities are interconnected. That's why we didn't limit our focus to one specific issue. We knew that challenges like education, technology, and sustainability don't exist in isolation; they are part of a larger system. Solace Global was designed to address a wide range of needs, ensuring that we could make a holistic impact on the communities we serve. 
            </p>
            <p class="text-base md:text-lg">
              Whether it's improving digital literacy, supporting environmental sustainability, or providing access to education, we've always believed that true change comes from addressing multiple areas simultaneously.
            </p>
            <p class="text-base md:text-lg">
              Solace Global has always been about more than just providing aid—it's about fostering a sense of global responsibility and shared humanity. 
            </p>
            <p class="text-base md:text-lg">
              Our focus has ranged from digital literacy and environmental sustainability to offering support for underserved communities in various parts of the world. We started small, with grassroots efforts and a team of dedicated teenagers, but our commitment to making a difference quickly grew into an international movement. 
            </p>
            <p class="text-base md:text-lg">
              Solace Global is a reflection of our belief that when young people come together, they can drive impactful change, challenge the status quo, and create a brighter, more inclusive future for everyone. We're making a change. That's what drives us.
            </p>
          </div>
          
          <div class="cFont text-2xl md:text-4xl mt-6">
            Nishant Sinari and the Solace Global Team
          </div>
        </div>
      </div>
    </div>
  </div>
</main>