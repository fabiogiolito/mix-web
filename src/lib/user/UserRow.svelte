<script>
  import UserAvatar from "$lib/user/UserAvatar.svelte";
  import UserFollowButton from "$lib/user/UserFollowButton.svelte";

  export let user;

</script>

{#if user}

  <div class="flex items-center space-x-4">

    <!-- Avatar -->
    <UserAvatar {user} />

    <!-- Info -->
    <div class="flex-1 flex flex-col">
      <p class="font-medium">{user.name}</p>
      <p class="text-sm truncate opacity-50 mb-1">@{user.username}</p>
      <p class="text-xs truncate opacity-40">{user.likesCount.toLocaleString("en-US")} Likes</p>
    </div>

    <!-- Follow button -->
    <UserFollowButton />

  </div>


<!-- Skeleton -->
{:else}

  <div class="flex items-center space-x-4 animate-pulse">
    <UserAvatar />

    <!-- Info -->
    <div class="flex-1 flex flex-col">
      <span class="block w-[80%] h-4 bg-white bg-opacity-10 rounded mb-2" />
      <span class="block w-[50%] h-3 bg-white bg-opacity-10 rounded mb-1 opacity-75" />
      <span class="block w-[40%] h-3 bg-white bg-opacity-10 rounded opacity-50" />
    </div>
  </div>

{/if}
