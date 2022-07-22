<script>
  import { onMount } from "svelte";
  import API from "$lib/api";

  import UserCard from "$lib/user/UserCard.svelte";

  // ------------------------------------
  // Start with skeleton curators
  let curators = [...Array(12)];


  // =====================================
  // FUNCTIONS

  async function fetchCurators() {
    curators = await API.topCurators();
  }


  // =====================================
  // LIFETIME

  onMount(() => {
    // Fake loading time with SetTimout
    setTimeout(() => {
      fetchCurators();
    }, 3000);
  });

</script>

<!-- Grid -->
<div class="px-2 lg:px-6 pb-40">
  <div class="grid gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-10 3xl:grid-cols-5 4xl:grid-cols-6">
    {#each curators as curator}
      <UserCard user={curator} showLikes showFollow />
    {/each}
  </div>
</div>
