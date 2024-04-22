<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
  >
    <a href="#">
      <img
        class="rounded-t-lg product-image"
        :src="product.imageUrl"
        :alt="product.name"
      />
    </a>
    <div class="border-t border-gray-200 dark:border-gray-600"></div>
    <div class="p-5">
      <a href="#">
        <!-- <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ product.name }}
        </h5> -->
        <h5
          class="product-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span
            v-for="(part, index) in highlightedName"
            :key="index"
            :style="{ backgroundColor: part.match ? 'yellow' : 'none' }"
            >{{ part.text }}</span
          >
        </h5>
      </a>
      <p
        class="product-description mb-3 font-normal text-gray-700 dark:text-gray-400"
      >
        {{ product.description }}
      </p>
      <div class="flex justify-between items-center">
        <button
          @click="modalVisible = true"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
        <ProductDetails :product="product" v-model:isVisible="modalVisible" />
        <p
          :title="product.price.toString() + ' €'"
          class="font-bold text-gray-700 dark:text-gray-400"
        >
          {{
            product.price % 1 === 0 ? product.price : product.price.toFixed(2)
          }}
          €
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ProductDetails from './ProductDetails.vue'

export interface ProductInterface {
  _id: number
  name: string
  description: string
  price: number
  imageUrl?: string
}

const props = defineProps({
  product: {
    type: Object as () => ProductInterface,
    required: true,
  },
  searchText: String,
})

const modalVisible = ref(false)

const highlightedName = computed(() => {
  if (!props.searchText || props.searchText === '') {
    return [{ text: props.product.name, match: false }]
  }
  const regex = new RegExp(props.searchText, 'gi')
  const matches = []
  let match
  let lastIndex = 0

  while ((match = regex.exec(props.product.name)) !== null) {
    if (match.index > lastIndex) {
      matches.push({
        text: props.product.name.substring(lastIndex, match.index),
        match: false,
      })
    }
    matches.push({ text: match[0], match: true })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < props.product.name.length) {
    matches.push({
      text: props.product.name.substring(lastIndex),
      match: false,
    })
  }
  return matches
})
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}
.product-title {
  height: 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* nombre de lignes à afficher */
  -webkit-box-orient: vertical;
}

.product-description {
  height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.33em;
}
</style>
