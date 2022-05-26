<svelte:head>
  <title>Mix - Expand your Mind</title>
</svelte:head>

<div class="container mx-auto min-h-screen flex flex-col">

  <!-- Nav -->
  <div class="relative z-10 flex items-center px-6 h-16">
    <img src="logo_white.svg" alt="Mix" />
    <span class="flex-1" />

    <div class="flex space-x-2">
      <a href="/" class="btn btn-square">
        <img class="w-4" src="icon_twitter_white.svg" alt="Twitter" />
      </a>
      <a href="/" class="btn btn-square">
        <img class="w-4" src="icon_instagram_white.svg" alt="Instagram" />
      </a>
    </div>
  </div>

  <div class="flex-1 lg:grid lg:place-items-center">

    <!-- Video -->
    <div class="overflow-hidden max-h-screen -mb-24 sm:-mb-48 md:-mb-80 lg:mb-0 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full">
      <video muted autoplay loop class="scale-150 mx-auto">
        <source src="/carousel.webm" type="video/webm">
      </video>
    </div>

    <!-- Text content -->
    <div class="relative text-white px-6 lg:pt-16">

      <div class="relative z-10 text-center">
        <h1 class="text-6xl font-bold mb-6 md:text-7xl lg:text-8xl">Expand <br /> your mind</h1>
        <h2 class="text-xl leading-tight mb-6">The coolest stuff on the internet, curated by people like you.</h2>
        <p class="text-orange-500 mb-12">Join 5,419 curators today</p>

        <button class="btn btn-primary btn-dot">Get the Mix App</button>
      </div>

      <!-- Text shadow -->
      <span class="absolute inset-0 bg-black blur-3xl" />
    </div>
  </div>

</div>
