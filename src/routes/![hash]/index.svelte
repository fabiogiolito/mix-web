<script>
  import { page } from "$app/stores";
  import API from "$lib/api";

  import Nav from "$lib/home/Nav.svelte";
  import ContentGrid from "$lib/content/ContentGrid.svelte";
  import UserRow from "$lib/user/UserRow.svelte";
  import TopicsList from "$lib/topic/TopicsList.svelte";

  import Modal from "$lib/elements/Modal.svelte";

  let hash = $page.params.hash;
  let content;

  let likesModalOpen = false;

  // Keep data updated if hash changes
  $: if (hash) getData();

  async function getData() {
    content = await API.contentFromHash(hash);
  }

  function handleViewAllLikes() {
    likesModalOpen = !likesModalOpen;
  }
</script>

<div class="min-h-available lg:min-h-screen flex flex-col">
  <Nav />

  {#if content}
    <div
      class="flex-1 flex flex-col-reverse lg:flex-row lg:space-x-10 px-4 lg:px-6"
    >
      <div class="lg:w-80 py-6">
        <div class="space-y-10">
          <div class="space-y-6">
            <p class="leading-tight text-lg font-medium">
              {content.title}
            </p>

            <p class="leading-tight flex space-x-4 items-center opacity-75">
              <span class="bg-white bg-opacity-20 rounded-full p-2">
                <svelte:component this={content.source.icon} class="w-4" />
              </span>
              <span class="text-sm font-medium">{content.source.name}</span>
            </p>
          </div>

          <div>
            <div class="flex mb-4">
              <p class="flex-1 font-medium opacity-50">
                {content.likeCount} Likes
              </p>
              <button
                on:click={handleViewAllLikes}
                class="btn btn-link text-sm font-normal text-orange-500"
              >
                View all
              </button>
            </div>

            <div class="mb-6 space-y-4">
              {#if content.sharedBy}
                <UserRow user={content.sharedBy} linked showFollow />
              {/if}

              {#each content.likedSample as user}
                <UserRow {user} linked showFollow />
              {/each}
            </div>
          </div>

          <div>
            <p class="font-medium opacity-50 mb-3">Related</p>
            <TopicsList class="mb-4" topics={content.topics} linked />
            <ContentGrid images={content.topRelated} linked />
          </div>
        </div>
      </div>

      <div class="flex-1 flex relative lg:mb-10">
        <img
          src={content.image}
          class="lg:absolute top-0 left-0 w-full h-full object-contain"
          alt="content"
        />
      </div>
    </div>
  {/if}
</div>

<Modal bind:isOpen={likesModalOpen} showClose>
  <div class="p-4 lg:p-6 overflow-auto flex-1">
    <p class="font-medium text-xl mb-6">
      {content?.likeCount || ""} Likes
    </p>

    <div class="flex-1 space-y-4">
      {#each [...Array(5)] as _, index}
        <div class="opacity-{100 - 20 * index}">
          <UserRow linked user={content?.sharedBy} />
        </div>
      {/each}
    </div>
  </div>

  <div class="bg-stone-300 text-center p-4 lg:p-6 shrink-0">
    <p class="text-sm mb-3 font-medium opacity-75">
      Sign up to see all content
    </p>
    <button class="btn btn-primary btn-dot">Get the app</button>
  </div>
</Modal>

<!-- hack so postcss won't purge these classes -->
<!-- opacity-0 opacity-10 opacity-20 opacity-30 opacity-40 opacity-50 opacity-60 opacity-70 opacity-80 opacity-90 opacity-100 -->
