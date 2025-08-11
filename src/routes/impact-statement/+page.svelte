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
    <!-- How We Work Header -->
    <p class="text-center text-4xl md:text-6xl rasa font-bold text-black">
      Donor Impact Statement
    </p>

    <!-- Main Content -->
    <div class="flex flex-col md:grid md:grid-cols-12 gap-8">
      <!-- Sidebar - Full width on mobile, side column on desktop -->
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

      <!-- How We Work Content - Full width on mobile -->
      <div class="w-full md:col-span-7 md:col-start-5 md:col-end-12">
        <div class="space-y-6">
          <div class="space-y-4">
            <p class="rasa text-xl md:text-2xl">Since our founding, Solace Global has been committed to making STEM education and humanitarian support accessible to underserved communities worldwide. Every number we share represents real, measurable change — not inflated metrics. That’s why we calculate our impact using a transparent, weighted formula that adjusts for different levels of engagement.</p>
            <p class="text-base md:text-lg font-semibold underline">Our Formula</p>
            
            <p class="text-base md:text-lg">Impact = (Short-form Views × 0.4) + (Long-form Views × 0.8) + (In-Person Participants)</p>

            <p class="text-base md:text-lg">Short-form educational content (Reels, TikTok, Shorts): 95% of total interactions = 95,000 × 0.4 = 38,000 meaningful engagements</p>

            <p class="text-base md:text-lg">Long-form educational videos (including our Career Compass series on 30 career paths): 5% of total interactions = 5,000 × 0.8 = 4,000 meaningful engagements</p>

            <p class="text-base md:text-lg">In-person programs (hands-on workshops, STEM kit distributions, humanitarian projects): 500 participants × 1.0 = 500 meaningful engagements</p>

            <p class="text-base md:text-lg">Total Impact = 38,000 + 4,000 + 500 = 42,500 people meaningfully engaged</p>

            <p class="text-base md:text-lg font-semibold underline">Our Reach in Numbers</p>
            <p class="text-base md:text-lg">Across all platforms, we have an estimated 100,000 total interactions — including likes, comments, and views — on educational and humanitarian content. These interactions span multiple countries and demographics, making our programs both global and accessible.</p>

            <p class="text-base md:text-lg font-semibold underline">Why These Numbers Matter</p>
            <p class="text-base md:text-lg">Behind each number is a real person — a student discovering coding for the first time, a young person exploring career pathways through Career Compass, or a community receiving vital resources through our humanitarian aid programs.</p>

            <p class="text-base md:text-lg">Your support has enabled us to:</p>
            <p class="text-base md:text-lg">• Deliver hands-on STEM education in classrooms and community centers worldwide.</p>
            <p class="text-base md:text-lg">• Create accessible, bite-sized learning content that reaches tens of thousands online.</p>
            <p class="text-base md:text-lg">• Build the Career Compass library, guiding students toward their future careers.</p>
            <p class="text-base md:text-lg">• Provide direct humanitarian aid, delivering both resources and hope.</p>

            <p class="text-base md:text-lg font-semibold underline">A Transparent Promise</p>
            <p class="text-base md:text-lg">We could simply say “100,000 interactions,” but we go further by adjusting for the depth of engagement. By doing so, we ensure donors and partners understand the true scope and quality of our impact. Every figure we share reflects a real human connection, learning experience, or act of support made possible by you.</p>

            <p class="text-base md:text-lg">Together, we’ve made a difference in an estimated 42,500 lives — and we’re only getting started.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>