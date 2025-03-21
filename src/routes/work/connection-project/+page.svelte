<script>
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
    import baqia from "../../../lib/images/MediaImages/baqia.png"
    import Video from "../../../lib/images/MediaImages/baqtiVideo.mp4";
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
    
    .video-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
    }
    
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<main class="px-4 py-8 md:px-6 lg:px-8 bg-white">
    <div class="space-y-8 md:space-y-12">
        <!-- Header -->
        <div class="text-center space-y-2">
            <p class="text-4xl md:text-5xl lg:text-6xl rasa font-bold text-black">
                The Connection Project
            </p>
            <div class="text-zinc-600 text-sm md:text-base px-2">
                <p>The Connection Project brings people together through diverse activities to foster</p>
                <p>meaningful relationships, inclusivity, and positive social change.</p>
            </div>
        </div>
        
        <!-- Main Image -->
        <div class="flex justify-center">
            <img src={baqia} alt="Connection Project" class="w-full max-w-4xl">
        </div>
        
        <!-- Introduction -->
        <div class="space-y-8 md:space-y-12">
            <div class="flex flex-col md:grid md:grid-cols-3 gap-6 mx-2 md:mx-8 lg:mx-24">
                <p class="text-xl md:text-2xl rasa">Connections foster a longer lifespan, as social connections reduce loneliness and isolation, contributing to greater overall well-being.</p>
                <p class="md:col-span-2 text-sm md:text-base">The Connections Project is dedicated to bringing people together by fostering meaningful interactions and shared experiences. By creating opportunities for individuals from diverse backgrounds to engage and collaborate, we aim to bridge gaps and build stronger communities. Whether through creative expression, intellectual activities, or communal experiences, the program focuses on enhancing relationships, promoting mutual understanding, and fostering a sense of belonging. Our goal is to connect people in ways that enrich lives, inspire growth, and encourage positive social change, creating lasting impacts through the power of human connection.</p>
            </div>

            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>
            
            <!-- Chess Section -->
            <div id="chess" class="space-y-6">
                <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-8 items-start lg:items-center">
                    <div class="space-y-4 lg:col-span-4">
                        <p class="text-2xl md:text-3xl rasa">
                            Chess Lessons for Abuse Survivors
                        </p>
                        <div class="space-y-3 text-sm md:text-base">
                            <p>Solace Global partnered with the Naihati New Life Society (NNLS), a nonprofit organization dedicated to supporting marginalized communities in the Sundarbans region of South West Bengal, India. NNLS works with children without parents, physically challenged individuals, victims of human trafficking, and survivors of early marriage and family violence. Many of these individuals come from impoverished backgrounds with limited access to educational opportunities. Through our 5-part chess series, Solace Global aimed to offer them a chance to develop critical thinking, problem-solving skills, and self-confidence, which are essential for overcoming the challenges they face.</p>
                            <p>The chess program was designed to be accessible and progressive, starting with basic lessons in the first three sessions and gradually introducing intermediate concepts in the final two sessions. This approach allowed the participants to build a solid foundation before advancing to more complex strategies. Despite the challenges of limited resources, the program provided participants with a unique opportunity to engage in an educational experience that would not only improve their intellectual abilities but also boost their sense of accomplishment.</p>
                            <p>The program's goal was to empower the students with the skills to play a full game of chess by the end of the series. The participants, many of whom had never been exposed to chess before, gained a new understanding of the game's rules and strategies. By the final session, the students were able to apply their newfound knowledge and play a complete game, experiencing both the excitement and the challenges of the game firsthand.</p>
                            <p>Through this chess series, Solace Global helped NNLS participants gain valuable skills that extend beyond the game itself. The lessons taught in chess—such as focus, strategy, and patience—provided the students with tools that can be applied to their daily lives. The program not only introduced them to a new intellectual pursuit but also gave them a sense of empowerment and achievement, helping them take a step toward a brighter future.</p>
                        </div>
                    </div>
                    
                    <div class="w-full lg:col-span-5">
                        <div class="video-container">
                            <iframe 
                                src="https://www.youtube.com/embed/4SXYDIXKEZo?si=-lplcRbccsicSHfs" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen 
                                class="rounded-lg">
                            </iframe>
                        </div>
                        <p class="text-center text-xs md:text-sm mt-2 md:mt-4">For more information, please contact team@solaceglobal.xyz</p>
                    </div>
                </div>
            </div>

            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>
            
            <!-- Baqiyatullah Section -->
            <div id="baqiyatullah" class="space-y-6">
                <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
                    <div class="space-y-4 lg:col-span-4">
                        <p class="text-2xl md:text-3xl rasa">
                            Baqiyatullah Foundation: Clothing Drive - Pakistan
                        </p>
                        <div class="space-y-3 text-sm md:text-base">
                            <p>Solace Global organized a heartfelt giving initiative, donating RS7,000 to provide clothing for 20 orphaned children aged 7-10 at the Baqiyatullah Orphan House Complex. Beyond providing essential resources, our members personally connected with the children, engaging in conversations, sharing smiles, and fostering a warm and supportive atmosphere.</p>
                            <p>During the visit, our team took the time to listen to the children's stories, learn about their daily lives, and offer words of encouragement. The experience was deeply moving, as we witnessed their resilience, curiosity, and hope for the future. The interactions reinforced the importance of not just donating material goods, but also showing up with kindness and genuine care.</p>
                            <p>The Baqiyatullah Foundation provides a nurturing home, education, and life skills to orphaned children, helping them grow into self-reliant individuals. Through this collaboration, we aimed to do more than just provide clothing—we sought to remind these children that they are valued, supported, and not alone.</p>
                            <p>This initiative reflects Solace Global's commitment to making a meaningful impact, one step at a time. By standing with organizations like Baqiyatullah, we continue to work toward a future where every child has the opportunity to thrive.</p>
                        </div>
                    </div>
                    
                    <div class="w-full lg:col-span-5">
                        <div class="space-y-4">
                            <img src={baqia} alt="Baqiyatullah Foundation" class="w-full rounded-lg">
                            <div class="flex justify-center">
                                <video loop muted autoplay controls class="w-full md:w-3/4 lg:w-1/2 rounded-lg">
                                    <source src={Video} type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>