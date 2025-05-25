<script lang="ts">
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
  import pfpNishant from "../../../lib/images/Headshots/Nishant.png";
  import pfpYash from "../../../lib/images/Headshots/yash.jpg";
  import pfpRanveer from "../../../lib/images/Headshots/ranveer.jpg";
  import pfpRishabh from "../../../lib/images/Headshots/rishabh.jpg";




  type TeamMember = {
    name: string;
    role: string;
    pfp?: string;
  };

  type Department = {
    name: string;
    members: TeamMember[];
  };

  const departments: Department[] = [
  {
    name: "Executive Leadership",
    members: [
      {
        name: "Nishant Sinari",
        role: "CEO & Founder",
        pfp: pfpNishant
      },
      {
        name: "Ranveer Jadhav",
        role: "Chief Financial Officer",
        pfp: pfpRanveer
      }
    ]
  },
  {
    name: "Operations",
    members: [
      {
        name: "Zaid Salahi",
        role: "Event Coordinator: Middle East",
        pfp: pfpZaid
      },
      {
        name: "Yash Giriyapura",
        role: "Lead Events Manager",
        pfp: pfpYash
      },
      {
        name: "Jude Kumar",
        role: "Events Manager: North Texas",
        pfp: pfpJude
      },
      {
        name: "Mahit Cherku",
        role: "Chief Global Engagement Officer",
        pfp: pfpMahit
      }
    ]
  },
  {
    name: "IT Department",
    members: [
      {
        name: "Rishabh Singh",
        role: "Chief Technology Officer",
        pfp: pfpRishabh
      },
      {
        name: "Punit Lakhotiya",
        role: "Chief AI Development Officer"
      },

      {
        name: "Adwaith Sajin",
        role: "Video Production Engineer"
      }
    ]
  },
  {
    name: "STEM Mentors",
    members: [
      {
        name: "Anvita Halbhavi",
        role: "STEM Educator: North America"
      },
      {
        name: "Azalea Tang",
        role: "STEM Educator: North America",
        pfp: pfpAzalea
      },
      {
        name: "Ainesh Gupta",
        role: "STEM Educator - South Asia",
        pfp: pfpAinesh
      }
    ]
  },
  {
    name: "Outreach and Program Development",
    members: [
      {
        name: "Samanyu Earna",
        role: "Senior Finance Manager",
        pfp: pfpSamanyu
      },
      {
        name: "Abhinav Karthik",
        role: "Global Outreach Officer",
        pfp: pfpAbhi
      },
      {
        name: "Vedant Teware",
        role: "STEM Program Coordinator - Southwest Asia",
        pfp: pfpVedant
      },
      {
        name: "Swaraj Nibandhe",
        role: "STEM Program Coordinator - Southwest Asia"
      },
      {
        name: "Abhiram Vemulapalli",
        role: "Global Outreach Officer"
      },
      {
        name: "Azaan Naqvi",
        role: "Career Compass Manager",
        pfp: pfpAzaan
      }
    ]
  },
  {
    name: "Finance Team",
    members: [
      {
        name: "Nishant Venkatachalam",
        role: "Finance Manager"
      },
      {
        name: "Kaushal Ganapur",
        role: "Finance Assistant"
      },
      {
        name: "Jennyl Patel",
        role: "Finance Associate"
      },
      {
        name: "Jacob Wheat",
        role: "Finance Assistant",
        pfp: pfpJacob
      }
    ]
  },
  {
    name: "Marketing",
    members: [
      {
        name: "Aidan Garrido",
        role: "Marketing Associate"
      }
    ]
  }
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