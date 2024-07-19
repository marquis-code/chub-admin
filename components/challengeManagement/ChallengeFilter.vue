<template>
    <div class="flex justify-between space-x-4 mb-4">
      <div class="border rounded-md text-xs">
        <button class="px-4 py-2 border-b-2 text-[#690571] bg-[#F4ECFB] rounded-md m-0.5">All</button>
      <button class="px-4 py-2 text-gray-500">Ongoing</button>
      <button class="px-4 py-2 text-gray-500">Scheduled</button>
      <button class="px-4 py-2 text-gray-500">Archived</button>
      <button class="px-4 py-2 text-gray-500">Ended</button>
      </div>
   <div class="flex space-x-4">
    <div class="relative">
      <img src="@/assets/icons/search.svg" alt="date-picker" class="absolute left-3 top-2" />
      <input type="text" placeholder="Search for a challenge" class="px-4 py-2 pl-10 text-sm border rounded-md flex-grow" />
     </div>
      <button class="px-4 py-1 text-gray-500 border rounded-md text-xs flex items-center gap-x-3">
        <img src="@/assets/icons/date-picker.svg" alt="date-picker" />
        Select Date</button>
      <button class="px-4 py-1 text-gray-500 border rounded-md text-xs flex items-center gap-x-3">
        <img src="@/assets/icons/filter.svg" alt="date-picker" />
        Filters</button>
   </div>
    </div>
  </template>
  