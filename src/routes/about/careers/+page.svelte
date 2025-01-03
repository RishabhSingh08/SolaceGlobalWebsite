<script>
import VolunteerImage from "../../../lib/images/Volunteer.jpg";
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
</style>



<main>
    <div class="space-y-16">
        <!-- FAQ Header -->
        <p class="text-center text-6xl rasa font-bold text-black">
            Careers
        </p>
        <img src={VolunteerImage} alt="">

        <!-- Main FAQ Content -->
        <div class="grid grid-cols-12">
            
            <!-- Sidebar -->
            <div class="col-start-2 col-end-5">
                <div class="space-y-64">
                    <div class="text-xl">
                        <a href="/" class="flex items-center space-x-2">
                            <i class="fa-solid fa-arrow-left"></i>
                            <span class="pb border-b border-black">Home</span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- FAQ Content -->
            <div class="col-start-5 col-end-12 space-y-6">
                <div class="space-y-8">
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRr2z1gdoyIn-65WbsxNXSZJOE9AuePx-HjEx22ZpUA9Oz2g/viewform?embedded=true" width="640" height="1520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    </div>
</main>
