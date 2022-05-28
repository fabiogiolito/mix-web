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

<div class="container mx-auto px-6 pt-16 pb-24">

  <!-- Header -->
  <div class="mb-12 2xl:mb-24">
    <h2 class="font-semibold text-3xl mb-3 lg:text-5xl lg:mb-6">Follow top curators</h2>
    <p class="text-lg leading-tight">
      Explore things related to your interests <br />
      in a deep and expansive way
    </p>
  </div>

  <!-- List -->
  <div class="grid lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10">
    {#each curators as curator}
      <UserCard user={curator} />
    {/each}
  </div>

</div>
