<template>
  <div class="space-y-10">
  <div class="space-y-10">
    <ChallengeManagementHeader class="rounded-xl border border-gray-200" />
  </div>
    <div class="border rounded-2xl p-6 space-y-6">
      <ChallengeManagementChallengeFilter />
      <ChallengeManagementChallengeCard v-for="n in 8" :key="n" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'dashboard'
})
</script>