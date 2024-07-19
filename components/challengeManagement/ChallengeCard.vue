<template>
    <div class="bg-white border-gray-50 p-4 rounded-lg border-[0.5px] shadow-md mb-4">
      <div class="flex justify-between items-center border-b border-dotted border-gray-200 pb-6">
        <div class="flex items-center gap-x-3">
          <input type="checkbox" checked />
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#E0E2E7"/>
            </svg>
          <p class="text-sm text-gray-500">29 Dec 2022</p>
        </div>
        <div class="flex items-center gap-x-3">
          <div class="text-white bg-[#690571] px-3 py-2 text-xs rounded-full">User-generated</div>
         <img src="@/assets/icons/more-options.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-between mt-5 pt-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div class="w-12 h-12 flex items-center justify-center">
              <img src="@/assets/img/challenge.png" alt="icon" class="w-8 h-8" />
            </div>
            <div class="ml-4">
              <h2 class="text-sm font-medium">Create 15 comics</h2>
              <p class="text-xs text-gray-500">Created by <span class="text-[#690571]">John something</span></p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500">Tasks</p>
          <p class="text-xs">121</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Created</p>
          <p class="text-xs">14 Jan 2022</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Participants</p>
          <p class="text-xs">1,000</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Start Date</p>
          <p>14 Jan 2022</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Due Date</p>
          <p class="text-xs">24 May 2023</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Goal</p>
          <p class="text-[#1D1F2C] text-xs flex gap-x-3">
            <img src="@/assets/icons/health.svg" alt="icon" class="w-4 h-4" />
            Health</p>
        </div>
        <div>
          <p class="text-xs text-green-500 bg-[#E9FAF7] px-3 py-1.5 rounded-lg">Ongoing</p>
        </div>
      </div>
    </div>
  </template>
  