<template>
    <div class="mb-3">
        <h2 class="text-xs text-[#A3A9B6] font-medium">ROLE PERMISSIONS</h2>
        <div class="mt-1">
          <div>
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a tab</label>
              <select
                id="tabs"
                name="tabs"
                class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Administrator</option>
                <option>Challenge Management</option>
                <option selected>Content Management</option>
                <option>User Management</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <div class="border-b border-gray-50">
                <nav class="-mb-px flex space-x-4" aria-label="Tabs">
                  <a
                    href.prevent="#" @click="setActiveTab('administrator')"
                    :class="[activeTab === 'administrator' ? 'border-[#690571] text-[#690571]' : 'border-transparent text-gray-500']"
                    class="whitespace-nowrap border-b px-1 py-3 text-xs font-medium cursor-pointer"
                    aria-current="page"
                    >Administrator</a
                  >
                  <a
                    href.prevent="#" @click="setActiveTab('challenge-management')"
                    :class="[activeTab === 'challenge-management' ? 'border-[#690571] text-[#690571]' : 'border-transparent text-gray-500']"
                    class="whitespace-nowrap border-b px-1 py-3 text-xs font-medium cursor-pointer"
                    >Challenge Management</a
                  >
                  <a
                    href.prevent="#" @click="setActiveTab('content-management')"
                    :class="[activeTab === 'content-management' ? 'border-[#690571] text-[#690571]' : 'border-transparent text-gray-500']"
                    class="whitespace-nowrap border-b px-1 py-3 text-xs font-medium cursor-pointer"
                    >Content Management</a
                  >
                  <a
                    href.prevent="#" @click="setActiveTab('user-management')"
                    :class="[activeTab === 'user-management' ? 'border-[#690571] text-[#690571]' : 'border-transparent text-gray-500']"
                    class="whitespace-nowrap border-b px-1 py-3 text-xs font-medium cursor-pointer"
                    >User Management</a
                  >
                </nav>
              </div>
            </div>
          </div>
          <TeamManagementAdminPermissions v-if="activeTab === 'administrator'" />
          <TeamManagementChallengeMgtPermissions v-if="activeTab === 'challenge-management'" />
          <TeamManagementContentMgtPermissions v-if="activeTab === 'content-management'" />
          <TeamManagementUserMgtPermissions v-if="activeTab === 'user-management'" />
        </div>
      </div>
</template>


<script setup lang="ts">
const activeTab = ref('administrator')
const setActiveTab = (data: any) => {
  activeTab.value = data
}
</script>
