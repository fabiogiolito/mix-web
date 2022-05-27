<script>
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition"

  const IOS_DOWNLOAD_URL = "https://apps.apple.com/pt/app/mix-rediscover-the-internet/id1092817691";
  const TWITTER_URL = "https://twitter.com/getmixapp";
  const INSTAGRAM_URL = "https://www.instagram.com/getmixapp/";

  // Toggle QR Code
  let QRCodeVisible = false;

  // Flip through content types
  let contentTypeInterval;
  let contentList = [ "stuff", "images", "videos", "articles", "gifs", "memes", "designs", "fashion" ];
  let currentContentIndex = 0;
  $: printContent = contentList[currentContentIndex];

  // Randomly update curator count
  let curatorsUpdateTimeout; // Reference to clear timeout on destroy
  let curatorsCount = getCuratorsCount(); // Number of curators on platform
  $: printCuratorsCount = curatorsCount.toLocaleString("en-US"); // Printable version of count with commas (reactive)

  // Get a fake number of curators
  function getCuratorsCount() {
    return Math.floor(new Date().getTime() / 1000) - 1653579588
  }

  // Recursive timeout creation with random duration
  function createCuratorsTimeout(callback) {
    // Get random seconds between 3 and 10
    let seconds = Math.floor(Math.random() * (20 - 7 + 1)) + 7

    // Create timeout
    curatorsUpdateTimeout = setTimeout(() => {

      // Create new timeout
      createCuratorsTimeout(callback);

      // Execute callback
      callback();

    }, seconds * 1000);
  }

  function handleToggleQRCode() {
    QRCodeVisible = !QRCodeVisible;
  }

  onMount(() => {
    // Initiate content type update
    contentTypeInterval = setInterval(() => {
      currentContentIndex = currentContentIndex >= contentList.length - 1 ? 0 : currentContentIndex + 1;
    }, 2000);

    // Initiate curators count update
    createCuratorsTimeout(() => {
      curatorsCount = getCuratorsCount();
    });

    
  });

  onDestroy(() => {
    clearInterval(contentTypeInterval);
    clearTimeout(curatorsUpdateTimeout);
  });

</script>

<svelte:head>
  <title>Mix - Expand your Mind</title>
</svelte:head>

<div class="min-h-available md:min-h-screen flex flex-col">

  <!-- Centered Mix logo nag -->
  <div class="shrink-0 container mx-auto relative z-10 flex items-center justify-center px-6 h-20">
    <img src="logo_white.svg" alt="Mix" />
  </div>

  <!-- Content -->
  <div class="flex-1 flex flex-col items-center justify-center py-10">

    <!-- Video -->
    <div class="overflow-hidden absolute inset-0 grid place-items-center">
      <video muted autoplay loop playsinline class="mx-auto -mt-[40vh] lg:-mt-[25vh] xl:-mt-[30hv] scale-[2] md:scale-125">
        <source src="/carousel.webm" type="video/webm">
        <source src="/carousel.mp4" type="video/mp4">
      </video>
    </div>

    <!-- Text -->
    <div class="relative px-6 pt-24">
      <div class="relative">

        {#if QRCodeVisible}
          <!-- Qr code -->
          <div in:fly={{ y: 40, duration: 200 }} class="relative z-10 -mt-24">
            <a href={IOS_DOWNLOAD_URL} target="_blank" class="inline-block bg-white rounded-xl p-4 pb-5 md:p-6 mb-4 text-black text-center">
              <img class="mx-auto w-56 h-56 mb-2" src="/qr_ios.png" alt="Download app" />
              <span class="block font-medium text-lg">Scan to install</span>
            </a>
            <div class="space-y-2">
              <a href={IOS_DOWNLOAD_URL} target="_blank" class="btn btn-secondary block w-full" on:click={handleToggleQRCode}>
                iOS App Store
              </a>
              <button class="btn block w-full" on:click={handleToggleQRCode}>Done</button>
            </div>
          </div>

        {:else}

          <div in:fly={{ y: -40, duration: 200 }} class="relative z-10 text-center">
            <h1 class="text-6xl font-semibold tracking-tight mb-8 md:text-7xl lg:text-8xl 2xl:text-[120px] 2xl:mb-12">
              Expand <br /> your mind
            </h1>
            <h2 class="text-lg lg:text-xl 2xl:text-2xl leading-tight mb-10 opacity-50">
              <span>The coolest</span>
              {#key currentContentIndex}
                <span class="inline-block relative proportional-nums" in:fly={{ y: 10, duration: 150 }}>
                  {printContent}
                </span>
              {/key}
              <span>on the internet, <br class="md:hidden" /> curated by people like you.</span>
            </h2>

            <!-- Install button -->
            <p class="mb-8">
              <button on:click={handleToggleQRCode} href={IOS_DOWNLOAD_URL} class="btn btn-primary btn-dot">
                Get the Mix App
              </button>
            </p>

            <!-- Curators count -->
            <p class="text-xs text-orange-500 uppercase tracking-wider font-medium">
              <span>Join</span>
              {#key curatorsCount}
                <span class="inline-block relative proportional-nums" in:fly={{ y: 10, duration: 150 }}>
                  {printCuratorsCount}
                </span>
              {/key}
              <span>curators today</span>
            </p>
          </div>

        {/if}

        <!-- Text shadows -->
        <span class="absolute top-0 inset-x-0 h-24 bg-black blur-2xl" /> <!-- stronger behind "explore" -->
        <span class="absolute inset-0 bg-black blur-2xl opacity-50" /> <!-- lighter behind entire text-->

      </div>
    </div>

  </div>

  <!-- Footer -->
  <div class="absolute inset-x-0 top-full md:relative px-6 md:h-14 z-10 bg-gradient-to-b from-[rgba(255,255,255,0.05)] md:bg-none">
    <div class="container mx-auto flex flex-col py-8 md:py-0 space-y-6 md:flex-row md:space-x-8 md:space-y-0 items-center">

      <div class="shrink-0 flex space-x-4 items-center pb-4 md:pb-0">
        <a href={TWITTER_URL} class="btn btn-square" target="_blank">
          <img class="w-4" src="icon_twitter_white.svg" alt="Twitter" />
        </a>
        <a href={INSTAGRAM_URL} class="btn btn-square" target="_blank">
          <img class="w-4" src="icon_instagram_white.svg" alt="Instagram" />
        </a>
      </div>

      <div class="flex space-x-8">
        <a class="btn btn-link text-sm opacity-50" href="/">Contact</a>
        <a class="btn btn-link text-sm opacity-50" href="/">Terms</a>
        <a class="btn btn-link text-sm opacity-50" href="/">Privacy</a>
      </div>

      <span class="hidden md:block flex-1" />

      <span class="text-sm opacity-25">
        © 2022 - Mix is an <a class="btn btn-link" href="https://expa.com/" target="_blank">Expa</a> company
      </span>
    </div>
  </div>

</div>
