

   <template>
    <div class="bg-white rounded-2xl border border-gray-50 shadow-md p-6 flex flex-col">
      <div class="flex justify-between items-center mb-4">
      <div>
        <h2 class="text-xl font-semibold">All Admins</h2>
        <p class="text-gray-500 my-0 py-0 text-xs">Based on Roles</p>
      </div>
        <button class="text-gray-500">
          <img src="@/assets/icons/more-options.svg" alt="options" />
        </button>
      </div>

    <h3 class="text-2xl font-bold my-0 py-0">8</h3>
      <div class="flex space-x-1 mb-4">
        <span class="h-2 flex-1 bg-purple-700 rounded"></span>
        <span class="h-2 flex-1 bg-pink-500 rounded"></span>
        <span class="h-2 flex-1 bg-orange-500 rounded"></span>
        <span class="h-2 flex-1 bg-blue-500 rounded"></span>
      </div>
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="w-3 h-3 bg-purple-700 rounded-full mr-2"></span>
            <span class="flex-1 text-[#667085]">Super Admins</span>
          </div>
          <span class="flex items-center">
            <span class="text-gray-700">1</span>
            <button class="text-gray-500 ml-2">
              <img src="@/assets/icons/edit-pen.svg" alt="edit pen" />
            </button>
          </span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
            <span class="flex-1 text-[#667085]">Content Admins</span>
          </div>
          <span class="flex items-center">
            <span class="text-gray-700">4</span>
            <button class="text-gray-500 ml-2">
               <img src="@/assets/icons/edit-pen.svg" alt="edit pen" />
            </button>
          </span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
            <span class="flex-1 text-[#667085]">Challenge Admins</span>
          </div>
          <span class="flex items-center">
            <span class="text-gray-700">7</span>
            <button class="text-gray-500 ml-2">
                 <img  src="@/assets/icons/edit-pen.svg" alt="edit pen"/>
            </button>
          </span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span class="flex-1 text-[#667085]">User Admins</span>
          </div>
          <span class="flex items-center">
            <span class="text-gray-700">10</span>
            <button class="text-gray-500 ml-2">
                 <img src="@/assets/icons/edit-pen.svg" alt="edit pen" />
            </button>
          </span>
        </div>
      </div>
      <div class="w-full pt-4">
        <button @click="handleAddRole" class="mt-4 w-full py-4 px-4 bg-[#FF997A] text-sm text-white rounded-lg">Add role</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const emit = defineEmits(['addRole'])
  const handleAddRole = () => {
    emit('addRole')
  }
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  