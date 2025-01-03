<script>
    import careerCompass from "../../../lib/images/MediaImages/careercompass.jpg";
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
                Career Compass
            </p>
            <div class="text-zinc-600">
                <p>Empowering individuals to navigate their paths with clarity and confidence.</p>
            </div>
        </div>
        <div class="flex justify-center">
            <img src={careerCompass} alt="Career Compass" class="w-96">
        </div>
        <div class="space-y-10">
            <div class="grid grid-cols-3 gap-4 mx-24">
                <p class="text-2xl rasa">Many people struggle to choose a career path due to a lack of access to reliable information, overwhelming choices, and uncertainty about their interests and strengths.</p>
                <p class="col-span-2 text">Research shows that having too many options can lead to decision paralysis, where individuals feel so overwhelmed that they delay making a choice altogether. Recognizing this challenge, Solace Global has developed an innovative database to empower individuals in their career journey. This comprehensive resource offers detailed information about various degrees, professions, and fields of study, all conveniently organized in one place. To make the process even more engaging, each career topic is accompanied by a short video, providing an in-depth look into real-world applications and insights from professionals. By bridging the information gap and simplifying the decision-making process, Solace Global’s initiative helps individuals make informed, confident choices about their futures.</p>
            </div>

            <div class="border-b border-zinc-300 mx-16"></div>

            <!-- Career Dropdowns -->
             <p class="text-4xl rasa mx-16" id="engineering">
                Engineering
             </p>
            <div class="space-y-6 mx-16">
                <!-- Mechanical Engineering -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">Mechanical Engineering</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2 ">
    Mechanical engineering is a foundation of innovation, focusing on designing and developing systems and machinery that power industries and improve lives. From energy-efficient engines and cutting-edge robotics to advanced manufacturing tools, mechanical engineers tackle complex challenges using physics, mathematics, and creativity. This versatile field is vital for advancing transportation, automation, and renewable energy technologies.
                            </p>
                            <p>
    Mechanical engineers also address global challenges like climate change by creating sustainable solutions and improving energy efficiency. With opportunities across industries like aerospace, automotive, and healthcare, this ever-evolving field offers countless ways to shape the future. Check out the video for more information about this exciting career path!
                            </p>
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VlVqBOrKxuE?si=ggNlQHCpTYnvF1Br" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>
                </details>

                <!-- Environmental Engineering -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">Environmental Engineering</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2 ">
Environmental engineering addresses critical environmental challenges by designing solutions that protect and preserve the natural world. Combining science and engineering, professionals in this field tackle issues like pollution, waste management, and climate change. They focus on improving air and water quality, managing natural resources, and creating systems that reduce environmental impact, benefiting public health and communities worldwide.
                            </p>
                            <p>
From developing eco-friendly infrastructure to promoting renewable energy, environmental engineers are key to building a sustainable future. Their work helps mitigate climate risks, conserve biodiversity, and promote responsible resource use, making a lasting impact on the planet. Check out the video for more information about this meaningful career path!
                            </p>
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/lCtNav7E4n4?si=_DEZlHCQJirjTbXC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>
                </details>

                <!-- Robotics Engineering -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">Robotics Engineering</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2 ">
Robotics engineering merges mechanics, electronics, and software to design advanced robotic systems that transform industries and improve lives. These systems have diverse applications, from manufacturing automation and healthcare robotics to artificial intelligence and space exploration. Robotics engineers push the boundaries of innovation, creating machines that perform tasks with efficiency, precision, and safety.
                            </p>
                            <p>
As technology evolves, robotics engineering offers endless opportunities to revolutionize industries and improve daily life. This cutting-edge field is shaping the future by providing intelligent and adaptable solutions for global challenges. Check out the video for more information about this exciting career path!
                            </p>
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/c5wAiNjGbpk?si=fbzhjKcBnbLbpfcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>
                </details>

                <!-- Marine Engineering -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">Marine Engineering</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2 ">
Marine engineering focuses on the design, construction, and maintenance of ships, submarines, and offshore structures. This field plays a crucial role in global commerce, energy exploration, and marine sustainability. Marine engineers face unique challenges, including designing efficient vessels, working in extreme environments, and reducing environmental impacts.
                            </p>
                            <p>
With innovations in propulsion systems and sustainable maritime technologies, marine engineering is vital for advancing ocean exploration and conservation. It ensures the safety and efficiency of maritime operations while addressing environmental concerns. Check out the video for more information about this impactful career path!
                            </p>
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/oQryviqD-Q0?si=jPVDyybvlzTZ-i82" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>

                </details>

                <!-- Electrical Engineering -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">Electrical Engineering</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2 ">
Electrical engineering is a dynamic field focused on the study and application of electricity, electronics, and electromagnetism. Electrical engineers design systems that power modern life, from consumer electronics to telecommunications and renewable energy. Their work drives advancements in robotics, automation, and energy efficiency.
                            </p>
                            <p>
As technology advances, electrical engineers are central to shaping infrastructure and creating sustainable solutions. This field offers opportunities to develop innovations that improve everyday life and solve global challenges. Check out the video for more information about this impactful career path!
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/7cTaS_B-C78?si=TUxphFw9IjVnyfHi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>
                </details>

                <!-- Computer Science -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">Computer Science</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2 ">
Computer science explores programming, algorithms, and computational theory to create innovative solutions for modern challenges. This field underpins advancements in artificial intelligence, cybersecurity, and big data, impacting industries like healthcare, finance, and entertainment. Computer scientists design and optimize systems that transform how we interact with technology.
                            </p>
                            <p>
With its fast-paced evolution, computer science offers opportunities to drive innovation and solve global problems through creativity and technical expertise. This field is essential for shaping the future of technology and its applications. Check out the video for more information about this fascinating career path!                            </p>
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/1PrZjjb69qI?si=7uT3vEpu75XF-GX2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>
                </details>
            </div>

            <!-- Humanities -->
            <p class="text-4xl rasa mx-16" id="humanities">
                Humanities
            </p>
            <div class="space-y-6 mx-16">
                <!-- Foreign Language -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">Foreign Language</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2">A career in foreign languages offers unparalleled opportunities to bridge cultural gaps and foster global understanding. Language professionals work as translators, interpreters, linguists, or educators, enabling communication across borders and facilitating international collaboration. Proficiency in multiple languages is a powerful tool in diplomacy, business, tourism, and media, where cultural sensitivity and effective communication are paramount. Language learners not only develop linguistic skills but also deepen their appreciation of global cultures.
</p>
<p>
    Foreign language expertise enhances career prospects and opens doors to exciting opportunities around the world. Whether assisting in cross-cultural negotiations, translating works of art, or teaching a new generation of global citizens, language professionals play a key role in uniting people. Mastering a foreign language fosters a deeper connection with others and a broader perspective on the world. If you want more info, watch the video!

</p>
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/example1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>
                </details>

                <!-- International Law -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">International Law</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2">International law governs the relationships between nations and addresses issues like trade, human rights, and environmental protection. International lawyers play a crucial role in shaping treaties, resolving disputes, and ensuring compliance with global agreements. This career path combines analytical thinking, diplomacy, and a deep understanding of legal systems to foster cooperation and peace on a global scale.
</p>
<p>
    Whether working for governments, international organizations, or private firms, international lawyers tackle complex legal challenges that impact nations and individuals alike. They advocate for justice, navigate cross-border issues, and promote ethical practices in an interconnected world. This field is ideal for those who are passionate about law and committed to making a global impact. If you want more info, watch the video!
</p>
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/example2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>
                </details>
                
                <!-- Public Relations -->
                <details class="border rounded-lg shadow p-4">
                    <summary class="cursor-pointer text-2xl rasa">Public Relations</summary>
                    <div>
                        <div class="text-gray-700 space-y-3">
                            <p class="mt-2">Public relations (PR) focuses on managing and enhancing the reputation of individuals, organizations, or brands. PR professionals craft messages, build relationships with the media, and create strategies to maintain a positive public image. Their work often involves writing press releases, organizing events, and managing crises to ensure their clients stay in the spotlight for the right reasons.
</p>
<p>
    Effective PR combines creativity, communication skills, and strategic planning. Professionals in this field influence public perception and foster trust between organizations and their audiences. Whether promoting a new product or handling public outreach for a nonprofit, PR offers a dynamic and impactful career. If you want more info, watch the video!
</p>
                        </div>
                        <div class="flex justify-center my-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/example3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
                        </div>
                    </div>
                </details>
            </div>
<!-- Business -->
<p class="text-4xl rasa mx-16" id="business">
    Business
</p>
<div class="space-y-6 mx-16">
    <!-- Marketing -->
    <details class="border rounded-lg shadow p-4">
        <summary class="cursor-pointer text-2xl rasa">Marketing</summary>
        <div>
            <div class="text-gray-700 space-y-3">
                <p class="mt-2">Marketing is the science and art of connecting products or services with the right audiences. Marketers analyze consumer behavior, create campaigns, and leverage platforms like social media to drive engagement and sales. This career spans various specialties, including digital marketing, content creation, and brand management, offering opportunities in nearly every industry.</p>
                <p>Successful marketers are strategic thinkers and creative problem-solvers who thrive on innovation. They use data insights and storytelling to build memorable brands and foster customer loyalty. From developing ad strategies to optimizing campaigns, marketers play a critical role in shaping how businesses succeed. If you want more info, watch the video!</p>
            </div>
            <div class="flex justify-center my-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
            </div>
        </div>
    </details>

    <!-- Entrepreneurship -->
    <details class="border rounded-lg shadow p-4">
        <summary class="cursor-pointer text-2xl rasa">Entrepreneurship</summary>
        <div>
            <div class="text-gray-700 space-y-3">
                <p class="mt-2">Entrepreneurship is the art of turning innovative ideas into thriving businesses. Entrepreneurs identify market needs, create solutions, and take calculated risks to launch and grow ventures. This career path is ideal for individuals who value creativity, adaptability, and resilience. Entrepreneurs often work in diverse industries, ranging from tech startups to social enterprises, shaping the economy and addressing pressing global challenges. With a blend of visionary thinking and strategic planning, they navigate uncertainties to bring transformative concepts to life.</p>
                <p>Beyond building businesses, entrepreneurs drive societal progress by creating jobs, fostering innovation, and improving quality of life. Their ability to see opportunities where others see obstacles makes them pioneers in their fields. Whether launching a small local business or scaling a global operation, entrepreneurship offers limitless potential for those who are passionate, resourceful, and determined to leave a lasting impact. If you want more info, watch the video!</p>
            </div>
            <div class="flex justify-center my-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
            </div>
        </div>
    </details>
</div>
<!-- Fine Arts -->
<p class="text-4xl rasa mx-16" id="fine-arts">
    Fine Arts
</p>
<div class="space-y-6 mx-16">
    <!-- Graphic Design -->
    <details class="border rounded-lg shadow p-4">
        <summary class="cursor-pointer text-2xl rasa">Graphic Design</summary>
        <div>
            <div class="text-gray-700 space-y-3">
                <p class="mt-2">Graphic design is a creative career where visual communication meets technical skill. Graphic designers craft logos, digital interfaces, advertisements, and much more, blending artistry and functionality to engage audiences and convey messages. They work across industries like marketing, media, and entertainment, leveraging tools like Adobe Creative Suite to turn ideas into captivating visuals. From packaging designs to website layouts, their work shapes how we experience brands and products.</p>
                <p>This career demands creativity, problem-solving, and an eye for detail, allowing professionals to transform concepts into impactful designs. Graphic designers have the opportunity to leave their mark by shaping visual trends and enhancing user experiences. Whether you’re drawn to branding, digital art, or motion graphics, this field offers endless possibilities for expression and innovation. If you want more info, watch the video!</p>
            </div>
            <div class="flex justify-center my-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
            </div>
        </div>
    </details>
</div>

<!-- Natural Sciences -->
<p class="text-4xl rasa mx-16" id="natural-sciences">
    Natural Sciences
</p>
<div class="space-y-6 mx-16">
    <!-- Microbiology -->
    <details class="border rounded-lg shadow p-4">
        <summary class="cursor-pointer text-2xl rasa">Microbiology</summary>
        <div>
            <div class="text-gray-700 space-y-3">
                <p class="mt-2">Microbiology is the study of microorganisms and their impact on health, the environment, and industry. Microbiologists work in fields like medicine, agriculture, and biotechnology, researching bacteria, viruses, and fungi to develop vaccines, improve food safety, and create sustainable solutions. Their work is crucial to understanding and combating global health threats.</p>
                <p>With advancements in technology, microbiology continues to expand its reach, offering exciting career opportunities in research and innovation. Whether working in labs or on field projects, microbiologists contribute to a healthier, safer world. This career is perfect for those with curiosity about the unseen and a drive to solve real-world problems. If you want more info, watch the video!</p>
            </div>
            <div class="flex justify-center my-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
            </div>
        </div>
    </details>
    <!-- Statistics -->
    <details class="border rounded-lg shadow p-4">
        <summary class="cursor-pointer text-2xl rasa">Statistics</summary>
        <div>
            <div class="text-gray-700 space-y-3">
                <p class="mt-2">Statistics is the practice of collecting, analyzing, and interpreting data to make informed decisions. Statisticians work in diverse fields such as healthcare, technology, and government, using mathematical tools to identify patterns and solve problems. Their insights drive advancements in research, business strategies, and public policy.</p>
                <p>This career is ideal for analytical thinkers who enjoy working with numbers and solving complex challenges. Statisticians are essential in today’s data-driven world, where their work influences critical decisions and shapes future trends. From designing studies to predicting outcomes, statistics offers a fulfilling and impactful career path. If you want more info, watch the video!</p>
            </div>
            <div class="flex justify-center my-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
            </div>
        </div>
    </details>
    <!-- Applied Mathematics -->
    <details class="border rounded-lg shadow p-4">
        <summary class="cursor-pointer text-2xl rasa">Applied Mathematics</summary>
        <div>
            <div class="text-gray-700 space-y-3">
                <p class="mt-2">Applied mathematics is a career that merges theoretical math with real-world problem-solving. Professionals in this field use mathematical models and data analysis to address challenges in science, engineering, and finance. They develop algorithms, optimize systems, and contribute to innovations like machine learning and climate modeling.</p>
                <p>This career requires critical thinking and a passion for tackling complex problems. Applied mathematicians are in high demand across industries, where their work leads to groundbreaking discoveries and efficient solutions. Whether improving energy systems or advancing medical research, this field offers opportunities to make a significant impact. If you want more info, watch the video!</p>
            </div>
            <div class="flex justify-center my-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-lg"></iframe>
            </div>
        </div>
    </details>
</div>

        </div>
        
    </div>
</main>
