<script>
  import stemHeader from "../../../lib/images/articleImages/insideImages/stemHeader.jpg";
  import graph from "../../../lib/images/articleImages/insideImages/GRAPH.png";

  export let title = "Exploring STEM: A Journey of Curiosity and Innovation";
  export let description = "A personal story of discovering the transformative power of STEM and finding purpose through exploration and creativity.";
</script>

<main class="py-8 px-4 text-justify">
  <div class="bg-red-500">
    <img src={stemHeader} alt="header" class="w-full">
  </div>
  <!-- Title and Description -->
  <header class="mb-12 grid grid-cols-2 items-center gap-12">
    <h1 class="text-4xl font-semibold text-gray-800 text-left">{title}</h1>
    <p class="mt-4 text-lg text-gray-600">{description}</p>
  </header>

  <!-- Article Sections -->
  <section class="max-w-3xl mx-auto space-y-8">

    <!-- Introduction -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Introduction</h2>
      <p class="text-lg text-gray-600 mt-2">
        “What do you want to major in? What do you want to be when you grow up?” These questions often shape the journeys of students as they navigate the uncertain transition from adolescence to adulthood. For some, the answers are clear, rooted in a lifelong passion. For others, the path is defined by exploration. With nearly 20% of high school students pursuing STEM fields, this dynamic area offers opportunities to revolutionize industries, tackle global challenges, and shape the future.
      </p>
    </article>

    <!-- STEM's Impact -->
     <div class="grid grid-cols-2 items-center">
       <article>
         <h2 class="text-3xl font-semibold text-gray-800 text-left">The Impact of STEM</h2>
         <p class="text-lg text-gray-600 mt-2">
           From life-saving medical breakthroughs to technologies connecting the globe, STEM’s influence is everywhere. These possibilities drew me to the field, inspiring a desire to contribute to transformative progress. STEM is not just a career path; it’s a powerful toolkit for solving real-world problems.
         </p>
       </article>
             <div>
        <img src={graph} alt="graph" class="w-full">
      </div>

     </div>

    <!-- My Journey Begins -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">The Beginning of My Journey</h2>
      <p class="text-lg text-gray-600 mt-2">
        My passion for STEM began in middle school with robotics. What started as a casual extracurricular soon became a profound learning experience. Building our first robot required creativity, patience, and teamwork. Debugging code turned into thrilling problem-solving, and the success of our creation solidified my love for STEM.
      </p>
    </article>

    <!-- High School and Broadening Horizons -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">High School: Broadening Horizons</h2>
      <p class="text-lg text-gray-600 mt-2">
        High school expanded my view of STEM. From robotics to personal coding projects, I discovered that STEM is more than technical skills. It’s a platform to tackle challenges, innovate, and make a difference. These experiences shaped my dream of becoming a problem solver and creating meaningful change.
      </p>
    </article>

    <!-- Lessons Learned -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Lessons and Inspiration</h2>
      <p class="text-lg text-gray-600 mt-2">
        The mentors, peers, and experiences along my journey taught me resilience, collaboration, and creativity. They showed me that failure is a stepping stone to success and that curiosity can lead to uncharted possibilities. These lessons define my approach to STEM and life.
      </p>
    </article>

    <!-- Conclusion -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Conclusion</h2>
      <p class="text-lg text-gray-600 mt-2">
        STEM has given me the tools to pursue my dreams and the determination to overcome obstacles. As I look forward, I am excited to explore new frontiers, push boundaries, and leave a legacy of progress. With curiosity and passion, the possibilities are truly limitless.
      </p>
    </article>

  </section>
</main>

<style>
  /* Optional Tailwind custom styles can go here */
</style>
