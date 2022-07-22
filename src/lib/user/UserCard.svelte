<script>
  import UserRow from "$lib/user/UserRow.svelte";
  import ContentGrid from "$lib/content/ContentGrid.svelte";
  import TopicsList from "$lib/topic/TopicsList.svelte";

  export let user;
  export let showLikes;
  export let showFollow;

</script>

<div class="relative bg-white bg-opacity-10 rounded-xl p-4 transition-colors hover:bg-orange-500 hover:bg-opacity-10 {$$props.class || ''}">

  <!-- Link to profile -->
  {#if user}
    <a href="/{user?.username}" class="absolute inset-0 z-10" />
  {/if}

  <div class="space-y-4">
    <UserRow {user} {showLikes} {showFollow} />
    <ContentGrid linked images={user?.topLikes} />
    <TopicsList linked topics={user?.interests} />
  </div>

</div>
