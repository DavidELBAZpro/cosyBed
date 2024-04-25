<template>
  <div
    v-if="isVisible"
    id="default-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed inset-0 z-50"
    :class="{
      'opacity-0 pointer-events-none': !isVisible,
      'opacity-100 pointer-events-auto': isVisible,
    }"
  >
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black bg-opacity-50"></div>

    <!-- Modal Content -->
    <div
      class="relative p-4 w-full max-w-2xl h-screen bg-white rounded-lg shadow dark:bg-gray-700 mx-auto my-0 flex flex-col justify-center animate-scale-up-bl"
    >
      <!-- Image ajustée avec object-contain -->
      <img
        class="rounded-t-lg w-full object-contain flex-shrink-0"
        :src="product.imageUrl"
        :alt="product.name"
      />
      <!-- Bouton positionné -->
      <button
        @click="closeModal"
        type="button"
        class="absolute top-3 right-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          class="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
      <div class="border-t border-gray-200 dark:border-gray-600">
        <h3 class="p-4 text-xl font-semibold text-gray-900 dark:text-white">
          {{ product.name }}
        </h3>
        <p
          class="px-4 pb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400"
        >
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import { ProductInterface } from './ProductCard.vue'

const props = defineProps({
  product: {
    type: Object as () => ProductInterface,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['update:isVisible'])

const closeModal = () => {
  emit('update:isVisible', false)
  console.log(
    'Fermeture du modal, état avant la fermeture:',
    modalVisible.value
  )
  nextTick(() => {
    console.log('État après mise à jour:', modalVisible.value)
  })
}
</script>

<style scoped></style>
