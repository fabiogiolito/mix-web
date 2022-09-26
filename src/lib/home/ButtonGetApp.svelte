<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { getPlatform } from "$lib/helpers";
  import { APP_DOWNLOAD_URL } from "$lib/consts";

  const dispatch = createEventDispatcher();
  let platform;

  // =====================================
  // LIFECYCLE

  onMount(() => {
    platform = getPlatform();
  });

</script>

<p class="mb-8">

  <!-- Mobile smart link -->
  {#if platform == "iOS" || platform == "Android"}
    <a href={APP_DOWNLOAD_URL} class="p-1 rounded bg-white w-20 mx-auto">
      <img class="mx-auto w-full aspect-square" src="/qr_download.png" alt="Download app" />
      <span class="block text-center text-xs text-black font-medium leading-none my-1">Get the app</span>
    </a>
    <!-- <a href={APP_DOWNLOAD_URL} class="btn btn-primary btn-dot">
      Get the Mix App
    </a> -->

  <!-- Desktop or Undefined -->
  {:else}
    <button on:click={e => dispatch('showQRCode')} class="p-1 rounded bg-white w-20 mx-auto">
      <img class="mx-auto w-full aspect-square" src="/qr_download.png" alt="Download app" />
      <span class="block text-center text-xs text-black font-medium leading-none my-1">Get the app</span>
    </button>

  {/if}

</p>
