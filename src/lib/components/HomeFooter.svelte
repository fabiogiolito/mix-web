<script>
  import { TWITTER_URL, INSTAGRAM_URL } from "$lib/consts";
</script>

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
