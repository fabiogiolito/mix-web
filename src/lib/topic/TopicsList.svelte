<script>
  import Topic from "$lib/topic/Topic.svelte";

  export let topics = [...Array(3)];

</script>

<div class="flex flex-wrap h-6 overflow-hidden">
  {#each topics as topic}
    <Topic {topic} />
  {/each}
</div>
