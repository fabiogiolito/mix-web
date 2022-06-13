<script>
  export let image;
  export let linked;
</script>

{#if image}

  {#if linked}
    <a href="#content-permalink" class="relative z-10 rounded overflow-hidden">
      <img src={image} alt=""
        class="block w-full aspect-square object-cover transition-all hover:scale-105 {$$props.class || ''}"
      />
    </a>

  {:else}
    <img src={image} alt=""
      class="block w-full aspect-square object-cover rounded {$$props.class || ''}"
    />
  {/if}


<!-- Skeleton -->
{:else}
  <span class="block w-full aspect-square bg-white bg-opacity-10 animate-pulse {$$props.class || ''}" />
{/if}
