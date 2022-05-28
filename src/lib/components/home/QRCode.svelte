<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { APP_DOWNLOAD_URL, IOS_DOWNLOAD_URL, ANDROID_DOWNLOAD_URL } from "$lib/consts";

  const dispatch = createEventDispatcher();

</script>

<div in:fly={{ y: 40, duration: 200 }} class="relative z-10 -mt-24">
  <a href={APP_DOWNLOAD_URL} target="_blank" class="inline-block bg-white rounded-xl p-4 pb-5 md:p-6 mb-4 text-black text-center">
    <img class="mx-auto w-56 h-56 mb-2" src="/qr_download.png" alt="Download app" />
    <span class="block font-medium text-lg">Scan to install</span>
  </a>
  <div class="space-y-2">
    <a href={IOS_DOWNLOAD_URL} target="_blank" class="btn btn-secondary block w-full">
      Install on iOS
    </a>
    <a href={ANDROID_DOWNLOAD_URL} target="_blank" class="btn btn-secondary block w-full">
      Install on Android
    </a>
    <button class="btn block w-full" on:click={() => dispatch('close')}>Done</button>
  </div>
</div>
