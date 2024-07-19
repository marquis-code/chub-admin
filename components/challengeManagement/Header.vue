<template>
<main>
  <header class="flex justify-between border border-gray-50 items-center p-4 bg-white">
    <h1 class="text-4xl font-medium max-w-md text-[#1D1F2C]">Create & manage challenges across the app</h1>
    <div>
      <button class="px-4 py-2 border border-[#690571] bg-white text-[#690571] rounded-xl mr-2">Feature a challenge</button>
      <button @click="showCreateChallengeModal = true" class="px-4 py-2 bg-[#690571] text-white rounded-xl">Create Challenge</button>
    </div>
  </header>

  <CoreBaseModal :show="showCreateChallengeModal " @update:show="showCreateChallengeModal = false">
   <ChallengeManagementCreateChallenge />
   </CoreBaseModal>
</main>
  </template>

  <script setup lang="ts">
  const showCreateChallengeModal = ref(false)

  </script>
  
  