<script>
  import { page } from "$app/stores";

  import API from "$lib/api";

  import Modal from "$lib/elements/Modal.svelte";
  import Nav from "$lib/home/Nav.svelte";
  import TopicFollowButton from "$lib/topic/TopicFollowButton.svelte";
  import TopicsList from "$lib/topic/TopicsList.svelte";
  import UserRow from "$lib/user/UserRow.svelte";
  import ContentGrid from "$lib/content/ContentGrid.svelte";

  let slug = $page.params.slug;
  let topic;

  let followersModalOpen = false;

  // Keep data updated if username changes
  $: if (slug) getData();

  // =====================================
  // FUNCTIONS

  async function getData() {
    topic = await API.topicFromSlug(slug);
  }

  function handleViewAllFollowers() {
    followersModalOpen = !followersModalOpen;
  }
</script>

<div class="min-h-available md:min-h-screen">
  <Nav />

  {#if topic}
    <div class="space-y-10 md:space-y-0 md:space-x-10">
      <div class="md:w-80 md:float-left p-6 pt-0 md:pt-6 md:sticky md:top-0">
        <div class="space-y-10">
          <div class="space-y-6">
            <p class="leading-tight text-3xl font-medium">
              {topic.title}
            </p>
            <TopicFollowButton large />
          </div>

          <div>
            <div class="flex mb-4">
              <p class="flex-1 font-medium opacity-50">Followed by</p>
              <button
                on:click={handleViewAllFollowers}
                class="btn btn-link text-sm font-normal text-orange-500"
              >
                View all
              </button>
            </div>

            <div class="mb-6 space-y-4">
              {#if topic.sharedBy}
                <UserRow user={topic.sharedBy} linked showFollow />
              {/if}

              {#each topic.followedSample as user}
                <UserRow {user} linked showFollow />
              {/each}
            </div>
          </div>

          <div>
            <p class="font-medium opacity-50 mb-3">Related topics</p>
            <div class="flex flex-wrap gap-2 h-6 mb-4 overflow-hidden">
              <TopicsList topics={topic.relatedTopics} linked long />
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-hidden">
        <ContentGrid
          linked
          images={topic.content}
          class="grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 2xl:grid-cols-5 3xl:grid-cols-6"
        />
      </div>
    </div>
  {/if}
</div>

<Modal bind:isOpen={followersModalOpen} showClose>
  <div class="p-4 lg:p-6 overflow-auto flex-1">
    <p class="font-medium text-xl mb-6">
      {topic?.followedCount || ""} Followers
    </p>

    <div class="flex-1 space-y-4">
      {#each [...Array(5)] as _, index}
        <div class="opacity-{100 - 20 * index}">
          <UserRow linked user={topic?.sharedBy} />
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
