<script>
  // --- Configuration ---
  const BASE_FEE = 10;           // Base team registration fee
  const PAYMENT_LINK_BASE = "https://hcb.hackclub.com/donations/start/solace-global";

  // --- Form State ---
  let teamName = "";
  let contactName = "";
  let contactPhone = "";
  let contactEmail = "";
  let agreedToTerms = false;
  let showFormError = false;
  let formErrors = {};

  // --- Form Validation ---
  function validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    
    formErrors = {
      teamName: !teamName.trim() ? "Team name is required" : null,
      contactName: !contactName.trim() ? "Primary contact name is required" : null,
      contactPhone: !contactPhone.trim() ? "Phone number is required" : 
                    !phoneRegex.test(contactPhone) ? "Please enter a valid phone number" : null,
      contactEmail: !contactEmail.trim() ? "Email is required" : 
                    !emailRegex.test(contactEmail) ? "Please enter a valid email address" : null,
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

    const message = `Coding Tournament Registration\nTeam: ${teamName}\nContact: ${contactName}\nPhone: ${contactPhone}\nEmail: ${contactEmail}\nTotal: $${BASE_FEE.toFixed(2)}`;

    const params = new URLSearchParams({
      name: contactName,
      email: contactEmail,
      message: message,
      amount: (BASE_FEE * 100).toFixed(0)
    });

    return `${PAYMENT_LINK_BASE}?${params.toString()}`;
  }

  // --- Form Submission ---
  function handleSubmit(event) {
    event.preventDefault();
    const link = generatePaymentLink();
    if (link) {
      window.location.href = link;
    }
  }

  // Reactive validation on error state
  $: if (showFormError) validateForm();
</script>

<svelte:head>
  <title>Coding Tournament Registration | Solace Global</title>
  <meta name="title" content="Coding Tournament Registration | Solace Global" />
  <meta name="description" content="Register your team for Solace Global's competitive coding & innovation challenge. Showcase your programming skills and compete with teams from around the world." />
  <link rel="canonical" href="https://solaceglobal.xyz/coding-tourney" />
</svelte:head>

<div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    <div class="px-8 pt-8 pb-6">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="text-5xl mb-4">💻</div>
        <h1 class="text-3xl font-bold text-gray-900 font-serif">Coding Tournament</h1>
        <p class="mt-2 text-gray-600">Join our competitive coding challenge!</p>
      </div>

      <!-- Form -->
      <form on:submit={handleSubmit} class="space-y-5">
        <!-- Team Name -->
        <div>
          <label for="teamName" class="block text-sm font-medium text-gray-700 mb-1">
            Team Name <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="teamName"
            bind:value={teamName}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.teamName}
            placeholder="Enter your team name"
          />
          {#if formErrors.teamName}
            <p class="mt-1 text-sm text-red-500">{formErrors.teamName}</p>
          {/if}
        </div>

        <!-- Primary Contact Name -->
        <div>
          <label for="contactName" class="block text-sm font-medium text-gray-700 mb-1">
            Primary Contact Name <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            bind:value={contactName}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.contactName}
            placeholder="Enter contact name"
          />
          {#if formErrors.contactName}
            <p class="mt-1 text-sm text-red-500">{formErrors.contactName}</p>
          {/if}
        </div>

        <!-- Phone Number -->
        <div>
          <label for="contactPhone" class="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span class="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contactPhone"
            bind:value={contactPhone}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.contactPhone}
            placeholder="Enter phone number"
          />
          {#if formErrors.contactPhone}
            <p class="mt-1 text-sm text-red-500">{formErrors.contactPhone}</p>
          {/if}
        </div>

        <!-- Email Address -->
        <div>
          <label for="contactEmail" class="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span class="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contactEmail"
            bind:value={contactEmail}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.contactEmail}
            placeholder="Enter email address"
          />
          {#if formErrors.contactEmail}
            <p class="mt-1 text-sm text-red-500">{formErrors.contactEmail}</p>
          {/if}
        </div>

        <!-- Price Display -->
        <div class="bg-gray-50 rounded-lg p-4">
          <div class="flex justify-between font-bold">
            <span>Registration Fee</span>
            <span class="text-lg">${BASE_FEE.toFixed(2)}</span>
          </div>
        </div>

        <!-- Terms Agreement -->
        <div class="flex items-start gap-3">
          <input
            type="checkbox"
            id="terms"
            bind:checked={agreedToTerms}
            class="mt-1 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <label for="terms" class="text-sm text-gray-600">
            I agree that this payment is for coding tournament registration and is non-refundable.
          </label>
        </div>
        {#if formErrors.terms}
          <p class="text-sm text-red-500 -mt-2">{formErrors.terms}</p>
        {/if}

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-3 px-4 bg-red-400 hover:bg-red-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Proceed to Payment (${BASE_FEE.toFixed(2)})
        </button>
      </form>
    </div>
  </div>

  <!-- Back Link -->
  <div class="text-center mt-8">
    <a href="/" class="text-gray-600 hover:text-red-600 transition-colors underline">
      ← Back to Home
    </a>
  </div>
</div>

<style>
  .font-serif {
    font-family: "Rasa", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
</style>
