<script>
  import Logo from "../../lib/images/favicon.png";

  let name = "";
  let email = "";
  let amount = 0;
  let activeCauses = [];
  let allocationError = false;
  let showError = false;
  let incompleteFields = {};
  let openedCategories = {}; // Tracks which categories are open

  let causeOptions = {
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

  function getAmount(cause) {
    const found = activeCauses.find((item) => item.cause === cause);
    return found ? found.amount : 0;
    
  }

  function updateAmount(cause, value) {
    const found = activeCauses.find((item) => item.cause === cause);
    const parsedValue = parseFloat(value) || 0;

    if (parsedValue < 0 || parsedValue > 100) return;

    if (found) {
      found.amount = parsedValue;
    } else {
      activeCauses.push({ cause, amount: parsedValue });
    }

    allocationError = getTotalAllocation() > 100;
  }

  function getTotalAllocation() {
    return activeCauses.reduce((sum, item) => sum + (item.amount || 0), 0);
  }

  function toggleCategory(category) {
    openedCategories[category] = !openedCategories[category];
  }

  function getDollarValue(percent) {
    return ((percent / 100) * amount).toFixed(2);
  }

  function validateFields() {
    incompleteFields = {
      name: !name.trim(),
      email: !email.trim(),
      amount: !amount || amount <= 0,
      allocation: allocationError
    };

    return Object.values(incompleteFields).some(Boolean);
  }

  function generateLink() {
    if (validateFields()) {
      showError = true;
      return;
    }

    const formattedCauses = activeCauses
      .filter((item) => item.amount > 0)
      .map((item) => `${item.cause}: ${item.amount}%`)
      .join("\n");

    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedMessage = encodeURIComponent(
      `Total Donation: $${amount}\n\n${formattedCauses}\n`
    );

    return `https://hcb.hackclub.com/donations/start/solace-global?name=${encodedName}&email=${encodedEmail}&message=${encodedMessage}&amount=${(
      amount * 100
    ).toFixed(0)}`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const link = generateLink();
    if (link) window.location.href = link;
  }
</script>

<main>
  <div class="flex items-center justify-center bg-white min-h-screen">
    <div class="w-full max-w-lg border p-6 rounded-lg shadow-2xl">
      <h2 class="text-3xl font-semibold text-black text-center my-4">Make a Donation</h2>
      <img src={Logo} alt="Solace Global Logo" class="mb-6 mx-auto" />
      <p class="text-center text-gray-600 mb-6">
        Your generous contributions help us make a global impact. Choose a cause and join us in building a brighter future.
      </p>



      <form on:submit={handleSubmit} class="space-y-6">
        <div>
          <p class="block text-sm font-medium text-gray-700">Name*</p>
          <input
            type="text"
            bind:value={name}
            placeholder="Your Name"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring outline-none 
              {incompleteFields.name ? 'ring-red-500 ring' : ''}"
          />
        </div>

        <div>
          <p class="block text-sm font-medium text-gray-700">Email*</p>
          <input
            type="email"
            bind:value={email}
            placeholder="Your Email"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring outline-none 
              {incompleteFields.email ? 'ring-red-500 ring' : ''}"
          />
        </div>

        <div>
          <p class="block text-sm font-medium text-gray-700">Amount (USD)*</p>
          <input
            type="number"
            bind:value={amount}
            placeholder="Enter Amount"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring outline-none 
              {incompleteFields.amount ? 'ring-red-500 ring' : ''}"
          />
        </div>

        <div>
          <p class="block text-sm font-medium text-gray-700">
            Allocate Percentage to Causes <span class="font-thin text-gray-500">(optional)</span>
          </p>

          {#each Object.keys(causeOptions) as category}
          <div>
          </div>
            <div>
              <button
                type="button"
                on:click={() => toggleCategory(category)}
                class="w-full text-left px-4 py-2 mt-1 border rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
              >
                {category}
              </button>

              {#if openedCategories[category]}

                <div class="px-4 my-6 space-y-3">
                  <div class="grid grid-cols-3 items-center border-b pb-2">
                    <div>Cause</div>
                    <div>Percent</div>
                    <div>$</div>
                  </div>
                  {#each causeOptions[category] as cause}
                    <div class="grid grid-cols-3 items-center">
                      <div class="">{cause}</div>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={getAmount(cause)}
                      placeholder="0"
                      class="w-20 px-2 py-1 flex border rounded-lg focus:ring outline-none"
                      on:input={(e) => {
                        const value = Math.min(Math.max(0, e.target.value), 100); // Clamp the value
                        updateAmount(cause, value);
                        e.target.value = value; // Reset the input field if out of bounds
                      }}
                    />
                      <div class="text-sm text-gray-600">
                        ≈ ${getDollarValue(getAmount(cause))}
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          {/each}
          {#if allocationError}
            <p class="text-red-500 text-sm mt-1 ">Total allocation cannot exceed 100%.</p>
          {/if}

        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Donate Now
        </button>
                        {#if showError}
        <p class="text-center text-red-500 font-semibold">INCOMPLETE FIELDS</p>
      {/if}
      </form>
    </div>
  </div>
</main>
