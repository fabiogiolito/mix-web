<script>
  import Nav from "$lib/home/Nav.svelte";
  import Hero from "$lib/home/Hero.svelte";
  import CuratorsList from "$lib/home/CuratorsList.svelte";
  import Footer from "$lib/home/Footer.svelte";
</script>

<svelte:head>
  <title>Mix - Expand your Mind</title>
</svelte:head>

<div class="min-h-available md:min-h-screen flex flex-col">
  <Nav />
  <Hero />

  <!-- Wrap Footer here for positioning while no other sections -->
  <div class="absolute inset-x-0 top-full lg:static">
    <Footer />
  </div>
</div>

<!-- <CuratorsList /> -->
<!-- <Footer /> -->
