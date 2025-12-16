<script>
  import { writable, derived } from 'svelte/store';

  // Optional: If you have a specific logo for the event
  import logoUrl from "$Images/SolaceGlobalLogo.png"; // Adjust path if needed

  // --- Configuration ---
  const BASE_FEE = 50; // Base fee for team captain
  const SUB_FEE = 5; // Additional fee per sub
  // IMPORTANT: Replace 'solace-global' with your actual Hack Club Bank slug if using HCB,
  // or replace the entire URL structure if using a different payment provider.
  const PAYMENT_LINK_BASE = "https://hcb.hackclub.com/donations/start/solace-global";

  // --- Registration Form State ---
  let teamName = "";
  let contactName = "";
  let contactPhone = "";
  let contactEmail = "";
  let numberOfSubs = 0;
  let agreedToTerms = false;
  let showFormError = false;
  let formErrors = {};

  // --- Derived State for Total Price ---
  const totalRegistrationFee = derived(
    [writable(numberOfSubs)],
    ([$numberOfSubsValue]) => {
      return BASE_FEE + ($numberOfSubsValue * SUB_FEE);
    }
  );

  // --- Validation ---
  function validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    formErrors = {
      teamName: !teamName.trim() ? "Team name is required" : null,
      contactName: !contactName.trim() ? "Contact name is required" : null,
      contactPhone: !contactPhone.trim() ? "Phone number is required" : null,
      contactEmail: !contactEmail.trim() ? "Email is required" : 
                    !emailRegex.test(contactEmail) ? "Please enter a valid email address" : null,
      numberOfSubs: numberOfSubs < 0 ? "Number of subs cannot be negative" : null,
      terms: !agreedToTerms ? "You must agree to the terms and conditions." : null,
    };
    formErrors = Object.fromEntries(Object.entries(formErrors).filter(([_, v]) => v != null));
    return Object.keys(formErrors).length === 0;
  }

  // --- Payment Link Generation ---
  function generatePaymentLink() {
    if (!validateForm()) {
      showFormError = true;
      return null;
    }
    showFormError = false;

    let currentTotal = BASE_FEE + (numberOfSubs * SUB_FEE);

    const message = `Basketball Tournament Registration\nTeam: ${teamName}\nContact: ${contactName}\nPhone: ${contactPhone}\nEmail: ${contactEmail}\nSubs: ${numberOfSubs}\nTotal: ${currentTotal.toFixed(2)}`;

    const params = new URLSearchParams({
      name: contactName,
      email: contactEmail,
      message: message,
      amount: (currentTotal * 100).toFixed(0)
    });

    return `${PAYMENT_LINK_BASE}?${params.toString()}`;
  }

  // --- Form Submission Handler ---
  function handleSubmit(event) {
    event.preventDefault();
    const link = generatePaymentLink();
    if (link) {
      window.location.href = link;
    }
  }

  // Reactive validation triggers
  $: if (showFormError) {
    validateForm();
  }

  // Reactive total calculation
  $: totalFee = BASE_FEE + (numberOfSubs * SUB_FEE);
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Basketball Tournament | Solace Global - Charity Sports Event</title>
  <meta name="title" content="Basketball Tournament | Solace Global - Charity Sports Event" />
  <meta name="description" content="Register your team for Solace Global's charity basketball tournament. $50 base fee per team with $5 per substitute. All proceeds support STEM education and humanitarian outreach programs." />
  <meta name="keywords" content="Solace Global basketball tournament, charity basketball, Dallas basketball event, nonprofit sports event, team registration, youth basketball, fundraiser tournament" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://solaceglobal.xyz/basketball-tourney" />
  <meta property="og:title" content="Basketball Tournament | Solace Global" />
  <meta property="og:description" content="Register for our charity basketball tournament. All proceeds support STEM education." />
  <meta property="og:image" content="https://solaceglobal.xyz/og-image.png" />
  <meta property="og:site_name" content="Solace Global Foundation" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://solaceglobal.xyz/basketball-tourney" />
  <meta name="twitter:title" content="Basketball Tournament | Solace Global" />
  <meta name="twitter:description" content="Register for our charity basketball tournament." />
  <meta name="twitter:image" content="https://solaceglobal.xyz/og-image.png" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Solace Global Charity Basketball Tournament",
    "description": "Charity basketball tournament supporting STEM education and humanitarian programs",
    "organizer": {
      "@type": "Organization",
      "name": "Solace Global Foundation"
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "offers": {
      "@type": "Offer",
      "price": "50",
      "priceCurrency": "USD"
    }
  }
  </script>`}

  <link rel="canonical" href="https://solaceglobal.xyz/basketball-tourney" />
</svelte:head>

<main class="rounded-3xl bg-gradient-to-b from-white to-gray-100 py-8">
  <div class="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 space-y-8">

    <div class="text-center space-y-4">
      {#if logoUrl}
        <img src={logoUrl} alt="Basketball Tournament Logo" class="h-24 mx-auto" />
      {/if}
      <h2 class="text-3xl font-bold text-gray-900">Basketball Tournament</h2>
      <p class="text-gray-600">
        Register your team for the upcoming basketball tournament.
      </p>
    </div>

    <div class="space-y-6">
      <form on:submit={handleSubmit} class="space-y-6">
        <div class="space-y-1">
          <label for="teamName" class="block text-sm font-medium text-gray-700">Team Name*</label>
          <input
            id="teamName"
            type="text"
            bind:value={teamName}
            on:input={() => { if (showFormError) validateForm() }}
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                   {formErrors.teamName && showFormError ? 'border-red-500' : 'border-gray-300'}"
            placeholder="Enter your team name"
            required
          />
          {#if formErrors.teamName && showFormError}
            <p class="text-red-500 text-xs mt-1">{formErrors.teamName}</p>
          {/if}
        </div>
        <div class="space-y-1">
          <label for="contactName" class="block text-sm font-medium text-gray-700">Primary Contact Name*</label>
          <input
            id="contactName"
            type="text"
            bind:value={contactName}
            on:input={() => { if (showFormError) validateForm() }}
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                   {formErrors.contactName && showFormError ? 'border-red-500' : 'border-gray-300'}"
            placeholder="Enter primary contact name"
            required
          />
          {#if formErrors.contactName && showFormError}
            <p class="text-red-500 text-xs mt-1">{formErrors.contactName}</p>
          {/if}
        </div>
        <div class="space-y-1">
          <label for="contactPhone" class="block text-sm font-medium text-gray-700">Primary Contact Phone Number*</label>
          <input
            id="contactPhone"
            type="tel"
            bind:value={contactPhone}
            on:input={() => { if (showFormError) validateForm() }}
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                   {formErrors.contactPhone && showFormError ? 'border-red-500' : 'border-gray-300'}"
            placeholder="e.g., 555-123-4567"
            required
          />
          {#if formErrors.contactPhone && showFormError}
            <p class="text-red-500 text-xs mt-1">{formErrors.contactPhone}</p>
          {/if}
        </div>
        <div class="space-y-1">
          <label for="contactEmail" class="block text-sm font-medium text-gray-700">Primary Contact Email*</label>
          <input
            id="contactEmail"
            type="email"
            bind:value={contactEmail}
            on:input={() => { if (showFormError) validateForm() }}
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                   {formErrors.contactEmail && showFormError ? 'border-red-500' : 'border-gray-300'}"
            placeholder="e.g., captain@example.com"
            required
          />
          {#if formErrors.contactEmail && showFormError}
            <p class="text-red-500 text-xs mt-1">{formErrors.contactEmail}</p>
          {/if}
        </div>
        <div class="space-y-1">
          <label for="numberOfSubs" class="block text-sm font-medium text-gray-700">Number of Subs</label>
          <input
            id="numberOfSubs"
            type="number"
            min="0"
            bind:value={numberOfSubs}
            on:input={() => { if (showFormError) validateForm() }}
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                   {formErrors.numberOfSubs && showFormError ? 'border-red-500' : 'border-gray-300'}"
            placeholder="0"
          />
          <p class="text-xs text-gray-500">Each substitute adds $5 to the total fee</p>
          {#if formErrors.numberOfSubs && showFormError}
            <p class="text-red-500 text-xs mt-1">{formErrors.numberOfSubs}</p>
          {/if}
        </div>

        <div class="space-y-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800">Cost Breakdown</h3>
          <div class="flex justify-between text-sm text-gray-600">
            <span>Base Team Fee:</span>
            <span>${BASE_FEE.toFixed(2)}</span>
          </div>
          {#if numberOfSubs > 0}
            <div class="flex justify-between text-sm text-gray-600">
              <span>Subs ({numberOfSubs} × ${SUB_FEE}):</span>
              <span>${(numberOfSubs * SUB_FEE).toFixed(2)}</span>
            </div>
          {/if}
          <div class="flex justify-between text-lg font-bold text-gray-900 border-t pt-2 mt-2">
            <span>Total Registration Fee:</span>
            <span>${totalFee.toFixed(2)}</span>
          </div>
        </div>

        <div class="relative flex items-start space-y-1">
          <div class="flex items-center h-5">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              bind:checked={agreedToTerms}
              on:change={() => { if (showFormError) validateForm() }}
              class="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
              required
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="agreeTerms" class="font-medium text-gray-700">Agree to Terms*</label>
            <p class="text-gray-500 text-xs">
              By checking this box, I agree to the <a href="/terms-and-conditions" target="_blank" class="underline hover:text-red-600">terms and conditions</a>.
              I also acknowledge that my payment of ${totalFee.toFixed(2)} is for tournament registration and is non-refundable.
            </p>
            {#if formErrors.terms && showFormError}
              <p class="text-red-500 text-xs mt-1">{formErrors.terms}</p>
            {/if}
          </div>
        </div>

        <button
          type="submit"
          class="w-full px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!agreedToTerms}
        >
          Proceed to Payment (${totalFee.toFixed(2)})
        </button>
        {#if showFormError && Object.keys(formErrors).length > 0 && !formErrors.terms}
          <p class="text-center text-red-500 font-medium text-sm">
            Please correct the errors above before proceeding.
          </p>
        {/if}
      </form>
    </div>

  </div>
</main>