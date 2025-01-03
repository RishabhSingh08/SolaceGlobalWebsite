<script>
    import Sponsor01 from "../../lib/images/Sponsors/Hack_Club_Flag_Standalone.png";
    import Sponsor02 from "../../lib/images/Sponsors/Pinkberry_logo.png";
    import Sponsor03 from "../../lib/images/Sponsors/projectworld.jpeg";
    import Sponsor04 from "../../lib/images/Sponsors/senior.png";
    import Sponsor05 from "../../lib/images/Sponsors/shanti.png";
    import Sponsor06 from "../../lib/images/Sponsors/undefined.png";

    const sponsors = [
        { name: "Hack Club", imgSrc: Sponsor01, description: "Hack Club is a global nonprofit organization that empowers high school students to explore coding, creativity, and technology through student-led clubs, makerspaces, and projects. It provides an open-source curriculum, resources, and mentorship to help teens build real-world projects like websites, apps, games, and hardware prototypes while fostering innovation, leadership, and entrepreneurial thinking. Hack Club encourages students to start their own clubs, organize hackathons, and participate in collaborative events, creating a supportive and inclusive community for learners of all backgrounds and experience levels. By cultivating a vibrant network of young creators, Hack Club inspires confidence, demystifies technology, and equips the next generation of problem-solvers with the skills and tools to shape the future." },
        { name: "Pinkberry", imgSrc: Sponsor02, description: "Pinkberry is a Los Angeles-based frozen yogurt brand that revolutionized the frozen dessert scene when it launched in 2005, sparking a renewed love for tart frozen yogurt. With over 100 locations across the country, Pinkberry is known for its commitment to quality, using real milk and real yogurt to create distinctive, fresh-tasting products. The brand is dedicated to providing outstanding service that brightens customers’ days and designing inviting spaces where communities can gather and enjoy a fun, shared experience. Combining delicious flavors, high-quality ingredients, and a vibrant atmosphere, Pinkberry offers a refreshing treat that tastes as good as it makes you feel." },
        { name: "The Legacy Senior Communities", imgSrc: Sponsor04, description: "The Legacy Senior Communities is a Jewish-sponsored, not-for-profit organization dedicated to serving seniors with exceptional care and innovative living options. Operating as the parent organization for The Legacy Willow Bend in Plano, a Life Care community offering luxury amenities and healthcare protection, The Legacy Midtown Park in North Dallas, a rental retirement community with resort-style living, and The Legacy at Home, a home health and hospice agency, the organization tailors services to meet individual needs. Since its founding in 1953 as the Dallas Home for the Jewish Aged, The Legacy has upheld a tradition of leadership, Jewish values, and compassion, supported by a foundation that ensures financial assistance for those in need. Through personalized care, vibrant environments, and a commitment to dignity, The Legacy enriches the lives of seniors and their families." },
        { name: "Shanti Bhavan", imgSrc: Sponsor05, description: "Shanti Bhavan Children's Project is a nonprofit organization dedicated to breaking the cycle of generational poverty through education and holistic development. Founded in 1997, the organization operates a residential school in Baliganapalli, India, providing children from impoverished backgrounds with 17 years of continuous support, from preschool to college and beyond. Shanti Bhavan's unique model combines high-quality academics, leadership training, extracurricular activities, and essential care, including housing, food, and medical support, to ensure a safe and nurturing environment. With a 98% college graduation rate and a focus on fostering leaders and change-makers, graduates uplift their families and communities while achieving successful careers in fields such as finance, technology, and medicine. Supported by a global network of educators, donors, and volunteers, Shanti Bhavan exemplifies the transformative power of long-term investment in underserved children." },
        { name: "Project World Impact", imgSrc: Sponsor03, description: "Project World Impact (PWI) is a leading nonprofit hub dedicated to connecting people with organizations making a difference around the world. Designed to enhance nonprofit visibility, fundraising, and mission fulfillment, PWI offers a comprehensive platform for both organizations and individuals. Nonprofits can leverage PWI’s tools to increase funding, recruit volunteers, and expand their outreach, while supporters can explore causes and organizations by country or category, learn about their missions, and contribute through donations or ongoing engagement. Founded by Chris Lesner, a marketing expert passionate about empowering nonprofits, PWI combines cutting-edge technology with personalized support to drive meaningful change. Headquartered in St. Charles, Illinois, PWI partners with thousands of nonprofits globally, fostering connections and creating a lasting impact in local and international communities." },
        { name: "Undefined Robotics", imgSrc: Sponsor06, description: "Undefined Robotics is a high school-level private robotics team based in Plano, Texas, dedicated to fostering a passion for STEM and hands-on learning within the community. The team believes robotics is a powerful tool to make STEM education engaging and accessible, teaching practical skills like engineering and programming alongside essential life skills such as teamwork, creativity, and outreach. Committed to inclusivity, Undefined Robotics strives to demonstrate that robotics is for everyone and aims to empower young people to succeed both within the team and in their personal development. Through community outreach and partnerships, the team seeks to inspire and give back by promoting a culture of learning and innovation." }
    ];
</script>
<svelte:head>
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
<main class="p-8 ">
    <!-- Title Section -->
    <section class="text-center mb-12">
        <h1 class="text-5xl font-bold rasa">Our Partners and Sponsors</h1>
        <p class="mt-4 text-gray-600">We are proud to collaborate with these amazing organizations and teams, driving innovation and making a difference in the world.</p>
    </section>

    <!-- Sponsors Section -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each sponsors as { name, imgSrc, description }}
            <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={imgSrc} alt={name} class="w-full h-40 object-cover">
                <div class="p-6">
                    <h2 class="text-xl font-semibold text-gray-800">{name}</h2>
                    <p class="mt-2 text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        {/each}
    </section>
</main>
