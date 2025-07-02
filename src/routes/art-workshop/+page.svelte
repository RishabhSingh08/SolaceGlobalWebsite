<script>
  import { writable, derived } from 'svelte/store';

  // Optional: If you have a specific logo for the event
  import logoUrl from "../../lib/images/SolaceGlobalLogo.png"; // Adjust path if needed

  // --- Configuration ---
  const DEFAULT_DONATION_AMOUNT = 100; // Default donation amount for Art Workshop
  // IMPORTANT: Replace 'solace-global' with your actual Hack Club Bank slug if using HCB,
  // or replace the entire URL structure if using a different payment provider.
  const PAYMENT_LINK_BASE = "https://hcb.hackclub.com/donations/start/solace-global";

  // --- Donation Form State ---
  let donorName = "";
  let donorNumber = ""; // Changed to "Number" as requested
  // donationAmount will now be a constant, not a reactive variable
  const donationAmount = DEFAULT_DONATION_AMOUNT;
  let agreedToTerms = false;
  let showFormError = false;
  let formErrors = {};

  // --- Derived State for Total Price (simple for a single donation) ---
  // Since donationAmount is constant, totalDonationAmount will also be constant.
  // We can even simplify this further and just use 'donationAmount' directly everywhere.
  // Keeping it as a derived store for now as it doesn't hurt and allows for future flexibility.
  const totalDonationAmount = derived(
    [writable(donationAmount)], // Derived from a writable store (even though it's constant here)
    ([$donationAmountValue]) => {
      return $donationAmountValue;
    }
  );

  // --- Validation ---
  function validateForm() {
    formErrors = {
      donorName: !donorName.trim() ? "Name is required" : null,
      donorNumber: !donorNumber.trim() ? "Number is required" : null,
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

    let currentTotal = donationAmount; // Use the constant donationAmount

    const message = `Art Workshop Donation\nName: ${donorName}\nContact Number: ${donorNumber}\nDonation Amount: $${currentTotal.toFixed(2)}`;

    const params = new URLSearchParams({
      name: donorName,
      email: '',
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
</script>

<main class="rounded-3xl bg-gradient-to-b from-white to-gray-100 py-8">
  <div class="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 space-y-8">

    <div class="text-center space-y-4">
      {#if logoUrl}
        <img src={logoUrl} alt="Art Workshop Logo" class="h-24 mx-auto" />
      {/if}
      <h2 class="text-3xl font-bold text-gray-900">Art Workshop Donation</h2>
      <p class="text-gray-600">
        Join our upcoming Art Workshop.
      </p>
    </div>

    <div class="space-y-6">
      <form on:submit={handleSubmit} class="space-y-6">
        <div class="space-y-1">
          <label for="donorName" class="block text-sm font-medium text-gray-700">Name*</label>
          <input
            id="donorName"
            type="text"
            bind:value={donorName}
            on:input={() => { if (showFormError) validateForm() }}
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                   {formErrors.donorName && showFormError ? 'border-red-500' : 'border-gray-300'}"
            placeholder="Enter your full name"
            required
          />
          {#if formErrors.donorName && showFormError}
            <p class="text-red-500 text-xs mt-1">{formErrors.donorName}</p>
          {/if}
        </div>
        <div class="space-y-1">
          <label for="donorNumber" class="block text-sm font-medium text-gray-700">Number*</label>
          <input
            id="donorNumber"
            type="text"
            bind:value={donorNumber}
            on:input={() => { if (showFormError) validateForm() }}
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-150 ease-in-out
                   {formErrors.donorNumber && showFormError ? 'border-red-500' : 'border-gray-300'}"
            placeholder="e.g., 555-123-4567"
            required
          />
          {#if formErrors.donorNumber && showFormError}
            <p class="text-red-500 text-xs mt-1">{formErrors.donorNumber}</p>
          {/if}
        </div>
        <div class="space-y-1">
          <label for="donationAmount" class="block text-sm font-medium text-gray-700">Donation Amount</label>
          <p class="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 select-none">
            ${donationAmount.toFixed(2)}
          </p>
        </div>

        <div class="space-y-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800">Cost Breakdown</h3>
          <div class="flex justify-between text-sm text-gray-600">
            <span>Donation Amount:</span>
            <span>${donationAmount.toFixed(2)}</span>
          </div>
          <div class="flex justify-between text-lg font-bold text-gray-900 border-t pt-2 mt-2">
            <span>Total Amount:</span>
            <span>${donationAmount.toFixed(2)}</span>
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
              I also acknowledge that my payment of ${donationAmount.toFixed(2)} is a donation to the Art Workshop.
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
          Proceed to Donate (${donationAmount.toFixed(2)})
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