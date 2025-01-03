<script>
    import OurStoryPic from "../../../lib/images/article1.png";
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
.cFont {
  font-family: "Caveat", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>



<main>
    <div class="space-y-16">
        <p class="text-center text-6xl rasa">
            Our Story
        </p>
        <img src={OurStoryPic} alt="Our Story">
        <div class="grid grid-cols-12">
            <div class="col-start-2 col-end-5">
                <div class="space-y-64">
                    <div class="text-xl">
                        <a href="/">
                            <i class="fa-solid fa-arrow-left"></i>
                            <span class="pb border-b border-black">Home</span>
                        </a>
                    </div>
                    <div class="space-y-4 text-2xl w-64">
                        <p class="rasa">Watch the latest videos to learn more</p>
                        <p class="text-base">Explore the latest videos from Solace Global.</p>
                        <p class="underline text-lg"><a href="https://www.youtube.com/@SolaceGlobalNPO1">Watch our videos</a></p>
                    </div>
                </div>
            </div>
            <div class="col-start-5 col-end-12 space-y-6">
                <p class="text-4xl rasa">Coming together as teenagers to create an initiative that to aspire real change in society,</p>
                <div class="space-y-4 text-zinc-700">
                    <p>
                    Solace Global was born out of a shared desire among a group of teenagers to create positive change in society. As young people, we saw the growing challenges facing communities—whether it was limited access to education, environmental issues, or the digital divide—and we knew we couldn’t just stand by.
                    </p>
                    <p>
                    We believed that change could start with us. Motivated by a passion for helping others and a deep commitment to social good, we founded Solace Global to address these challenges through outreach, education, and collaboration. We envisioned an organization that would not only provide resources to those in need but also empower individuals to take action and create lasting change in their own communities.
                    </p>
                    <p>
                    From the beginning, we understood that the world’s disparities are interconnected. That’s why we didn’t limit our focus to one specific issue. We knew that challenges like education, technology, and sustainability don’t exist in isolation; they are part of a larger system. Solace Global was designed to address a wide range of needs, ensuring that we could make a holistic impact on the communities we serve. 
                    </p>
                    <p>
                    Whether it's improving digital literacy, supporting environmental sustainability, or providing access to education, we’ve always believed that true change comes from addressing multiple areas simultaneously.
                    </p>
                    <p>
                    Solace Global has always been about more than just providing aid—it’s about fostering a sense of global responsibility and shared humanity. 
                    </p>
                    <p>
                    Our focus has ranged from digital literacy and environmental sustainability to offering support for underserved communities in various parts of the world. We started small, with grassroots efforts and a team of dedicated teenagers, but our commitment to making a difference quickly grew into an international movement. 
                    </p>
                    <p>
                    Solace Global is a reflection of our belief that when young people come together, they can drive impactful change, challenge the status quo, and create a brighter, more inclusive future for everyone. We’re making a change. That’s what drives us.
                    </p>
                </div>
                <div class="cFont text-4xl">
                    Nishant Sinari and the Solace Global Team
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Our Story (Button on About us) - Our Story, image of lackey and nini, title of text - Coming together as teenagesr to create an initiative that to aspire real change in society, under title, text, have signature nishant sinari and solace global team, have graph of https://www.statista.com/chart/3180/out-of-school-children/(CITE IT), Learn more under graph - our work image of vpc event 1,Our partners - learn more about our partners, next to it,under Our Work - How our program makes an impact around the world -->