<template>
    <section>
        <h1 class="text-[#1D1F2C] font-semibold pl-1 text-lg">Add Admin</h1>
        <form class="space-y-4 p-3">
          <div class="col-span-full">
            <label
              for="photo"
              class="block text-sm font-medium leading-6 text-[#777980]"
              >Profile Img</label
            >
            <div class="mt-1 flex items-center gap-x-2">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#F4ECFB" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.42773 52.4999C13.2977 45.4715 22.1266 41 32 41C41.8734 41 50.7025 45.4716 56.5724 52.5001C50.7025 59.5285 41.8735 64 32.0002 64C22.1268 64 13.2977 59.5284 7.42773 52.4999Z"
                  fill="#FF5724"
                />
                <circle cx="32" cy="25" r="12" fill="#FF5724" />
              </svg>

              <button
                type="button"
                class="rounded-md bg-white px-2.5 text-[#FF5724] py-1.5 text-sm font-semibold"
              >
                Choose Avatar
              </button>
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-[#777980]"
              >Name</label
            >
            <div class="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Type name here. . ."
              />
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-[#777980]"
              >Email</label
            >
            <div class="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Type email here. . ."
              />
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-[#777980]"
              >Phone</label
            >
            <div class="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Type phone here. . ."
              />
            </div>
          </div>

          <div>
            <label
              for="location"
              class="block text-sm font-medium leading-6 text-[#777980]"
              >Select Role</label
            >
            <select
              placeholder="Select a role . ."
              id="location"
              name="location"
              class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option selected>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div class="flex items-center justify-between pt-6">
            <div>
              <button
                @click="showAddAdminModal = false"
                class="text-[#858D9D] border border-[#858D9D] rounded-md px-3 py-2 text-sm"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                class="text-white bg-[#690571] rounded-md px-3 py-2 text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
</template>