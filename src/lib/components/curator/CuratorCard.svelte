<script>

  export let curator;

</script>

{#if curator}

  <!-- CURATOR CARD -->
  <div class="relative bg-white bg-opacity-10 rounded-xl p-4 space-y-4 transition-colors hover:bg-orange-500 hover:bg-opacity-10 {$$props.class || ''}">

    <!-- Heading -->
    <div class="flex items-center space-x-4">

      <!-- Avatar -->
      <img src={curator.avatar} class="shrink-0 block w-16 aspect-square object-cover rounded-full bg-white" alt="avatar" />

      <!-- Info -->
      <div class="flex-1 flex flex-col">
        <p class="font-medium">{curator.name}</p>
        <p class="text-sm truncate opacity-50 mb-1">@{curator.username}</p>
        <p class="text-xs truncate opacity-40">{curator.likes_count.toLocaleString("en-US")} Likes</p>
      </div>

      <!-- Follow button -->
      <button class="btn btn-square">
        <img class="w-4" src="icon_plus_white.svg" alt="Follow" />
      </button>

    </div>

    <!-- Grid -->
    <div class="grid grid-cols-3 gap-1 rounded overflow-hidden">
      {#each curator.likes as image}

        <!-- Thumbnail -->
        <img class="w-full aspect-square bg-white object-cover" src={image} alt="like" />

      {/each}
    </div>

    <!-- Tags row -->
    <div class="flex flex-wrap h-6 overflow-hidden">
      {#each curator.tags as tag}
        <span class="tag mr-2 mb-2">{tag}</span>
      {/each}
    </div>

    <!-- Link -->
    <a href="/" class="absolute inset-0 z-10" />

  </div>


<!-- Skeleton -->
{:else}

  <div class="bg-white bg-opacity-10 rounded-xl p-4 space-y-4 animate-pulse">
    <div class="flex items-center space-x-4">

      <!-- Avatar -->
      <div class="shrink-0 block w-16 aspect-square object-cover rounded-full bg-white bg-opacity-5" />

      <!-- Info -->
      <div class="flex-1 flex flex-col space-y-1">
        <div class="h-4 w-[80%] bg-white bg-opacity-10 rounded" />
        <div class="h-4 w-[40%] bg-white bg-opacity-10 rounded" />
        <div class="h-4 w-[32%] bg-white bg-opacity-10 rounded" />
      </div>

    </div>

    <!-- Grid -->
    <div class="grid grid-cols-3 gap-1 rounded overflow-hidden">
      {#each [...Array(6)] as _}
        <div class="aspect-square bg-white bg-opacity-5" />
      {/each}
    </div>

    <!-- Tags row -->
    <div class="flex flex-wrap h-6 overflow-hidden">
      {#each [...Array(6)] as _}
        <span class="h-6 bg-white bg-opacity-5 rounded-full mr-2 mb-2 w-24" />
      {/each}
    </div>
  </div>

{/if}
