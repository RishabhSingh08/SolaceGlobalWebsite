<script>
  import guest from "../../../lib/images/Headshots/none.png";
  import pfpAinesh from "../../../lib/images/Headshots/ainesh_gupta.png";
  import pfpAzalea from "../../../lib/images/Headshots/azalea_tang.png";
  import pfpMahit from "../../../lib/images/Headshots/mahit_cherku.png";
  import pfpSamanyu from "../../../lib/images/Headshots/samanyu.png";
  import pfpVedant from "../../../lib/images/Headshots/vedant_teware.png";
  import pfpZaid from "../../../lib/images/Headshots/zaid_salahi.png";
  import pfpAbhi from "../../../lib/images/Headshots/abhi_karthik.png";
  import pfpAzaan from "../../../lib/images/Headshots/azaan.png";
  import pfpJacob from "../../../lib/images/Headshots/jacob.png";
  import pfpJude from "../../../lib/images/Headshots/jude.png";
  import pfpNishant from "../../../lib/images/Headshots/nishantS.png";
  import pfpYash from "../../../lib/images/Headshots/yash.jpg";
  import pfpRanveer from "../../../lib/images/Headshots/ranveer.jpg";
  import pfpRishabh from "../../../lib/images/Headshots/rishabh.jpg";
  import pfpKaushal from "../../../lib/images/Headshots/Kaushal.jpg";
  import pfpJennyl from "../../../lib/images/Headshots/jennyl.jpg";
  import pfpAadi from "../../../lib/images/Headshots/aadi.jpg";
  import pfpSwaraj from "../../../lib/images/Headshots/swaraj.jpg";
  import pfpAbhiV from "../../../lib/images/Headshots/abhiv.jpg";
  import pfpAnvita from "../../../lib/images/Headshots/anvita.jpg";
  import pfpAbhish from "../../../lib/images/Headshots/abhish.jpg";

  const departments = [
    {
      name: "Executive",
      members: [
        { name: "Nishant Sinari", role: "CEO & Founder", pfp: pfpNishant },
        { name: "Yash Giriyapura", role: "Vice President of Engagement", pfp: pfpYash },
        { name: "Rishabh Singh", role: "Chief Technology Officer", pfp: pfpRishabh },
        { name: "Ranveer Jadhav", role: "Vice President of Internal Operations", pfp: pfpRanveer },
        { name: "Mahit Cherku", role: "Chief of Staff", pfp: pfpMahit }
      ]
    },
    {
      name: "Operations",
      members: [
        { name: "Zaid Salahi", role: "Event Coordinator: Middle East", pfp: pfpZaid },
        { name: "Jude Kumar", role: "Events Manager: North Texas", pfp: pfpJude },
      ]
    },
    {
      name: "IT Department",
      members: [
        { name: "Samanyu Earna", role: "Director of Technology", pfp: pfpSamanyu },
        { name: "Punit Lakhotiya", role: "Techincal Clerk" },
        // { name: "Adwaith Sajin", role: "Video Production Engineer", pfp: pfpAadi }
      ]
    },
    {
      name: "STEM Mentors",
      members: [
        { name: "Anvita Halbhavi", role: "STEM Educator: North America", pfp: pfpAnvita },
        { name: "Azalea Tang", role: "STEM Educator: North America", pfp: pfpAzalea },
        { name: "Ainesh Gupta", role: "STEM Educator - South Asia", pfp: pfpAinesh }
      ]
    },
    {
      name: "Outreach and Program Development",
      members: [
        { name: "Abhinav Karthik", role: "Global Outreach Officer", pfp: pfpAbhi },
        { name: "Swaraj Nibandhe", role: "STEM Program Coordinator - Southwest Asia", pfp: pfpSwaraj },
        { name: "Aidan Garrido", role: "Marketing Associate" },
        { name: "Abhiram Vemulapalli", role: "Global Outreach Officer", pfp: pfpAbhiV },
        { name: "Azaan Naqvi", role: "Career Compass Manager", pfp: pfpAzaan }
      ]
    },
    {
      name: "Finance Team",
      members: [
        { name: "Jennyl Patel", role: "Chief Finance Officer", pfp: pfpJennyl },
        { name: "Nishant Venkatachalam", role: "Director of Finance" },
        { name: "Jacob Wheat", role: "Senior Finance Manager", pfp: pfpJacob },
        { name: "Vedant Teware", role: "Finance Associate", pfp: pfpVedant },
        { name: "Kaushal Ganapur", role: "Finance Associate", pfp: pfpKaushal },
        { name: "Abhish Bandi", role: "Finance Associate", pfp: pfpAbhish },
      ]
    },
  ];
</script>


<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
</svelte:head>

<style>
  .rasa {
    font-family: "Rasa", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }

  /* Add smooth transition for hover effects */
  .team-member {
    transition: all 0.3s ease;
  }

  .team-member:hover {
    transform: translateY(-5px);
  }
</style>

<main>


  <div class="space-y-16 py-12">
    <!-- Team Header -->
    <h1 class="text-center text-6xl rasa font-bold text-black">
      Our Team
    </h1>

    <!-- Main Team Content -->
    <div class="grid grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="col-span-12 lg:col-span-3 px-4">
        <div class="sticky top-8 space-y-64">
          <div class="text-xl">
            <a href="/" class="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <i class="fa-solid fa-arrow-left"></i>
              <span class="pb-1 border-b border-black">Home</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Team Content -->
      <div class="col-span-12 lg:col-span-8 space-y-12 px-4">
        {#each departments as department}
          <section class="space-y-6">
            <h2 class="text-2xl font-bold text-zinc-800">{department.name}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {#each department.members as member}
                <div class="team-member text-center p-4 rounded-lg hover:bg-gray-50">
                  <img 
                    src={member.pfp || guest} 
                    alt={member.name} 
                    class="rounded-full w-32 h-32 mx-auto object-cover shadow-md hover:shadow-lg transition-shadow"
                  >
                  <p class="mt-4 font-bold text-zinc-800">{member.name}</p>
                  <p class="text-sm text-gray-500">{member.role}</p>
                </div>
              {/each}
            </div>
          </section>
        {/each}
      </div>
    </div>
  </div>
</main>