<template>
  <main>
    <div v-if="route.query.step === 'intro'" class="w-full">
      <h1 class="text-gray-400 text-2xl">Email Address Verified, </h1>
      <h1 class="text-2xl">
        <span class="text-gray-900">Please complete your</span> <span class="text-[#1E0221]">profile.</span>
      </h1>
      <form @submit.prevent="handleSignup" class="space-y-2 w-full pt-6">
        <div class="flex gap-x-3">
          <div class="w-full">
            <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900 sr-only">First Name</label>
            <div>
              <input id="firstname" placeholder="enter your first name" name="firstname" type="text"
                class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="w-full">
            <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Last Name</label>
            <div>
              <input id="lastname" placeholder="enter your last name" name="lastname" type="text"
                class="block w-full rounded-t-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>

        <div class="w-full">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Password</label>
          <div>
            <input id="password" placeholder="enter your password" name="password" type="password"
              autocomplete="current-password"
              class="block w-full rounded-b-md outline-none border-[#DBC3DD] border py-4 pl-4 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div class="pt-3">
          <button type="submit" :disabled="loading"
            class="flex w-full justify-center rounded-md bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">
            {{ loading ? 'Processing...' : 'Create profile' }}
          </button>
        </div>
      </form>
      <p class="mt-3 text-center text-sm text-gray-500">
        already have an account?
        <button @click="router.push('/')"
          class="font-semibold leading-6 text-[#690571] hover:text-[#690571]">login to your account</button>
      </p>
    </div>
    <div class="w-full" v-if="route.query.step === 'success'">
      <h1 class="text-gray-400 font-black text-3xl text-center tracking-wide">Profile complete, <span class="text-[#1E0221]">An Admin</span></h1>
      <h1 class="text-3xl font-black text-center tracking-wide"><span class="text-[#1E0221]"> will review within 24 hours.</span></h1>
      <div class="pt-6">
        <button type="button" @click="viewHomepage" :disabled="loading"
          class="flex w-full justify-center rounded-xl bg-[#690571] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#690571] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#690571]">
          {{ loading ? 'Processing...' : 'View Homepage' }}
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const loading = ref(false)

onMounted(() => {
  if (!route.query.step) {
    router.replace({ path: route.path, query: { step: 'intro' } })
  }
})

definePageMeta({
  title: 'Home Page',
  layout: 'authentication',
  meta: [
    { name: 'description', content: 'This is the home page of my Nuxt 3 app.' }
  ]
})

const handleSignup = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    router.push({ path: route.path, query: { step: 'success' } })
  }, 3000)
}

const viewHomepage = () => {
  router.push('/dashboard')
}
</script>
