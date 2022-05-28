<script>
  import { onMount } from "svelte";

  import CuratorCard from "$lib/components/curator/CuratorCard.svelte";


  // ------------------------------------
  // Start with skeleton curators
  let curators = Array(3).fill(null);


  // =====================================
  // FUNCTIONS

  async function fetchCurators() {
    // TODO: Fetch from API, then…
    curators = [
      {
        avatar: "https://img.mix.com/image/fetch/c_crop,ar_1/c_lfill,w_400,h_400,q_auto,f_jpg/https://assets.mix.com/uploads/2020/11/8/3005005-1607449496544.jpeg",
        name: "Elliot Eckholm",
        username: "ellioteckholm",
        likes_count: 15764,
        likes: [
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/4a/98/4a988b529ee3f8e1a6455934d2ba8c73.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/cb/3e/cb3ea125770a1f72bcdac72e5d55afbe.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/53/83/53839b2a06724afec7c35f5c7dbb9153.jpe",
          "https://i.ytimg.com/vi/TtDQkACEANA/hqdefault.jpg",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/4a/98/4a988b529ee3f8e1a6455934d2ba8c73.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/cb/3e/cb3ea125770a1f72bcdac72e5d55afbe.jpe",
        ],
        tags: ["Humor", "Amazing", "Oddities"],
      },
      {
        avatar: "https://img.mix.com/image/fetch/c_crop,ar_1/c_lfill,w_400,h_400,q_auto,f_jpg/https://d2xuupin39grhy.cloudfront.net/uploads/2017/1/22/27-1487755767710.jpg",
        name: "GC",
        username: "gc",
        likes_count: 14001,
        likes: [
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/4a/98/4a988b529ee3f8e1a6455934d2ba8c73.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/cb/3e/cb3ea125770a1f72bcdac72e5d55afbe.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/53/83/53839b2a06724afec7c35f5c7dbb9153.jpe",
          "https://i.ytimg.com/vi/TtDQkACEANA/hqdefault.jpg",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/4a/98/4a988b529ee3f8e1a6455934d2ba8c73.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/cb/3e/cb3ea125770a1f72bcdac72e5d55afbe.jpe",
        ],
        tags: ["Photography", "Amazing", "Architecture"],
      },
      {
        avatar: "https://img.mix.com/image/fetch/c_crop,ar_1/c_lfill,w_400,h_400,q_auto,f_jpg/https://d2xuupin39grhy.cloudfront.net/uploads/2016/0/11/6429-1452554058801.jpg",
        name: "Matt Ernst",
        username: "mattbernst",
        likes_count: 11400,
        likes: [
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/4a/98/4a988b529ee3f8e1a6455934d2ba8c73.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/cb/3e/cb3ea125770a1f72bcdac72e5d55afbe.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/53/83/53839b2a06724afec7c35f5c7dbb9153.jpe",
          "https://i.ytimg.com/vi/TtDQkACEANA/hqdefault.jpg",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/4a/98/4a988b529ee3f8e1a6455934d2ba8c73.jpe",
          "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/cb/3e/cb3ea125770a1f72bcdac72e5d55afbe.jpe",
        ],
        tags: ["Art", "Amazing", "Oddities"],
      },
    ];
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
      <CuratorCard {curator} />
    {/each}
  </div>

</div>
