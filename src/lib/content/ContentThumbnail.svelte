<script>
  export let image;
</script>

{#if image}

  <img
    class="block w-full aspect-square object-cover rounded {$$props.class || ''}"
    src={image}
    alt=""
  />


<!-- Skeleton -->
{:else}
  <span class="block w-full aspect-square bg-white bg-opacity-10 animate-pulse {$$props.class || ''}" />
{/if}
