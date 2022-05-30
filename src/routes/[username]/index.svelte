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
  <div class="container mx-auto px-6 md:p-8 lg:p-16 xl:p-24">
    <UserHeader {user} />
  </div>
  <ContentGrid
    images={user?.topLikes}
    class="grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 lg:p-4 2xl:grid-cols-6"
  />
</div>
