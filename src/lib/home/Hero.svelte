<script>
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition"

  import ButtonGetApp from "$lib/home/ButtonGetApp.svelte";
  import QRCode from "$lib/home/QRCode.svelte";


  // ------------------------------------
  // Flip through content types
  let contentTypeInterval;
  let contentList = [ "stuff", "images", "videos", "articles", "gifs", "memes", "designs", "fashion" ];
  let currentContentIndex = 0;

  // ------------------------------------
  // Curator count
  let curatorsCount = getCuratorsCount(); // Number of curators on platform

  // ------------------------------------
  // Toggle QR Code
  let QRCodeVisible = false;


  // =====================================
  // FUNCTIONS

  function getCuratorsCount() {
    const DEFAULT_CURATOR_COUNT = 12691;
    const DEFAULT_CURATOR_COUNT_TIMESTAMP = 1651092248269;
    const daysSinceStamp = Math.floor((Date.now() - new Date(DEFAULT_CURATOR_COUNT_TIMESTAMP)) / (1000 * 3600 * 24));
    return DEFAULT_CURATOR_COUNT + (109 * daysSinceStamp);
  }

  function handleToggleQRCode() {
    QRCodeVisible = !QRCodeVisible;
  }

  // =====================================
  // LIFETIME

  onMount(() => {
    contentTypeInterval = setInterval(() => {
      currentContentIndex = currentContentIndex >= contentList.length - 1 ? 0 : currentContentIndex + 1;
    }, 2000);
  });

  onDestroy(() => {
    clearInterval(contentTypeInterval);
  });

</script>

<div class="flex-1 flex flex-col items-center justify-center py-10">

  <!-- Video -->
  <div class="overflow-hidden absolute inset-0 flex items-center justify-center transition-all {QRCodeVisible ? 'blur-lg' : ''}">
    <video muted autoplay loop playsinline class="mx-auto -mt-[40vh] lg:-mt-[25vh] xl:-mt-[30hv] scale-[2] md:scale-125">
      <source src="/carousel.webm" type="video/webm">
      <source src="/carousel.mp4" type="video/mp4">
    </video>
  </div>

  <!-- Text content area -->
  <div class="relative px-6 pt-24">
    <div class="relative">

      <!-- Main text -->
      {#if !QRCodeVisible}
        <div in:fly={{ y: -40, duration: 200 }} class="relative z-10 text-center">
          <h1 class="text-6xl font-semibold tracking-tight mb-8 md:text-7xl lg:text-8xl 2xl:text-[120px] 2xl:mb-12">
            Expand <br /> your mind
          </h1>
          <h2 class="text-lg lg:text-xl 2xl:text-2xl leading-tight mb-10 opacity-50">
            <span>The coolest</span>
            {#key currentContentIndex}
              <span class="inline-block relative proportional-nums" in:fly={{ y: 10, duration: 150 }}>
                {contentList[currentContentIndex]}
              </span>
            {/key}
            <span>on the internet, <br class="md:hidden" /> curated by people like you.</span>
          </h2>

          <ButtonGetApp on:showQRCode={handleToggleQRCode} />

          <!-- Curators count -->
          <p class="text-xs text-orange-500 uppercase tracking-wider font-medium">
            <span>Join</span>
            {#key curatorsCount}
              <span class="inline-block relative proportional-nums" in:fly={{ y: 10, duration: 150 }}>
                {curatorsCount.toLocaleString("en-US")}
              </span>
            {/key}
            <span>curators today</span>
          </p>
        </div>

      <!-- Qr code visible -->
      {:else}
        <QRCode on:close={handleToggleQRCode} />
      {/if}

      <!-- Text shadows -->
      <span class="absolute top-0 inset-x-0 h-24 bg-black blur-2xl" /> <!-- stronger behind "explore" -->
      <span class="absolute inset-0 bg-black blur-2xl opacity-50" /> <!-- lighter behind entire text-->

    </div>
  </div>

</div>
