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
  <div class="space-y-6 md:space-y-10">
    <!-- Contact Header -->
    <p class="text-center text-4xl md:text-6xl rasa font-bold text-black">
      Contact Us
    </p>
    
    <!-- Contact Info -->
    <div class="text-center text-xl md:text-2xl space-y-2 md:space-y-4">
      <p><a href="mailto:team@solaceglobal.xyz" class="hover:underline">team@solaceglobal.xyz</a></p>
      <p><a href="tel:4695731655" class="hover:underline">469-573-1655</a></p>
    </div>

    <!-- Main Content Section -->
    <div class="flex flex-col md:grid md:grid-cols-12 gap-8">
      
      <!-- Sidebar - full width on mobile, side column on desktop -->
      <div class="w-full md:col-span-3 md:col-start-2 md:col-end-5">
        <div class="space-y-8 md:space-y-16">
          <div class="text-lg md:text-xl">
            <a href="/" class="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <i class="fa-solid fa-arrow-left"></i>
              <span class="pb-1 border-b border-black">Home</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Form Content -->
      <div class="w-full md:col-span-7 md:col-start-5 md:col-end-12">
        <div class="space-y-6">
          <div class="w-full overflow-x-auto">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdNpF98dyDpZn449Uj4Vxls6d7KeT7BE8W4c4YLXXP43qaTEA/viewform?embedded=true" 
              width="100%" 
              height="1200" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0"
              class="max-w-full"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>