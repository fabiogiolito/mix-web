<script>
  import { TWITTER_URL, INSTAGRAM_URL } from "$lib/consts";

  import Dropdown from "$lib/elements/Dropdown.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import IconInstagram from "$lib/icons/IconInstagram.svelte";
  import IconTwitter from "$lib/icons/IconTwitter.svelte";
</script>

<div class="flex items-center space-x-4 pl-4 pr-2 lg:pl-6 lg:pr-4 py-2">
  <div class="lg:w-80 flex pt-4">
    <a href="/" class="btn btn-link">
      <img src="/logo_white.svg" alt="Mix" class="w-24" />
    </a>
  </div>

  <span class="flex-1" />

  <button class="btn btn-tertiary hidden">Get the app</button>

  <Dropdown right let:isOpen>
    <button
      slot="trigger"
      class="btn btn-square {isOpen ? '' : 'bg-transparent'}"
    >
      <IconMenu />
    </button>

    <!-- Menu -->
    <div class="flex flex-col space-y-1 whitespace-nowrap">
      <div class="flex flex-col space-y-2 p-2 pt-3">
        <a class="btn btn-link text-sm text-left" href="/">Home</a>
      </div>

      <div class="flex flex-col space-y-2 p-2">
        <a class="btn btn-link text-sm text-left" href="mailto:support@mix.com">
          Contact
        </a>
        <a class="btn btn-link text-sm text-left" href="/tos">Terms</a>
        <a class="btn btn-link text-sm text-left" href="/privacy">Privacy</a>
      </div>

      <div class="flex items-center">
        <a href={TWITTER_URL} class="btn btn-square" target="_blank">
          <IconTwitter class="w-4" />
        </a>
        <a href={INSTAGRAM_URL} class="btn btn-square" target="_blank">
          <IconInstagram class="w-4" />
        </a>
      </div>

      <span class="text-xs opacity-50 p-2">
        <span>© 2022 - Mix is an </span>
        <a class="btn btn-link" href="https://expa.com/" target="_blank">
          Expa
        </a>
        <span>company</span>
      </span>
    </div>
  </Dropdown>
</div>
