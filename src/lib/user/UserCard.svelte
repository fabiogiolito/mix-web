<script>
  import UserRow from "$lib/user/UserRow.svelte";
  import ContentGrid from "$lib/content/ContentGrid.svelte";
  import TopicsList from "$lib/topic/TopicsList.svelte";

  export let user;
  export let showLikes;

</script>

<div class="relative bg-white bg-opacity-10 rounded-xl p-4 transition-colors hover:bg-orange-500 hover:bg-opacity-10 {$$props.class || ''}">

  <!-- Link to profile -->
  <a href="/{user?.username}" class="absolute inset-0 z-10" />

  <div class="space-y-4">
    <UserRow {user} {showLikes} />
    <ContentGrid images={user?.topLikes} />
    <TopicsList topics={user?.interests} />
  </div>

</div>
