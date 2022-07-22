<script>
  import UserAvatar from "$lib/user/UserAvatar.svelte";
  import UserFollowButton from "$lib/user/UserFollowButton.svelte";

  export let user = undefined;
  export let linked = false;
  export let showLikes = false;
  export let showFollow = false;

</script>

{#if user}

  <svelte:element this={linked ? 'a' : 'div'} href="/{user.username}" class="flex items-center space-x-4">

    <!-- Avatar -->
    <UserAvatar {user} class="w-14" />

    <!-- Info -->
    <div class="flex-1 flex flex-col">
      <p class="font-medium">{user.name}</p>
      <p class="text-sm truncate opacity-50 mb-1">@{user.username}</p>
      {#if showLikes}
        <p class="text-xs truncate opacity-40">{user.likesCount.toLocaleString("en-US")} Likes</p>
      {/if}
    </div>

    <!-- Follow button -->
    {#if showFollow}
      <UserFollowButton />
    {/if}

  </svelte:element>


<!-- Skeleton -->
{:else}

  <div class="flex items-center space-x-4 animate-pulse">
    <UserAvatar class="w-14" />

    <!-- Info -->
    <div class="flex-1 flex flex-col">
      <span class="block w-[80%] h-4 bg-white bg-opacity-10 rounded mb-2" />
      <span class="block w-[50%] h-3 bg-white bg-opacity-10 rounded mb-1 opacity-75" />
      {#if showLikes}
        <span class="block w-[40%] h-3 bg-white bg-opacity-10 rounded opacity-50" />
      {/if}
    </div>
  </div>

{/if}
