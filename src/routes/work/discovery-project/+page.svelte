<script>


    import image01 from "../../../lib/images/MediaImages/IMG_6224.jpg";
    import image02 from "../../../lib/images/MediaImages/kids.jpg";
    import image03 from "../../../lib/images/MediaImages/IMG_6585 (1).jpg";
    import image04 from "../../../lib/images/MediaImages/IMG_6596.jpg";
    import image05 from "../../../lib/images/MediaImages/IMG_6589.jpg";

    import discoveryImage1 from "../../../lib/images/discoveryImages/1.jpg";
    import discoveryImage2 from "../../../lib/images/discoveryImages/2.jpg";
    import discoveryImage3 from "../../../lib/images/discoveryImages/3.jpg";
    import discoveryImage4 from "../../../lib/images/discoveryImages/4.jpg";
    import discoveryImage5 from "../../../lib/images/discoveryImages/5.jpg";
    import discoveryImage6 from "../../../lib/images/discoveryImages/6.jpg";
    import discoveryImage7 from "../../../lib/images/discoveryImages/7.jpg";
    import discoveryImage9 from "../../../lib/images/discoveryImages/9.jpg";
    import discoveryImage10 from "../../../lib/images/discoveryImages/10.jpg";
    import discoveryImage11 from "../../../lib/images/discoveryImages/11.jpg";
    import discoveryImage12 from "../../../lib/images/discoveryImages/12.jpg";

    import header from "../../../lib/images/discoveryImages/Header.jpg";

  import { onMount } from "svelte";
  let currentIndex = 0;
  let images = [
    discoveryImage12,
    discoveryImage2,
    discoveryImage3,
    discoveryImage4,
    discoveryImage5,
    discoveryImage6,
    discoveryImage7,
    discoveryImage9,
    discoveryImage10,
    discoveryImage11,
    discoveryImage1,

  ];

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function goToSlide(index) {
    currentIndex = index;
  }
</script>



<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
</svelte:head>
<style>
.rasa {
  font-family: "Rasa", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

    img{
        object-fit: cover;
    }
</style>



<main>
    <div class="space-y-12">
        <!-- FAQ Header -->
        <div class="text-center space-y-2">
            <p class="text-6xl rasa font-bold text-black">
                The Discovery Project
            </p>
            <div class="text-zinc-600">
                <p>The Discovery Project empowers individuals to explore new ideas and cultivate </p>
                <p>curiosity through hands-on learning experiences across various fields.</p>
            </div>
        </div>
        <div>
            <img src={header} alt="Header">
        </div>
        <div class="space-y-12 ">
        <div class="grid grid-cols-3 gap-4 mx-24">
            <div class="text-2xl rasa space-y-4">

                <p class="italic">"I think, at a child's birth, if a mother could ask a fairy godmother to endow it with the most useful gift, that gift would be curiosity,"</p><p>— Eleanor Roosevelt.
    </p>
            </div>
            <p class="col-span-2 text"> The Discovery Project is an initiative designed to inspire curiosity and foster innovation by providing individuals with opportunities to explore new ideas and concepts across various fields. Through hands-on experiences and engaging activities, the project encourages participants to step outside their comfort zones, challenge their thinking, and develop a deeper understanding of the world around them. By combining education with exploration, the Discovery Project aims to ignite a passion for learning, spark creativity, and empower individuals to think critically and pursue their interests with confidence. Whether through STEM-related activities, art, or other disciplines, the Discovery Project is dedicated to unlocking the potential of every participant and inspiring the next generation of thinkers, creators, and problem-solvers.
</p>
        </div>

        <div class="border-b border-zinc-300 mx-16"></div>
        <div id="dreams" class="space-y-6">
            <div class="grid grid-cols-9 gap-8 items-center">
                <div class="space-y-5 col-span-4 ">
                    <p class="text-3xl rasa text-justify" >3D Dreams</p>
                    <p>
                    Solace Global organized an engaging STEM outreach event across North Texas, showcasing the possibilities of 3D printing to diverse communities in various common spaces, including malls and parks. The event aimed to inspire curiosity and interest in technology among individuals of all ages and backgrounds.
                    </p>
                    <p>
                    Our team distributed 3D-printed miniature robots made of eco-friendly PLA filament, a fun and tangible introduction to STEM concepts. These vibrant models delighted children, who eagerly took home their new toys, while sparking conversations about innovation and technology with teens and adults.
                    </p>                    
                    <p>
                    In addition to engaging with families and community members, we presented our initiative to Tesla employees, emphasizing the importance of fostering STEM education and creativity at all levels. By bridging conversations with professionals and everyday citizens, we highlighted how accessible technologies like 3D printing can empower communities and shape the future.
                    </p>                
                    <p>
                    This multi-location event successfully reached a diverse audience, connecting with young students excited to learn, parents exploring educational opportunities, and professionals interested in supporting STEM initiatives. The positive responses underscored our mission to inspire innovation and promote technology as a unifying and transformative force.
                    </p>
                </div>
                <div class="col-span-5">
                    <div class="relative w-full overflow-hidden">
  <!-- Image Slides -->
  <div
    class="flex transition-transform duration-700"
    style="transform: translateX(-{currentIndex * 100}%)"
  >
    {#each images as image}
      <img src={image} alt="Carousel Image" class="w-full h-auto flex-shrink-0" />
    {/each}
  </div>

  <!-- Navigation Buttons -->
  <button
    on:click={prevSlide}
    class="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white"
  >
<i class="fa-solid fa-arrow-left"></i>
  </button>
  <button
    on:click={nextSlide}
    class="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white"
  >
<i class="fa-solid fa-arrow-right"></i>
  </button>

  <!-- Dots Indicator -->
  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-65">
    {#each images as _, index}
      <button
        class="w-2 h-2 rounded-full"
        class:bg-white ="{index === currentIndex}"
        class:bg-gray-500="{index !== currentIndex}"
        on:click={() => goToSlide(index)}
      />
    {/each}
  </div>
</div>

                    </div>
        </div>

        <div class="border-b border-zinc-300 mx-16"></div>
        <div id="robots" class="space-y-6">
            <div class="grid grid-cols-9 gap-16 items-center">
                <div class="col-span-5">
        

                <div class="grid grid-cols-2 gap-3">
                    <img src={image02} alt="kids">
                    <img src={image04} alt="kids">
                    <img src={image05} alt="kids">
                    <img src={image03} alt="kids">
                </div>


                        
                </div>
                <div class="space-y-5 col-span-4">
                <p class="text-3xl rasa" >Robots for Earth</p>
                <p>The event aimed to teach kids about climate change through the lens of robotics, led by a UTD researcher with expertise in 3D autonomous systems. It began with an informative presentation that explained how robotics can address environmental issues, such as waste management and pollution. The presentation highlighted the potential of technology in solving climate change-related problems and set the stage for the hands-on activities that followed.</p>
                <p>Participants had the opportunity to build and program a SPARK Prime robot—created by a member of the Undefined Robotics team—that autonomously cleaned trash using a claw mechanism. This practical experience allowed the kids to apply what they had learned during the presentation and see how robotics can be utilized to tackle real-world sustainability challenges.</p>
                <p>Through this hands-on activity, participants not only learned basic robotics skills but also gained an understanding of how innovation can be used to reduce pollution and promote environmental conservation. The event sparked creativity and encouraged the kids to think about how technology can help protect the planet. By combining interactive learning and an educational presentation, the event empowered the next generation to explore how they can contribute to combating climate change through robotics and other technological solutions.</p>
            </div>
            </div>
        </div>
        <div class="border-b border-zinc-300 mx-16"></div>
        <div id="seniors" class="space-y-6">
            <div class="grid grid-cols-9 gap-8 items-center">
                <div class="space-y-5 col-span-4 ">
                    <p class="text-3xl rasa text-center" >Smart Seniors</p>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oqGNcKCjYv4?si=lDv_yjLw6Y5XNEWP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
        </div>

            <div class="border-b border-zinc-300 mx-16"></div>
        <div id="spark" class="space-y-6">
            <div class="grid grid-cols-9 gap-16 items-center">
                <div class="col-span-4">
        

                    <div class="text-center text-sm my-4 space-y-4">
                        <img src={image01} alt="team">
                    </div>
                        
                </div>
                <div class="space-y-5 col-span-5">
                <p class="text-3xl rasa" >
                    STEM Spark
                </p>
                <p>
Led by members of a STATE UIL-winning robotics team and a World FTC Qualifying team, this event in Plano, Texas, provided an engaging and immersive hands-on experience designed to inspire the next generation of innovators and leaders in STEM. Participants explored a range of science and technology concepts through interactive activities that sparked curiosity and creativity, offering a perspective often missing from traditional school settings. By engaging with high school students, who acted as mentors and role models, the event created a "big brother" effect, where younger participants felt more connected and open to asking questions, experimenting, and thinking critically.
                </p>
                <p>
                    The activities encouraged children to think outside the box, experiment with new ideas, and approach problems in creative ways, all while fostering a passion for learning and innovation. The experience gave them the opportunity to explore robotics and technology in a relaxed, supportive environment, where learning felt less like a classroom and more like an exciting challenge. By introducing these young minds to real-world applications of science and technology, the event inspired them to consider how innovation can solve pressing global issues. Ultimately, it paved the way for future leaders in STEM by providing both technical knowledge and a deeper sense of possibility that traditional schooling often doesn't offer.
                </p>
                </div>
            </div>
        </div>
        <!-- Main FAQ Content -->
    </div>
</main>
