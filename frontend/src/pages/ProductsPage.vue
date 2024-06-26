<template>
  <div class="p-6 pt-0">
    <button
      @click="goBack"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="max-custom-breakpoint:hidden">Retour</span>
    </button>
    <div>
      <AddProduct/>
    </div>
    <div>
      <SearchBar @onSearch="handleSearch" />
    </div>
    <h1 class="text-2xl text-cyan-800 font-bold mb-6">Produits</h1>
    <p v-if="isError">{{ error?.message }}</p>
    <p v-if="isLoading">
        <div role="status">
    <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
 </p>
    <div v-if="!isLoading && !isError" class="flex flex-wrap -m-2">
      <div
        v-for="product in filteredProducts"
        :key="product._id"
        class="p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 xxl:w-1/5"
      >
        <ProductCard :product="product" :searchText="searchText" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import ProductCard from '../components/ProductCard.vue'
import SearchBar from '../components/SearchBar.vue'
import { ProductInterface } from '../components/ProductCard.vue'
import { useRouter, useRoute } from 'vue-router'
import AddProduct from '../components/AddProduct.vue'

const router = useRouter()
const goBack = () => {
  router.replace('/')
}

const route = useRoute();

const fetchProducts = async (): Promise<ProductInterface[]> => {
  const id = route.params.id;
  
  const response = await fetch(
    process.env.NODE_ENV === 'production'
      ? 'http://backend-service:1605/welcome'
      : 'http://localhost:1605/welcome'
  )
  if (!response.ok) {
    throw new Error('No product found with this id: ' + "'" + id + "'")
  }
  const data = await response.json()
  // console.log("data",data)
  return id ? [data] : data; // S'assurer que les données sont toujours sous forme de tableau
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

const searchText = ref('');
const filteredProducts = computed(() => {
  console.log(searchText.value);
  if (searchText.value) {
    return products?.value?.filter(product =>
      product.name.toLowerCase().includes(searchText.value.toString().toLowerCase())
    );
  }
  // console.log("products.value", products.value);
  
  return products.value;
})
const handleSearch = (value : string) => {
  searchText.value = value;
}
</script>

<style scoped>
/* Vos styles ici */
</style>
