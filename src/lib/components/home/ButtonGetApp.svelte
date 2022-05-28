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
    <a href={APP_DOWNLOAD_URL} class="btn btn-primary btn-dot">
      Get the Mix App
    </a>

  <!-- Desktop or Undefined -->
  {:else}
    <button
      on:click={e => dispatch('showQRCode')}
      class="btn btn-primary btn-dot"
    >
      Get the Mix App
    </button>

  {/if}

</p>
