<script>
    import careerCompass from "$connectionImages/careercompass.jpg";

    const sections = [
        {
            id: "engineering",
            title: "Engineering",
            items: [
                {
                    title: "Mechanical Engineering",
                    description: [
                        "Mechanical engineering is a foundation of innovation, focusing on designing and developing systems and machinery that power industries and improve lives. From energy-efficient engines and cutting-edge robotics to advanced manufacturing tools, mechanical engineers tackle complex challenges using physics, mathematics, and creativity. This versatile field is vital for advancing transportation, automation, and renewable energy technologies.",
                        "Mechanical engineers also address global challenges like climate change by creating sustainable solutions and improving energy efficiency. With opportunities across industries like aerospace, automotive, and healthcare, this ever-evolving field offers countless ways to shape the future. Check out the video for more information about this exciting career path!"
                    ],
                    video: "https://www.youtube.com/embed/VlVqBOrKxuE?si=ggNlQHCpTYnvF1Br"
                },
                {
                    title: "Environmental Engineering",
                    description: [
                        "Environmental engineering addresses critical environmental challenges by designing solutions that protect and preserve the natural world. Combining science and engineering, professionals in this field tackle issues like pollution, waste management, and climate change. They focus on improving air and water quality, managing natural resources, and creating systems that reduce environmental impact, benefiting public health and communities worldwide.",
                        "From developing eco-friendly infrastructure to promoting renewable energy, environmental engineers are key to building a sustainable future. Their work helps mitigate climate risks, conserve biodiversity, and promote responsible resource use, making a lasting impact on the planet. Check out the video for more information about this meaningful career path!"
                    ],
                    video: "https://www.youtube.com/embed/lCtNav7E4n4?si=_DEZlHCQJirjTbXC"
                },
                {
                    title: "Robotics Engineering",
                    description: [
                        "Robotics engineering merges mechanics, electronics, and software to design advanced robotic systems that transform industries and improve lives. These systems have diverse applications, from manufacturing automation and healthcare robotics to artificial intelligence and space exploration. Robotics engineers push the boundaries of innovation, creating machines that perform tasks with efficiency, precision, and safety.",
                        "As technology evolves, robotics engineering offers endless opportunities to revolutionize industries and improve daily life. This cutting-edge field is shaping the future by providing intelligent and adaptable solutions for global challenges. Check out the video for more information about this exciting career path!"
                    ],
                    video: "https://www.youtube.com/embed/c5wAiNjGbpk?si=fbzhjKcBnbLbpfcA"
                },
                {
                    title: "Marine Engineering",
                    description: [
                        "Marine engineering focuses on the design, construction, and maintenance of ships, submarines, and offshore structures. This field plays a crucial role in global commerce, energy exploration, and marine sustainability. Marine engineers face unique challenges, including designing efficient vessels, working in extreme environments, and reducing environmental impacts.",
                        "With innovations in propulsion systems and sustainable maritime technologies, marine engineering is vital for advancing ocean exploration and conservation. It ensures the safety and efficiency of maritime operations while addressing environmental concerns. Check out the video for more information about this impactful career path!"
                    ],
                    video: "https://www.youtube.com/embed/oQryviqD-Q0?si=jPVDyybvlzTZ-i82"
                },
                {
                    title: "Electrical Engineering",
                    description: [
                        "Electrical engineering is a dynamic field focused on the study and application of electricity, electronics, and electromagnetism. Electrical engineers design systems that power modern life, from consumer electronics to telecommunications and renewable energy. Their work drives advancements in robotics, automation, and energy efficiency.",
                        "As technology advances, electrical engineers are central to shaping infrastructure and creating sustainable solutions. This field offers opportunities to develop innovations that improve everyday life and solve global challenges. Check out the video for more information about this impactful career path!"
                    ],
                    video: "https://www.youtube.com/embed/7cTaS_B-C78?si=TUxphFw9IjVnyfHi"
                },
                {
                    title: "Computer Science",
                    description: [
                        "Computer science explores programming, algorithms, and computational theory to create innovative solutions for modern challenges. This field underpins advancements in artificial intelligence, cybersecurity, and big data, impacting industries like healthcare, finance, and entertainment. Computer scientists design and optimize systems that transform how we interact with technology.",
                        "With its fast-paced evolution, computer science offers opportunities to drive innovation and solve global problems through creativity and technical expertise. This field is essential for shaping the future of technology and its applications. Check out the video for more information about this fascinating career path!"
                    ],
                    video: "https://www.youtube.com/embed/1PrZjjb69qI?si=7uT3vEpu75XF-GX2"
                }
            ]
        },
        {
            id: "humanities",
            title: "Humanities",
            items: [
                {
                    title: "Foreign Language",
                    description: [
                        "A career in foreign languages offers unparalleled opportunities to bridge cultural gaps and foster global understanding. Language professionals work as translators, interpreters, linguists, or educators, enabling communication across borders and facilitating international collaboration. Proficiency in multiple languages is a powerful tool in diplomacy, business, tourism, and media, where cultural sensitivity and effective communication are paramount. Language learners not only develop linguistic skills but also deepen their appreciation of global cultures.",
                        "Foreign language expertise enhances career prospects and opens doors to exciting opportunities around the world. Whether assisting in cross-cultural negotiations, translating works of art, or teaching a new generation of global citizens, language professionals play a key role in uniting people. Mastering a foreign language fosters a deeper connection with others and a broader perspective on the world. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/FFDZqsVcWYQ?si=qWxr54EjrHhnaNeS"
                },
                {
                    title: "International Law",
                    description: [
                        "International law governs the relationships between nations and addresses issues like trade, human rights, and environmental protection. International lawyers play a crucial role in shaping treaties, resolving disputes, and ensuring compliance with global agreements. This career path combines analytical thinking, diplomacy, and a deep understanding of legal systems to foster cooperation and peace on a global scale.",
                        "Whether working for governments, international organizations, or private firms, international lawyers tackle complex legal challenges that impact nations and individuals alike. They advocate for justice, navigate cross-border issues, and promote ethical practices in an interconnected world. This field is ideal for those who are passionate about law and committed to making a global impact. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/uBvWKlH4jrI?si=P6MOmf1UnxAdm-ss"
                },
                {
                    title: "Public Relations",
                    description: [
                        "Public relations (PR) focuses on managing and enhancing the reputation of individuals, organizations, or brands. PR professionals craft messages, build relationships with the media, and create strategies to maintain a positive public image. Their work often involves writing press releases, organizing events, and managing crises to ensure their clients stay in the spotlight for the right reasons.",
                        "Effective PR combines creativity, communication skills, and strategic planning. Professionals in this field influence public perception and foster trust between organizations and their audiences. Whether promoting a new product or handling public outreach for a nonprofit, PR offers a dynamic and impactful career. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/vwKX_beHsOg?si=3ryYksY0neHoXC0p"
                }
            ]
        },
        {
            id: "business",
            title: "Business",
            items: [
                {
                    title: "Marketing",
                    description: [
                        "Marketing is the science and art of connecting products or services with the right audiences. Marketers analyze consumer behavior, create campaigns, and leverage platforms like social media to drive engagement and sales. This career spans various specialties, including digital marketing, content creation, and brand management, offering opportunities in nearly every industry.",
                        "Successful marketers are strategic thinkers and creative problem-solvers who thrive on innovation. They use data insights and storytelling to build memorable brands and foster customer loyalty. From developing ad strategies to optimizing campaigns, marketers play a critical role in shaping how businesses succeed. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/TYvMbBLf5Ac?si=7UU6fHjHmhFwPI67"
                },
                {
                    title: "Entrepreneurship",
                    description: [
                        "Entrepreneurship is the art of turning innovative ideas into thriving businesses. Entrepreneurs identify market needs, create solutions, and take calculated risks to launch and grow ventures. This career path is ideal for individuals who value creativity, adaptability, and resilience.",
                        "Beyond building businesses, entrepreneurs drive societal progress by creating jobs, fostering innovation, and improving quality of life. Whether launching a small local business or scaling a global operation, entrepreneurship offers limitless potential for those who are passionate, resourceful, and determined to leave a lasting impact. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/9sDvDLFHg1M?si=esFV8rxJ4xZBRyWM"
                }
            ]
        },
        {
            id: "fine-arts",
            title: "Fine Arts",
            items: [
                {
                    title: "Graphic Design",
                    description: [
                        "Graphic design is a creative career where visual communication meets technical skill. Graphic designers craft logos, digital interfaces, advertisements, and much more, blending artistry and functionality to engage audiences and convey messages.",
                        "This career demands creativity, problem-solving, and an eye for detail, allowing professionals to transform concepts into impactful designs. Whether you're drawn to branding, digital art, or motion graphics, this field offers endless possibilities for expression and innovation. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/_Jebsjz0lqo?si=96fJ3xPbrDAXjmzl"
                }
            ]
        },
        {
            id: "natural-sciences",
            title: "Natural Sciences",
            items: [
                {
                    title: "Microbiology",
                    description: [
                        "Microbiology is the study of microorganisms and their impact on health, the environment, and industry. Microbiologists work in fields like medicine, agriculture, and biotechnology, researching bacteria, viruses, and fungi to develop vaccines, improve food safety, and create sustainable solutions.",
                        "With advancements in technology, microbiology continues to expand its reach, offering exciting career opportunities in research and innovation. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/nTDX_Uj1tx8?si=MhL-I1MAAzxE499X"
                },
                {
                    title: "Statistics",
                    description: [
                        "Statistics is the practice of collecting, analyzing, and interpreting data to make informed decisions. Statisticians work in diverse fields such as healthcare, technology, and government, using mathematical tools to identify patterns and solve problems.",
                        "This career is ideal for analytical thinkers who enjoy working with numbers and solving complex challenges. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/HUiU29cPL4I?si=Z9tpS3xlQeodayjd"
                },
                {
                    title: "Applied Mathematics",
                    description: [
                        "Applied mathematics is a career that merges theoretical math with real-world problem-solving. Professionals in this field use mathematical models and data analysis to address challenges in science, engineering, and finance.",
                        "Applied mathematicians are in high demand across industries, where their work leads to groundbreaking discoveries and efficient solutions. If you want more info, watch the video!"
                    ],
                    video: "https://www.youtube.com/embed/szn_pwrD74Q?si=0xXVPJMZcj3IjJ8e"
                }
            ]
        }
    ];
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
    
    details summary::-webkit-details-marker {
        display: none;
    }
    
    details summary::after {
        content: '+';
        float: right;
        font-size: 1.5rem;
        font-weight: bold;
        transition: transform 0.2s ease;
    }
    
    details[open] summary::after {
        content: '−';
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
                Career Compass
            </p>
            <div class="text-zinc-600 text-sm md:text-base">
                <p>Empowering individuals to navigate their paths with clarity and confidence.</p>
            </div>
        </div>
        
        <!-- Main Image -->
        <div class="flex justify-center">
            <img src={careerCompass} alt="Career Compass" class="w-64 md:w-80 lg:w-96">
        </div>
        
        <!-- Introduction -->
        <div class="space-y-8">
            <div class="flex flex-col md:grid md:grid-cols-3 gap-6 mx-2 md:mx-8 lg:mx-24">
                <p class="text-xl md:text-2xl rasa">Many people struggle to choose a career path due to a lack of access to reliable information, overwhelming choices, and uncertainty about their interests and strengths.</p>
                <p class="md:col-span-2 text-sm md:text-base">Research shows that having too many options can lead to decision paralysis, where individuals feel so overwhelmed that they delay making a choice altogether. Recognizing this challenge, Solace Global has developed an innovative database to empower individuals in their career journey. This comprehensive resource offers detailed information about various degrees, professions, and fields of study, all conveniently organized in one place. To make the process even more engaging, each career topic is accompanied by a short video, providing an in-depth look into real-world applications and insights from professionals. By bridging the information gap and simplifying the decision-making process, Solace Global's initiative helps individuals make informed, confident choices about their futures.</p>
            </div>

            <div class="border-b border-zinc-300 mx-2 md:mx-8 lg:mx-16"></div>

            <!-- Career Sections -->
            {#each sections as { id, title, items }}
                <div id={id} class="pt-2">
                    <p class="text-3xl md:text-4xl rasa mx-2 md:mx-8 lg:mx-16">
                        {title}
                    </p>
                    <div class="space-y-4 md:space-y-6 mx-2 md:mx-8 lg:mx-16 mt-4">
                        {#each items as { title: itemTitle, description, video }}
                            <details class="border rounded-lg shadow p-3 md:p-4">
                                <summary class="cursor-pointer text-xl md:text-2xl rasa flex justify-between items-center">
                                    <span>{itemTitle}</span>
                                </summary>
                                <div class="mt-4">
                                    <div class="text-gray-700 space-y-3 text-sm md:text-base">
                                        {#each description as paragraph}
                                            <p class="mt-2">{paragraph}</p>
                                        {/each}
                                    </div>
                                    <div class="my-4 md:my-6">
                                        <div class="video-container">
                                            <iframe
                                                src={video}
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerpolicy="strict-origin-when-cross-origin"
                                                allowfullscreen
                                                class="rounded-lg"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>