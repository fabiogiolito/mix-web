<script>
  import { clickOutside } from "$lib/clickOutside";

  export let isOpen = false;
  export let right = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }
</script>

<div on:click={toggleDropdown} class="inline-block relative {$$props.class || ''}">
  <slot name="trigger" {isOpen} />

  {#if isOpen}
    <div use:clickOutside={toggleDropdown} on:click|stopPropagation class="
      absolute z-50 top-full mt-1
      min-w-80 bg-white text-black p-2 rounded-lg shadow
      {right ? 'right-0' : 'left-0'}
    ">
      <slot />
    </div>
  {/if}
</div>
