<script>
    import IRSLetter from "../../../lib/images/PDFs/IRS Letter.pdf";
    import Certificate from "../../../lib/images/PDFs/Certificate of Status.pdf";
    import Fiscal from "../../../lib/images/PDFs/fiscal_sponsorship_letter (1).pdf";
</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Rasa:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
</svelte:head>
<style>
.rasa {
  font-family: "Rasa", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>



<main>
    <div class="space-y-16">
        <!-- FAQ Header -->
        <p class="text-center text-6xl rasa font-bold text-black">
            Financials
        </p>

        <!-- Main FAQ Content -->
        <div class="grid grid-cols-12">
            <!-- Sidebar -->
            <div class="col-start-2 col-end-5">
                <div class="space-y-64">
                    <div class="text-xl">
                        <a href="/" class="flex items-center space-x-2">
                            <i class="fa-solid fa-arrow-left"></i>
                            <span class="pb border-b border-black">Home</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- FAQ Content -->
            <div class="col-start-5 col-end-12 space-y-6">
                <div class="space-y-8">
                    <p>At Solace Global, we are committed to maintaining the highest level of transparency and accountability. As a fiscally sponsored organization under Hack Club, we release an annual report of our financials to ensure our stakeholders and supporters are fully informed about our operations.</p>
                    <p>Below you will find important documents, including the IRS 501(c)(3) Letter of Determination, Certificate of Status, and our Fiscal Sponsorship Agreement with Hack Club. These materials highlight our dedication to ethical and effective financial management in support of our mission.</p>
                </div>
                <p class="text-2xl">Access Our Financial Documents</p>
                <div class="space-y-8">
                    <div>
                        <h2 class="text-xl underline"><a href={IRSLetter} target="_blank">IRS Letter</a></h2>
                    </div>
                    <div>
                        <h2 class="text-xl underline"><a href={Certificate} target="_blank">Certificate of Status</a></h2>
                    </div>
                    <div>
                        <h2 class="text-xl underline"><a href={Fiscal} target="_blank">Fiscal Sponsorship Letter</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
