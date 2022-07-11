<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { IOS_DOWNLOAD_URL, ANDROID_DOWNLOAD_URL } from "$lib/consts";

  import IconApple from "$lib/icons/IconApple.svelte";
  import IconAndroid from "$lib/icons/IconAndroid.svelte";

  const dispatch = createEventDispatcher();

  let didSendSMS = false;

  function handleSendSMS() {
    didSendSMS = true;
  }

  function handleKeyUp(e) {
    if (e.key == "Escape") closeQRCode();
  }

  function closeQRCode() {
    dispatch('close');
  }

</script>

<svelte:body on:keyup={handleKeyUp} />

<div in:fly={{ y: 40, duration: 200 }} class="relative z-10 -mt-24">


  <div class="flex flex-col md:flex-row relative mb-6">

    <div class="w-64 inline-block bg-white rounded-t-xl md:rounded-tr-none md:rounded-l-xl p-4 pb-5 md:p-6 text-black text-center">
      <img class="mx-auto w-full aspect-square mb-2" src="/qr_download.png" alt="Download app" />
      <span class="block font-medium text-lg">Scan to install</span>
    </div>

    <div class="w-64 bg-white bg-opacity-10 rounded-b-xl md:rounded-tl-none md:rounded-r-xl p-6 text-center flex flex-col items-center justify-center">

      <div class="mt-2 mb-7">

        {#if !didSendSMS}
          <p class="leading-tight mb-4">Get a text message to download the app</p>
          <div class="w-full max-w-full">
            <div class="btn w-full mb-2 p-0 flex focus-within:outline-orange-500">
              <select class="appearance-none p-3 pl-4 pr-0 bg-transparent text-white focus:outline-none relative top-px">
                <option>+1</option>
                <option>+351</option>
              </select>
              <input class="w-40 p-3 bg-transparent focus:outline-none relative top-px" type="text" placeholder="(555) 123-4567" />
            </div>
          </div>
          <button on:click={handleSendSMS} class="btn btn-secondary w-full">Send SMS</button>
        {:else}
          <div in:fly={{ y: 16, duration: 200 }} class="mt-12 mb-14">
            <p class="text-lg">SMS Sent!</p>
            <p class="opacity-50">Check your phone.</p>
          </div>
        {/if}

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
    <button class="btn" on:click={closeQRCode}>
      Done
    </button>
  </div>

</div>
