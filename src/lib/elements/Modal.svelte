<script>
  export let isOpen = false;

  function toggleModal() {
    isOpen = !isOpen;
  }
</script>

{#if isOpen}
  <div class="fixed z-50 top-0 left-0 w-screen h-screen grid place-items-center pb-40">

    <!-- Backdrop -->
    <button on:click={toggleModal} class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm" />

    <!-- Modal element -->
    <div class="relative bg-white text-black p-6 rounded-xl w-[400px] max-w-[90vw] max-h-[640px] overflow-auto scrollbar-secondary">
      <slot />
    </div>

  </div>
{/if}
