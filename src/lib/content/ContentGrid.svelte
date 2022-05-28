<script>
  import ContentThumbnail from "$lib/content/ContentThumbnail.svelte";

  export let images = [...Array(6)];

</script>

<div class="grid overflow-hidden {$$props.class || 'grid-cols-3 gap-1 rounded'}">
  {#each images as image}
    <ContentThumbnail {image} />
  {/each}
</div>
