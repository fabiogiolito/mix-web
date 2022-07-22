<script>
  import { contextUser } from "$lib/stores";

  import ContentGrid from "$lib/content/ContentGrid.svelte";
  

</script>

<ContentGrid linked images={$contextUser?.topLikes}
  class="grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 2xl:grid-cols-5 3xl:grid-cols-6"
/>
