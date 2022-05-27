<script>
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition"

  let timeout; // Reference to clear timeouts on destroy

  // Number of curators on platform
  let count = getCuratorsCount();

  // Printable version of count with commas (reactive)
  $: printCount = count.toLocaleString("en-US");

  // Get a fake number of curators
  function getCuratorsCount() {
    return Math.floor(new Date().getTime() / 1000) - 1653579588
  }

  // Recursive timeout creation with random duration
  function createTimeout(callback) {
    // Get random seconds between 3 and 10
    let seconds = Math.floor(Math.random() * (10 - 3 + 1)) + 3

    // Create timeout
    timeout = setTimeout(() => {

      // Create new timeout
      createTimeout(callback);

      // Execute callback
      callback();

    }, seconds * 1000);
  }

  onMount(() => {
    createTimeout(() => {
      count = getCuratorsCount();
    });
  });

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

<svelte:head>
  <title>Mix - Expand your Mind</title>
</svelte:head>

<div class="min-h-available md:min-h-screen flex flex-col">

  <!-- Nav -->
  <div class="shrink-0 container mx-auto relative z-10 flex items-center px-6 h-16">
    <img src="logo_white.svg" alt="Mix" />
    <span class="flex-1" />

    <div class="flex space-x-2">
      <a href="https://twitter.com/getmixapp" class="btn btn-square" target="_blank">
        <img class="w-4" src="icon_twitter_white.svg" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/getmixapp/" class="btn btn-square" target="_blank">
        <img class="w-4" src="icon_instagram_white.svg" alt="Instagram" />
      </a>
    </div>
  </div>

  <!-- Content -->
  <div class="flex-1 flex flex-col items-center justify-center md:pb-24">

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

        <div class="relative z-10 text-center">
          <h1 class="text-6xl font-bold mb-6 md:text-7xl lg:text-8xl 2xl:text-[120px] 2xl:mb-12">Expand <br /> your mind</h1>
          <h2 class="text-xl leading-tight mb-12 2xl:text-2xl">The coolest stuff on the internet, <br class="md:hidden" /> curated by people like you.</h2>
          <p class="text-orange-500 mb-6">
            <span>Join</span>
            {#key count}
              <span class="inline-block relative proportional-nums" in:fly={{ y: 10, duration: 150 }}>{printCount}</span>
            {/key}
            <span>curators today</span>
          </p>
          <button class="btn btn-primary btn-dot">Get the Mix App</button>
        </div>

        <!-- Text shadows -->
        <span class="absolute top-0 inset-x-0 h-24 bg-black blur-2xl" /> <!-- stronger behind "explore" -->
        <span class="absolute inset-0 bg-black blur-2xl opacity-50" /> <!-- lighter behind entire text-->

      </div>
    </div>

  </div>

</div>
