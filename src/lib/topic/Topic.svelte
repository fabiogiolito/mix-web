<script>
  export let topic;
</script>

{#if topic}

  <span class="tag mr-2 mb-2">{topic}</span>

{:else}

  <span class="h-6 bg-white bg-opacity-5 rounded-full mr-2 mb-2 w-24" />

{/if}
