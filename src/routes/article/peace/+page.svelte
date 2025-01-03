<script>
  export let title = "Global Conflicts: The Ongoing Struggle for Peace";
  export let description = "An in-depth analysis of ongoing conflicts across the globe, their impact on populations, and the urgent need for international engagement.";

    import Image01 from "../../../lib/images/articleImages/insideImages/peace1.jpg";
    import Image02 from "../../../lib/images/articleImages/insideImages/peace2.jpg";

</script>

<main class="py-8 px-4 text-justify">
    <img src={Image01} alt="" class="w-full">
  <!-- Title and Description -->
  <header class="mt-8 mb-6  grid grid-cols-2 items-center gap-12">
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
        Across the globe, numerous conflicts continue to affect populations, resulting in devastation and exacerbating humanitarian crises. These conflicts, which span diverse regions of the world, are characterized by violence, displacement, and socioeconomic instability. Each area faces unique challenges, but they all contribute to widespread humanitarian needs requiring urgent attention.
      </p>
    </article>

    <!-- Africa -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Africa: A Continent Grappling with Protracted Conflicts</h2>
      <p class="text-lg text-gray-600 mt-2">
        Africa has long been a hotspot for conflicts rooted in history, politics, and economics. From the Anglophone Crisis in Cameroon to the Kivu conflict in the Democratic Republic of the Congo (DRC), and the insurgencies in Mozambique and Nigeria, the continent faces devastating humanitarian consequences. These include mass displacement, destruction of infrastructure, and loss of lives. Despite ongoing efforts, sustainable resolutions remain elusive.
      </p>
    </article>

    <!-- Americas -->
    <article class="grid grid-cols-2 gap-8 items-center">
        <div>
            <h2 class="text-3xl font-semibold text-gray-800 text-left">Americas: Continued Violence and Instability</h2>
            <p class="text-lg text-gray-600 mt-2">
              Central and South America also face significant conflicts, such as Mexico’s enduring drug war. This violence disrupts communities, fuels corruption, and undermines governance. Its humanitarian toll includes displacement, economic instability, and cross-border crime, necessitating comprehensive strategies for resolution and recovery.
            </p>
        </div>
        <div>
            <img src={Image02} alt="" class="w-full">
        </div>
    </article>

    <!-- Humanitarian Impact -->
    <article>
      <h2 class="text-3xl font-semibold text-gray-800 text-left">Humanitarian Impact and Opportunities for Engagement</h2>
      <p class="text-lg text-gray-600 mt-2">
        The global consequences of these conflicts are profound, with millions displaced and essential services disrupted. The international community must focus on addressing root causes, providing humanitarian aid, and fostering peacebuilding initiatives. Through diplomacy, conflict resolution, and sustained support, we can alleviate suffering and promote long-term stability.
      </p>
    </article>
<div class="text-sm border-t py-6 space-y-1">
    <p class="">Citations</p>
    <ul class="text-xs space-y-2 font-thin">
    
        <li>
            <a href="https://worldrelief.org/meblog-3-neglected-global-humanitarian-crises-to-know-about-in-2023/" target="_blank">
                3 Neglected Global Humanitarian Crises to Know About in 2023
            </a>
        </li>
        <li>
            <a href="https://media.cnn.com/api/v1/images/stellar/prod/230916034153-01-libya-flood-0916.jpg?c=original" target="_blank">
                Libya Flood
            </a>
        </li>
        <li>
            <a href="https://www.care.org/news-and-stories/three-humanitarian-crises-you-should-know-about-in-2024/" target="_blank">
                Three Humanitarian Crises You Should Know About in 2024
            </a>
        </li>

    </ul>
</div>

  </section>
</main>

<style>
  /* Optional Tailwind custom styles can go here */
</style>
