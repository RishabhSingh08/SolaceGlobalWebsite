<script>
  // --- Configuration ---
  const BASE_FEE = 10;
  const PAYMENT_LINK_BASE = "https://hcb.hackclub.com/donations/start/solace-global";

  // --- Form State ---
  let name = "";
  let schoolName = "";
  let teammateNames = "";
  let number = "";
  let email = "";
  let pizzaChoice = "";
  let agreedToTerms = false;
  let showFormError = false;
  let formErrors = {};

  // --- Form Validation ---
  function validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    
    formErrors = {
      name: !name.trim() ? "Name is required" : null,
      schoolName: !schoolName.trim() ? "School name is required" : null,
      teammateNames: !teammateNames.trim() ? "Teammate names are required" : null,
      number: !number.trim() ? "Number is required" : 
              !phoneRegex.test(number) ? "Please enter a valid phone number" : null,
      email: !email.trim() ? "Email is required" : 
             !emailRegex.test(email) ? "Please enter a valid email address" : null,
      pizzaChoice: !pizzaChoice ? "Pizza choice is required" : null,
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

    const message = `Coding Tournament Registration\nName: ${name}\nSchool: ${schoolName}\nTeammates: ${teammateNames}\nNumber: ${number}\nEmail: ${email}\nPizza: ${pizzaChoice}\nTotal: $${BASE_FEE.toFixed(2)}`;

    const params = new URLSearchParams({
      name: name,
      email: email,
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
  <meta name="description" content="Register your team for Solace Global's competitive coding & innovation challenge." />
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
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
            Name <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            bind:value={name}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.name}
            placeholder="Enter your name"
          />
          {#if formErrors.name}
            <p class="mt-1 text-sm text-red-500">{formErrors.name}</p>
          {/if}
        </div>

        <!-- School Name -->
        <div>
          <label for="schoolName" class="block text-sm font-medium text-gray-700 mb-1">
            School Name <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="schoolName"
            bind:value={schoolName}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.schoolName}
            placeholder="Enter your school name"
          />
          {#if formErrors.schoolName}
            <p class="mt-1 text-sm text-red-500">{formErrors.schoolName}</p>
          {/if}
        </div>

        <!-- Teammate Names -->
        <div>
          <label for="teammateNames" class="block text-sm font-medium text-gray-700 mb-1">
            Teammates Names (if applicable) <span class="text-red-500">*</span>
          </label>
          <p class="text-xs text-gray-500 mb-2">Every teammate MUST fill out the form</p>
          <textarea
            id="teammateNames"
            bind:value={teammateNames}
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.teammateNames}
            placeholder="Enter teammate names (or write 'N/A' if solo)"
          />
          {#if formErrors.teammateNames}
            <p class="mt-1 text-sm text-red-500">{formErrors.teammateNames}</p>
          {/if}
        </div>

        <!-- Number -->
        <div>
          <label for="number" class="block text-sm font-medium text-gray-700 mb-1">
            Number <span class="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="number"
            bind:value={number}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.number}
            placeholder="Enter phone number"
          />
          {#if formErrors.number}
            <p class="mt-1 text-sm text-red-500">{formErrors.number}</p>
          {/if}
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email <span class="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.email}
            placeholder="Enter email address"
          />
          {#if formErrors.email}
            <p class="mt-1 text-sm text-red-500">{formErrors.email}</p>
          {/if}
        </div>

        <!-- Pizza Choice -->
        <div>
          <label for="pizzaChoice" class="block text-sm font-medium text-gray-700 mb-1">
            Pizza Choice <span class="text-red-500">*</span>
          </label>
          <select
            id="pizzaChoice"
            bind:value={pizzaChoice}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            class:border-red-500={formErrors.pizzaChoice}
          >
            <option value="">Select a pizza choice</option>
            <option value="pepperoni-cheese">Pepperoni Cheese</option>
            <option value="veggie">Veggie</option>
          </select>
          {#if formErrors.pizzaChoice}
            <p class="mt-1 text-sm text-red-500">{formErrors.pizzaChoice}</p>
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