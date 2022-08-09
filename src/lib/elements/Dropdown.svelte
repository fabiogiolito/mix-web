<script>
  export let isOpen = false;
  export let right = false;

  let container;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function handleBodyClick(e) {
    if (!isOpen) return;
    if (!container.contains(e.srcElement)) toggleDropdown();
  }
</script>

<svelte:body on:click={handleBodyClick} />

<div
  bind:this={container}
  on:click={toggleDropdown}
  class="inline-block relative {$$props.class || ''}"
>
  <slot name="trigger" {isOpen} />

  {#if isOpen}
    <div
      on:click|stopPropagation
      class="
      absolute z-50 top-full mt-1
      min-w-80 bg-white text-black p-2 rounded-lg shadow
      {right ? 'right-0' : 'left-0'}
    "
    >
      <slot />
    </div>
  {/if}
</div>
