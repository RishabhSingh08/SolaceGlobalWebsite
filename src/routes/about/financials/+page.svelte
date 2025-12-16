<script>
    import IRSLetter from "$Images/PDFs/IRS Letter.pdf";
    import Certificate from "$Images/PDFs/Certificate of Status.pdf";
    import Fiscal from "$Images/PDFs/fiscal_sponsorship_letter (1).pdf";
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Financials | Solace Global - Nonprofit Transparency & 501(c)(3) Status</title>
  <meta name="title" content="Financials | Solace Global - Nonprofit Transparency & 501(c)(3) Status" />
  <meta name="description" content="View Solace Global's financial documents including IRS 501(c)(3) Letter of Determination, Certificate of Status, and Fiscal Sponsorship Agreement with Hack Club. We're committed to transparency and ethical financial management." />
  <meta name="keywords" content="Solace Global financials, 501c3 nonprofit, IRS determination letter, fiscal sponsorship Hack Club, nonprofit transparency, tax-exempt status, nonprofit financial documents, charitable organization" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://solaceglobal.xyz/about/financials" />
  <meta property="og:title" content="Financials | Solace Global - Nonprofit Transparency" />
  <meta property="og:description" content="View our 501(c)(3) documentation and financial transparency reports." />
  <meta property="og:image" content="https://solaceglobal.xyz/og-image.png" />
  <meta property="og:site_name" content="Solace Global Foundation" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://solaceglobal.xyz/about/financials" />
  <meta name="twitter:title" content="Financials | Solace Global - Nonprofit Transparency" />
  <meta name="twitter:description" content="View our 501(c)(3) documentation and financial transparency reports." />
  <meta name="twitter:image" content="https://solaceglobal.xyz/og-image.png" />

  <link rel="canonical" href="https://solaceglobal.xyz/about/financials" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</svelte:head>

<style>
  .rasa {
    font-family: "Rasa", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
</style>

<main class="container mx-auto px-4 py-8">
  <div class="space-y-8 md:space-y-16">
    <p class="text-center text-4xl md:text-6xl rasa font-bold text-black">
      Financials
    </p>

    <div class="flex flex-col md:grid md:grid-cols-12 gap-8">
      <div class="w-full md:col-span-3 md:col-start-2 md:col-end-5 mb-6 md:mb-0">
        <div class="md:space-y-16">
          <div class="text-lg md:text-xl">
            <a href="/" class="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <i class="fa-solid fa-arrow-left"></i>
              <span class="pb-1 border-b border-black">Home</span>
            </a>
          </div>
        </div>
      </div>

      <div class="w-full md:col-span-7 md:col-start-5 md:col-end-12">
        <div class="space-y-6">
          <div class="space-y-4">
            <p class="text-base md:text-lg">At Solace Global, we are committed to maintaining the highest level of transparency and accountability. As a fiscally sponsored organization under Hack Club, we release an annual report of our financials to ensure our stakeholders and supporters are fully informed about our operations.</p>
            <p class="text-base md:text-lg">Below you will find important documents, including the IRS 501(c)(3) Letter of Determination, Certificate of Status, and our Fiscal Sponsorship Agreement with Hack Club. These materials highlight our dedication to ethical and effective financial management in support of our mission.</p>
          </div>
          
          <p class="text-xl md:text-2xl font-semibold mt-8">Access Our Financial Documents</p>
          
          <div class="space-y-4 md:space-y-8">
            <div class="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 class="text-lg md:text-xl">
                <a href={IRSLetter} target="_blank" class="flex items-center justify-between text-blue-600 hover:text-blue-800 transition-colors">
                  <span>IRS Letter</span>
                  <i class="fa-solid fa-file-pdf"></i>
                </a>
              </h2>
            </div>
            
            <div class="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 class="text-lg md:text-xl">
                <a href={Certificate} target="_blank" class="flex items-center justify-between text-blue-600 hover:text-blue-800 transition-colors">
                  <span>Certificate of Status</span>
                  <i class="fa-solid fa-file-pdf"></i>
                </a>
              </h2>
            </div>
            
            <div class="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 class="text-lg md:text-xl">
                <a href={Fiscal} target="_blank" class="flex items-center justify-between text-blue-600 hover:text-blue-800 transition-colors">
                  <span>Fiscal Sponsorship Letter</span>
                  <i class="fa-solid fa-file-pdf"></i>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>