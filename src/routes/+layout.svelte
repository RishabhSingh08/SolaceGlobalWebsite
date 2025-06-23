<script>
import { injectAnalytics } from '@vercel/analytics/sveltekit'
injectAnalytics();
import "../app.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Icon from "../lib/images/SolaceGlobalLogo.png";
import { onMount } from 'svelte';
import { goto } from '$app/navigation';

let isAboutDropdownOpen = false;
let isWorkDropdownOpen = false;
let isIdeasDropdownOpen = false;
let isMobileMenuOpen = false;

function closeAllDropdowns() {
    isAboutDropdownOpen = false;
    isWorkDropdownOpen = false;
    isIdeasDropdownOpen = false;
}

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    closeAllDropdowns();
}

function toggleAboutDropdown() {
    isAboutDropdownOpen = !isAboutDropdownOpen;
    isWorkDropdownOpen = false;
    isIdeasDropdownOpen = false;
}

function toggleWorkDropdown() {
    isWorkDropdownOpen = !isWorkDropdownOpen;
    isAboutDropdownOpen = false;
    isIdeasDropdownOpen = false;
}

function toggleIdeasDropdown() {
    isIdeasDropdownOpen = !isIdeasDropdownOpen;
    isAboutDropdownOpen = false;
    isWorkDropdownOpen = false;
}

let showPopup = false;

onMount(() => {
    const acceptedTerms = localStorage.getItem('acceptedTerms');
    if (!acceptedTerms) {
        showPopup = true;
    }
});

function acceptTerms() {
    localStorage.setItem('acceptedTerms', 'true');
    showPopup = false;
}
</script>

<main>
    <div class="flex flex-col min-h-screen">
        <nav class="w-full py-4 border-b relative">
            <div class="container mx-auto px-4">
                <!-- Mobile/Desktop Navigation -->
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <a href="/" class="block">
                            <img src={Icon} alt="Logo" class="w-24 md:w-32" on:click={closeAllDropdowns}>
                        </a>
                    </div>

                    <!-- Desktop Navigation Links -->
                    <div class="hidden md:flex items-center space-x-8">
                        <button
                            class="text-lg font-medium hover:text-black hover:underline focus:outline-none"
                            on:click={toggleAboutDropdown}
                        >
                            About Us
                        </button>
                        <button
                            class="text-lg font-medium hover:text-black hover:underline focus:outline-none"
                            on:click={toggleWorkDropdown}
                        >
                            Our Work
                        </button>
                        <button
                            class="text-lg font-medium hover:text-black hover:underline focus:outline-none"
                            on:click={closeAllDropdowns}

                        >
                            <a href="/the-wisdom">The Wisdom</a>
                        </button>
                        <a href="/donate" class="text-lg hover:text-black hover:underline" on:click={closeAllDropdowns}>Donate</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden">
                        <button 
                            class="text-2xl focus:outline-none" 
                            on:click={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            <i class={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                {#if isMobileMenuOpen}
                <div class="md:hidden mt-4 py-4 border-t">
                    <div class="flex flex-col space-y-4">
                        <button 
                            class="text-lg font-medium hover:text-black hover:underline focus:outline-none flex justify-between items-center"
                            on:click={toggleAboutDropdown}
                        >
                            About Us
                            <i class={isAboutDropdownOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                        </button>
                        
                        {#if isAboutDropdownOpen}
                        <div class="pl-4 flex flex-col space-y-2 text-gray-600">
                            <a href="/about/our-story" on:click={closeAllDropdowns}>Our Story</a>
                            <a href="/about/FAQ" on:click={closeAllDropdowns}>FAQ</a>
                            <a href="/about/our-team" on:click={closeAllDropdowns}>Our Team</a>
                            <a href="/about/financials" on:click={closeAllDropdowns}>Financials</a>
                            <a href="/about/how-we-work" on:click={closeAllDropdowns}>How We Work</a>
                            <a href="/about/careers" on:click={closeAllDropdowns}>Careers</a>
                            <a href="/about/contact" on:click={closeAllDropdowns}>Contact</a>
                        </div>
                        {/if}
                        
                        <button 
                            class="text-lg font-medium hover:text-black hover:underline focus:outline-none flex justify-between items-center"
                            on:click={toggleWorkDropdown}
                        >
                            Our Work
                            <i class={isWorkDropdownOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                        </button>
                        
                        {#if isWorkDropdownOpen}
                        <div class="pl-4 flex flex-col space-y-2 text-gray-600">
                            <a href="/work/career-compass" on:click={closeAllDropdowns}>Career Compass</a>
                            <a href="/work/connection-project" on:click={closeAllDropdowns}>The Connection Project</a>
                            <a href="/work/discovery-project" on:click={closeAllDropdowns}>The Discovery Project</a>
                            <a href="/work/girls-in-stem" on:click={closeAllDropdowns}>Girls in STEM</a>
                        </div>
                        {/if}
                        
                        <a href="/the-wisdom" class="text-lg font-medium hover:text-black hover:underline">The Wisdom</a>
                        <a href="/donate" class="text-lg font-medium hover:text-black hover:underline" on:click={closeAllDropdowns}>Donate</a>
                    </div>
                </div>
                {/if}
            </div>

            <!-- Desktop Dropdowns -->
            {#if isAboutDropdownOpen && !isMobileMenuOpen}
            <div id="dropdown-about-menu" class="absolute left-0 top-full w-full bg-white shadow-md p-4 md:p-6 font-thin border-t z-50 overflow-y-auto max-h-96 md:max-h-none">
                <div class="container mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Column 1 -->
                        <div>
                            <h4 class="text-xl md:text-2xl font-base">About Us</h4>
                            <p class="mt-2 text-base md:text-lg w-full md:w-96">Learn about our story, our operation and our role in making the world one step better at a time</p>
                        </div>
                        <!-- Column 2 -->
                        <div>
                            <h4 class="text-xl md:text-2xl font-base">Explore</h4>
                            <ul class="mt-2 space-y-2">
                                <li><a href="/about/our-story" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Our Story</a></li>
                                <li><a href="/about/FAQ" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>FAQ</a></li>
                                <li><a href="/about/our-team" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Our Team</a></li>
                                <li><a href="/about/financials" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Financials</a></li>
                            </ul>
                        </div>
                        <!-- Column 3 -->
                        <div>
                            <h4 class="text-xl md:text-2xl font-base">Get Involved</h4>
                            <ul class="mt-2 space-y-2">
                                <li><a href="/about/how-we-work" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>How We Work</a></li>
                                <li><a href="/about/careers" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Careers</a></li>
                                <li><a href="/about/contact" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/if}

            {#if isWorkDropdownOpen && !isMobileMenuOpen}
            <div id="dropdown-menu-work" class="absolute left-0 top-full w-full bg-white shadow-md p-4 md:p-6 font-thin border-t z-50 overflow-y-auto max-h-96 md:max-h-none">
                <div class="container mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <h4 class="text-xl md:text-2xl font-base"><a href="/work/career-compass" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Career Compass</a></h4>
                            <ul class="mt-2 space-y-2">
                                <li><a href="/work/career-compass/#engineering" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Engineering</a></li>
                                <li><a href="/work/career-compass/#humanities" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Humanities</a></li>
                                <li><a href="/work/career-compass/#business" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Business</a></li>
                                <li><a href="/work/career-compass/#fine-arts" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Fine Arts</a></li>
                                <li><a href="/work/career-compass/#natural-sciences" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Natural Sciences</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl md:text-2xl font-base"><a href="/work/connection-project" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>The Connection Project</a></h4>
                            <ul class="mt-2 space-y-2">
                                <li><a href="/work/connection-project/#chess" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Chess Lessons for Abuse Survivors</a></li>
                                <li><a href="/work/connection-project/#baqiyatullah" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Clothing for Those in Need – Pakistan</a></li>
                                <li><a href="/work/connection-project/#german-visa" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Guiding German Students on U.S. Visa Processes</a></li>
                                <li><a href="/work/connection-project/#israel-aid" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Essential Aid for Those in Need – Israel</a></li>
                                <li><a href="/work/connection-project/#volleyball-fundraiser" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Volleyball Fundraiser at Plano West High School</a></li>
                                <li><a href="/work/connection-project/#ethiopia-donation" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Empowering Medresa-Hamza Students – Ethiopia</a></li>
                                <li><a href="/work/connection-project/#switzerland-donation" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Supporting Cultural Heritage – Switzerland</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl md:text-2xl font-base"><a href="/work/discovery-project" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>The Discovery Project</a></h4>
                            <ul class="mt-2 space-y-2">
                                <li><a href="/work/discovery-project/#dreams" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>3D Printing Expo with Amazon & Tesla</a></li>
                                <li><a href="/work/discovery-project/#robots" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Environmental Robotics Presentation with UTD Researcher</a></li>
                                <li><a href="/work/discovery-project/#seniors" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Digital Safety Training for Seniors</a></li>
                                <li><a href="/work/discovery-project/#spark" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>STEM Workshop Led by Local Robotics Teens</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl md:text-2xl font-base"><a href="/work/girls-in-stem" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Girls in STEM</a></h4>
                            <ul class="mt-2 space-y-2">
                                <li><a href="/work/girls-in-stem/#tech-builders" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Robotics Education</a></li>
                                <li><a href="/work/girls-in-stem/#robot-connection" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Robotics Education (Part 2)</a></li>
                                <li><a href="/work/girls-in-stem/#CodeHER" class="text-gray-600 hover:underline" on:click={closeAllDropdowns}>Online Coding Classes for Girls with Code.org</a></li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
            {/if}
        </nav>

        <div class="container mx-auto px-4 my-8 md:my-16 flex-grow">
            <slot/>
        </div>

        {#if showPopup}
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div class="bg-white border border-gray-300 rounded-lg shadow-lg max-w-lg p-4 md:p-6 space-y-4 w-full">
                <h2 class="text-lg font-semibold text-gray-800">Terms and Conditions</h2>
                <p class="text-sm text-gray-600">
                    By using this website, you agree to our
                    <a href="/terms-and-conditions" target="_blank" class="text-red-500 underline hover:text-red-600">Terms and Conditions</a>.
                </p>
                <button
                    class="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    on:click={acceptTerms}
                >
                    Accept
                </button>
            </div>
        </div>
        {/if}

        <footer class="p-4 md:p-8 border-t mt-auto">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div class="flex justify-center md:justify-start">
                        <a href="/">
                            <img class="w-24 md:w-32" src={Icon} alt="Logo" on:click={closeAllDropdowns}>
                        </a>
                    </div>
                    <div>
                        <p class="text-sm text-center md:text-base">We are a student-led nonprofit focused on empowering underserved communities through support, innovation, and impactful outreach programs.</p>
                    </div>
                    <div class="flex justify-center md:justify-end gap-4 md:gap-8 items-center text-xl md:text-2xl">
                        <a href="https://www.tiktok.com/@solaceglobalnpo" target="_blank" aria-label="Tiktok" class="hover:text-red-500 transition">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                        <a href="https://www.instagram.com/solaceglobalnpo/" target="_blank" aria-label="Instagram" class="hover:text-red-500 transition">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@SolaceGlobalNPO1" target="_blank" aria-label="Youtube" class="hover:text-red-500 transition">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</main>