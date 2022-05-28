<script>
  export let user;
</script>

<!-- Avatar image -->
{#if user?.avatar}

  <img
    class="shrink-0 inline-block w-16 aspect-square object-cover rounded-full {$$props.class || ''}"
    src={user?.avatar || "avatar"}
    alt={user?.name || "avatar"}
  />

<!-- Avatar placeholder -->
{:else}

  <span class="shrink-0 inline-block w-16 aspect-square rounded-full bg-white bg-opacity-10 {$$props.class || ''}" />

{/if}
