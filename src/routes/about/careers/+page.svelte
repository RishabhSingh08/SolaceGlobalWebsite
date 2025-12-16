<script>
import VolunteerImage from "$connectionImages/IMG_6585 (1).jpg";
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Careers & Volunteer | Solace Global - Join Our Team</title>
  <meta name="title" content="Careers & Volunteer | Solace Global - Join Our Team" />
  <meta name="description" content="Join Solace Global's youth-led team of 200+ volunteers. Apply for positions in STEM education, outreach, technology, finance, and event coordination. Make a difference in communities across 18+ countries." />
  <meta name="keywords" content="Solace Global careers, volunteer opportunities, nonprofit jobs, STEM education volunteer, youth volunteer Dallas, teen nonprofit, high school volunteer, community service, nonprofit internship" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://solaceglobal.xyz/about/careers" />
  <meta property="og:title" content="Careers & Volunteer | Join Solace Global" />
  <meta property="og:description" content="Join our team of 200+ volunteers making a difference through STEM education and humanitarian outreach." />
  <meta property="og:image" content="https://solaceglobal.xyz/og-image.png" />
  <meta property="og:site_name" content="Solace Global Foundation" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://solaceglobal.xyz/about/careers" />
  <meta name="twitter:title" content="Careers & Volunteer | Join Solace Global" />
  <meta name="twitter:description" content="Join our team of 200+ volunteers making a difference globally." />
  <meta name="twitter:image" content="https://solaceglobal.xyz/og-image.png" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Volunteer Positions at Solace Global",
    "description": "Various volunteer positions in STEM education, outreach, technology, finance, and event coordination",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Solace Global Foundation",
      "sameAs": "https://solaceglobal.xyz"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    },
    "employmentType": "VOLUNTEER"
  }
  </script>`}

  <link rel="canonical" href="https://solaceglobal.xyz/about/careers" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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
      Careers
    </p>
    
    <div class="w-full">
      <img src={VolunteerImage} alt="Volunteer" class="w-full h-auto rounded-lg shadow-md">
    </div>
    <div class="flex flex-col md:flex-row md:space-x-8">
      <div class="w-full md:w-1/4 mb-8 md:mb-0">
        <div class="space-y-8 md:space-y-16">
          <div class="text-lg md:text-xl">
            <a href="/" class="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <i class="fa-solid fa-arrow-left"></i>
              <span class="pb-1 border-b border-black">Home</span>
            </a>
          </div>
        </div>
      </div>
      
      <div class="w-full md:w-3/4">
        <div class="space-y-6">
          <div class="w-full overflow-x-auto">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeRr2z1gdoyIn-65WbsxNXSZJOE9AuePx-HjEx22ZpUA9Oz2g/viewform?embedded=true" 
              width="100%" 
              height="1520" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0"
              class="max-w-full"
              title="Application Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>