<script>
import VolunteerImage from "../../../lib/images/MediaImages/IMG_6585 (1).jpg";
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