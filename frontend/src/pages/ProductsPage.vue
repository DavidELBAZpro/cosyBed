<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Produits</h1>
    <p v-if="isError">Error: {{ error?.message }}</p>
    <p v-if="isLoading">Chargement...</p>
    <div v-if="!isLoading && !isError">
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import ProductCard from '../components/ProductCard.vue'
import { ProductInterface } from '../components/ProductCard.vue'

const fetchProducts = async (): Promise<ProductInterface[]> => {
  const response = await fetch('http://localhost:1605/products')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
}

const {
  data: products,
  error,
  isError,
  isLoading,
} = useQuery<ProductInterface[], Error>({
  queryKey: ['products'],
  queryFn: fetchProducts,
})
</script>

<style scoped>
/* Vos styles ici */
</style>
