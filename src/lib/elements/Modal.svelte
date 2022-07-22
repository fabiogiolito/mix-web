<script>
  import { fly, fade } from "svelte/transition";

  export let isOpen = false;
  export let showClose = false;

  function toggleModal() {
    isOpen = !isOpen;
  }
</script>

{#if isOpen}
  <div class="fixed z-50 top-0 left-0 w-screen h-screen grid place-items-center">

    <!-- Backdrop -->
    <button transition:fade={{ duration: 150}} on:click={toggleModal} class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm" />

    <!-- Modal element -->
    <div transition:fly={{ y: 40, duration: 150}} class="
      fixed bottom-0 left-0 w-full h-[80vh]
      lg:relative lg:w-[400px] lg:max-w-[90vw] lg:max-h-[80vh] lg:h-auto
      bg-white text-black p-6 rounded-xl overflow-auto scrollbar-secondary
    ">

      {#if showClose}
        <button on:click={toggleModal} class="btn absolute top-0 right-0 mt-2 text-sm">
          Close
        </button>
      {/if}

      <!-- content -->
      <slot />

    </div>

  </div>
{/if}
