<template>
    <div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Team Management:</span
            >
            <label
              for="team-management"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="team-management"
                  placeholder="Type name here. . ."
                  type="checkbox"
                  class="hidden peer"
                />
                <div
                  class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
          </div>
          <p class="text-[#858D9D] text-sm max-w-sm font-light">
            Add, edit, remove team members, assign roles, manage
            permissions
          </p>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Content Management:</span
            >
            <label
              for="content-management"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="content-management"
                  type="checkbox"
                  class="hidden peer"
                />
                <div
                  class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
          </div>
          <p class="text-[#858D9D] text-sm max-w-sm font-light">
            Create, edit, delete challenges, manage media requirements,
            review user-generated content
          </p>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >User Management:</span
            >
            <label
              for="user-management"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="user-management"
                  type="checkbox"
                  class="hidden peer"
                />
                <div
                  class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F2F4F7] peer-checked:dark:bg-violet-400"
                ></div>
                <div
                  class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#F2F4F7]"
                ></div>
              </span>
            </label>
          </div>
          <p class="text-[#858D9D] text-sm max-w-sm font-light">
            Access all app functionalities, view analytics, configure user
            accounts (reset password, delete account).
          </p>
        </div>
      </div>
</template>
