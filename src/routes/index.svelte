<script>
  import Nav from "$lib/components/home/Nav.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import CuratorsList from "$lib/components/home/CuratorsList.svelte";
  import Footer from "$lib/components/home/Footer.svelte";
</script>

<svelte:head>
  <title>Mix - Expand your Mind</title>
</svelte:head>

<div class="min-h-available md:min-h-screen flex flex-col">
  <Nav />
  <Hero />
</div>

<!-- <CuratorsList /> -->

<Footer />
