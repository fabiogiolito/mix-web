<script>
  import { page } from "$app/stores";

  import UserAvatar from "$lib/user/UserAvatar.svelte";
  import UserFollowButton from "$lib/user/UserFollowButton.svelte";

  export let user;

</script>

{#if user}

  <div class="space-y-8">
    <UserAvatar {user} class="w-40" />

    <div class="space-y-2">
      <p class="font-semibold text-3xl lg:text-5xl">{user.name}</p>
      <p class="lg:text-2xl opacity-50">@{user.username}</p>
    </div>

    <UserFollowButton {user} large />

    <p class="leading-tight opacity-75">
      Curabitur suscipit lectus lorem, convallis convallis est blandit quis.
    </p>

    <div class="flex flex-col">
      <a href="/{user.username}" class="
        flex space-x-3 items-center px-1 py-3 text-white border-b-2 border-white
        {$page.url.pathname == `/${user.username}` ? '' : 'border-opacity-10 text-opacity-50 hover:text-opacity-100'}
      ">
        <span class="flex-1">Likes</span>
        <span class="text-sm font-mono">14,518</span>
      </a>
      <a href="/{user.username}/following" class="
        flex space-x-3 items-center px-1 py-3 text-white border-b-2 border-white
        {$page.url.pathname == `/${user.username}/following` ? '' : 'border-opacity-10 text-opacity-50 hover:text-opacity-100'}
      ">
        <span class="flex-1">Following</span>
        <span class="text-sm font-mono">3</span>
      </a>
      <a href="/{user.username}/followers" class="
        flex space-x-3 items-center px-1 py-3 text-white border-b-2 border-white
        {$page.url.pathname == `/${user.username}/followers` ? '' : 'border-opacity-10 text-opacity-50 hover:text-opacity-100'}
      ">
        <span class="flex-1">Followers</span>
        <span class="text-sm font-mono">124</span>
      </a>
    </div>
  </div>

{/if}
