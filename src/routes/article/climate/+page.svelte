<script>
  export let title = "A Warming World: The Unfolding Crisis of Climate Change";
  export let description = "An exploration of the escalating impacts of climate change and the urgent need for collective action.";

  import Image01 from "../../../lib/images/articleImages/insideImages/climate1.jpg";
  import Image02 from "../../../lib/images/articleImages/insideImages/climate2.jpg";
  

</script>

<main class="py-8 px-4 text-justify">
<img src={Image01} alt="" class="w-full">

  <!-- Title and Description -->
  <header class="my-12 grid grid-cols-2 items-center gap-12">
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
        The relentless progression of climate change continues to manifest in alarming ways, with 2024 on track to surpass 2023 as the hottest year in recorded history. This unprecedented heat has not merely set temperature records—it has also intensified a series of catastrophic weather events, pushing humanity to confront the escalating consequences of a warming planet.
      </p>
    </article>

    <!-- Spain as a Case Study -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Spain: A Microcosm of Global Challenges</h2>
      <p class="text-lg text-gray-600 mt-2">
        Spain serves as a stark microcosm of this global challenge. The nation has endured a trifecta of extreme heat waves, devastating wildfires, and severe floods within a single year. In October, Valencia faced an extraordinary deluge, resulting in one of Europe’s deadliest floods since 1967. The human toll—measured in lives lost, homes destroyed, and livelihoods upended—has sparked widespread outrage, with citizens demanding accountability from local and national governments for perceived shortcomings in disaster preparedness and response.
      </p>
    </article>

    <!-- Global Impact -->
    <article class="grid grid-cols-2 gap-8 items-center">
                <div class="flex justify-center">
            <img src={Image02} alt="" class="">
        </div>
        <div>
            <h2 class="text-3xl font-semibold text-gray-800 text-left">Global Impact</h2>
            <p class="text-lg text-gray-600 mt-2">
                Globally, the story is no less extreme. Severe rainfalls intensified hurricanes, and relentless droughts have brought havoc across continents. Thousands of lives have been claimed by heat waves alone, while billions of dollars in economic damages strain already fragile economies.
              </p>
        </div>

    </article>

    <!-- Scientific Evidence -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">The Science Behind Climate Change</h2>
      <p class="text-lg text-gray-600 mt-2">
        From a scientific perspective, the evidence linking these phenomena to human-induced climate change is unequivocal. The warming of the planet has amplified the water cycle, fueling more intense storms and accelerating sea-level rise.
      </p>
    </article>

    <!-- The Role of Technology -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">The Role of Technology</h2>
      <p class="text-lg text-gray-600 mt-2">
        Climate-resilient infrastructure, early warning systems for extreme weather, and advances in carbon capture technology represent tangible steps toward mitigation. Urban planning initiatives that prioritize green spaces and water conservation can help communities withstand future climate shocks.
      </p>
    </article>

    <!-- Conclusion -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Conclusion</h2>
      <p class="text-lg text-gray-600 mt-2">
        The implications of inaction are stark. Yet, within this challenge lies an opportunity: the chance to redefine humanity’s relationship with the planet and create a legacy of sustainability for future generations.
      </p>
    </article>
    <div class="text-sm border-t py-6 space-y-1">
        <p class="">Citations</p>
        <ul class="text-xs space-y-2 font-thin">
        
            <li>
                <a href="https://wmo.int/news/media-centre/climate-change-indicators-reached-record-levels-2023-wmo" target="_blank">
                    https://wmo.int/news/media-centre/climate-change-indicators-reached-record-levels-2023-wmo
                </a>
            </li>
            <li>
                <a href="defenders.org/issues/combating-climate-change" target="_blank">
                    defenders.org/issues/combating-climate-change
                </a>
            </li>
            <li>
                <a href="discoveringantarctica.org.uk/climate-change/impacts-of-climate-change" target="_blank">
                    discoveringantarctica.org.uk/climate-change/impacts-of-climate-change
                </a> 

            </li>
        </ul>
    </div>
  </section>
</main>

<style>
  /* Optional Tailwind custom styles can go here */
</style>
