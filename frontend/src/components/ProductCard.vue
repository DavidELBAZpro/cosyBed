<template>
  <div
    class="product bg-blue-100 text-blue-900 p-4 rounded-lg shadow-lg"
    v-if="product"
  >
    <h2 class="text-xl font-semibold">{{ product.name }}</h2>
    <p class="text-sm">ID: {{ product._id }}</p>
    <p>{{ product.description }}</p>
    <p class="font-bold">Price: ${{ product.price.toFixed(2) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface ProductInterface {
  _id: number
  name: string
  description: string
  price: number
}

export default defineComponent({
  name: 'Product',
  props: {
    product: {
      type: Object as () => ProductInterface,
      required: true,
    },
  },
})
</script>

<style scoped></style>
