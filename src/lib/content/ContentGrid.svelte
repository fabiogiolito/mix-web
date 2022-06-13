<script>
  import ContentThumbnail from "$lib/content/ContentThumbnail.svelte";

  export let images = [...Array(6)];
  export let linked;

</script>

<div class="grid overflow-hidden {$$props.class || 'grid-cols-3 gap-1 rounded'}">
  {#each images as image}
    <ContentThumbnail {image} {linked} />
  {/each}
</div>
