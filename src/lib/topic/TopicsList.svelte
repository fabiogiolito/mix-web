<script>
  import Topic from "$lib/topic/Topic.svelte";

  export let topics = [...Array(3)];
  export let linked;

</script>

<div class="flex flex-wrap h-6 overflow-hidden">
  {#each topics as topic}
    <Topic {topic} {linked} />
  {/each}
</div>
