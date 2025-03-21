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
    <!-- FAQ Header -->
    <p class="text-center text-4xl md:text-6xl rasa font-bold text-black">
      FAQ
    </p>

    <!-- Main FAQ Content -->
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

      <!-- FAQ Content - Full width on mobile -->
      <div class="w-full md:col-span-7 md:col-start-5 md:col-end-12">
        <div class="space-y-8">
          <!-- FAQ Items -->
          <div>
            <h2 class="text-xl md:text-2xl font-bold">What programs does Solace Global offer?</h2>
            <p class="mt-2 text-base md:text-lg">
              We offer a variety of programs aimed at empowering individuals and communities:
            </p>
            <ul class="mt-2 space-y-1 list-disc pl-6">
              <li><b>Robotic Workshops:</b> Hands-on sessions where participants can learn about robotics, problem-solving, and innovation.</li>
              <li><b>Coding Classes:</b> Interactive classes designed to teach coding skills and foster a passion for technology and programming.</li>
              <li><b>Climate Change Projects:</b> Initiatives that promote environmental awareness and engage participants in sustainable practices and solutions.</li>
            </ul>
            <p class="mt-2 text-base md:text-lg">
              Each program is tailored to inspire creativity, develop skills, and make a positive impact on the world. Learn more about our programs and how to get involved at <a href="https://solaceglobal.xyz/about/volunteer" class="underline text-red-600 hover:text-red-800">solaceglobal.xyz/about/volunteer</a>.
            </p>
          </div>
          <hr class="border-gray-300" />

          <div>
            <h2 class="text-xl md:text-2xl font-bold">How can I volunteer or get involved?</h2>
            <p class="mt-2 text-base md:text-lg">
              We are always eager to welcome passionate individuals who want to make a difference. To volunteer or get involved, simply reach out to us via email at <a href="mailto:team@solaceglobal.xyz" class="underline text-red-600 hover:text-red-800">team@solaceglobal.xyz</a> or call us at <a href="tel:4695731655" class="underline text-red-600 hover:text-red-800">469-573-1655</a>.
            </p>
            <p class="mt-2 text-base md:text-lg">
              Our team will guide you through available opportunities, whether it's assisting with our programs, participating in events, or supporting our mission in other meaningful ways. No matter your skills or time commitment, there's a way for you to contribute and help create a positive impact. Contact us today and become part of the Solace Global community! To learn more, visit <a href="https://solaceglobal.xyz/about/volunteer" class="underline text-red-600 hover:text-red-800">solaceglobal.xyz/about/volunteer</a>.
            </p>
          </div>
          <hr class="border-gray-300" />

          <div>
            <h2 class="text-xl md:text-2xl font-bold">How does the foundation use donations?</h2>
            <p class="mt-2 text-base md:text-lg">
              Donations play a vital role in helping us achieve our mission. We use the funds to support and expand STEM projects, host impactful events, and give back to the community through various initiatives. Every contribution allows us to create opportunities, inspire innovation, and make a lasting difference in the lives of those we serve.
            </p>
            <p class="mt-2 text-base md:text-lg">
              Your generosity fuels our efforts to build a brighter future for all. Thank you for supporting our mission!
            </p>
          </div>
          <hr class="border-gray-300" />

          <div>
            <h2 class="text-xl md:text-2xl font-bold">What partnership opportunities are available for businesses and organizations?</h2>
            <p class="mt-2 text-base md:text-lg">
              We welcome all types of partnership opportunities with businesses and organizations that share our vision. Whether it's through event sponsorships, collaborative projects, in-kind donations, or employee engagement programs, we are open to building meaningful relationships that drive mutual growth and impact.
            </p>
            <p class="mt-2 text-base md:text-lg">
              Together, we can create innovative solutions, empower communities, and make a lasting difference. If you're interested in partnering with us, please contact us at <a href="mailto:team@solaceglobal.xyz" class="underline text-red-600 hover:text-red-800">team@solaceglobal.xyz</a> or call us at <a href="tel:4695731655" class="underline text-red-600 hover:text-red-800">469-573-1655</a> to explore how we can work together.
            </p>
          </div>
          <hr class="border-gray-300" />

          <div>
            <h2 class="text-xl md:text-2xl font-bold">What criteria does the foundation use to determine which projects to support?</h2>
            <p class="mt-2 text-base md:text-lg">
              We prioritize projects based on the positive impact they have on people and their influence on the community. Our goal is to support initiatives that reach a significant number of individuals and foster meaningful change.
            </p>
            <p class="mt-2 text-base md:text-lg">
              By focusing on projects that align with these values, we ensure our efforts create a lasting and widespread difference. Each project is carefully reviewed to ensure it resonates with our mission and brings value to the communities we serve.
            </p>
          </div>
          <hr class="border-gray-300" />

          <div>
            <h2 class="text-xl md:text-2xl font-bold">Who sponsors the foundation, and how do sponsorships support its mission?</h2>
            <p class="mt-2 text-base md:text-lg">
              Our foundation is supported by Hack Club through a fiscal sponsorship, which provides the resources and infrastructure needed to carry out our mission. This partnership enables us to focus on delivering impactful STEM initiatives, expanding our reach, and creating meaningful opportunities for communities in need.
            </p>
            <p class="mt-2 text-base md:text-lg">
              Sponsorships like this are vital to the success of our programs, allowing us to drive innovation, foster growth, and make a lasting difference in the lives of those we serve.
            </p>
          </div>
          <hr class="border-gray-300" />

          <div>
            <h2 class="text-xl md:text-2xl font-bold">What is the mission and vision of the organization?</h2>
            <p class="mt-2 text-base md:text-lg">
              Our mission is to harness the power of STEM (Science, Technology, Engineering, and Mathematics) to address global challenges, empower individuals, and create opportunities for growth and innovation.
            </p>
            <p class="mt-2 text-base md:text-lg">
              Through our programs and initiatives, we aim to make STEM education and resources accessible to all, especially underserved communities, fostering creativity and critical thinking.
            </p>
            <p class="mt-2 text-base md:text-lg">
              By equipping individuals with knowledge and tools, we strive to inspire a new generation of innovators who can drive meaningful change and build a brighter, more inclusive future.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>