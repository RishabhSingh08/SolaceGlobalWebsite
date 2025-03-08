<script>
    import image01 from "../../../lib/images/MediaImages/robotpic.jpg";
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
    import baqia from "../../../lib/images/MediaImages/baqia.png"
    import Video from "../../../lib/images/MediaImages/baqtiVideo.mp4";

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
        <div id="baqiyatullah" class="space-y-6">
            <div class="grid grid-cols-9 gap-16 items-center">

                <div class="space-y-5 col-span-4">
                <p class="text-3xl rasa" >
Baqiyatullah Foundation: Clothing Drive - Pakistan
                </p>
                <p>
Solace Global organized a heartfelt giving initiative, donating RS7,000 to provide clothing for 20 orphaned children aged 7-10 at the Baqiyatullah Orphan House Complex. Beyond providing essential resources, our members personally connected with the children, engaging in conversations, sharing smiles, and fostering a warm and supportive atmosphere.
                </p>
                <p>
During the visit, our team took the time to listen to the children’s stories, learn about their daily lives, and offer words of encouragement. The experience was deeply moving, as we witnessed their resilience, curiosity, and hope for the future. The interactions reinforced the importance of not just donating material goods, but also showing up with kindness and genuine care.

                </p>
                <p>
The Baqiyatullah Foundation provides a nurturing home, education, and life skills to orphaned children, helping them grow into self-reliant individuals. Through this collaboration, we aimed to do more than just provide clothing—we sought to remind these children that they are valued, supported, and not alone.

                </p>
                <p>
This initiative reflects Solace Global’s commitment to making a meaningful impact, one step at a time. By standing with organizations like Baqiyatullah, we continue to work toward a future where every child has the opportunity to thrive.
</p>


                </div>
<div class="col-span-5">
    <div class="space-y-4">
        <img src={baqia} alt="" class="">
        <div class="flex justify-center">
            <video loop muted autoplay width="50%">
                <source src={Video} type="video/mp4">
            </video>
        </div>
    </div>
</div>



    </div>
</div>


</main>
