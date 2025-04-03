<script>
    import image01 from "../../../lib/images/MediaImages/robotpic.jpg";
    import image02 from "../../../lib/images/MediaImages/techbuildersImage.png";
    import video01 from "../../../lib/images/MediaImages/solaceVideo.mp4";
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
    import robotCon from "../../../lib/images/MediaImages/robotconnection.jpg";
</script>

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

  img, video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
</style>

<main class="px-4 md:px-6 lg:px-8 py-8 mx-auto">
  <div class="space-y-8 md:space-y-12">
    <!-- Header Section -->
    <div class="text-center space-y-2">
      <p class="text-4xl md:text-5xl lg:text-6xl rasa font-bold text-black">
        Girls in STEM
      </p>
      <div class="text-zinc-600 text-sm md:text-base">
        <p>This program uses technology to address key challenges while</p>
        <p>spreading STEM knowledge and fostering sustainability</p>
      </div>
    </div>

    <!-- Hero Image -->
    <div class="w-full">
      <img 
        src={image01} 
        alt="Girls in STEM" 
        class="w-full object-cover rounded-lg shadow-md"
      >
    </div>

    <!-- Introduction Section -->
    <div class="space-y-8 md:space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2 md:mx-12 lg:mx-24">
        <p class="text-xl md:text-2xl rasa">
          Our robotics initiatives empower individuals to explore technology, develop critical skills, and create solutions for real-world challenges.
        </p>
        <p class="col-span-1 md:col-span-2 text-sm md:text-base">
          As a nonprofit, we believe that robotics has the power to address pressing global challenges and drive meaningful change. By leveraging robotics, we can create innovative solutions in areas like sustainability, healthcare, and education, offering new opportunities for progress and growth. Through our initiatives, we aim to make robotics accessible, especially to underserved communities, empowering them with knowledge and tools to improve their lives. By using robotics for the greater good, we contribute to a future where technology is not only a tool for efficiency but also a force for positive social impact.
        </p>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- Tech Builders Section -->
      <div id="tech-builders" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-8 items-center">
          <div class="space-y-4 md:space-y-5 md:col-span-4 order-2 md:order-1">
            <p class="text-2xl md:text-3xl rasa text-center md:text-justify">
              Robotics Education for Girls at Bengal's Largest Abuse Survivors' Orphanage
            </p>
            <p class="text-sm md:text-base">
              Over 39 million girls around the world are out of school due to conflict and crisis, often trapped in cycles of poverty that prevent them from accessing education. This dire situation is especially prevalent in underserved communities like those served by Naihati New Life Society (NNLS) in the Sundarbans region of West Bengal, India, where poverty, social inequalities, and geographical isolation make it incredibly difficult for girls to receive an education. The families in these areas often live in extreme poverty, with limited access to basic resources like food, healthcare, and education. The economic struggles these communities face leave little room for the pursuit of education, and many girls are forced into early marriages or become victims of trafficking, further limiting their opportunities.
            </p>
            <p class="text-sm md:text-base">
              Recognizing the challenges these girls face, Solace Global partnered with NNLS to bring a transformative event to their doorstep, focused on hands-on STEM education. In this impoverished region, where even basic schooling is a luxury, Solace Global's robotics event aimed to introduce these girls to the world of technology. With limited access to educational resources, many of these girls have never had the chance to explore fields like engineering or robotics. During the event, we introduced them to SPARK Prime and EV3 robots, providing them with a rare opportunity to engage with the basic components of robotics, such as axles, wheels, motors, control hubs, and gears.
            </p>
            <p class="text-sm md:text-base">
              In communities where poverty is widespread, and opportunities are scarce, this event represented more than just a learning experience—it was a chance to break the cycle of poverty through education and empowerment. By offering the girls the tools to understand and engage with technology, Solace Global aimed to ignite their curiosity and inspire them to dream beyond their circumstances. Through our collaboration with NNLS, we hope to provide these girls with the skills and confidence to overcome the barriers of poverty and build a brighter future, one that is not limited by their current circumstances but shaped by the knowledge and potential they now possess.
            </p>
          </div>
          
          <div class="md:col-span-5 order-1 md:order-2">
            <img 
              src={image02} 
              alt="Tech Builders Program" 
              class="rounded-lg shadow-md"
            >
            <p class="text-center text-xs md:text-sm my-4">
              This photo shows the girls in West Bengal, intently observing the robot, with guidance from our mentor in Texas, who is 14,000 km away, demonstrating how STEM connects us across vast distances.
            </p>
          </div>
        </div>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- Robot Connection Section -->
      <div id="robot-connection" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-16 items-center">
          <div class="md:col-span-4 order-1">
            <img 
              src={robotCon} 
              alt="Robot Connection" 
              class="rounded-lg shadow-md"
            >
            <div class="text-center text-sm my-4 space-y-4"></div>
          </div>
          
          <div class="space-y-4 md:space-y-5 md:col-span-5 order-2">
            <p class="text-2xl md:text-3xl rasa text-center md:text-left">
              Robotics Education for Girls at Bengal's Largest Abuse Survivors' Orphanage (Part 2)
            </p>
            <p class="text-sm md:text-base">
Our second workshop took a proactive step toward empowering girls in South Asia by providing them with digital robotics lessons, fostering a more inclusive STEM landscape. Through a combination of virtual sessions, interactive tutorials, and dedicated mentorship, we aimed to bridge the gender gap in STEM by equipping young girls with essential technical skills, boosting their confidence, and igniting their passion for innovation.
            </p>
            <p class="text-sm md:text-base">
In this session, we focused on introducing participants to the fundamentals of claw mechanisms and gear trains, ensuring they grasped the foundational concepts necessary for more advanced robotics applications. Using hands-on digital simulations and real-world examples, we demonstrated how different gear ratios influence movement and force distribution, helping students understand how mechanical components interact. As we expanded on these concepts, we incorporated EV3 programming to give participants a deeper, more practical understanding of how motors, sensors, and software integrate to create functional robotic systems.
            </p>
            <p class="text-sm md:text-base">
By providing a structured yet flexible learning environment, we encouraged students to experiment, ask questions, and apply their newfound knowledge in creative ways. The workshop not only enhanced their technical proficiency but also instilled in them a sense of empowerment, showing them that they are capable of excelling in STEM fields. Through these continued efforts, we remain committed to fostering an environment where young girls can thrive as future innovators and problem solvers.            </p>
          </div>
        </div>
      </div>

      <div class="border-b border-zinc-300 mx-4 md:mx-16"></div>

      <!-- CodeHER Section -->
      <div id="CodeHER" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-12 items-center">
          <div class="md:col-span-4 order-2 md:order-1">
            <div class="aspect-video">
              <video 
                loop 
                muted 
                controls 
                width="100%" 
                poster={poster01}
                class="rounded-lg shadow-md"
              >
                <source src={video01} type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>

            <div class="text-center text-xs md:text-sm my-4 space-y-2">
              <p>Check out the highlights from our first lesson!</p>
              <p>For more video compilations of the CodeHER Initiative, reach out to team@solaceglobal.xyz. #CodeHER #GirlsInSTEM</p>
            </div>
          </div>
          
          <div class="space-y-4 md:space-y-5 md:col-span-5 order-1 md:order-2">
            <p class="text-3xl md:text-4xl rasa text-center md:text-left">
              Online Coding Classes for Girls with Code.org
            </p>
            <p class="text-sm md:text-base">
              The CodeHER Initiative is a recurring, bi-monthly, girls-only online program that introduces young girls to the fundamentals of computer science, following the curriculum of the AP Computer Science Principles (APCSP) course. Studies show that as few as 8-10% of all programmers are female, and through this initiative, we aim to change that statistic by empowering young girls to pursue technology and coding careers.
            </p>
            <p class="text-sm md:text-base">
              By simplifying complex topics like algorithms, data structures, and problem-solving techniques, the program encourages hands-on learning and critical thinking in a fun, collaborative environment. Participants gain confidence in coding while developing essential skills for future academic and professional success.
            </p>
            <p class="text-sm md:text-base">
              The CodeHER Initiative stands out by introducing APCSP material before high school, providing girls with the foundational knowledge and skills that will set them apart when they enter high school and beyond. By learning these key concepts early, they are not only building coding expertise but also preparing for future opportunities in fields traditionally underrepresented by women.
            </p>
            <p class="text-sm md:text-base">
              What makes the program even more impactful is that it is taught by older girls who have already learned how to code. These mentors serve as role models, offering guidance, support, and inspiration, while creating a relatable and empowering learning experience for the younger participants.
            </p>
            <p class="text-sm md:text-base">
              This program aims to inspire young girls to pursue careers in technology and develop a lifelong passion for learning, making a meaningful impact on closing the gender gap in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>