<template>
  <div
    v-if="isVisible"
    id="default-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center h-[calc(100%-1rem)] max-h-full"
    :class="{
      'opacity-0': !isVisible,
      'opacity-100 animate-scale-up-bl': isVisible,
    }"
  >
    <div
      class="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700"
    >
      <!-- Image ajustée avec object-contain -->
      <img
        class="rounded-t-lg w-full max-h-full object-contain"
        :src="product.imageUrl"
        :alt="product.name"
      />
      <!-- Bouton positionné -->
      <button
        @click="closeModal"
        type="button"
        class="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
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

<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
  product: Object,
  isVisible: Boolean,
})
const emit = defineEmits(['update:isVisible'])

const closeModal = () => {
  emit('update:isVisible', false)
}
</script>

<style scoped></style>
