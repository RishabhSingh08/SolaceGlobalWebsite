<script>
    import poster01 from "../../../lib/images/MediaImages/poster01.png";
    import baqia from "../../../lib/images/MediaImages/baqia.png";
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

    import syria1 from "../../../lib/images/MediaImages/syria1.png";
    import syria2 from "../../../lib/images/MediaImages/syria2.png";
    import syria3 from "../../../lib/images/MediaImages/syria3.png";

    import soccer1 from "../../../lib/images/MediaImages/soccer1.png"
    import soccer2 from "../../../lib/images/MediaImages/soccer2.png"
    import soccer3 from "../../../lib/images/MediaImages/soccer3.png"
    import soccer4 from "../../../lib/images/MediaImages/soccer4.png"

    import cambodia from "../../../lib/images/MediaImages/cambodia.png";
    import cambodia1 from "../../../lib/images/MediaImages/cambodia1.png";
    import tanzania from "$lib/images/MediaImages/tanzania.png"
    import malawi from "$lib/images/MediaImages/malawi.png"
    import kenya from "$lib/images/MediaImages/kenya.png"
    import kenya1 from "$lib/images/MediaImages/kenya1.png"
    import haiti from "$lib/images/MediaImages/haiti.png"
    import uganda from "$lib/images/MediaImages/uganda.png"
    import uganda1 from "$lib/images/MediaImages/uganda1.png"

    import bv1 from "$lib/images/MediaImages/bv1.png"
    import bv2 from "$lib/images/MediaImages/bv2.png"
    import bv3 from "$lib/images/MediaImages/bv3.png"
    import bv4 from "$lib/images/MediaImages/bv4.png"

    import myanmar from "$lib/images/MediaImages/myanmar.jpg"
    import bolivia from "$lib/images/MediaImages/bolivia.jpg"

    import hike1 from "$lib/images/MediaImages/hike1.png"
    import hike2 from "$lib/images/MediaImages/hike2.png"
    import hike3 from "$lib/images/MediaImages/hike3.png"
    import hike4 from "$lib/images/MediaImages/hike4.png"



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
        padding-bottom: 56.25%; 
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
        <div class="text-center space-y-2">
            <p class="text-4xl md:text-5xl lg:text-6xl rasa font-bold text-black">
                The Connection Project
            </p>
            <div class="text-zinc-600 text-sm md:text-base px-2">
                <p>The Connection Project brings people together through diverse activities to foster</p>
                <p>meaningful relationships, inclusivity, and positive social change.</p>
            </div>
        </div>
        
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
            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="switzerland-donation" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
                Supporting Cultural Heritage – Switzerland
            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>In a continued effort to foster global connection and support community-rooted initiatives, Solace Global made a symbolic donation to the Bern Cathedral (Berner Münster)—Switzerland’s largest and most iconic late-Gothic church.                </p>
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
            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="syria-donation" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
                Clothing and Care for Orphans – Syria
            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>Solace Global extended its mission of hope by organizing a meaningful giving initiative for orphaned children in Damascus, Syria. Through this effort, 14 shirts were donated to children spread throughout the city, each gift paired with two pieces of candy and a bag of chips to bring a small moment of joy and comfort to their day. </p>
                <p>Beyond providing clothing and treats, this initiative was about sharing kindness and reminding these children that they are seen and cared for. Though simple, these gifts carried with them a message of compassion, solidarity, and hope for a brighter future.</p>
                <p>Many of these children face daily challenges, yet their resilience continues to inspire us. By offering not only material support but also moments of happiness, Solace Global remains committed to standing beside communities in need wherever they may be.</p>
                <p>This effort reflects our ongoing dedication to creating small but meaningful change, one act of kindness at a time.</p>            
            </div>
        </div>

        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2 md:gap-3">
                    <img src={syria1} alt="Syria Donation 1" class="rounded-lg shadow-md">
                    <img src={syria2} alt="Syria Donation 2" class="rounded-lg shadow-md">
                    <img src={syria3} alt="Syria Donation 3" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END -->
             <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="soccer-tourney" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
                Soccer Fundraiser Tournament at Plano West High School
            </p>
            <div class="space-y-3 text-sm md:text-base">
<p>On July 9, we hosted an energetic and community-driven Soccer Fundraiser Tournament at Anderson Bonner Park, bringing together 50 passionate players and volunteers for a fun and meaningful afternoon. With three teams competing in a round-robin format, the event was filled with teamwork, friendly rivalry, and lots of excitement on the field.</p>              
<p>Thanks to everyone’s support, we successfully raised over $400, with $300 awarded to the winning team as a well-earned prize for their performance and sportsmanship.</p>
<p>This tournament was more than just a game—it was a celebration of community, purpose, and the shared belief that small actions can create big change. The funds raised will help fuel Solace Global’s ongoing efforts to make STEM education accessible around the world.</p>
<p>We are deeply grateful to all who played, volunteered, and cheered. Together, we’re proving that even a few hours on the field can move the needle toward a better future—one goal at a time.</p>
</div>
        </div>

        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2 md:gap-3">
                    <img src={soccer1} alt="Soccer Donation 1" class="rounded-lg shadow-md">
                    <img src={soccer2} alt="Soccer Donation 2" class="rounded-lg shadow-md">
                    <img src={soccer3} alt="Soccer Donation 3" class="rounded-lg shadow-md">
                    <img src={soccer4} alt="Soccer Donation 4" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END -->
             <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="cambodia" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
Supporting Socheata’s Journey to Recovery – Cambodia
            </p>
            <div class="space-y-3 text-sm md:text-base">
<p>Solace Global contributed toward the life-changing surgery of Socheata, a six-year-old girl from Cambodia who suffered severe burn injuries to both hands at the age of one. The injuries resulted in multiple contractures—tightened skin and tissue that severely limited her ability to move her fingers, write, eat, or perform basic daily tasks.
</p>
<p>Socheata lives in Takeo province with her grandmother while her parents work several hours away in Sihanoukville. Despite these challenges, she attends first grade and finds joy in math, art, and playing jump rope with her friends.
</p>
<p>Recognizing her urgent need, Solace Global partnered with the Children’s Surgical Centre (CSC) in Cambodia to help fund her burn contracture release surgery, a procedure designed to restore movement in her hands and improve her quality of life. The surgery, was partially funded by Solace Global, joining hands with other donors to bring Socheata closer to healing. Solace Global joined hands with other donors to help fund Socheata’s surgery.
</p>
<p>This initiative reflects Solace Global’s commitment to creating meaningful, human-centered change. By helping fund Socheata’s treatment, we aim not only to support a medical procedure but to invest in a child’s potential—allowing her to return to school, regain her independence, and pursue her dreams.
</p>
<p>“I hope my hands will be better so I can draw and do things at school more easily.” — Socheata </p>
</div>
        </div>

        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-rows-1 gap-2 md:gap-3 justify-center">
                    <img src={cambodia} alt="Ethiopia Donation 1" class="rounded-lg shadow-md">
                    <img src={cambodia1} alt="Ethiopia Donation 2" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>

    </div>
</div>
<!-- END -->
             <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>


<!-- NEXT SECTION HERE -->
<div id="tanzania" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
Helping Felista Walk Toward Her Dreams – Tanzania
            </p>
            <div class="space-y-3 text-sm md:text-base">
<p>
Solace Global contributed to the surgery of Felista, a vibrant five-year-old girl from Tanzania living with a condition called bilateral genu valgus, where her knees turn inward, making walking and playing increasingly painful. Despite these challenges, Felista remains full of joy, dreaming of one day becoming a teacher and standing confidently in front of a classroom.
</p>
<p>
Raised by her single mother, who also has the same condition and recognized the early signs in her daughter, Felista’s journey has not been easy. Her mother works tirelessly through casual labor to provide for them, but the cost of corrective surgery was far beyond reach. Understanding the urgency and long-term impact of this condition, Solace Global made a heartfelt donation to help support her treatment.
</p>
<p>
Felista’s procedure—bilateral distal femoral osteotomy—is designed to realign her knees, reduce discomfort, and improve her ability to walk and play. The surgery is being facilitated by African Mission Healthcare at Kafika House, with a total cost of $777 USD. While additional funds are still being raised, contributions like Solace Global’s help bring Felista one step closer to living a pain-free life.
</p>
<p>
This initiative reflects Solace Global’s commitment to empowering youth across borders through compassion-driven action. By supporting Felista’s surgery, we hope to ensure her dreams of education, independence, and confidence can be pursued without limitation.
</p>
<p>
“I don’t wish for my daughter to go through what I have experienced living with the same condition. I wish for her to have a better life.” — Felista’s mother
</p>
</div>
        </div>

<div class="col-span-5">
    <img src={tanzania} alt="tanzania 1" class="w-full rounded-lg shadow-md">
</div>
    </div>
</div>
<!-- END -->
             <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="martin-malawi" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
Supporting Martin's Recovery – Malawi
            </p>
            <div class="space-y-3 text-sm md:text-base">
<p>
Solace Global extended its compassion to Malawi by donating toward the treatment of Martin, a 14-year-old student facing urgent medical needs.
</p>
<p>
Martin, the second-born in a family of three, lost his father six years ago and has been raised by his mother, who works tirelessly selling charcoal to provide for her children. Earlier this year, Martin was diagnosed with a painful condition that disrupted his daily life and schooling. Despite the challenges, his determination to continue learning and growing has remained strong.
</p>
<p>
With this donation, Martin is able to move forward with treatment that will bring him relief from his pain and restore his ability to live and learn without constant discomfort. The support represents more than just medical help—it is a chance for Martin to reclaim his childhood, return to school, and pursue his dreams with renewed confidence.
</p>
<p>
This initiative reflects Solace Global's belief that every child deserves the opportunity to thrive. By standing with Martin, we affirm our commitment to empowering young lives, uplifting families, and fostering brighter futures through acts of compassion that transcend borders.
</p>
<p>
"I just want to get better and go back to school to continue with my education." — Martin
</p>
</div>
        </div>

<div class="col-span-5">
    <img src={malawi} alt="Cambodia 1" class="w-full rounded-lg shadow-md">
</div>

    </div>
</div>
<!-- END -->

             <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="kaltuma-kenya" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
Standing Beside Kaltuma in Her Fight Against Thyroid Disease – Kenya
            </p>
            <div class="space-y-3 text-sm md:text-base">
<p>
Solace Global extended its compassion to Kenya by donating to support Kaltuma, a resilient 51-year-old refugee striving to overcome serious health challenges.
</p>
<p>
Living in Nairobi with her seven children, Kaltuma has carried the responsibility of keeping her family afloat while her husband remains in Somalia to sustain a small business. Despite her children taking on casual work, the family continues to face daily struggles. In the midst of these hardships, Kaltuma developed a thyroid condition that brought painful swelling, sleepless nights, and constant fatigue, making everyday life a challenge.
</p>
<p>
With the help of contributions like this, Kaltuma is moving closer to receiving the treatment she urgently needs at Nazareth Hospital. This support represents more than financial aid—it is a lifeline, offering her strength, dignity, and renewed hope for a healthier future.
</p>
<p>
Through this gift, Solace Global reaffirms its commitment to uplifting lives, ensuring that individuals like Kaltuma are not defined by hardship, but empowered to heal and continue caring for their families with resilience and hope.
</p>
<p>
"My children and I are struggling to make ends meet. I would be grateful if someone could kindly assist me so that I can receive treatment and return to living a normal life." — Kaltuma
</p>
</div>
        </div>

        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-rows-1 gap-2 md:gap-3 justify-center">
                    <img src={kenya} alt="Ethiopia Donation 1" class="rounded-lg shadow-md">
                    <img src={kenya1} alt="Ethiopia Donation 2" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>

    </div>
</div>
<!-- END -->

             <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="ana-haiti" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
Bringing Hope to Ana as She Fights a Heart Condition – Haiti
            </p>
            <div class="space-y-3 text-sm md:text-base">
<p>
Solace Global extended its compassion to Haiti by donating to support Ana, a courageous four-year-old preschooler whose laughter and energy have been dimmed by a life-threatening heart condition.
</p>
<p>
Ana lives in the capital with her parents and two older brothers. Her father works long hours in construction, while her mother devotes herself to raising the children. Despite their love and care, Ana's childhood has not been easy. She was born with a condition called patent ductus arteriosus, a hole near her heart that causes blood to leak between major vessels. Instead of running, playing, and learning with the carefree spirit of other children her age, Ana often feels exhausted, weak, and short of breath.
</p>
<p>
This illness has placed a heavy weight on her family, who long to see their daughter live freely, without fear or fatigue. With the help of this donation, Ana is preparing to travel with her family to the Dominican Republic, where doctors will perform the surgery that can finally close the hole in her heart. This procedure will give Ana the chance to grow stronger, laugh louder, and enjoy the childhood she deserves.
</p>
<p>
Through this act of kindness, Solace Global helps carry Ana's burden, turning fear into hope and giving her family the gift of believing in a brighter tomorrow.
</p>
<p>
"Our family is so happy that our daughter can have her heart fixed so that she can be strong and healthy!" — Ana's mother
</p>
</div>
        </div>

<div class="col-span-5">
    <img src={haiti} alt="Cambodia 1" class="w-full rounded-lg shadow-md">
</div>
    </div>
</div>
<!-- END -->

        <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="elvis-uganda" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
Supporting Elvis as He Faces Surgery for a Tumor – Uganda
            </p>
            <div class="space-y-3 text-sm md:text-base">
<p>
Solace Global extended its compassion to Uganda by donating to support Elvis, a brave four-year-old boy whose childhood has been interrupted by a painful and frightening illness.
</p>
<p>
Elvis is the second of three children, born to hardworking parents who struggle as small-scale farmers. Six months ago, his mother noticed a swelling in his lower abdomen. Despite visits to the local health center, the medication provided did little to help, and Elvis's condition worsened. With few resources left, his mother sent him to stay with his grandmother in the hope that someone could find a way forward.
</p>
<p>
When Elvis's swelling became unbearable, his grandmother used the last of her savings to bring him to Rushoroza Hospital. There, doctors discovered a mass that required surgery. The news was overwhelming for his family, who knew the treatment was far beyond their means.
</p>
<p>
With this contribution, Solace Global is helping Elvis move closer to the care that will ease his pain and allow him to return to the laughter and play every child deserves. Through this act of giving, Solace Global reaffirms its commitment to uplifting children like Elvis, ensuring that poverty and circumstance do not stand in the way of a healthy and hopeful future.
</p>
<p>
"I believe that my grandchild will get well through surgery so that he may be able to live a comfortable life." — Elvis's grandmother
</p>
</div>
        </div>

        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-rows-1 gap-2 md:gap-3 justify-center justify-center">
                    <img src={uganda} alt="Ethiopia Donation 1" class="rounded-lg shadow-md">
                    <img src={uganda1} alt="Ethiopia Donation 2" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>

    </div>
</div>
<!-- END -->
<div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="little-elm-volleyball" class="space-y-6">
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        
        <!-- Text Column -->
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
                Beach Volleyball Tournament at Little Elm Beach 2025
            </p>
            <div class="space-y-3 text-sm md:text-base">
                <p>
                    On August 9, Solace Global hosted an exciting Beach Volleyball Tournament at Little Elm Beach, drawing together 16 teams and more than 130 attendees for a vibrant day of community, competition, and connection.
                </p>
                <p>
                    The energy on the sand was electric as teams battled it out in a spirited series of matches, cheered on by an enthusiastic crowd of friends, families, and supporters. The tournament culminated in an exhilarating final match, where the winning team claimed a $750 prize in recognition of their skill, teamwork, and sportsmanship.
                </p>
                <p>
                    Beyond the competition, the event served as a celebration of unity and collective effort—proving that fun, collaboration, and generosity can go hand in hand. Attendees enjoyed not only the games, but also the opportunity to meet new people, strengthen community bonds, and share in a day filled with energy and laughter.
                </p>
                <p>
                    Most importantly, the funds raised from the tournament will directly support our upcoming outreach initiative with an orphanage in Pune, India, helping to extend the day’s spirit of connection and care across borders. Events like this remind us that when people come together—whether through sport, service, or shared experiences—we create opportunities to uplift others and build a stronger, more connected world.
                </p>
            </div>
        </div>

        <!-- Image Column -->
        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2 md:gap-3">
                    <img src={bv1} alt="Beach Volleyball 1" class="rounded-lg shadow-md">
                    <img src={bv2} alt="Beach Volleyball 2" class="rounded-lg shadow-md">
                    <img src={bv3} alt="Beach Volleyball 3" class="rounded-lg shadow-md">
                    <img src={bv4} alt="Beach Volleyball 3" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END -->
        <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="north-texas-hike-club" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa">
Community Cleanup with North Texas Hike Club            </p>
            <div class="space-y-3 text-sm md:text-base">
<p>
In collaboration with the North Texas Hike Club, Solace Global organized a meaningful local initiative focused on caring for our shared environment. Together, we hosted clean-up efforts at White Rock Lake and Willow Bend Park, bringing volunteers together to remove litter, restore natural beauty, and protect community green spaces.
</p>
<p>
This partnership marks the beginning of an ongoing commitment to regular local clean-ups, reinforcing the idea that connection isn’t just between people—it’s also with the places we live and enjoy. By uniting outdoor enthusiasts and community members, we not only improved the environment but also built stronger bonds rooted in service, stewardship, and shared purpose.
</p>
</div>
        </div>

        <div class="w-full lg:col-span-5">
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2 md:gap-3">
                    <img src={hike1} alt="Beach Volleyball 1" class="rounded-lg shadow-md">
                    <img src={hike2} alt="Beach Volleyball 2" class="rounded-lg shadow-md">
                    <img src={hike3} alt="Beach Volleyball 3" class="rounded-lg shadow-md">
                    <img src={hike4} alt="Beach Volleyball 3" class="rounded-lg shadow-md">
                </div>
            </div>
        </div>

    </div>
</div>
<!-- END -->
        <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="simon-bolivia" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa"> Paying for Simon’s Heart Surgery - Bolivia</p>
            <div class="space-y-3 text-sm md:text-base">
                <p>
                Simon is a six-year-old boy from Bolivia who lives with his aunt and five older siblings, after losing his mother at birth. Doctors diagnosed him with a ventricular septal defect (VSD)—a hole between the lower chambers of his heart—that leaves him weak and short of breath.
                </p>
                <p>
                On April 16, 2025, Simon is scheduled for open-heart surgery at Hospital del Niño Dr. Ovidio Aliaga Uría. Surgeons will place a patch to close the hole so oxygen-rich blood can circulate properly. The total cost of his care is $1,500, covering diagnostics, surgery, follow-up, and medications through our partner, International Cardiac Alliance.
                </p>
                <p>
                To support Simon’s recovery, Solace Global donated funds to help cover part of the cost of his surgery. This contribution brings Simon closer to the treatment he urgently needs and gives him the chance to grow up healthy and strong.
                </p>
            </div>
        </div>

        <div class="col-span-5">
            <img src={bolivia} alt="Cambodia 1" class="w-full rounded-lg shadow-md">
        </div>
    </div>
</div>
<!-- END -->
        <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

<!-- NEXT SECTION HERE -->
<div id="aung-myanmar" class="space-y-6">
    
    <div class="flex flex-col lg:grid lg:grid-cols-9 gap-6 lg:gap-16 items-start lg:items-center">
        <div class="space-y-4 lg:col-span-4">
            <p class="text-2xl md:text-3xl rasa"> Helping Aung Breathe Again- Myanmar</p>
            <div class="space-y-3 text-sm md:text-base">
                <p>
                Aung is a 13-year-old boy from Myawaddy, Karen State, who lives with his mother and two older siblings. His mother works as a laundry worker, but the family’s income is barely enough to cover food and daily expenses, leaving little for medical care.
                </p>
                <p>
                In April 2025, Aung began experiencing severe breathing difficulties caused by a blockage in his left nostril. After an initial clinic visit and unsuccessful treatment for sinusitis, doctors discovered a nasal polyp and referred him to Mae Sot General Hospital, where surgery was recommended to remove the obstruction and restore his breathing.
                </p>
                <p>
                Understanding the urgency of his condition, Solace Global donated funds to help cover part of the $1,500 cost of his surgery, scheduled for June 5, 2025. This life-changing procedure will allow Aung to breathe more easily, regain his strength, and return to the joys of childhood.                </p>
            </div>
        </div>

        <div class="col-span-5">
            <img src={myanmar} alt="Cambodia 1" class="w-full rounded-lg shadow-md">
        </div>
    </div>
</div>
        </div>
    </div>
</main>