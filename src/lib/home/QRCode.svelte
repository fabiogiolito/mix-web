<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { APP_DOWNLOAD_URL, IOS_DOWNLOAD_URL, ANDROID_DOWNLOAD_URL } from "$lib/consts";

  import IconApple from "$lib/icons/IconApple.svelte";
  import IconAndroid from "$lib/icons/IconAndroid.svelte";
  import IconX from "$lib/icons/IconX.svelte";

  const dispatch = createEventDispatcher();

</script>

<div in:fly={{ y: 40, duration: 200 }} class="relative z-10 -mt-24">


  <div class="flex flex-col md:flex-row relative mb-6">

    <a href={APP_DOWNLOAD_URL} target="_blank" class="w-64 inline-block bg-white rounded-t-xl md:rounded-tr-none md:rounded-l-xl p-4 pb-5 md:p-6 text-black text-center">
      <img class="mx-auto w-full aspect-square mb-2" src="/qr_download.png" alt="Download app" />
      <span class="block font-medium text-lg">Scan to install</span>
    </a>

    <div class="w-64 bg-white bg-opacity-10 rounded-b-xl md:rounded-tl-none md:rounded-r-xl p-6 text-center flex flex-col items-center justify-center">

      <div class="mt-2 mb-7">
        <p class="leading-tight mb-4">Get a text message to download the app</p>
        <input class="btn w-full mb-2" type="text" placeholder="(555) 123-4567" />
        <button class="btn btn-secondary w-full">Send SMS</button>
      </div>

      <div class="flex space-x-4">
        <a href={IOS_DOWNLOAD_URL} target="_blank" class="btn btn-square">
          <IconApple class="w-4" />
        </a>
        <a href={ANDROID_DOWNLOAD_URL} target="_blank" class="btn btn-square">
          <IconAndroid class="w-4" />
        </a>
      </div>

    </div>

  </div>

  <div class="text-center">
    <button class="btn" on:click={() => dispatch('close')}>
      Done
    </button>
  </div>

</div>
