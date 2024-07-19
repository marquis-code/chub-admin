<template>
    <div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >User-generated Content::</span
            >
            <label
              for="user-generated-content:"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="user-generated-content:"
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
            Moderate or remove inappropriate user-generated content
          </p>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Feature Content:</span
            >
            <label
              for="feature-content"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="feature-content"
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
            Feature specific user-generated content or challenges.
          </p>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Announcements:</span
            >
            <label
              for="announcements"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="announcements"
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
            Send announcements or targeted messages to specific user groups.
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-[#1D1F2C] text-sm font-medium"
              >Archive Challenge:</span
            >
            <label
              for="archive-challange"
              class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span class="relative">
                <input
                  id="archive-challange"
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
            Archive older challenges.
          </p>
        </div>
      </div>
</template>
