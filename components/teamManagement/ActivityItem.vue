<template>
  <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
    <div class="flex-shrink-0">
      <img class="rounded-full w-16 h-16" :src="avatar" alt="Avatar">
    </div>
    <div class="mt-4 text-center">
      <h3 class="text-lg font-medium text-gray-900">{{ name }}</h3>
      <p :class="`text-sm font-medium mt-1 ${roleClass}`">{{ role }}</p>
      <p class="text-gray-500 mt-2">{{ email }}</p>
      <p class="text-gray-400 text-sm mt-1">{{ lastActive }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  avatar: String,
  name: String,
  role: String,
  roleClass: String,
  email: String,
  lastActive: String
});
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
