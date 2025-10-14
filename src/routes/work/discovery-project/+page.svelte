<script>
  import image01 from "../../../lib/images/MediaImages/IMG_6224.jpg";
  import image02 from "../../../lib/images/MediaImages/kids.jpg";
  import image03 from "../../../lib/images/Volunteer.jpg";
  
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

    import image06 from "../../../lib/images/MediaImages/robotpic.jpg";
    import image07 from "../../../lib/images/MediaImages/techbuildersImage.png";
    import video01 from "../../../lib/images/MediaImages/solaceVideo.mp4";
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
    import robotCon from "../../../lib/images/MediaImages/robotconnection.jpg";
    import german from "../../../lib/images/MediaImages/image0.jpg";

    import china1 from "../../../lib/images/MediaImages/china1.png";
    import china2 from "../../../lib/images/MediaImages/china2.png";
    import china3 from "../../../lib/images/MediaImages/china3.png";

    import und1 from "../../../lib/images/MediaImages/und1.jpg";
    import und2 from "../../../lib/images/MediaImages/und2.jpg";
    import und3 from "../../../lib/images/MediaImages/und3.jpg";
    import und4 from "../../../lib/images/MediaImages/und4.jpg";

    import pune1 from "../../../lib/images/MediaImages/pune1.jpg";
    import pune2 from "../../../lib/images/MediaImages/pune2.jpg";
    import pune3 from "../../../lib/images/MediaImages/pune3.jpg";
    import pune4 from "../../../lib/images/MediaImages/pune4.png";

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

  // Add automatic carousel functionality
  onMount(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  });

  // Lightbox functionality
  let lightboxOpen = false;
  let lightboxImages = [];
  let lightboxIndex = 0;

  function openLightbox(imageArray, index) {
    lightboxImages = imageArray;
    lightboxIndex = index;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  function nextLightboxImage() {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  }

  function prevLightboxImage() {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  }

  // Handle keyboard navigation
  function handleKeydown(event) {
    if (!lightboxOpen) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') nextLightboxImage();
    if (event.key === 'ArrowLeft') prevLightboxImage();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<style>
  .rasa {
    font-family: "Rasa", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }

  .carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .carousel-slide {
    display: flex;
    transition: transform 0.7s ease;
    height: auto;
  }

  .carousel-item {
    flex: 0 0 100%;
  }

  /* Lightbox styles */
  .lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lightbox-image {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }

  .lightbox-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 24px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10001;
    transition: all 0.3s ease;
    user-select: none;
  }

  .lightbox-arrow:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-50%) scale(1.1);
  }

  .lightbox-arrow-left {
    left: 20px;
  }

  .lightbox-arrow-right {
    right: 20px;
  }

  .clickable-image {
    cursor: pointer;
    transition: opacity 0.3s;
  }

  .clickable-image:hover {
    opacity: 0.8;
  }
</style>

<main class="px-4 md:px-6 lg:px-8 py-8 mx-auto">
  <div class="space-y-8 md:space-y-12">
    <div class="text-center space-y-2">
      <p class="text-4xl md:text-5xl lg:text-6xl rasa font-bold text-black">
        The Discovery Project
      </p>
      <div class="text-zinc-600 text-sm md:text-base">
        <p>The Discovery Project empowers individuals to explore new ideas and cultivate</p>
        <p>curiosity through hands-on learning experiences across various fields.</p>
      </div>
    </div>

    <div class="w-full">
      <img src={header} alt="Header" class="w-full object-cover">
    </div>

    <div class="space-y-8 md:space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2 md:mx-12 lg:mx-24">
        <div class="text-xl md:text-2xl rasa space-y-4">
          <p class="italic">"I think, at a child's birth, if a mother could ask a fairy godmother to endow it with the most useful gift, that gift would be curiosity,"</p>
          <p>— Eleanor Roosevelt.</p>
        </div>
        <p class="md:col-span-2 text-sm md:text-base">
          The Discovery Project is an initiative designed to inspire curiosity and foster innovation by providing individuals with opportunities to explore new ideas and concepts across various fields. Through hands-on experiences and engaging activities, the project encourages participants to step outside their comfort zones, challenge their thinking, and develop a deeper understanding of the world around them. By combining education with exploration, the Discovery Project aims to ignite a passion for learning, spark creativity, and empower individuals to think critically and pursue their interests with confidence. Whether through STEM-related activities, art, or other disciplines, the Discovery Project is dedicated to unlocking the potential of every participant and inspiring the next generation of thinkers, creators, and problem-solvers.
        </p>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <div id="dreams" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-8 items-center">
          <div class="space-y-4 md:col-span-4 order-2 md:order-1">
            <p class="text-2xl md:text-3xl rasa text-center md:text-justify">3D Printing Expo with Amazon & Tesla</p>
            <p class="text-sm md:text-base">
              Solace Global organized an engaging STEM outreach event across North Texas, showcasing the possibilities of 3D printing to diverse communities in various common spaces, including malls and parks. The event aimed to inspire curiosity and interest in technology among individuals of all ages and backgrounds.
            </p>
            <p class="text-sm md:text-base">
              Our team distributed 3D-printed miniature robots made of eco-friendly PLA filament, a fun and tangible introduction to STEM concepts. These vibrant models delighted children, who eagerly took home their new toys, while sparking conversations about innovation and technology with teens and adults.
            </p>
            <p class="text-sm md:text-base">
              In addition to engaging with families and community members, we presented our initiative to Tesla employees, emphasizing the importance of fostering STEM education and creativity at all levels. By bridging conversations with professionals and everyday citizens, we highlighted how accessible technologies like 3D printing can empower communities and shape the future.
            </p>
            <p class="text-sm md:text-base">
              This multi-location event successfully reached a diverse audience, connecting with young students excited to learn, parents exploring educational opportunities, and professionals interested in supporting STEM initiatives. The positive responses underscored our mission to inspire innovation and promote technology as a unifying and transformative force.
            </p>
          </div>
          
          <div class="md:col-span-5 order-1 md:order-2">
            <div class="carousel-container rounded-lg overflow-hidden shadow-lg">
              <div class="carousel-slide" style="transform: translateX(-{currentIndex * 100}%)">
                {#each images as image, i}
                  <div class="carousel-item">
                    <img src={image} alt="Carousel Image {i+1}" class="w-full h-auto">
                  </div>
                {/each}
              </div>

              <button
                on:click={prevSlide}
                class="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl md:text-3xl text-white   p-2 rounded-full"
                aria-label="Previous slide"
              >
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button
                on:click={nextSlide}
                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl md:text-3xl text-white  p-2 rounded-full"
                aria-label="Next slide"
              >
                <i class="fa-solid fa-arrow-right"></i>
              </button>

              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {#each images as _, index}
                  <button
                    class="w-2 h-2 rounded-full"
                    class:bg-white="{index === currentIndex}"
                    class:bg-gray-500="{index !== currentIndex}"
                    on:click={() => goToSlide(index)}
                    aria-label="Go to slide {index+1}"
                  />
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- Robotics Section -->
      <div id="robots" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-16 items-center">
          <div class="md:col-span-5 order-1">
            <div class="grid grid-cols-2 gap-2 md:gap-3">
              <img src={image04} alt="Children learning about robotics" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([image04, image05, image03], 0)}>
              <img src={image05} alt="Robotics demonstration" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([image04, image05, image03], 1)}>
              <img src={image03} alt="STEM workshop" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([image04, image05, image03], 2)}>
            </div>
          </div>
          
          <div class="space-y-4 md:space-y-5 md:col-span-4 order-2">
            <p class="text-2xl md:text-3xl rasa text-center md:text-left">Environmental Robotics Presentation with UTD Researcher</p>
            <p class="text-sm md:text-base">The event aimed to teach kids about climate change through the lens of robotics, led by a UTD researcher with expertise in 3D autonomous systems. It began with an informative presentation that explained how robotics can address environmental issues, such as waste management and pollution. The presentation highlighted the potential of technology in solving climate change-related problems and set the stage for the hands-on activities that followed.</p>
            <p class="text-sm md:text-base">Participants had the opportunity to build and program a SPARK Prime robot—created by a member of the Undefined Robotics team—that autonomously cleaned trash using a claw mechanism. This practical experience allowed the kids to apply what they had learned during the presentation and see how robotics can be utilized to tackle real-world sustainability challenges.</p>
            <p class="text-sm md:text-base">Through this hands-on activity, participants not only learned basic robotics skills but also gained an understanding of how innovation can be used to reduce pollution and promote environmental conservation. The event sparked creativity and encouraged the kids to think about how technology can help protect the planet. By combining interactive learning and an educational presentation, the event empowered the next generation to explore how they can contribute to combating climate change through robotics and other technological solutions.</p>
          </div>
        </div>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- Seniors Section -->
      <div id="seniors" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-8 items-center">
          <div class="space-y-4 md:space-y-5 md:col-span-4 order-1 text-center">
            <p class="text-2xl md:text-3xl rasa">Digital Safety Training for Seniors</p>
          </div>
          
          <div class="md:col-span-5 order-2 aspect-video">
            <div class="relative w-full h-0 pb-16:9">
              <iframe 
                class="w-full h-full md:h-80 rounded-lg shadow-lg" 
                src="https://www.youtube.com/embed/oqGNcKCjYv4?si=lDv_yjLw6Y5XNEWP" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- STEM Workshop Section -->
      <div id="spark" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-16 items-center">
          <div class="md:col-span-4 order-2 md:order-1">
            <div class="text-center text-sm my-4 space-y-4">
              <img src={image01} alt="Team of robotics students" class="rounded-lg shadow-lg clickable-image" on:click={() => openLightbox([image01], 0)}>
            </div>
          </div>
          
          <div class="space-y-4 md:space-y-5 md:col-span-5 order-1 md:order-2">
            <p class="text-2xl md:text-3xl rasa text-center md:text-left">STEM Workshop Led by Local Robotics Teens</p>
            <p class="text-sm md:text-base">
              Led by members of a STATE UIL-winning robotics team and a World FTC Qualifying team, this event in Plano, Texas, provided an engaging and immersive hands-on experience designed to inspire the next generation of innovators and leaders in STEM. Participants explored a range of science and technology concepts through interactive activities that sparked curiosity and creativity, offering a perspective often missing from traditional school settings. By engaging with high school students, who acted as mentors and role models, the event created a "big brother" effect, where younger participants felt more connected and open to asking questions, experimenting, and thinking critically.
            </p>
            <p class="text-sm md:text-base">
              The activities encouraged children to think outside the box, experiment with new ideas, and approach problems in creative ways, all while fostering a passion for learning and innovation. The experience gave them the opportunity to explore robotics and technology in a relaxed, supportive environment, where learning felt less like a classroom and more like an exciting challenge. By introducing these young minds to real-world applications of science and technology, the event inspired them to consider how innovation can solve pressing global issues. Ultimately, it paved the way for future leaders in STEM by providing both technical knowledge and a deeper sense of possibility that traditional schooling often doesn't offer.
            </p>
          </div>
        </div>
      </div>


      <!-- Girls in STEM Header -->


      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- Tech Builders Section -->
      <div id="tech-builders" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-8 items-center">
          <div class="space-y-4 md:col-span-4 order-2 md:order-1">
            <p class="text-2xl md:text-3xl rasa">Robotics Education for Girls at Bengal's Largest Abuse Survivors' Orphanage</p>
            <p class="text-sm md:text-base">Over 39 million girls around the world are out of school due to conflict and crisis, often trapped in cycles of poverty that prevent them from accessing education. This dire situation is especially prevalent in underserved communities like those served by Naihati New Life Society (NNLS) in the Sundarbans region of West Bengal, India, where poverty, social inequalities, and geographical isolation make it incredibly difficult for girls to receive an education. The families in these areas often live in extreme poverty, with limited access to basic resources like food, healthcare, and education. The economic struggles these communities face leave little room for the pursuit of education, and many girls are forced into early marriages or become victims of trafficking, further limiting their opportunities. </p>
            <p class="text-sm md:text-base">Recognizing the challenges these girls face, Solace Global partnered with NNLS to bring a transformative event to their doorstep, focused on hands-on STEM education. In this impoverished region, where even basic schooling is a luxury, Solace Global's robotics event aimed to introduce these girls to the world of technology. With limited access to educational resources, many of these girls have never had the chance to explore fields like engineering or robotics. During the event, we introduced them to SPARK Prime and EV3 robots, providing them with a rare opportunity to engage with the basic components of robotics, such as axles, wheels, motors, control hubs, and gears.</p>
            <p class="text-sm md:text-base">In communities where poverty is widespread, and opportunities are scarce, this event represented more than just a learning experience—it was a chance to break the cycle of poverty through education and empowerment. By offering the girls the tools to understand and engage with technology, Solace Global aimed to ignite their curiosity and inspire them to dream beyond their circumstances. Through our collaboration with NNLS, we hope to provide these girls with the skills and confidence to overcome the barriers of poverty and build a brighter future, one that is not limited by their current circumstances but shaped by the knowledge and potential they now possess.</p>
          </div>
          <div class="md:col-span-5 order-1 md:order-2">
            <img src={image07} alt="Tech Builders Program" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([image07], 0)}>
          </div>
        </div>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- Robot Connection Section -->
      <div id="robot-connection" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-16 items-center">
          <div class="md:col-span-4 order-1">
            <img src={robotCon} alt="Robot Connection" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([robotCon], 0)}>
          </div>
          <div class="space-y-4 md:space-y-5 md:col-span-5 order-2">
            <p class="text-2xl md:text-3xl rasa">Robotics Education for Girls at Bengal's Largest Abuse Survivors' Orphanage (Part 2)</p>
            <p class="text-sm md:text-base">Our second workshop took a proactive step toward empowering girls in South Asia by providing them with digital robotics lessons, fostering a more inclusive STEM landscape. Through a combination of virtual sessions, interactive tutorials, and dedicated mentorship, we aimed to bridge the gender gap in STEM by equipping young girls with essential technical skills, boosting their confidence, and igniting their passion for innovation.</p>
            <p class="text-sm md:text-base">In this session, we focused on introducing participants to the fundamentals of claw mechanisms and gear trains, ensuring they grasped the foundational concepts necessary for more advanced robotics applications. Using hands-on digital simulations and real-world examples, we demonstrated how different gear ratios influence movement and force distribution, helping students understand how mechanical components interact. As we expanded on these concepts, we incorporated EV3 programming to give participants a deeper, more practical understanding of how motors, sensors, and software integrate to create functional robotic systems.</p>
            <p class="text-sm md:text-base">By providing a structured yet flexible learning environment, we encouraged students to experiment, ask questions, and apply their newfound knowledge in creative ways. The workshop not only enhanced their technical proficiency but also instilled in them a sense of empowerment, showing them that they are capable of excelling in STEM fields. Through these continued efforts, we remain committed to fostering an environment where young girls can thrive as future innovators and problem solvers.</p>
          </div>
        </div>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- CodeHER Section -->
      <div id="CodeHER" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-12 items-center">

          <div class="space-y-4 md:space-y-5 md:col-span-5">
            <p class="text-3xl md:text-4xl rasa">Online Coding Classes for Girls with Code.org</p>
            <p class="text-sm md:text-base">The CodeHER Initiative is a recurring, bi-monthly, girls-only online program that introduces young girls to the fundamentals of computer science, following the curriculum of the AP Computer Science Principles (APCSP) course. Studies show that as few as 8-10% of all programmers are female, and through this initiative, we aim to change that statistic by empowering young girls to pursue technology and coding careers.</p>
            <p class="text-sm md:text-base">By simplifying complex topics like algorithms, data structures, and problem-solving techniques, the program encourages hands-on learning and critical thinking in a fun, collaborative environment. Participants gain confidence in coding while developing essential skills for future academic and professional success.</p>
            <p class="text-sm md:text-base">The CodeHER Initiative stands out by introducing APCSP material before high school, providing girls with the foundational knowledge and skills that will set them apart when they enter high school and beyond. By learning these key concepts early, they are not only building coding expertise but also preparing for future opportunities in fields traditionally underrepresented by women.</p>
            <p class="text-sm md:text-base">What makes the program even more impactful is that it is taught by older girls who have already learned how to code. These mentors serve as role models, offering guidance, support, and inspiration, while creating a relatable and empowering learning experience for the younger participants.</p>
            <p class="text-sm md:text-base">This program aims to inspire young girls to pursue careers in technology and develop a lifelong passion for learning, making a meaningful impact on closing the gender gap in tech.</p>
          </div>
          <div class="md:col-span-4">
            <div class="aspect-video">
              <video loop muted controls poster={poster01} class="rounded-lg shadow-md">
                <source src={video01} type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="text-center text-xs md:text-sm my-4 space-y-2">
              <p>Check out the highlights from our first lesson!</p>
              <p>#CodeHER #GirlsInSTEM</p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- German Visa Section -->
      <div id="german-visa" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-16 items-start md:items-center">
          
          <div class="space-y-4 md:col-span-4 order-1 md:order-2">
            <p class="text-2xl md:text-3xl rasa text-center md:text-left">
              Guiding German Students on U.S. Visa Processes
            </p>
            <div class="space-y-3 text-sm md:text-base">
              <p>
                Solace Global recently partnered with Mohammed Nachawati, the branch head of Solace Global in Germany, to conduct an impactful online session addressing the challenges many German students face when pursuing educational opportunities in the United States. The session was designed to equip Mohammed with in-depth knowledge about U.S. visa categories, processes, and requirements, enabling him to share this information with foster homes and underprivileged teens in Germany.
              </p>
              <p>
                This initiative aligns with Solace Global's mission to foster global education and provide equitable opportunities to underserved communities. Economic inequality among students in Germany highlights the significance of this effort. In 2021, 37.9% of students in Germany were classified as at risk of poverty, with those living alone or in shared accommodations facing an even higher risk of 76.1%, according to the Federal Statistical Office (Destatis). By comparison, only 15.8% of the general German population faced similar challenges.
              </p>
              <p>
                Students reliant on BAföG, the federal education grant and loan scheme, are disproportionately affected, with 45% at risk of poverty. The average income of a poor student was just €802 (US$848) per month—well below Germany's poverty line of €1,265. Rising inflation and the energy crisis further compound these struggles, creating a pressing need for initiatives that open doors to better opportunities.
              </p>
              <p>
                The session covered the essentials of navigating the U.S. visa system, focusing on categories such as F-1 student visas for full-time study, J-1 exchange visitor visas for cultural and educational exchanges, and H-1B work visas for skilled employment. Mohammed learned how to guide students in identifying the most suitable visa type based on their individual goals, whether for academic study, internships, or long-term professional aspirations.
              </p>
              <p>
                A deeper understanding of the German education system was also critical. German high schools operate on a grading scale of 1 to 6, where 1 represents the highest score and 6 the lowest. For students in the qualification phase of the Abitur exam (Oberstufe), the grading shifts to a 15-point scale, with 15 being the top score. Translating these credentials into U.S. standards is often a challenge, and the session provided strategies for presenting competitive applications that showcase students' academic strengths effectively.
              </p>
              <p>
                Through initiatives like this, Solace Global continues to bridge the gap between aspiration and access, providing resources and knowledge to those who need it most. By equipping Mohammed Nachawati to spread this information, the organization extends its reach to some of the most vulnerable youth in Germany, offering them the tools to dream bigger and achieve more.
              </p>
            </div>
          </div>

          <div class="md:col-span-5 order-2 md:order-1">
            <div class="space-y-4">
              <div class="bg-zinc-100 rounded-lg flex items-center justify-center h-64 md:h-96 shadow-md">
                <img src={german} alt="German students visa program" class="rounded-lg object-cover clickable-image" on:click={() => openLightbox([german], 0)}>
              </div>

              <div class="rounded-lg p-4 md:p-6 space-y-3 shadow-md bg-white">
                <p class="font-semibold text-base md:text-lg">Key Statistics:</p>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-zinc-50 p-3 rounded shadow-sm">
                    <p class="text-xl md:text-2xl font-bold text-blue-700">37.9%</p>
                    <p class="text-xs md:text-sm text-zinc-600">German students at risk of poverty (2021)</p>
                  </div>
                  <div class="bg-zinc-50 p-3 rounded shadow-sm">
                    <p class="text-xl md:text-2xl font-bold text-blue-700">76.1%</p>
                    <p class="text-xs md:text-sm text-zinc-600">Students in shared housing at risk</p>
                  </div>
                  <div class="bg-zinc-50 p-3 rounded shadow-sm">
                    <p class="text-xl md:text-2xl font-bold text-blue-700">€802</p>
                    <p class="text-xs md:text-sm text-zinc-600">Average monthly income of poor students</p>
                  </div>
                  <div class="bg-zinc-50 p-3 rounded shadow-sm">
                    <p class="text-xl md:text-2xl font-bold text-blue-700">45%</p>
                    <p class="text-xs md:text-sm text-zinc-600">BAföG recipients at risk of poverty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

<div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

<div id="chess" class="space-y-6">
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-8 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
                Chess Lessons for Abuse Survivors
            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>
                    Solace Global partnered with the Naihati New Life Society (NNLS), a nonprofit organization dedicated to supporting marginalized communities in the Sundarbans region of South West Bengal, India. NNLS works with children without parents, physically challenged individuals, victims of human trafficking, and survivors of early marriage and family violence. Many of these individuals come from impoverished backgrounds with limited access to educational opportunities. Through our 5-part chess series, Solace Global aimed to offer them a chance to develop critical thinking, problem-solving skills, and self-confidence, which are essential for overcoming the challenges they face.
                </p>
                <p>
                    The chess program was designed to be accessible and progressive, starting with basic lessons in the first three sessions and gradually introducing intermediate concepts in the final two sessions. This approach allowed the participants to build a solid foundation before advancing to more complex strategies. Despite the challenges of limited resources, the program provided participants with a unique opportunity to engage in an educational experience that would not only improve their intellectual abilities but also boost their sense of accomplishment.
                </p>
                <p>
                    The program's goal was to empower the students with the skills to play a full game of chess by the end of the series. The participants, many of whom had never been exposed to chess before, gained a new understanding of the game's rules and strategies. By the final session, the students were able to apply their newfound knowledge and play a complete game, experiencing both the excitement and the challenges of the game firsthand.
                </p>
                <p>
                    Through this chess series, Solace Global helped NNLS participants gain valuable skills that extend beyond the game itself. The lessons taught in chess—such as focus, strategy, and patience—provided the students with tools that can be applied to their daily lives. The program not only introduced them to a new intellectual pursuit but also gave them a sense of empowerment and achievement, helping them take a step toward a brighter future.
                </p>
            </div>
        </div>
        
<div class="w-full lg:col-span-5">
    <div class="relative aspect-[16/9]">
        <iframe
            src="https://www.youtube.com/embed/4SXYDIXKEZo?si=-lplcRbccsicSHfs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="absolute top-0 left-0 w-full h-full rounded-lg"
        >
        </iframe>
    </div>
    <p class="text-center text-xs md:text-sm mt-2 md:mt-4">
        For more information, please contact team@solaceglobal.xyz
    </p>
</div>
    </div>
</div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

<div id="china" class="space-y-6">
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-8 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
English Phonics Workshop in China            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>
Solace Global partnered with the Sunkidz Novelty English Training Center in Foshan, China, to deliver an engaging phonics workshop for twenty-five children. One of our team members traveled to China to lead the session in person, bringing energy and expertise directly to the classroom. The program was designed to help students build confidence in English pronunciation, with a focus on mastering core vowel sounds and recognizing rhyme patterns that are foundational to reading and comprehension.
                </p>
                <p>
The workshop was intentionally interactive and accessible. It began with direct modeling of vowel sounds by the instructor, followed by choral reading exercises where the whole class could practice together. Using word families such as brown, down, and round, students were guided from listening and repeating to actively applying what they learned on the board. This gradual approach allowed the children to connect sounds with spelling while reinforcing their ability to decode new words.
                </p>
                <p>
As the session progressed, learners became more confident and were encouraged to take turns leading their peers in short reading drills. These moments of student-led practice created an atmosphere of encouragement, collaboration, and curiosity. Quick challenges and playful activities kept the energy high, helping the children stay engaged while developing important language skills.
                </p>
                <p>
By the end of the workshop, the twenty-five participants demonstrated stronger pronunciation, rhythm, and willingness to read aloud. Teachers left with a clear, practical framework they could reuse: introduce the sound, model it collectively, practice with word families, and conclude with student-led activities. Through this initiative, Solace Global not only provided immediate learning gains but also equipped the center with sustainable teaching strategies to continue fostering growth and confidence in English.
                </p>
            </div>
        </div>
        
          <div class="md:col-span-5 order-1 md:order-2">
            <div class="grid grid-cols-2 gap-2 md:gap-3">
              <img src={china1} alt="China 1" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([china1, china2, china3], 0)}>
              <img src={china2} alt="China 2" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([china1, china2, china3], 1)}>
              <img src={china3} alt="China 2" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([china1, china2, china3], 2)}>
            </div>
          </div>
    </div>
</div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

<div id="robotics-workshop" class="space-y-6">
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-8 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
                Robotics Workshop for the Kids USA Montessori
            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>
                    Solace Global partnered with Undefined Robotics (#25782) to deliver a lively, hands-on robotics workshop for 20 primary students at Kids USA Montessori. The 60–90 minute session mixed short, kid-friendly demos with rotating stations where children explored real robot components — a movable claw, a movable chassis, and a safely demonstrated bow-and-arrow shooter mechanism — then worked in small teams to assemble and operate simple builds.
                </p>
                <p>
                    Activities were Montessori-friendly: tactile, self-directed, and designed to teach basic mechanics (levers, gears, cause-and-effect) while encouraging collaboration and communication. The workshop turned abstract concepts into concrete experiences that sparked curiosity and confidence: students stayed engaged, practiced problem-solving, and shared ideas about how robots could help their communities.
                </p>
                <p>
                    All activities were age-appropriate and supervised; safety protocols were followed for the shooter demo using soft materials and controlled demonstrations. To bring a similar workshop to your campus or learn how to run repeatable stations in class, contact team@solaceglobal.xyz
                </p>

            </div>
        </div>
        
          <div class="md:col-span-5 order-1 md:order-2">
            <div class="grid grid-cols-2 gap-2 md:gap-3">
              <img src={und1} alt="Robotics Workshop 1" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([und1, und2, und3, und4], 0)}>
              <img src={und2} alt="Robotics Workshop 2" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([und1, und2, und3, und4], 1)}>
              <img src={und3} alt="Robotics Workshop 3" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([und1, und2, und3, und4], 2)}>
              <img src={und4} alt="Robotics Workshop 4" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([und1, und2, und3, und4], 3)}>
            </div>
          </div>
    </div>
</div>

<div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- Pune Tribal Robotics Section -->
<div id="pune-robotics" class="space-y-6">
    <div class="flex flex-col md:grid md:grid-cols-9 gap-6 md:gap-16 items-start md:items-center">
        <div class="space-y-4 md:col-span-4 order-2 md:order-1">
            <p class="text-2xl md:text-3xl rasa">
                Pune Tribal Robotics at Anathsamram Karyakran Orphanage
            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>
                    Solace Global, in partnership with Anathsamram Karyakran Orphanage, kicked off the first class in the Pune Tribal Robotics series by teaching approximately 30 resident children to build and iterate hydraulic plane-launchers from classroom-ready kits.
                </p>
                <p>
                    Working right inside the orphanage, learners moved from sorting parts and measuring cuts to assembling syringes, tubing, levers, and linkages, then ran test flights, analyzed failures, and refined designs until every team achieved consistent launches. Through this hands-on process, they picked up core mechanics (pressure/force, mechanical advantage, center of mass), precision skills (marking, fastening, safe tool use), and collaboration habits (clear communication, turn-taking, shared troubleshooting).
                </p>
                <p>
                    Caregivers and local volunteers supported stations, each child took home a working launcher plus a pictorial mini-guide to teach peers, and we left a low-cost kit-and-mentor playbook tailored for the orphanage so staff can rerun the session independently.
                </p>
                <p>
                    This foundation sets up the rest of the series—gears & motion control, sensors & simple coding, design for reliability, a community problem challenge, a public showcase, and a capstone—turning curiosity into confidence and building a pipeline of teen mentors within the orphanage community.
                </p>
            </div>
        </div>
        
          <div class="md:col-span-5 order-1 md:order-2">
            <div class="grid grid-cols-2 gap-2 md:gap-3">
              <img src={pune1} alt="Pune Robotics 1" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([pune1, pune2, pune3, pune4], 0)}>
              <img src={pune2} alt="Pune Robotics 2" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([pune1, pune2, pune3, pune4], 1)}>
              <img src={pune3} alt="Pune Robotics 3" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([pune1, pune2, pune3, pune4], 2)}>
              <img src={pune4} alt="Pune Robotics 4" class="rounded-lg shadow-md clickable-image" on:click={() => openLightbox([pune1, pune2, pune3, pune4], 3)}>
            </div>
          </div>
    </div>
</div>


    </div>
  </div>

  <!-- Lightbox Modal -->
  {#if lightboxOpen}
    <div class="lightbox-overlay" on:click={closeLightbox}>
      {#if lightboxImages.length > 1}
        <button class="lightbox-arrow lightbox-arrow-left" on:click|stopPropagation={prevLightboxImage} aria-label="Previous image">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      {/if}
      
      <div class="lightbox-content" on:click|stopPropagation>
        <img src={lightboxImages[lightboxIndex]} alt="Lightbox" class="lightbox-image">
      </div>
      
      {#if lightboxImages.length > 1}
        <button class="lightbox-arrow lightbox-arrow-right" on:click|stopPropagation={nextLightboxImage} aria-label="Next image">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      {/if}
    </div>
  {/if}
</main>