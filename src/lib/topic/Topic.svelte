<script>
  export let topic;
  export let linked;
</script>

{#if topic}

  {#if linked}
    <a href="#topic/{topic}" class="btn btn-link relative z-10">
      <span class="tag mr-2 mb-2">{topic}</span>
    </a>

  {:else}
    <span class="tag mr-2 mb-2">{topic}</span>
  {/if}

{:else}

  <span class="h-6 bg-white bg-opacity-5 rounded-full mr-2 mb-2 w-24" />

{/if}
