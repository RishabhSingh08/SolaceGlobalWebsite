<!-- VOLLEY DONATION PAGE -->

<script>
  import { writable, derived } from 'svelte/store';

  // Optional: If you have a specific logo for the tournament
  import logoUrl from "../../lib/images/SolaceGlobalLogo.png";

  // --- Configuration ---
  const BASE_PRICE = 42;
  const INDIVIDUAL_PRICE = 7; // Example price for individual registration
  const PRICE_PER_SUBSTITUTE = 5;
  const MAX_SUBSTITUTES = 3;
  // IMPORTANT: Replace 'solace-global' with your actual Hack Club Bank slug if using HCB,
  // or replace the entire URL structure if using a different payment provider.
  const PAYMENT_LINK_BASE = "https://hcb.hackclub.com/donations/start/solace-global";

  // --- Global State ---
  let activeTab = writable('team'); // 'team' or 'individual'

  // --- Team Form State ---
  let teamName = "";
  let teamEmail = ""; // Renamed for clarity
  const numberOfSubstitutes = writable(0);
  let teamAgreedToTerms = false;
  let showTeamError = false;
  let teamFormErrors = {};

  // --- Individual Form State ---
  let individualName = "";
  let individualContact = ""; // Can be email or phone, adjust validation if needed
  let individualAgreedToTerms = false;
  let showIndividualError = false;
  let individualFormErrors = {};

  // --- Derived State for Team Price Calculation ---
  const totalPrice = derived(
    numberOfSubstitutes,
    ($subs) => {
      const subCost = $subs * PRICE_PER_SUBSTITUTE;
      return BASE_PRICE + subCost;
    }
  );

  // --- Team Validation ---
  function validateTeamForm() {
    teamFormErrors = {
      teamName: !teamName.trim() ? "Team Name is required" : null,
      teamEmail: !teamEmail.trim() ? "Contact Email is required" : null, // Basic check, add regex for format if needed
      terms: !teamAgreedToTerms ? "You must agree to the terms and conditions." : null,
      // Substitutes validation is handled by the select options range
    };
    // Remove null values for easier checking
    teamFormErrors = Object.fromEntries(Object.entries(teamFormErrors).filter(([_, v]) => v != null));
    return Object.keys(teamFormErrors).length === 0; // True if no errors
  }

    // --- Individual Validation ---
  function validateIndividualForm() {
    individualFormErrors = {
      individualName: !individualName.trim() ? "Name is required" : null,
      individualContact: !individualContact.trim() ? "Contact is required" : null,
      terms: !individualAgreedToTerms ? "You must agree to the terms and conditions." : null,
    };
    individualFormErrors = Object.fromEntries(Object.entries(individualFormErrors).filter(([_, v]) => v != null));
    return Object.keys(individualFormErrors).length === 0; // True if no errors
  }


  // --- Team Payment Link Generation ---
  function generateTeamPaymentLink() {
    if (!validateTeamForm()) {
      showTeamError = true;
      return null;
    }
    showTeamError = false; // Reset error display on successful validation

    let currentSubs = 0;
    numberOfSubstitutes.subscribe(value => currentSubs = value)(); // Get current value from store

    let currentTotal = 0;
    totalPrice.subscribe(value => currentTotal = value)(); // Get current value from store

    // Construct the message payload for the payment link
    const message = `Volleyball Tournament Team Registration\nTeam: ${teamName}\nSubstitutes: ${currentSubs}\nTotal: $${currentTotal.toFixed(2)}`;

    const params = new URLSearchParams({
      // Map form fields to expected payment link parameters
      name: teamName, // Using team name as the primary identifier
      email: teamEmail,
      message: message,
      amount: (currentTotal * 100).toFixed(0) // Amount in cents
    });

    return `${PAYMENT_LINK_BASE}?${params.toString()}`;
  }

  // --- Individual Payment Link Generation ---
    function generateIndividualPaymentLink() {
    if (!validateIndividualForm()) {
        showIndividualError = true;
        return null;
    }
    showIndividualError = false;

    const message = `Volleyball Tournament Individual Registration\nName: ${individualName}\nContact: ${individualContact}\nTotal: $${INDIVIDUAL_PRICE.toFixed(2)}`;

    const params = new URLSearchParams({
        name: individualName,
        email: individualContact.includes('@') ? individualContact : '', // Assume contact is email if it contains '@', adjust if needed
        message: message,
        amount: (INDIVIDUAL_PRICE * 100).toFixed(0) // Amount in cents
    });

     return `${PAYMENT_LINK_BASE}?${params.toString()}`;
    }

  // --- Form Submission Handlers ---
  function handleTeamSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const link = generateTeamPaymentLink();
    if (link) {
      window.location.href = link; // Redirect user to the payment page
    }
  }

    function handleIndividualSubmit(event) {
    event.preventDefault();
    const link = generateIndividualPaymentLink();
    if (link) {
        window.location.href = link;
    }
    }


  // Reactive validation triggers when inputs change (optional but good UX)
  $: if (showTeamError) {
    validateTeamForm();
  }
  $: if (showIndividualError) {
    validateIndividualForm();
  }

  // Function to switch tabs
  function setActiveTab(tabName) {
    activeTab.set(tabName);
    // Reset errors when switching tabs
    showTeamError = false;
    showIndividualError = false;
    teamFormErrors = {};
    individualFormErrors = {};
  }

</script>

<main class="rounded-3xl bg-gradient-to-b from-white to-gray-100 py-8">
  <div class="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 space-y-8">

    <div class="text-center space-y-4">
      <!-- Optional Tournament Logo -->
      
      {#if logoUrl}
        <img src={logoUrl} alt="Tournament Logo" class="h-24 mx-auto" />
      {/if}
     

      <h2 class="text-3xl font-bold text-gray-900">Volleyball Tournament Payment</h2>
      <p class="text-gray-600">
        Register as a team or an individual player.
      </p>
    </div>

    <div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <button
          on:click={() => setActiveTab('team')}
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          class:border-red-500={$activeTab === 'team'}
          class:text-red-600={$activeTab === 'team'}
          class:border-transparent={$activeTab !== 'team'}
          class:text-gray-500={$activeTab !== 'team'}
          class:hover:text-gray-700={$activeTab !== 'team'}
          class:hover:border-gray-300={$activeTab !== 'team'}
          aria-current={$activeTab === 'team' ? 'page' : undefined}
        >
          Team Payment
        </button>
        <button
          on:click={() => setActiveTab('individual')}
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          class:border-red-500={$activeTab === 'individual'}
          class:text-red-600={$activeTab === 'individual'}
          class:border-transparent={$activeTab !== 'individual'}
          class:text-gray-500={$activeTab !== 'individual'}
          class:hover:text-gray-700={$activeTab !== 'individual'}
          class:hover:border-gray-300={$activeTab !== 'individual'}
           aria-current={$activeTab === 'individual' ? 'page' : undefined}
        >
          Individual Payment
        </button>
      </nav>
    </div>

    {#if $activeTab === 'team'}
      <div class="space-y-6">
         <p class="text-sm text-gray-600">
          Register your team and pay the entry fee. Each substitute adds an additional ${PRICE_PER_SUBSTITUTE}.
         </p>
        <form on:submit={handleTeamSubmit} class="space-y-6">
          <div class="space-y-1">
            <label for="teamName" class="block text-sm font-medium text-gray-700">Team Name*</label>
            <input
              id="teamName"
              type="text"
              bind:value={teamName}
              on:input={() => { if (showTeamError) validateTeamForm() }}
              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                     {teamFormErrors.teamName && showTeamError ? 'border-red-500' : 'border-gray-300'}"
              placeholder="Enter your team name"
              required
            />
            {#if teamFormErrors.teamName && showTeamError}
              <p class="text-red-500 text-xs mt-1">{teamFormErrors.teamName}</p>
            {/if}
          </div>

          <div class="space-y-1">
            <label for="teamEmail" class="block text-sm font-medium text-gray-700">Contact Email*</label>
            <input
              id="teamEmail"
              type="email"
              bind:value={teamEmail}
               on:input={() => { if (showTeamError) validateTeamForm() }}
              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                    {teamFormErrors.teamEmail && showTeamError ? 'border-red-500' : 'border-gray-300'}"
              placeholder="your.email@example.com"
              required
            />
            {#if teamFormErrors.teamEmail && showTeamError}
              <p class="text-red-500 text-xs mt-1">{teamFormErrors.teamEmail}</p>
            {/if}
          </div>

          <div class="space-y-1">
            <label for="substitutes" class="block text-sm font-medium text-gray-700">Number of Substitutes</label>
            <select
              id="substitutes"
              bind:value={$numberOfSubstitutes}
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white transition duration-150 ease-in-out"
            >
              {#each {length: MAX_SUBSTITUTES + 1} as _, i}
                 <option value={i}>{i} (+${(i * PRICE_PER_SUBSTITUTE).toFixed(2)})</option>
              {/each}
            </select>
             </div>

          <div class="space-y-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800">Total Team Cost</h3>
            <div class="flex justify-between text-sm text-gray-600">
              <span>Base Team Fee:</span>
              <span>${BASE_PRICE.toFixed(2)}</span>
            </div>
            {#if $numberOfSubstitutes > 0}
              <div class="flex justify-between text-sm text-gray-600">
                <span>Substitutes ({$numberOfSubstitutes} x ${PRICE_PER_SUBSTITUTE}):</span>
                <span>+ ${($numberOfSubstitutes * PRICE_PER_SUBSTITUTE).toFixed(2)}</span>
              </div>
            {/if}
            <div class="flex justify-between text-lg font-bold text-gray-900 border-t pt-2 mt-2">
              <span>Total Amount:</span>
              <span>${$totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div class="relative flex items-start space-y-1">
              <div class="flex items-center h-5">
                <input
                    id="teamTerms"
                    name="teamTerms"
                    type="checkbox"
                    bind:checked={teamAgreedToTerms}
                    on:change={() => { if (showTeamError) validateTeamForm() }}
                    class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                    required
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="teamTerms" class="font-medium text-gray-700">Agree to Terms*</label>
                 <p class="text-gray-500 text-xs">
                    By checking this box, I agree to the <a href="/terms-and-conditions" target="_blank" class="underline hover:text-red-600">terms and conditions</a>.
                    I also acknowledge that my payment of ${$totalPrice.toFixed(2)} is for the registration of my volleyball team.
                 </p>
                {#if teamFormErrors.terms && showTeamError}
                 <p class="text-red-500 text-xs mt-1">{teamFormErrors.terms}</p>
                {/if}
              </div>
           </div>

          <button
            type="submit"
            class="w-full px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!teamAgreedToTerms}
          >
             Proceed to Team Payment (${$totalPrice.toFixed(2)})
          </button>

          {#if showTeamError && Object.keys(teamFormErrors).length > 0 && !teamFormErrors.terms /* Don't show general error if only terms missing */}
            <p class="text-center text-red-500 font-medium text-sm">
               Please correct the errors above before proceeding.
            </p>
          {/if}
        </form>
      </div>
    {/if}

     {#if $activeTab === 'individual'}
      <div class="space-y-6">
          <p class="text-sm text-gray-600">
           Register as an individual player. The fee is ${INDIVIDUAL_PRICE.toFixed(2)}.
          </p>
          <form on:submit={handleIndividualSubmit} class="space-y-6">
            <div class="space-y-1">
                <label for="individualName" class="block text-sm font-medium text-gray-700">Your Name*</label>
                <input
                id="individualName"
                type="text"
                bind:value={individualName}
                on:input={() => { if (showIndividualError) validateIndividualForm() }}
                class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                        {individualFormErrors.individualName && showIndividualError ? 'border-red-500' : 'border-gray-300'}"
                placeholder="Enter your full name"
                required
                />
                {#if individualFormErrors.individualName && showIndividualError}
                <p class="text-red-500 text-xs mt-1">{individualFormErrors.individualName}</p>
                {/if}
            </div>

            <div class="space-y-1">
                <label for="individualContact" class="block text-sm font-medium text-gray-700">Contact (Email or Phone)*</label>
                <input
                id="individualContact"
                type="text"
                bind:value={individualContact}
                 on:input={() => { if (showIndividualError) validateIndividualForm() }}
                class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                        {individualFormErrors.individualContact && showIndividualError ? 'border-red-500' : 'border-gray-300'}"
                placeholder="your.email@example.com or 555-123-4567"
                required
                />
                {#if individualFormErrors.individualContact && showIndividualError}
                <p class="text-red-500 text-xs mt-1">{individualFormErrors.individualContact}</p>
                {/if}
            </div>

             <div class="space-y-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-800">Individual Registration Cost</h3>
                <div class="flex justify-between text-lg font-bold text-gray-900 pt-2 mt-2">
                <span>Total Amount:</span>
                <span>${INDIVIDUAL_PRICE.toFixed(2)}</span>
                </div>
            </div>

             <div class="relative flex items-start space-y-1">
                <div class="flex items-center h-5">
                    <input
                        id="individualTerms"
                        name="individualTerms"
                        type="checkbox"
                        bind:checked={individualAgreedToTerms}
                        on:change={() => { if (showIndividualError) validateIndividualForm() }}
                        class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                        required
                    />
                </div>
                <div class="ml-3 text-sm">
                    <label for="individualTerms" class="font-medium text-gray-700">Agree to Terms*</label>
                     <p class="text-gray-500 text-xs">
                        By checking this box, I agree to the <a href="/terms-and-conditions" target="_blank" class="underline hover:text-red-600">terms and conditions</a>.
                        I also acknowledge that my payment of ${INDIVIDUAL_PRICE.toFixed(2)} is for my individual registration.
                     </p>
                    {#if individualFormErrors.terms && showIndividualError}
                    <p class="text-red-500 text-xs mt-1">{individualFormErrors.terms}</p>
                    {/if}
                </div>
            </div>

            <button
                type="submit"
                class="w-full px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!individualAgreedToTerms}
            >
                 Proceed to Individual Payment (${INDIVIDUAL_PRICE.toFixed(2)})
            </button>

             {#if showIndividualError && Object.keys(individualFormErrors).length > 0 && !individualFormErrors.terms /* Don't show general error if only terms missing */}
                <p class="text-center text-red-500 font-medium text-sm">
                    Please correct the errors above before proceeding.
                </p>
            {/if}
          </form>
      </div>
     {/if}

  </div>
</main>