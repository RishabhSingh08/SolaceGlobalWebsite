<!-- OG DONATION PAGE -->

<script>
  import { writable, derived } from 'svelte/store';
  
  import logoUrl from "../../lib/images/SolaceGlobalLogo.png";

  // Props
  
  // Form state
  let name = "";
  let email = "";
  let amount = "";
  const amountStore = writable(0);
  const activeCauses = writable([]);
  let showError = false;
  let formErrors = {};
  
  // UI state
  let openedCategories = {};

  // Update amountStore whenever amount changes
  $: {
    amountStore.set(parseFloat(amount) || 0);
  }
  
  const causeOptions = {
    Medical: ["Cancer", "Malaria", "Cardiovascular", "Respiratory"],
    Learning: [
      "Europe Education",
      "Asia Education",
      "N.A. Education",
      "S.A. Education",
      "Australia Education",
      "Africa Education"
    ],
    Conflict: [
      "Europe Conflict",
      "Asia Conflict",
      "Africa Conflict",
      "S.A. Conflict"
    ]
  };

  // Create a derived store that combines amount and causes
  const dollarValues = derived(
    [amountStore, activeCauses],
    ([$amount, $causes]) => {
      const values = {};
      $causes.forEach(({ cause, amount: percent }) => {
        values[cause] = ((percent / 100) * $amount).toFixed(2);
      });
      return values;
    }
  );

  let unsubscribe = activeCauses.subscribe(() => {
    validateForm();
  });

  import { onDestroy } from 'svelte';
  onDestroy(unsubscribe);

  function getAmount(cause) {
    let causes;
    activeCauses.subscribe(value => {
      causes = value;
    })();
    const found = causes.find(item => item.cause === cause);
    return found ? found.amount : 0;
  }

  function updateAmount(cause, value) {
    const parsedValue = parseFloat(value) || 0;
    
    if (parsedValue < 0 || parsedValue > 100) return;

    activeCauses.update(causes => {
      const index = causes.findIndex(item => item.cause === cause);
      if (index >= 0) {
        causes[index].amount = parsedValue;
      } else if (parsedValue > 0) {
        causes.push({ cause, amount: parsedValue });
      }
      return causes;
    });

    validateForm();
  }

  function getTotalAllocation() {
    let total = 0;
    activeCauses.subscribe(causes => {
      total = causes.reduce((sum, item) => sum + (item.amount || 0), 0);
    })();
    return total;
  }

  function toggleCategory(category) {
    openedCategories[category] = !openedCategories[category];
    openedCategories = { ...openedCategories };
  }

  function validateForm() {
    formErrors = {
      name: !name.trim() && "Name is required",
      email: !email.trim() && "Email is required",
      amount: (!amount || parseFloat(amount) <= 0) && "Valid amount is required",
      allocation: getTotalAllocation() > 100 && "Total allocation cannot exceed 100%"
    };

    return !Object.values(formErrors).some(Boolean);
  }

  function generateDonationLink() {
    if (!validateForm()) {
      showError = true;
      return null;
    }

    const formattedCauses = [];
    activeCauses.subscribe(causes => {
      causes.forEach(item => {
        if (item.amount > 0) {
          formattedCauses.push(`${item.cause}: ${item.amount}%`);
        }
      });
    })();

    const params = new URLSearchParams({
      name: name,
      email: email,
      message: `Total Donation: $${amount}\n\n${formattedCauses.join("\n")}\n`,
      amount: (parseFloat(amount) * 100).toFixed(0)
    });

    return `https://hcb.hackclub.com/donations/start/solace-global?${params.toString()}`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const link = generateDonationLink();
    if (link) window.location.href = link;
  }
</script>

<main class=" rounded-3xl  py-8">
  <div class="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 space-y-8">
    
    <div class="text-center space-y-4">
              {#if logoUrl}
          <img src={logoUrl} alt="Organization Logo" class="h-24 mx-auto" />
        {/if}

      <h2 class="text-3xl font-bold text-gray-900">Make a Donation</h2>
      <p class="text-gray-600">
        Your generous contributions help us make a global impact. Choose a cause and join us in building a brighter future.
      </p>
    </div>

    <form on:submit={handleSubmit} class="space-y-6">
      <div class="space-y-1">
        <label for="name" class="block text-sm font-medium text-gray-700">Name*</label>
        <input
          id="name"
          type="text"
          bind:value={name}
          class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none
            {formErrors.name ? 'border-red-500' : 'border-gray-300'}"
          placeholder="Your Name"
        />
        {#if formErrors.name && showError}
          <p class="text-red-500 text-sm">{formErrors.name}</p>
        {/if}
      </div>

      <div class="space-y-1">
        <label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none
            {formErrors.email ? 'border-red-500' : 'border-gray-300'}"
          placeholder="Your Email"
        />
        {#if formErrors.email && showError}
          <p class="text-red-500 text-sm">{formErrors.email}</p>
        {/if}
      </div>

      <div class="space-y-1">
        <label for="amount" class="block text-sm font-medium text-gray-700">Amount (USD)*</label>
        <input
          id="amount"
          type="number"
          bind:value={amount}
          min="0"
          step="0.01"
          class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none
            {formErrors.amount ? 'border-red-500' : 'border-gray-300'}"
          placeholder="Enter Amount"
        />
        {#if formErrors.amount && showError}
          <p class="text-red-500 text-sm">{formErrors.amount}</p>
        {/if}
      </div>

      <div class="space-y-4">
        <label class="block text-sm font-medium text-gray-700">
          Allocate Percentage to Causes <span class="text-gray-500 font-normal">(optional)</span>
        </label>

        {#each Object.entries(causeOptions) as [category, causes]}
          <div class="rounded-lg border border-gray-200">
            <button
              type="button"
              on:click={() => toggleCategory(category)}
              class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <span class="font-medium text-gray-900">{category}</span>
              <svg
                class="w-5 h-5 transform transition-transform duration-200 {openedCategories[category] ? 'rotate-180' : ''}"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {#if openedCategories[category]}
              <div class="p-4 border-t border-gray-200 space-y-4">
                <div class="grid grid-cols-3 gap-4 text-sm font-medium text-gray-500">
                  <div>Cause</div>
                  <div>Percentage</div>
                  <div>Amount</div>
                </div>

                {#each causes as cause}
                  <div class="grid grid-cols-3 gap-4 items-center">
                    <div class="text-sm text-gray-900">{cause}</div>
                    <div>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={getAmount(cause)}
                        class="w-20 px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                        on:input={(e) => updateAmount(cause, e.target.value)}
                      />
                    </div>
                    <div class="text-sm text-gray-600">
                      ${$dollarValues[cause] || '0.00'}
                    </div>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        {/each}

        {#if formErrors.allocation && showError}
          <p class="text-red-500 text-sm">{formErrors.allocation}</p>
        {/if}
      </div>

      <button
        type="submit"
        class="w-full px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
      >
        Donate Now
      </button>

      {#if showError && Object.values(formErrors).some(Boolean)}
        <p class="text-center text-red-500 font-medium">Please fill in all required fields correctly</p>
      {/if}
    </form>
  </div>
</main>