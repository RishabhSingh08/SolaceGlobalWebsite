<script>
    import image01 from "../../../lib/images/MediaImages/robotpic.jpg";
    import video01 from "../../../lib/images/MediaImages/solaceVideo.mp4";
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
    import robotCon from "../../../lib/images/MediaImages/robotconnection.jpg"
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
                The Connection Project
            </p>
            <div class="text-zinc-600">
                <p>The Connection Project brings people together through diverse activities to foster</p>
                <p>meaningful relationships, inclusivity, and positive social change.

</p>
            </div>
        </div>
        <div>
            <img src={image01} alt="">
        </div>
        <div class="space-y-12 ">
        <div class="grid grid-cols-3 gap-4 mx-24">
            <p class="text-2xl rasa">Connections foster a longer lifespan, as social connections reduce loneliness and isolation, contributing to greater overall well-being.

</p>
            <p class="col-span-2 text"> The Connections Project is dedicated to bringing people together by fostering meaningful interactions and shared experiences. By creating opportunities for individuals from diverse backgrounds to engage and collaborate, we aim to bridge gaps and build stronger communities. Whether through creative expression, intellectual activities, or communal experiences, the program focuses on enhancing relationships, promoting mutual understanding, and fostering a sense of belonging. Our goal is to connect people in ways that enrich lives, inspire growth, and encourage positive social change, creating lasting impacts through the power of human connection.
</p>
        </div>

        <div class="border-b border-zinc-300 mx-16"></div>
        <div id="tech-builders" class="space-y-6">

            <div class="grid grid-cols-9 gap-8 items-center">
                <div class="space-y-5 col-span-4 ">
                    <p class="text-3xl rasa text-justify" >
                Chess for Change
                    </p>
<p>Solace Global partnered with the Naihati New Life Society (NNLS), a nonprofit organization dedicated to supporting marginalized communities in the Sundarbans region of South West Bengal, India. NNLS works with children without parents, physically challenged individuals, victims of human trafficking, and survivors of early marriage and family violence. Many of these individuals come from impoverished backgrounds with limited access to educational opportunities. Through our 5-part chess series, Solace Global aimed to offer them a chance to develop critical thinking, problem-solving skills, and self-confidence, which are essential for overcoming the challenges they face.
</p>
<p>The chess program was designed to be accessible and progressive, starting with basic lessons in the first three sessions and gradually introducing intermediate concepts in the final two sessions. This approach allowed the participants to build a solid foundation before advancing to more complex strategies. Despite the challenges of limited resources, the program provided participants with a unique opportunity to engage in an educational experience that would not only improve their intellectual abilities but also boost their sense of accomplishment.
</p>                    
<p>The program’s goal was to empower the students with the skills to play a full game of chess by the end of the series. The participants, many of whom had never been exposed to chess before, gained a new understanding of the game’s rules and strategies. By the final session, the students were able to apply their newfound knowledge and play a complete game, experiencing both the excitement and the challenges of the game firsthand.
</p>                
<p>
Through this chess series, Solace Global helped NNLS participants gain valuable skills that extend beyond the game itself. The lessons taught in chess—such as focus, strategy, and patience—provided the students with tools that can be applied to their daily lives. The program not only introduced them to a new intellectual pursuit but also gave them a sense of empowerment and achievement, helping them take a step toward a brighter future.
</p>
</div>
                <div class="col-span-5">
<iframe width="650" height="315" src="https://www.youtube.com/embed/4SXYDIXKEZo?si=-lplcRbccsicSHfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="text-center"></iframe>                    <p class="text-center text-sm my-4">For more information, please contact team@solaceglobal.xyz</p>
                </div>
            </div>
        </div>
        <div class="border-b border-zinc-300 mx-16"></div>
        <div id="robot-connection" class="space-y-6">
            <div class="grid grid-cols-9 gap-16 items-center">
                <div class="col-span-4">
        
        <div>
            <img src={robotCon} alt="">
        </div>
                    <div class="text-center text-sm my-4 space-y-4">
                    </div>
                        
                </div>
                <div class="space-y-5 col-span-5">
                <p class="text-3xl rasa" >
                    Robot Connection
                </p>
                <p>
                    Our organization took a proactive step toward empowering girls in South Asia by providing them with digital robotics lessons. Recognizing the gender gap in STEM fields, we sought to create an inclusive and accessible platform where young girls could explore robotics, develop technical skills, and build confidence in their abilities. Using digital tools and virtual meetings, we bridged geographical and cultural barriers, ensuring that these students had the resources they needed to thrive in an increasingly tech-driven world.
                </p>
                <p>
                    We held regular online sessions, where our team of volunteers and instructors connected with the students via video conferencing platforms. Each session was designed to introduce foundational robotics concepts, programming basics, and hands-on activities that encouraged creativity and problem-solving. To make learning more engaging, we provided virtual simulations and interactive tutorials, allowing the girls to experiment with robot design and coding in real-time. Our team also conducted Q&A sessions, where students could seek guidance and share their ideas, fostering a collaborative learning environment.

                </p>
                <p>
                    The impact of these lessons extended beyond just technical education. By offering these classes, we helped cultivate a mindset of curiosity and innovation among the participants, many of whom had limited access to such opportunities. Parents and community members in South Asia shared their appreciation, noting how these lessons not only expanded the girls' academic horizons but also inspired them to dream of pursuing careers in STEM fields. Through consistent mentorship and encouragement, we aimed to show these young learners that they have the potential to contribute meaningfully to technology and innovation.

                </p>
                <p>This initiative was a testament to the power of digital education in breaking down barriers and creating opportunities for underrepresented communities. Despite the physical distance, our team in Texas forged meaningful connections with the girls, empowering them with knowledge and confidence that could transform their futures. By combining technology and passion, we contributed to a global effort to promote gender equality in education and create a brighter, more inclusive future in robotics and STEM.
</p>
                </div>
            </div>
        </div>

</main>
