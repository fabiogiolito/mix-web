<script>
  import { page } from "$app/stores";
  import API from "$lib/api";

  import UserHeader from "$lib/user/UserHeader.svelte";
  import ContentGrid from "$lib/content/ContentGrid.svelte";

  let username = $page.params.username;
  let user;

  // Keep data updated if username changes
  $: if (username) getData();


  // =====================================
  // FUNCTIONS

  async function getData() {
    user = await API.userFromUsername(username);
  }

</script>

<div class="min-h-available md:min-h-screen">
  <div class="container mx-auto px-6">

    <UserHeader {user} />
    <ContentGrid images={user?.topLikes} class="grid-cols-5 gap-4" />

  </div>
</div>
