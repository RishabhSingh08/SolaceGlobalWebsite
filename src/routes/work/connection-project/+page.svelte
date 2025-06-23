<script>
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
    import baqia from "../../../lib/images/MediaImages/baqia.png";
    import german from "../../../lib/images/MediaImages/image0.jpg";
    import Video from "../../../lib/images/MediaImages/baqtiVideo.mp4";
    import israel from "../../../lib/images/MediaImages/israel.jpg";
    import israel2 from "../../../lib/images/MediaImages/israel2.jpg";
    import israel3 from "../../../lib/images/MediaImages/israel3.jpg";
    import israel4 from "../../../lib/images/MediaImages/israel4.jpg";
    import v1 from "../../../lib/images/MediaImages/volley1.png";
    import v2 from "../../../lib/images/MediaImages/volley2.png";
    import v3 from "../../../lib/images/MediaImages/volley3.png";
    import e1 from "../../../lib/images/MediaImages/e1.jpeg";
    import e2 from "../../../lib/images/MediaImages/e2.jpeg";

    import s1 from "../../../lib/images/MediaImages/s1.jpeg";
    import s2 from "../../../lib/images/MediaImages/s2.jpeg";
    import s3 from "../../../lib/images/MediaImages/s3.jpeg";
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
            <div>

                <img src={v3} alt="Connection Project" class="w-full max-w-4xl">
                <div class="flex justify-center pt-4">
                    <a href="#volleyball-fundraiser">

                        <div class="inline-flex items-center text-black font-medium border-b-2 border-black group-hover:text-gray-600 group-hover:border-gray-600 transition-colors pb-1">
                            View More
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        
        <!-- Introduction -->
        <div class="space-y-8 md:space-y-12">
            <div class="flex flex-col md:grid md:grid-cols-3 gap-6 mx-2 md:mx-8 lg:mx-24">
                <p class="text-xl md:text-2xl rasa">
                    Connections foster a longer lifespan, as social connections reduce loneliness and isolation, contributing to greater overall well-being.
                </p>
                <p class="md:col-span-2 text-sm md:text-base">
                    The Connections Project is dedicated to bringing people together by fostering meaningful interactions and shared experiences. By creating opportunities for individuals from diverse backgrounds to engage and collaborate, we aim to bridge gaps and build stronger communities. Whether through creative expression, intellectual activities, or communal experiences, the program focuses on enhancing relationships, promoting mutual understanding, and fostering a sense of belonging. Our goal is to connect people in ways that enrich lives, inspire growth, and encourage positive social change, creating lasting impacts through the power of human connection.
                </p>
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
                        <p class="text-center text-xs md:text-sm mt-2 md:mt-4">
                            For more information, please contact team@solaceglobal.xyz
                        </p>
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
                            <p>
                                Solace Global organized a heartfelt giving initiative, donating RS30,000 to provide clothing for 20 orphaned children aged 7-10 at the Baqiyatullah Orphan House Complex. Beyond providing essential resources, our members personally connected with the children, engaging in conversations, sharing smiles, and fostering a warm and supportive atmosphere.
                            </p>
                            <p>
                                During the visit, our team took the time to listen to the children's stories, learn about their daily lives, and offer words of encouragement. The experience was deeply moving, as we witnessed their resilience, curiosity, and hope for the future. The interactions reinforced the importance of not just donating material goods, but also showing up with kindness and genuine care.
                            </p>
                            <p>
                                The Baqiyatullah Foundation provides a nurturing home, education, and life skills to orphaned children, helping them grow into self-reliant individuals. Through this collaboration, we aimed to do more than just provide clothing—we sought to remind these children that they are valued, supported, and not alone.
                            </p>
                            <p>
                                This initiative reflects Solace Global's commitment to making a meaningful impact, one step at a time. By standing with organizations like Baqiyatullah, we continue to work toward a future where every child has the opportunity to thrive.
                            </p>
                        </div>
                    </div>
                    <div class="w-full lg:col-span-5">
                        <div class="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/WCm9Cna9uDQ?si=GR8lwmaIpNNIsvFy" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <p class="text-center text-xs md:text-sm mt-2 md:mt-4">
                            For more information, please contact team@solaceglobal.xyz
                        </p>
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
                    
                    <div class="w-full lg:col-span-5">
                        <div class="space-y-4">
                            <!-- German visa section image -->
                            <div class="bg-zinc-100 rounded-lg flex items-center justify-center h-64 md:h-96">
                                <img src={german} alt="German students visa program">
                            </div>
                            
                            <!-- Stats section -->
                            <div class="rounded-lg p-4 md:p-6 space-y-3">
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

            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>
            
            <!-- Israel Aid Section -->
            <div id="israel-aid" class="space-y-6">
                <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
                    <div class="space-y-4 lg:col-span-4">
                        <p class="text-2xl md:text-3xl rasa">
                            Essential Aid for Those in Need – Israel
                        </p>
                        <div class="space-y-3 text-sm md:text-base">
                            <p>
                                Solace Global reached out to a dedicated member in Israel to carry out a heartfelt initiative focused on helping children and those in need. Understanding the challenges faced by many, we donated clothing worth ₪2000 to various clothing donation boxes across the country. These boxes are specifically aimed at supporting children and those in need, ensuring they have access to the warmth and care they deserve.
                            </p>

                            <p>
                                We want to make it clear that this donation has absolutely no ties to any side in the ongoing conflict. Solace Global remains neutral and does not express any political views or take sides in the war. Our commitment is to the well-being of children and those who are vulnerable—individuals whose lives have been affected in ways beyond their control.
                            </p>

                            <p>
                                Our team took great care in making sure that these donations would reach those who needed them most. The thought of a child receiving something as simple as a warm jacket or fresh clothes—a small gesture that can bring so much comfort—was the driving force behind this effort. It is not just about providing material goods, but about reminding these children that they are valued, that they matter, and that there are people who care about their future.
                            </p>

                            <p>
                                This initiative is a reflection of Solace Global's deep commitment to humanity and compassion. It is about standing with those who need support, irrespective of the political landscape. We believe that every child deserves a future filled with hope and opportunity, and through this donation, we took one step closer to making that a reality.
                            </p>
                        </div>
                    </div>
                    
                    <div class="w-full lg:col-span-5">
                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-2 md:gap-3">
                                <img src={israel} alt="Kids with robots" class="rounded-lg shadow-md">
                                <img src={israel2} alt="Children learning about robotics" class="rounded-lg shadow-md">
                                <img src={israel3} alt="Robotics demonstration" class="rounded-lg shadow-md">
                                <img src={israel4} alt="STEM workshop" class="rounded-lg shadow-md">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>
            <!-- Volleyball -->
            <div id="volleyball-fundraiser" class="space-y-6">
                <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
                    <div class="space-y-4 lg:col-span-4">
                        <p class="text-2xl md:text-3xl rasa">
                            Volleyball Fundraiser at Plano West High School
                        </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>On April 12th, we hosted a vibrant volleyball fundraiser at Plano West High School, bringing together 110 attendees for an exciting day of friendly competition. Thanks to the enthusiasm and support of everyone involved, we raised approximately $700, with $200 of that going to the first-place team as a well-deserved reward.</p>
                <p>The event was not only a fun way to engage with the community, but also a testament to the power of teamwork and generosity. Participants came together to enjoy the game, support one another, and contribute to a cause that brings us closer as a community.</p>
                <p>The funds raised will go toward supporting our ongoing initiatives, helping us continue our work in making a positive impact. We are grateful for the spirit of collaboration and for those who made the day a success. This event exemplifies our commitment to creating opportunities for everyone to get involved and make a difference, one game at a time.</p>
            </div>
                    </div>
                    
                    <div class="w-full lg:col-span-5">
                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-2 md:gap-3">
                                <img src={v1} alt="v1" class="rounded-lg shadow-md">
                                <img src={v2} alt="v2" class="rounded-lg shadow-md">
                                <img src={v3} alt="v3" class="rounded-lg shadow-md">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>
            
<!-- Ethiopia Donation START -->
<div id="ethiopia-donation" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
                Empowering Students at Medresa-Hamza School – Ethiopia
            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>Solace Global recently extended its outreach to Ethiopia by donating clothing worth Br 7,000 to ten students at the Medresa-Hamza School, located in a rural region serving youth from some of the country’s most economically challenged families. The students, aged 16 to 18, not only study at the school but also live there, as their families are unable to afford basic educational or living expenses. Medresa-Hamza provides them with shelter, meals, and a safe environment to grow both academically and personally.</p>
                <p>This initiative was born from a desire to uplift students who often go unnoticed and unsupported. For these young individuals, the simple gift of clothing was more than just fabric—it was a symbol of dignity, hope, and recognition. Each garment was carefully selected to meet their needs and bring comfort to their daily lives, reinforcing the belief that no student should be held back due to a lack of basic resources.</p>
                <p>During the distribution, members of our local team emphasized encouragement and connection, taking the time to understand each student's background and aspirations. The gratitude expressed by the students was deeply moving, reminding us that meaningful impact often comes from simple, sincere acts of kindness. Many of the students shared their dreams of becoming doctors, teachers, and engineers—ambitions that remain alive despite their circumstances.</p>
                <p>Solace Global remains committed to creating lasting, human-centered change. By partnering with community-based institutions like Medresa-Hamza School, we aim to build a future where every child—regardless of income or geography—has the tools, support, and belief they need to thrive.</p>
            </div>
        </div>

        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2 md:gap-3">
                    <img src={e1} alt="Ethiopia Donation 1" class="rounded-lg shadow-md">
                    <img src={e2} alt="Ethiopia Donation 2" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END -->
<!-- NEXT SECTION HERE -->
<div id="switzerland-donation" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
                Supporting Cultural Heritage – Switzerland
            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>In a continued effort to foster global connection and support community-rooted initiatives, Solace Global made a symbolic donation of CHF 30 to the Bern Cathedral (Berner Münster)—Switzerland’s largest and most iconic late-Gothic church.                </p>
                <p>More than just a historic structure, the Bern Cathedral represents centuries of human craftsmanship, cultural continuity, and spiritual connection. Our donation covered the full cost of a guided visit, granting us the opportunity to explore this architectural masterpiece and support its preservation.                </p>
                <p>By engaging with local heritage in Bern, we aimed to show appreciation for the values of resilience, legacy, and unity that places like the Münster uphold. From its stunning 100-meter tower to the Last Judgment portal that survived the Reformation, every corner of the cathedral tells a story of connection across generations.                </p>
                <p>This small act reflects our belief that connection isn’t just about people—it’s also about honoring the spaces and histories that bring us together. Supporting local efforts like this reaffirms Solace Global’s commitment to bridging worlds through compassion, education, and shared experiences.</p>
            </div>
        </div>

        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2 md:gap-3">
                    <img src={s1} alt="Swiss Donation 1" class="rounded-lg shadow-md">
                    <img src={s2} alt="Swiss Donation 2" class="rounded-lg shadow-md">
                    <img src={s3} alt="Swiss Donation 3" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END -->

        </div>
    </div>
</main>