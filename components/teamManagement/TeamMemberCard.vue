<template>
    <div class="border border-gray-50 bg-white p-4 rounded-lg shadow-sm relative">
      <input type="checkbox" class="absolute left-4 top-4" />
      <img src="@/assets/icons/more.svg" class="absolute right-4 top-4" alt="more" />
      <div class="">
        <div class="flex items-center justify-center flex-col gap-y-2">
         <img :src="avatar" alt="avatar" class="rounded-full w-16 h-16" />
         <h3 class="font-medium text-sm">{{ name }}</h3>
         <span :class="`text-xs text-[${textColor}] bg-[${bgColor}] px-2 py-1 rounded-2xl`">{{ role }}</span>
        </div>
        <div class="flex items-center flex-col justify-center gap-y-2">
          <div class="border border-dotted border-gray-50 w-full my-2"></div>
          <div class="text-sm text-gray-500 flex justify-between items-center w-full">
            <p class="text-xs">Email:</p>
             <p class="text-[#4A4C56] font-semibold text-xs">
              {{ email }}
             </p>
            </div>
          <div class="text-sm text-gray-500 flex justify-between items-center w-full">
            <p class="text-xs">Last Active: </p>
            <p class="text-[#4A4C56] font-semibold text-xs">{{ lastActive }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps<{
    name: string
    role: string
    email: string
    lastActive: string
    avatar: string
    textColor: string
    bgColor: string
  }>()
  </script>
  