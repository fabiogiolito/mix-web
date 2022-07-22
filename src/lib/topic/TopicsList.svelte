<script>
  import Topic from "$lib/topic/Topic.svelte";

  export let topics = [...Array(3)];
  export let linked;
  export let long = false;

</script>

<div class="flex flex-wrap overflow-hidden {$$props.class || ''}" class:h-6={!long}>
  {#each topics as topic}
    <Topic {topic} {linked} />
  {/each}
</div>
