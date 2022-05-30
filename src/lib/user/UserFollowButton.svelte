<script>
  import IconCheck from "$lib/icons/IconCheck.svelte";
  import IconPlus from "$lib/icons/IconPlus.svelte";

  export let user;
  export let large;

  let isFollowing = false;

  // =====================================
  // FUNCTIONS

  async function handleToggleFollow() {
    isFollowing = !isFollowing;
  }

</script>

<!-- Follow / Following -->
{#if large}

  {#if isFollowing}
    <button on:click={handleToggleFollow} class="btn btn-secondary">
      Following
    </button>
  {:else}
    <button on:click={handleToggleFollow} class="btn btn-primary btn-dot">
      Follow
    </button>
  {/if}

<!-- Plus / Checkmark -->
{:else}

  {#if isFollowing}
    <button on:click={handleToggleFollow} class="btn btn-square btn-secondary">
      <IconCheck class="w-4" />
    </button>
  {:else}
    <button on:click={handleToggleFollow} class="btn btn-square">
      <IconPlus class="w-4" />
    </button>
  {/if}

{/if}
