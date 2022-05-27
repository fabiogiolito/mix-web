<script>
  import HomeNav from "$lib/components/HomeNav.svelte";
  import HomeHero from "$lib/components/HomeHero.svelte";
  import HomeFooter from "$lib/components/HomeFooter.svelte";
</script>

<svelte:head>
  <title>Mix - Expand your Mind</title>
</svelte:head>

<div class="min-h-available md:min-h-screen flex flex-col">
  <HomeNav />
  <HomeHero />
  <HomeFooter />
</div>
