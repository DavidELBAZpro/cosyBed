<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Produits</h1>
    <div v-if="query.isLoading" class="text-gray-500">Chargement...</div>
    <div v-else-if="query.isError" class="text-red-500">
      Une erreur est survenue.
    </div>
    <div v-else>
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useQuery, UseQueryOptions } from '@tanstack/vue-query'
import Product from '../components/Product.vue'

interface Product {
  id: number
  name: string
  description: string
  price: number
}

export default defineComponent({
  name: 'ProductsPage',
  components: {
    Product,
  },
  setup() {
    const fetchProducts = async (): Promise<Product[]> => {
      const response = await fetch('http://localhost:1605/products')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.table('response HERE', data)
      return data
    }

    const queryKey = ['products']
    const queryOptions: UseQueryOptions<Product[], Error> = {
      queryKey: queryKey,
      queryFn: fetchProducts,
    }

    const query = useQuery<Product[], Error>(queryOptions)

    const products = ref<Product[]>([])
    onMounted(async () => {
      if (query.data.value) {
        products.value = query.data.value
      }
    })
    console.log(query.isLoading)

    return { query, products }
  },
})
</script>

<style scoped>
/* styles here */
</style>
