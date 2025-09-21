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
      Donor Impact Statement
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
  <p class="rasa text-xl md:text-2xl">Not all interactions are equal. Watching a quick clip isn’t the same as completing a workshop, so we adjust our numbers to reflect the depth of engagement.</p>

  <p class="text-base md:text-lg font-semibold underline">Our Formula</p>
  <p class="text-base md:text-lg">Impact = (Short-form Views × 0.08) + (Long-form Views × 0.4) + (In-Person Participants × 1.0)</p>

  <p class="text-base md:text-lg font-semibold underline">Why These Weights?</p>
  <p class="text-base md:text-lg">0.08 for Short-form Views — Short videos (TikTok, Reels, Shorts) are a great way to spark curiosity, but they’re brief and often passive. We count each as 8% of a full engagement to reflect limited time spent learning.</p>
  <p class="text-base md:text-lg">0.4 for Long-form Views — Longer videos (like our Career Compass series) involve sustained attention and skill-building. We count each as 40% of a full engagement because they deliver more meaningful learning.</p>
  <p class="text-base md:text-lg">1.0 for In-Person Participants — Hands-on workshops, STEM kit distributions, and humanitarian projects have the most direct impact. We count each person reached in person as one full meaningful engagement.</p>

  <p class="text-base md:text-lg font-semibold underline">Example with Our Current Data</p>
  <p class="text-base md:text-lg">Short-form: 95,000 views × 0.08 = 7,600 meaningful engagements</p>
  <p class="text-base md:text-lg">Long-form: 5,000 views × 0.4 = 2,000 meaningful engagements</p>
  <p class="text-base md:text-lg">In-person: 500 × 1.0 = 500 meaningful engagements</p>
  <p class="text-base md:text-lg">Total Impact = 7,600 + 2,000 + 500 = 12,100 meaningful engagements</p>

  <p class="text-base md:text-lg">By explaining exactly how we arrive at our numbers, we ensure transparency and build trust — every figure reflects a real human connection, not just a raw click count.</p>
</div>
        </div>
      </div>
    </div>
  </div>
</main>