<script>
  import { onDestroy } from "svelte";
  import { page } from "$app/stores";
  import { contextUser } from "$lib/stores";

  import API from "$lib/api";

  import Nav from "$lib/home/Nav.svelte";
  import UserHeader from "$lib/user/UserHeader.svelte";

  let username = $page.params.username;

  // Keep data updated if username changes
  $: if (username) getData();


  // =====================================
  // FUNCTIONS

  async function getData() {
    $contextUser = await API.userFromUsername(username);
  }

  onDestroy(() => {
    $contextUser = null;
  });

</script>

<div class="min-h-available md:min-h-screen">

  <!-- Internal nav -->
  <Nav />

  <div class="space-y-10 md:space-y-0 md:space-x-10">

    <!-- Left -->
    <div class="md:w-80 md:float-left p-6 pt-0 md:pt-6 md:sticky md:top-0">
      <UserHeader user={$contextUser} />
    </div>

    <!-- Right -->
    <div class="flex-1 overflow-hidden">
      <slot />
    </div>

  </div>

</div>
