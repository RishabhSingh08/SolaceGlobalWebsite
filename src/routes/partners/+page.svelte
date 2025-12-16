<script>
    import Sponsor01 from "$Sponsors/Hack_Club_Flag_Standalone.png";
    import Sponsor02 from "$Sponsors/Pinkberry_logo.png";
    import Sponsor03 from "$Sponsors/projectworld2.jpeg";
    import Sponsor05 from "$Sponsors/shanti.png";
    import Sponsor06 from "$Sponsors/undefined.png";
    import Sponsor07 from "$Sponsors/amazon.png";
    import Sponsor08 from "$Sponsors/nlss2.png";
    import Sponsor09 from "$Sponsors/code2.png";
    import Sponsor10 from "$Sponsors/google2.png";

    import Sponsor11 from "$Sponsors/1.png";
    import Sponsor12 from "$Sponsors/2.png";
    import Sponsor13 from "$Sponsors/3.png";



    const sponsors = [
        { name: "Jukebox", imgSrc: Sponsor13, description: 'Big shoutout to Jukebox for our <a href="https://www.jukeboxprint.com/custom-stickers" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">custom stickers at our next event!</a>' },
        { name: "Amazon Business", imgSrc: Sponsor07, description: "Amazon Business supports Solace Global by providing cost-effective solutions for sourcing STEM kits, robotics components, coding books, and educational tools that power our global initiatives. With bulk purchasing options, discounts, and a vast selection of resources, we can efficiently equip students, educators, and underserved communities with the materials they need for hands-on learning. By streamlining procurement and reducing costs, Amazon Business helps us scale our impact, ensuring that more students—whether in foster homes, senior centers, or schools in developing countries—have access to quality STEM education and the opportunity to innovate." },
        { name: "Shanti Bhavan", imgSrc: Sponsor05, description: "Shanti Bhavan Children's Project is a nonprofit organization dedicated to breaking the cycle of generational poverty through education and holistic development. Founded in 1997, the organization operates a residential school in Baliganapalli, India, providing children from impoverished backgrounds with 17 years of continuous support, from preschool to college and beyond. Shanti Bhavan's unique model combines high-quality academics, leadership training, extracurricular activities, and essential care, including housing, food, and medical support, to ensure a safe and nurturing environment. With a 98% college graduation rate and a focus on fostering leaders and change-makers, graduates uplift their families and communities while achieving successful careers in fields such as finance, technology, and medicine. Supported by a global network of educators, donors, and volunteers, Shanti Bhavan exemplifies the transformative power of long-term investment in underserved children." },
        { name: "Code.org", imgSrc: Sponsor09, description: "Code.org is a nonprofit dedicated to expanding access to computer science in schools and increasing participation by young women and underrepresented students. We primarily use Code.org in our girls-only coding classes to introduce and teach the fundamentals of AP Computer Science Principles (APCSP). With its interactive lessons, beginner-friendly approach, and real-world applications, Code.org helps make coding approachable and fun. The platform empowers our students to build confidence, explore technology, and develop a strong foundation in computer science—all in a supportive and engaging environment designed just for them." },
        { name: "Google", imgSrc: Sponsor10, description: "Google for Nonprofits provides nonprofit organizations with powerful tools and resources to help them amplify their impact, operate efficiently, and reach more supporters worldwide. By offering free access to premium Google products such as Google Workspace, Google Ad Grants, YouTube Nonprofit Program, and Google Earth and Maps, Google empowers nonprofits to collaborate effectively, increase visibility, and engage their communities. Dedicated to fostering positive change, Google for Nonprofits helps organizations streamline their operations, maximize their online presence, and drive meaningful results for their missions." },
        { name: "Undefined Robotics", imgSrc: Sponsor06, description: "Undefined Robotics is a high school-level private robotics team based in Plano, Texas, dedicated to fostering a passion for STEM and hands-on learning within the community. The team believes robotics is a powerful tool to make STEM education engaging and accessible, teaching practical skills like engineering and programming alongside essential life skills such as teamwork, creativity, and outreach. Committed to inclusivity, Undefined Robotics strives to demonstrate that robotics is for everyone and aims to empower young people to succeed both within the team and in their personal development. Through community outreach and partnerships, the team seeks to inspire and give back by promoting a culture of learning and innovation." },
        { name: "Hack Club", imgSrc: Sponsor01, description: "Hack Club is a global nonprofit organization that empowers high school students to explore coding, creativity, and technology through student-led clubs, makerspaces, and projects. It provides an open-source curriculum, resources, and mentorship to help teens build real-world projects like websites, apps, games, and hardware prototypes while fostering innovation, leadership, and entrepreneurial thinking. Hack Club encourages students to start their own clubs, organize hackathons, and participate in collaborative events, creating a supportive and inclusive community for learners of all backgrounds and experience levels. By cultivating a vibrant network of young creators, Hack Club inspires confidence, demystifies technology, and equips the next generation of problem-solvers with the skills and tools to shape the future." },
        { name: "Naihati New Life Society", imgSrc: Sponsor08, description: "The Naihati New Life Society (NNLS) is a not-for-profit organization dedicated to fostering social justice and holistic community development in the Sundarbans, one of Asia's most ecologically significant regions. Led by women and youth leaders, NNLS works to empower the most vulnerable populations, including orphaned children, survivors of trafficking, adolescent girls, widows affected by human-animal conflict, and indigenous communities. Through initiatives such as education for first-generation learners, violence prevention, sustainable agriculture, youth entrepreneurship, and environmental stewardship, NNLS creates pathways for self-sufficiency and resilience. Committed to preserving the Sundarbans' biodiversity and supporting its inhabitants, NNLS mobilizes local communities to restore mangrove forests, promote indigenous rights, and ensure food security. With a vision of an equitable society free from illiteracy, ill-health, and generational poverty, NNLS stands as a beacon of hope, working tirelessly to uplift marginalized communities and safeguard the fragile ecosystem of the Sundarbans." },
        { name: "Project World Impact", imgSrc: Sponsor03, description: "Project World Impact (PWI) is a leading nonprofit hub dedicated to connecting people with organizations making a difference around the world. Designed to enhance nonprofit visibility, fundraising, and mission fulfillment, PWI offers a comprehensive platform for both organizations and individuals. Nonprofits can leverage PWI's tools to increase funding, recruit volunteers, and expand their outreach, while supporters can explore causes and organizations by country or category, learn about their missions, and contribute through donations or ongoing engagement. Founded by Chris Lesner, a marketing expert passionate about empowering nonprofits, PWI combines cutting-edge technology with personalized support to drive meaningful change. Headquartered in St. Charles, Illinois, PWI partners with thousands of nonprofits globally, fostering connections and creating a lasting impact in local and international communities." },
        { name: "Pinkberry", imgSrc: Sponsor02, description: "Pinkberry is a Los Angeles-based frozen yogurt brand that revolutionized the frozen dessert scene when it launched in 2005, sparking a renewed love for tart frozen yogurt. With over 100 locations across the country, Pinkberry is known for its commitment to quality, using real milk and real yogurt to create distinctive, fresh-tasting products. The brand is dedicated to providing outstanding service that brightens customers' days and designing inviting spaces where communities can gather and enjoy a fun, shared experience. Combining delicious flavors, high-quality ingredients, and a vibrant atmosphere, Pinkberry offers a refreshing treat that tastes as good as it makes you feel." },
        { name: "DesiClik", imgSrc: Sponsor11, description: "DesiClik is a vibrant online South Asian marketplace based in the U.S., founded in the early 2010s. It unites local Indian shops under one platform, offering ethnic groceries, apparel, jewelry, handicrafts, and more, both retail and wholesale—all through a seamless checkout experience. Their $500 contribution reflects a shared commitment to cultural community, global learning, and increasing access to diverse resources." },
        { name: "Sina Taleghani & Associates", imgSrc: Sponsor12, description: "Sina Taleghani & Associates is a client‑focused personal injury law firm serving Irving/Dallas, Texas, specializing in car accidents, wrongful death, workplace and other injury cases. Led by Managing Partner Sina Taleghani (licensed since 2009), the firm offers contingency‑fee representation, free consultations, transparent communication, and proprietary case‑management tools. Their $500 sponsorship demonstrates solidarity with our mission to support youth, equity, and community empowerment." },


        ];
</script>
<svelte:head>
<!-- Primary Meta Tags -->
<title>Partners & Sponsors | Solace Global - Our Corporate Supporters</title>
<meta name="title" content="Partners & Sponsors | Solace Global - Our Corporate Supporters" />
<meta name="description" content="Meet Solace Global's partners: Jukebox, Amazon Business, Shanti Bhavan, Code.org, Google for Nonprofits, Undefined Robotics, Hack Club, Naihati New Life Society, Project World Impact, Pinkberry, DesiClik, and Sina Taleghani & Associates." />
<meta name="keywords" content="Solace Global partners, nonprofit sponsors, Amazon Business, Shanti Bhavan, Code.org, Google for Nonprofits, Undefined Robotics, Hack Club, Naihati New Life Society, Project World Impact, Pinkberry, DesiClik, Sina Taleghani, Jukebox" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://solaceglobal.xyz/partners" />
<meta property="og:title" content="Partners & Sponsors | Solace Global" />
<meta property="og:description" content="Meet our amazing partners and sponsors supporting STEM education and humanitarian outreach globally." />
<meta property="og:image" content="https://solaceglobal.xyz/og-image.png" />
<meta property="og:site_name" content="Solace Global Foundation" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://solaceglobal.xyz/partners" />
<meta name="twitter:title" content="Partners & Sponsors | Solace Global" />
<meta name="twitter:description" content="Meet our amazing partners and sponsors supporting STEM education globally." />
<meta name="twitter:image" content="https://solaceglobal.xyz/og-image.png" />

<!-- Structured Data -->
{@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Solace Global Partners and Sponsors",
  "description": "Organizations partnering with Solace Global Foundation",
  "itemListElement": [
    {"@type": "Organization", "name": "Amazon Business"},
    {"@type": "Organization", "name": "Shanti Bhavan Children's Project"},
    {"@type": "Organization", "name": "Code.org"},
    {"@type": "Organization", "name": "Google for Nonprofits"},
    {"@type": "Organization", "name": "Undefined Robotics"},
    {"@type": "Organization", "name": "Hack Club"},
    {"@type": "Organization", "name": "Naihati New Life Society"},
    {"@type": "Organization", "name": "Project World Impact"},
    {"@type": "Organization", "name": "Pinkberry"},
    {"@type": "Organization", "name": "DesiClik"},
    {"@type": "Organization", "name": "Sina Taleghani & Associates"},
    {"@type": "Organization", "name": "Jukebox"}
  ]
}
</script>`}

<link rel="canonical" href="https://solaceglobal.xyz/partners" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" media="all" href="https://cdn.smore.com/css/list-form-signup.2981f49d.css"/>

</svelte:head>
<style>

.rasa {
  font-family: "Rasa", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

</style>
<main class="p-8">
    <section class="text-center mb-12">
        <h1 class="text-5xl font-bold rasa">Our Partners and Sponsors</h1>
        <p class="mt-4 text-gray-600">We are proud to collaborate with these amazing organizations and teams, driving innovation and making a difference in the world.</p>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each sponsors as { name, imgSrc, description }}
            <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={imgSrc} alt={name} class="w-full h-40 object-cover">
                <div class="p-6">
                    <h2 class="text-xl font-semibold text-gray-800">{name}</h2>
                    <p class="mt-2 text-gray-600 text-sm">{@html description}</p>
                </div>
            </div>
        {/each}
    </section>
</main>