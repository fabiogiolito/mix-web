<script>
  import Hero from "$lib/home/Hero.svelte";
  import UserGrid from "$lib/user/UserGrid.svelte";
  import Footer from "$lib/home/Footer.svelte";
</script>

<svelte:head>
  <title>Mix - Expand your Mind</title>
</svelte:head>

<div class="min-h-[85vh] flex flex-col overflow-hidden">
  <Hero />
</div>

<UserGrid />
<Footer />
