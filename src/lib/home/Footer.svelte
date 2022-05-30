<script>
  import { TWITTER_URL, INSTAGRAM_URL } from "$lib/consts";

  import IconInstagram from "$lib/icons/IconInstagram.svelte";
  import IconTwitter from "$lib/icons/IconTwitter.svelte";
</script>

<!-- Footer -->
<div class="relative z-10 container mx-auto px-6 md:h-14 bg-gradient-to-b from-[rgba(255,255,255,0.05)] md:bg-none">
  <div class="container mx-auto flex flex-col py-8 md:py-0 space-y-6 md:flex-row md:space-x-8 md:space-y-0 items-center">

    <div class="shrink-0 flex space-x-4 items-center pb-4 md:pb-0">
      <a href={TWITTER_URL} class="btn btn-square" target="_blank">
        <IconTwitter class="w-4" />
      </a>
      <a href={INSTAGRAM_URL} class="btn btn-square" target="_blank">
        <IconInstagram class="w-4" />
      </a>
    </div>

    <div class="flex space-x-8">
      <a class="btn btn-link text-sm opacity-50" href="mailto:support@mix.com">Contact</a>
      <a class="btn btn-link text-sm opacity-50" href="/tos">Terms</a>
      <a class="btn btn-link text-sm opacity-50" href="/privacy">Privacy</a>
    </div>

    <span class="hidden md:block flex-1" />

    <span class="text-sm opacity-25">
      © 2022 - Mix is an <a class="btn btn-link" href="https://expa.com/" target="_blank">Expa</a> company
    </span>
  </div>
</div>
