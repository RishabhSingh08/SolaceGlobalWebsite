<script>
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
    import baqia from "../../../lib/images/MediaImages/baqia.png"
    import german from "../../../lib/images/MediaImages/image0.jpg"
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
                            Clothing for Those in Need – Pakistan
                        </p>
                        <div class="space-y-3 text-sm md:text-base">
                            <p>Solace Global organized a heartfelt giving initiative, donating $30,000 to provide clothing for 20 orphaned children aged 7-10 at the Baqiyatullah Orphan House Complex. Beyond providing essential resources, our members personally connected with the children, engaging in conversations, sharing smiles, and fostering a warm and supportive atmosphere.</p>
                            <p>During the visit, our team took the time to listen to the children's stories, learn about their daily lives, and offer words of encouragement. The experience was deeply moving, as we witnessed their resilience, curiosity, and hope for the future. The interactions reinforced the importance of not just donating material goods, but also showing up with kindness and genuine care.</p>
                            <p>The Baqiyatullah Foundation provides a nurturing home, education, and life skills to orphaned children, helping them grow into self-reliant individuals. Through this collaboration, we aimed to do more than just provide clothing—we sought to remind these children that they are valued, supported, and not alone.</p>
                            <p>This initiative reflects Solace Global's commitment to making a meaningful impact, one step at a time. By standing with organizations like Baqiyatullah, we continue to work toward a future where every child has the opportunity to thrive.</p>
                        </div>
                    </div>
                        <div class="w-full lg:col-span-5">
                            <div class="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
                                <!-- Image Section -->
                                <div class="w-full lg:w-1/2 flex justify-center">
                                    <img src={baqia} alt="Baqiyatullah Foundation" class="w-[30rem] rounded-lg">
                                </div>
                                <!-- Video Section -->
                                <div class="w-full lg:w-1/2 flex justify-center">
                                    <video loop muted autoplay controls class="w-full md:w-3/4 lg:w-full rounded-lg">
                                        <source src={Video} type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>
            
            <!-- German Students U.S. Visa Section -->
            <div id="german-visa" class="space-y-6">
                <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
                    <div class="space-y-4 lg:col-span-4">
                        <p class="text-2xl md:text-3xl rasa">
                            Guiding German Students on U.S. Visa Processes
                        </p>
                        <div class="space-y-3 text-sm md:text-base">
                            <p>Solace Global recently partnered with Mohammed Nachawati, the branch head of Solace Global in Germany, to conduct an impactful online session addressing the challenges many German students face when pursuing educational opportunities in the United States. The session was designed to equip Mohammed with in-depth knowledge about U.S. visa categories, processes, and requirements, enabling him to share this information with foster homes and underprivileged teens in Germany.</p>
                            
                            <p>This initiative aligns with Solace Global's mission to foster global education and provide equitable opportunities to underserved communities. Economic inequality among students in Germany highlights the significance of this effort. In 2021, 37.9% of students in Germany were classified as at risk of poverty, with those living alone or in shared accommodations facing an even higher risk of 76.1%, according to the Federal Statistical Office (Destatis). By comparison, only 15.8% of the general German population faced similar challenges.</p>
                            
                            <p>Students reliant on BAföG, the federal education grant and loan scheme, are disproportionately affected, with 45% at risk of poverty. The average income of a poor student was just €802 (US$848) per month—well below Germany's poverty line of €1,265. Rising inflation and the energy crisis further compound these struggles, creating a pressing need for initiatives that open doors to better opportunities.</p>
                            
                            <p>The session covered the essentials of navigating the U.S. visa system, focusing on categories such as F-1 student visas for full-time study, J-1 exchange visitor visas for cultural and educational exchanges, and H-1B work visas for skilled employment. Mohammed learned how to guide students in identifying the most suitable visa type based on their individual goals, whether for academic study, internships, or long-term professional aspirations.</p>
                            
                            <p>A deeper understanding of the German education system was also critical. German high schools operate on a grading scale of 1 to 6, where 1 represents the highest score and 6 the lowest. For students in the qualification phase of the Abitur exam (Oberstufe), the grading shifts to a 15-point scale, with 15 being the top score. Translating these credentials into U.S. standards is often a challenge, and the session provided strategies for presenting competitive applications that showcase students' academic strengths effectively.</p>
                            
                            <p>Through initiatives like this, Solace Global continues to bridge the gap between aspiration and access, providing resources and knowledge to those who need it most. By equipping Mohammed Nachawati to spread this information, the organization extends its reach to some of the most vulnerable youth in Germany, offering them the tools to dream bigger and achieve more.</p>
                        </div>
                    </div>
                    
                    <div class="w-full lg:col-span-5">
                        <div class="space-y-4">
                            <!-- Placeholder for German visa section image -->
                            <div class="bg-zinc-100 rounded-lg flex items-center justify-center h-64 md:h-96">
                                <img src={german} alt="">
                            </div>
                            
                            <!-- Stats section -->
                            <div class=" rounded-lg p-4 md:p-6 space-y-3">
                                <p class="font-semibold text-base md:text-lg">Key Statistics:</p>
                                <div class="grid grid-cols-2 gap-3">
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <p class="text-xl md:text-2xl font-bold text-blue-700">37.9%</p>
                                        <p class="text-xs md:text-sm text-zinc-600">German students at risk of poverty (2021)</p>
                                    </div>
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <p class="text-xl md:text-2xl font-bold text-blue-700">76.1%</p>
                                        <p class="text-xs md:text-sm text-zinc-600">Students in shared housing at risk</p>
                                    </div>
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <p class="text-xl md:text-2xl font-bold text-blue-700">€802</p>
                                        <p class="text-xs md:text-sm text-zinc-600">Average monthly income of poor students</p>
                                    </div>
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <p class="text-xl md:text-2xl font-bold text-blue-700">45%</p>
                                        <p class="text-xs md:text-sm text-zinc-600">BAföG recipients at risk of poverty</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>