<script>
  import { onMount } from "svelte";
  import API from "$lib/api";

  import UserCard from "$lib/user/UserCard.svelte";

  // ------------------------------------
  // Start with skeleton curators
  let curators = Array(3).fill(null);


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

<!-- Heading -->
<div class="container mx-auto px-6 pt-16">
  <div class="mb-12 2xl:mb-16">
    <h2 class="font-semibold text-3xl mb-3 lg:text-5xl lg:mb-6">
      Follow top curators
    </h2>
    <p class="text-lg leading-tight">
      Explore things related to your interests <br />
      in a deep and expansive way
    </p>
  </div>
</div>

<!-- Grid -->
<div class="container mx-auto px-2 lg:px-6 pb-40">
  <div class="grid gap-8 md:grid-cols-2 md:gap-4 lg:gap-6 xl:grid-cols-3 2xl:gap-8">
    {#each curators as curator}
      <UserCard user={curator} showLikes />
    {/each}
  </div>
</div>
