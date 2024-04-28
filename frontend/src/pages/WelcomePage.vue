<template>
  <div class="w-screen h-screen">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <!-- ici -->
      <div class="w-screen h-screen/2">
        <!-- <video autoplay muted loop playsinline class="object-fit">
          <source
            src="https://res.cloudinary.com/dxzqgqowb/video/upload/v1714305747/wallpaper/cxqbaqmhuahorzkpo4im.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> -->

        <div
          class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:px-24 lg:pt-0"
        >
          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
            <circle
              data-v-92a2a6f9=""
              cx="512"
              cy="512"
              r="512"
              style="fill: rgb(14, 116, 144)"
              fill-opacity="0.7"
            ></circle>
          </svg>
          <div
            class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
          >
            <h2
              class="text-3xl font-bold tracking-tight text-cyan-100 sm:text-4xl"
            >
              Découvrez notre nouvelle collection.
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              Inspirée par notre amour de travailler des matières toujours plus
              proches de la nature.
            </p>
          </div>
          <div
            class="mt-10 flex flex-col items-center lg:flex-row lg:justify-center"
          >
            <a
              href="/products"
              class="rounded-md bg-cyan-200 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-cremeux focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mx-2"
            >
              Produits
            </a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <div class="relative mt-16 h-80 lg:mt-8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted, nextTick } from 'vue'

// onMounted(async () => {
//   await nextTick()
//   setTimeout(() => {
//     const hostElement = document.querySelector('.vsc-controller') // Sélectionne l'hôte du shadow DOM
//     console.log('hostElement: ', hostElement)
//     if (hostElement && hostElement.shadowRoot) {
//       const controller = hostElement.shadowRoot.querySelector('#controller') // Sélectionne à l'intérieur du shadow DOM
//       console.log('controller', controller)
//       if (controller) {
//         controller.remove()
//       }
//     }
//   }, 1000)
// })
</script>

<style scoped>
.vsc-controller {
  display: none;
}
</style>
