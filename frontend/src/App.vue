<template>
  <div id="app">
    <div class="absolute top-4 right-4">
      <button class="bg-blue-700 text-white px-4 py-2 rounded">LOGIN</button>
    </div>
    <router-view></router-view>
  </div>
  <notifications position="top-right" classes="my-custom-class" />
</template>

<script setup lang="ts">
import router from './router'

const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
body {
  background-color: yellow;
}
</style>
