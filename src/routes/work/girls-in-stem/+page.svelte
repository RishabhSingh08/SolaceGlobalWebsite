<script>
    import image01 from "../../../lib/images/MediaImages/robotpic.jpg";
    import image02 from "../../../lib/images/MediaImages/techbuildersImage.png";
    import video01 from "../../../lib/images/MediaImages/solaceVideo.mp4";
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
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
</style>



<main>
    <div class="space-y-12">
        <!-- FAQ Header -->
        <div class="text-center space-y-2">
            <p class="text-6xl rasa font-bold text-black">
                Girls in STEM
            </p>
            <div class="text-zinc-600">
                <p>This program uses technology to address key challenges while</p>
                <p>spreading STEM knowledge and fostering sustainability</p>
            </div>
        </div>
        <div>
            <img src={image01} alt="">
        </div>
        <div class="space-y-12 ">
        <div class="grid grid-cols-3 gap-4 mx-24">
            <p class="text-2xl rasa">Our robotics initiatives empower individuals to explore technology, develop critical skills, and create solutions for real-world challenges.</p>
            <p class="col-span-2 text"> As a nonprofit, we believe that robotics has the power to address pressing global challenges and drive meaningful change. By leveraging robotics, we can create innovative solutions in areas like sustainability, healthcare, and education, offering new opportunities for progress and growth. Through our initiatives, we aim to make robotics accessible, especially to underserved communities, empowering them with knowledge and tools to improve their lives. By using robotics for the greater good, we contribute to a future where technology is not only a tool for efficiency but also a force for positive social impact.</p>
        </div>

        <div class="border-b border-zinc-300 mx-16"></div>
        <div id="tech-builders" class="space-y-6">

            <div class="grid grid-cols-9 gap-8 items-center">
                <div class="space-y-5 col-span-4 ">
                    <p class="text-3xl rasa text-justify" >
                Tech Builders: First Robotics Workshop
                    </p>
                    <p>Over 39 million girls around the world are out of school due to conflict and crisis, often trapped in cycles of poverty that prevent them from accessing education. This dire situation is especially prevalent in underserved communities like those served by Naihati New Life Society (NNLS) in the Sundarbans region of West Bengal, India, where poverty, social inequalities, and geographical isolation make it incredibly difficult for girls to receive an education. The families in these areas often live in extreme poverty, with limited access to basic resources like food, healthcare, and education. The economic struggles these communities face leave little room for the pursuit of education, and many girls are forced into early marriages or become victims of trafficking, further limiting their opportunities.</p>
                    <p>Recognizing the challenges these girls face, Solace Global partnered with NNLS to bring a transformative event to their doorstep, focused on hands-on STEM education. In this impoverished region, where even basic schooling is a luxury, Solace Global's robotics event aimed to introduce these girls to the world of technology. With limited access to educational resources, many of these girls have never had the chance to explore fields like engineering or robotics. During the event, we introduced them to SPARK Prime and EV3 robots, providing them with a rare opportunity to engage with the basic components of robotics, such as axles, wheels, motors, control hubs, and gears.</p>
                    <p>In communities where poverty is widespread, and opportunities are scarce, this event represented more than just a learning experience—it was a chance to break the cycle of poverty through education and empowerment. By offering the girls the tools to understand and engage with technology, Solace Global aimed to ignite their curiosity and inspire them to dream beyond their circumstances. Through our collaboration with NNLS, we hope to provide these girls with the skills and confidence to overcome the barriers of poverty and build a brighter future, one that is not limited by their current circumstances but shaped by the knowledge and potential they now possess.</p>
                </div>
                <div class="col-span-5">
                    <img src={image02} alt="">
                    <p class="text-center text-sm my-4">This photo shows the girls in West Bengal, intently observing the robot, with guidance from our mentor in Texas, who is 14,000 km away, demonstrating how STEM connects us across vast distances.</p>
                </div>
            </div>
        </div>
        <div class="border-b border-zinc-300 mx-16"></div>
        <div id="CodeHER" class="space-y-6">
            <div class="grid grid-cols-9 gap-12 items-center">
                <div class="col-span-4">
        <video loop muted controls width="1920" poster={poster01}>
            <source src={video01} type="video/mp4">
        </video>

                    <div class="text-center text-sm my-4 space-y-4">
                        <p>Check out the highlights from our first lesson!</p><p>For more video compilations of the CodeHER Initiative, reach out to team@solaceglobal.xyz. #CodeHER #GirlsInSTEM</p>

                    </div>
                        
                </div>
                <div class="space-y-5 col-span-5">
                <p class="text-4xl rasa" >
                    CodeHER
                </p>
                    <p>The CodeHER Initiative is a recurring, bi-monthly, girls-only online program that introduces young girls to the fundamentals of computer science, following the curriculum of the AP Computer Science Principles (APCSP) course. Studies show that as few as 8-10% of all programmers are female, and through this initiative, we aim to change that statistic by empowering young girls to pursue technology and coding careers.
</p>
                    <p>By simplifying complex topics like algorithms, data structures, and problem-solving techniques, the program encourages hands-on learning and critical thinking in a fun, collaborative environment. Participants gain confidence in coding while developing essential skills for future academic and professional success.
</p>
                    <p>The CodeHER Initiative stands out by introducing APCSP material before high school, providing girls with the foundational knowledge and skills that will set them apart when they enter high school and beyond. By learning these key concepts early, they are not only building coding expertise but also preparing for future opportunities in fields traditionally underrepresented by women.
</p>
<p>What makes the program even more impactful is that it is taught by older girls who have already learned how to code. These mentors serve as role models, offering guidance, support, and inspiration, while creating a relatable and empowering learning experience for the younger participants.</p>
<p>This program aims to inspire young girls to pursue careers in technology and develop a lifelong passion for learning, making a meaningful impact on closing the gender gap in tech.
</p>
                </div>
            </div>
        </div>

    </div>
        <!-- Main FAQ Content -->
    </div>
</main>
