<template>
    <div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >User Accounts:</span
            >
            <label
              for="user-accounts"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="user-accounts"
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
            Search for specific users, reset forgotten passwords, or manage user account statuses.
          </p>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >User Engagement(data analytics):</span
            >
            <label
              for="user-engagement"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="user-engagement"
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
            Access basic user engagement data, including challenge participation rates and completion metrics
          </p>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >User Feedback::</span
            >
            <label
              for="user-feedback"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="user-feedback"
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
            Access detailed user feedback data. 
          </p>
        </div>
      </div>
</template>