<script>
  import UserAvatar from "$lib/user/UserAvatar.svelte";

  export let user;

</script>

{#if user}

  <div class="p-40 text-center space-y-8">
    <UserAvatar {user} class="w-40" />

    <div class="space-y-2">
      <p class="font-semibold text-5xl">{user.name}</p>
      <p class="text-2xl opacity-50">@{user.username}</p>
    </div>

    <button class="btn btn-primary btn-dot">Follow</button>
  </div>

<!-- Skeleton -->
{:else}
  <div class="p-40 text-center flex flex-col items-center justify-center animate-pulse">
    <UserAvatar class="w-40 mb-8" />
    <span class="block w-80 h-8 bg-white bg-opacity-10 rounded mb-4" />
    <span class="block w-40 h-6 bg-white bg-opacity-10 rounded" />
  </div>
{/if}
