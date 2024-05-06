<template>
  <div>
    <p>{{ message }}</p>
    <!-- Message du serveur NestJS -->
    <p v-if="error">Error: {{ error.message }}</p>
    <p v-if="isLoading">Loading...</p>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { QueryKey, useQuery } from '@tanstack/vue-query'

interface MessageResponse {
  message: string
}
const count = ref(101)

// Fonction pour récupérer le message depuis le serveur
const fetchMessage = async (): Promise<MessageResponse> => {
  const response = await fetch(
    process.env.NODE_ENV === 'production'
      ? 'http://backend-service:1605/welcome'
      : 'http://localhost:1605/welcome'
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data: MessageResponse = await response.json()
  return data
}

// Utilisation de Vue Query pour gérer la requête
const { data, error, isLoading } = useQuery<
  MessageResponse,
  Error,
  MessageResponse,
  QueryKey
>({
  queryKey: ['welcomeMessage'],
  queryFn: fetchMessage,
})
const message = computed(() => data.value?.message)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
