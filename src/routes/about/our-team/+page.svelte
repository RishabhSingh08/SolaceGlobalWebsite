<script>
    import pfpAinesh from "../../../lib/images/Headshots/ainesh_gupta.png"
    import pfpAzalea from "../../../lib/images/Headshots/azalea_tang.png"
    import pfpMahit from "../../../lib/images/Headshots/mahit_cherku.png"
    import pfpSamanyu from "../../../lib/images/Headshots/samanyu_earna.png"
    import pfpVedant from "../../../lib/images/Headshots/vedant_teware.png"
    import pfpZaid from "../../../lib/images/Headshots/zaid_salahi.png"
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
        <!-- Team Header -->
        <p class="text-center text-6xl rasa font-bold text-black">
            Our Team
        </p>

        <!-- Main Team Content -->
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

            <!-- Team Content -->
<div class="col-start-5 col-end-12 space-y-4 text-zinc-700">
    <!-- Executive Leadership Section -->
    <div>
        <h2 class="text-2xl font-bold">Executive Leadership</h2>
        <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
                <img src="" alt="Nishant Sinari" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Nishant Sinari</p>
                <p class="text-sm text-gray-500">CEO & Founder</p>
            </div>
        </div>
    </div>

    <!-- Operations Section -->
    <div class="">
        <h2 class="text-2xl font-bold">Operations</h2>
        <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
                <img src={pfpZaid} alt="Zaid Salahi" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Zaid Salahi</p>
                <p class="text-sm text-gray-500">Head of Operations</p>
            </div>
            <div class="text-center">
                <img src={pfpMahit} alt="Mahit Cherku" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Mahit Cherku</p>
                <p class="text-sm text-gray-500">Executive Assistant</p>
            </div>
        </div>
    </div>

    <!-- IT Department Section -->
    <div>
        <h2 class="text-2xl font-bold">IT Department</h2>
        <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
                <img src="" alt="Punit Lakhotiya" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Punit Lakhotiya</p>
                <p class="text-sm text-gray-500">Chief Information Officer</p>
            </div>
            <div class="text-center">
                <img src="" alt="Rishabh Singh" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Rishabh Singh</p>
                <p class="text-sm text-gray-500">Chief Technical Officer</p>
            </div>
            <div class="text-center">
                <img src="" alt="Adwaith Sajin" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Adwaith Sajin</p>
                <p class="text-sm text-gray-500">Video Production Engineer</p>
            </div>
        </div>
    </div>

    <!-- STEM Mentors Section -->
    <div>
        <h2 class="text-2xl font-bold">STEM Mentors</h2>
        <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
                <img src="" alt="Anvita Halbhavi" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Anvita Halbhavi</p>
                <p class="text-sm text-gray-500">STEM Educator - North America</p>
            </div>
            <div class="text-center">
                <img src={pfpAzalea} alt="Azalea Tang" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Azalea Tang</p>
                <p class="text-sm text-gray-500">STEM Educator - North America</p>
            </div>
            <div class="text-center">
                <img src={pfpAinesh} alt="Ainesh Gupta" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Ainesh Gupta</p>
                <p class="text-sm text-gray-500">STEM Educator - South Asia</p>
            </div>
        </div>
    </div>

    <!-- Outreach and Program Development Section -->
    <div>
        <h2 class="text-2xl font-bold">Outreach and Program Development</h2>
        <div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
                <img src={pfpSamanyu} alt="Samanyu Earna" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Samanyu Earna</p>
                <p class="text-sm text-gray-500">Finance Outreach Member</p>
            </div>
            <div class="text-center">
                <img src="" alt="Abhinav Karthik" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Abhinav Karthik</p>
                <p class="text-sm text-gray-500">Senior Home Outreach Lead - North Texas</p>
            </div>
            <div class="text-center">
                <img src={pfpVedant} alt="Vedant Teware" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Vedant Teware</p>
                <p class="text-sm text-gray-500">STEM Program Coordinator - Southwest Asia</p>
            </div>
            <div class="text-center">
                <img src="" alt="Swaraj Nibandhe" class="rounded-full w-32 h-32 mx-auto">
                <p class="mt-2 font-bold">Swaraj Nibandhe</p>
                <p class="text-sm text-gray-500">STEM Program Coordinator - Southwest Asia</p>
            </div>
        </div>
    </div>
</div>
        </div>
    </div>
</main>

