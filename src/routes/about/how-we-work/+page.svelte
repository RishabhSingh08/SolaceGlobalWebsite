<script>
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<style>
  .rasa {
    font-family: "Rasa", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
</style>

<main class="container mx-auto px-4 py-8">
  <div class="space-y-8 md:space-y-16">
    <p class="text-center text-4xl md:text-6xl rasa font-bold text-black">
      How We Work
    </p>

    <div class="flex flex-col md:grid md:grid-cols-12 gap-8">
      <div class="w-full md:col-span-3 md:col-start-2 md:col-end-5 mb-6 md:mb-0">
        <div class="md:space-y-16">
          <div class="text-lg md:text-xl">
            <a href="/" class="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <i class="fa-solid fa-arrow-left"></i>
              <span class="pb-1 border-b border-black">Home</span>
            </a>
          </div>
        </div>
      </div>

      <div class="w-full md:col-span-7 md:col-start-5 md:col-end-12">
        <div class="space-y-6">
          <div class="space-y-4">
            <p class="rasa text-xl md:text-2xl">Solace Global operates as a youth-led nonprofit organization focused on providing access to STEM education for underprivileged communities around the world.</p>
            
            <p class="text-base md:text-lg">Founded in Dallas, Texas, our mission is to bridge the gap in STEM education by creating hands-on learning opportunities, delivering digital literacy workshops, and organizing outreach events tailored to the unique needs of our target communities. We serve diverse groups, including foster homes, senior citizens, and schools in developing countries such as Pakistan, Somalia, Kenya, and India. By focusing on grassroots solutions, Solace Global fosters an inclusive environment where individuals of all ages can engage with science, technology, engineering, and mathematics.</p>
            
            <p class="text-base md:text-lg">Our organization operates under the fiscal sponsorship of HCB, a recognized nonprofit that supports smaller organizations like ours by handling administrative tasks such as tax filings and donor receipts. As part of this partnership, HCB retains 7% of all funds raised to cover these operational costs, allowing us to focus on program implementation and growth. While this ensures our compliance with nonprofit regulations, we remain committed to utilizing the vast majority of our resources to create a tangible impact through our initiatives.</p>
            
            <p class="text-base md:text-lg">Solace Global functions primarily through a team of high school students who are passionate about using technology to address global issues. We organize a wide array of events, from coding workshops and robotics demonstrations to climate change cleanups and chess tournaments. For instance, our events at senior homes combine entertainment with educational outreach, such as introducing adult-friendly robots and providing 3D-printed replicas of monuments that residents can paint or keep as keepsakes. Internationally, we ship STEM kits to schools in developing countries, empowering educators to engage students in hands-on learning.</p>
            
            <p class="text-base md:text-lg">In addition to events, we collaborate with other nonprofits and local organizations to expand our reach. Our partnerships with groups like Project World Impact and robotics nonprofits have enabled us to integrate STEM into broader issues such as environmental sustainability. For example, our climate change events often feature interactive activities like robot-assisted park cleanups, combining environmental awareness with technology-driven solutions. These collaborations amplify our ability to create meaningful change and encourage younger generations to see STEM as a pathway to solving real-world problems.</p>
            
            <p class="text-base md:text-lg">Through a combination of local and international initiatives, Solace Global has raised over $70,000 to date and engaged more than 50 members in its programs. Our operational model emphasizes innovation, adaptability, and collaboration, ensuring that each event and project reflects the needs of the communities we serve. By balancing the administrative support provided by HCB with the creativity and passion of our team, Solace Global continues to grow as a leader in youth-led nonprofit STEM education.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>