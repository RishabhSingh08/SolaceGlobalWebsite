<script>
  export let title = "Parker Solar Probe's Historic Achievement: A New Frontier in Solar Research";
  export let description = "NASA's Parker Solar Probe reached a historic milestone in 2024, becoming the closest man-made object to the Sun, offering new insights into solar phenomena and space exploration.";

  import Image01 from "../../../lib/images/articleImages/insideImages/solar1.jpg"
  import Image02 from "../../../lib/images/articleImages/insideImages/solar2.jpg"
</script>

<main class="py-8 px-4 text-justify">
    <img src={Image01} class="w-full" alt="">
  <!-- Title and Description -->
  <header class="my-8 grid grid-cols-2 items-center gap-12">
    <h1 class="text-4xl font-semibold text-gray-800 text-left">{title}</h1>
    <p class="mt-4 text-lg text-gray-600">{description}</p>
  </header>

  <div class="w-full border-b mb-12"></div>

  <!-- Article Sections -->
  <section class="max-w-3xl mx-auto space-y-8">

    <!-- Introduction -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Introduction</h2>
      <p class="text-lg text-gray-600 mt-2">
        In 2024, NASA's Parker Solar Probe made history by surpassing its own record, becoming the closest man-made object to the Sun. On December 24, 2024, it reached an unprecedented 6.1 million kilometers from the Sun’s surface. This achievement marks a breakthrough in solar research and demonstrates humanity’s ability to explore deeper into space, shedding light on phenomena that affect both the solar system and Earth.
      </p>
    </article>

    <!-- Mission Goals -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Mission Goals</h2>
      <p class="text-lg text-gray-600 mt-2">
        Launched in 2018, the Parker Solar Probe was designed to study the Sun’s outer atmosphere and the processes driving solar winds and space weather. By approaching the Sun closer than any previous spacecraft, it can gather data on solar activity, such as solar flares and coronal mass ejections, which impact satellite communications, power grids, and technological systems on Earth.
      </p>
    </article>

    <!-- Significance of Solar Research -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">The Significance of Solar Research</h2>
      <p class="text-lg text-gray-600 mt-2">
        The Parker Solar Probe’s proximity to the Sun allows it to collect data previously inaccessible due to the extreme heat and radiation. Equipped with advanced instruments, it can measure magnetic fields, plasma, and energetic particles, providing crucial insights into solar phenomena and their effects on Earth. Understanding solar flares and space weather will improve our ability to predict and mitigate their impact on global infrastructure.
      </p>
    </article>

    <!-- Technological Advancements -->
    <article class="grid-cols-2 grid items-center gap-12">
        <div>
            <h2 class="text-3xl font-semibold text-gray-800 text-left">Technological Advancements in Space Exploration</h2>
            <p class="text-lg text-gray-600 mt-2">
              The mission of the Parker Solar Probe highlights the technological advances that make such close exploration of the Sun possible. The spacecraft is protected by cutting-edge heat shields and sophisticated instruments that enable it to gather unprecedented data. These advancements are pushing the boundaries of space exploration, opening new possibilities for future missions targeting other celestial bodies and phenomena.
            </p>
        </div>
        <div>
            <img src={Image02} alt="" class="w-full">
        </div>
    </article>

    <!-- International Collaboration -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">International Collaboration and Space Policy</h2>
      <p class="text-lg text-gray-600 mt-2">
        The Parker Solar Probe mission is a prime example of the importance of international collaboration in space exploration. In addition to NASA’s leadership, the mission involved contributions from various global institutions and organizations. As space exploration advances, international cooperation becomes increasingly crucial in overcoming challenges related to costs, technology, and logistics.
      </p>
    </article>

    <!-- A New Era of Space Exploration -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">A New Era of Space Exploration</h2>
      <p class="text-lg text-gray-600 mt-2">
        The Parker Solar Probe's milestone is a major step toward understanding the Sun and expanding our knowledge of the solar system. Its success is a symbol of human ingenuity and perseverance. As we continue exploring space, this achievement will inspire future generations of scientists, engineers, and explorers, and open the door to new discoveries and missions aimed at understanding the universe.
      </p>
    </article>

    <!-- Conclusion -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Conclusion</h2>
      <p class="text-lg text-gray-600 mt-2">
        The Parker Solar Probe’s journey closer to the Sun marks a historic achievement in space exploration. Its data will provide invaluable insights into solar phenomena and space weather, helping to shape future missions and technological advancements. As we continue to unlock the mysteries of the cosmos, this mission will remain a pivotal moment in the history of space exploration.
      </p>
    </article>
<div class="text-sm border-t py-6 space-y-1">
    <p class="">Citations</p>
    <ul class="text-xs space-y-2 font-thin">
    
        <li>
            <a href="https://news.uchicago.edu/story/nasa-solar-probe-named-after-uchicago-scientist-begins-historic-mission" target="_blank">
                NASA’s Solar Probe, Named After UChicago Scientist, Begins Historic Mission
            </a>
        </li>
        <li>
            <a href="https://www.yahoo.com/news/nasas-solar-probe-fly-closer-130351562.html" target="_blank">
                NASA’s Solar Probe to Fly Closer to the Sun than Ever Before
            </a>
        </li>
        <li>
            <a href="https://www.npr.org/2024/11/15/g-s1-33748/nasa-parker-solar-probe-mission-to-the-sun" target="_blank">
                NASA's Parker Solar Probe Mission to the Sun
            </a>
        </li>

    </ul>
</div>

  </section>
</main>

<style>
  /* Optional Tailwind custom styles can go here */
</style>
