<script>
  import Nav from "$lib/home/Nav.svelte";
  import Hero from "$lib/home/Hero.svelte";
  import CuratorsList from "$lib/home/CuratorsList.svelte";
  import Footer from "$lib/home/Footer.svelte";
</script>

<svelte:head>
  <title>Mix - Expand your Mind</title>
</svelte:head>

<div class="min-h-[85vh] flex flex-col overflow-hidden">
  <Nav />
  <Hero />
</div>

<CuratorsList />
<Footer />
