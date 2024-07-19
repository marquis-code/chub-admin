<template>
  <main>
    <section class="space-y-10">
      <section
        class="bg-white shadow-sm border border-gray-50 rounded-2xl flex justify-between items-center px-6"
      >
        <h1>Overview</h1>
        <div class="relative w-3/12 py-6">
          <input
            type="search"
            placeholder="Search...."
            class="w-full border-b pl-6 text-sm outline-none"
          />
          <img
            src="@/assets/icons/search.svg"
            alt="search icon"
            class="absolute left-0 top-6"
          />
          <img
            src="@/assets/icons/notifications.svg"
            alt=""
            class="absolute right-0 top-5 h-6 w-6"
          />
        </div>
      </section>
      <section
        class="flex justify-between bg-white shadow-sm border border-gray-50 rounded-2xl p-6"
      >
        <div>
          <h1 class="text-4xl">Manage your team</h1>
          <p class="text-sm text-[#777980] max-w-xs">
            Create and manage admins, content admins and challenge admins
          </p>
        </div>
        <div class="flex gap-x-4">
          <div
            @click="addTeamMember"
            class="h-40 w-40 border cursor-pointer border-dashed border-[#690571] rounded-2xl relative"
          >
            <div class="absolute top-3 left-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                  fill="#292D32"
                />
                <path
                  d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                  fill="#292D32"
                />
              </svg>
            </div>
            <div
              class="flex justify-center items-center flex-col pt-14 gap-y-2"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 52 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.4175 6.39627C30.6325 5.03627 28.4225 4.25 26 4.25C20.135 4.25 15.375 9.01 15.375 14.875C15.375 20.74 20.135 25.5 26 25.5C31.865 25.5 36.625 20.74 36.625 14.875"
                  stroke="#690571"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44.2538 46.75C44.2538 38.5263 36.0726 31.875 26.0001 31.875C15.9276 31.875 7.74634 38.5263 7.74634 46.75"
                  stroke="#690571"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-[#690571] text-xs">Add a team member</p>
            </div>
          </div>
          <img src="@/assets/img/stat1.png" class="h-40 w-40" alt="stat card" />
          <img src="@/assets/img/stat2.png" class="h-40 w-40" alt="stat card" />
          <img src="@/assets/img/stat3.png" class="h-40 w-40" alt="stat card" />
          <img src="@/assets/img/stat4.png" class="h-40 w-40" alt="stat card" />
        </div>
      </section>
      <section class="bg-white shadow-sm border border-gray-50 rounded-2xl">
        <div class="border-b border-gray-50">
          <div class="flex justify-between items-center px-6 pt-5">
            <h1 class="text-xl font-semibold">Team members</h1>
            <div class="flex justify-end items-end">
              <div class="flex gap-x-5">
                <div class="border rounded-md text-xs flex">
                  <button
                    class="px-4 py-1.5 my-0.5 rounded-lg text-[#667085] font-semibold"
                  >
                    All
                  </button>
                  <button
                    class="px-4 py-1.5 my-0.5 rounded-lg font-semibold text-[#667085] block"
                  >
                    All Admin
                  </button>
                  <button
                    class="px-4 py-1.5 my-0.5 rounded-lg text-[#690571] font-semibold block bg-[#F4ECFB]"
                  >
                    Super Admin
                  </button>
                  <button
                    class="px-4 py-1.5 my-0.5 rounded-lg font-semibold text-[#667085] block"
                  >
                    Content Admin
                  </button>
                  <button
                    class="px-4 py-1.5 my-0.5 rounded-lg font-semibold text-[#667085] block"
                  >
                    Challenge Admin
                  </button>
                  <button
                    class="px-4 py-1.5 my-0.5 rounded-lg font-semibold text-[#667085] block"
                  >
                    User Admin
                  </button>
                </div>
                <div class="relative">
                  <img
                    src="@/assets/icons/search.svg"
                    alt="date-picker"
                    class="absolute left-3 top-2"
                  />
                  <input
                    type="text"
                    placeholder="Search admins. . ."
                    class="px-4 py-2 pl-10 text-sm border rounded-md flex-grow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6"
          >
            <TeamManagementTeamMemberCard
              v-for="(member, index) in members"
              :key="index"
              :avatar="member.avatar"
              :name="member.name"
              :role="member.role"
              :roleClass="member.roleClass"
              :email="member.email"
              :textColor="member.textColor"
              :bgColor="member.bgColor"
              :lastActive="member.lastActive"
            />
          </div>
        </div>
      </section>

      <div class="p-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="lg:col-span-1">
            <TeamManagementAllAdminsSummary @addRole="handleAddRole" />
          </div>
          <div class="lg:col-span-2">
            <TeamManagementActivityFeed />
          </div>
        </div>
      </div>
    </section>
    <CoreBaseModal
      :show="showAddAdminModal"
      @update:show="showAddAdminModal = false"
    >
      <TeamManagementCreateAdminForm />
    </CoreBaseModal>

    <CoreBaseModal
      :show="showAddRoleModal"
      @update:show="showAddRoleModal = false"
    >
      <section class="p-2">
        <div class="border-b border-gray-100 pb-4">
          <h1 class="text-[#1D1F2C] font-semibold pl-1 text-lg">Add Admin</h1>
          <p class="text-[#667085] text-sm">Define role and its permissions</p>
        </div>

        <div class="">
          <div class="mb-6">
            <TeamManagementRoleInformationInput />
            <TeamManagementColorTags />
          </div>

          <TeamManagementPermissionTabs />

          <div class="flex justify-between items-center pt-6 border-t border-gray-100">
            <div>
              <button
                class="mr-4 px-6 py-2 bg-white border border-[#858D9D] rounded-lg text-sm font-light"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                class="px-6 py-2 bg-[#690571] text-white rounded-lg text-sm font-medium"
              >
                Save Role
              </button>
            </div>
          </div>
        </div>
      </section>
    </CoreBaseModal>
  </main>
</template>

<script setup lang="ts">
import avatar1 from "@/assets/img/avatar1.png";
import avatar2 from "@/assets/img/avatar2.png";
import avatar3 from "@/assets/img/avatar3.png";
import avatar4 from "@/assets/img/avatar4.png";
import avatar5 from "@/assets/img/avatar5.png";
import avatar6 from "@/assets/img/avatar6.png";
definePageMeta({
  layout: "dashboard",
  // middleware: ['auth']
});

const showAddAdminModal = ref(false);
const showAddRoleModal = ref(false);

const addTeamMember = () => {
  showAddAdminModal.value = true;
};

const handleAddRole = () => {
  showAddRoleModal.value = true;
};

const members = ref([
  {
    avatar: avatar1,
    name: "Lisa Greg",
    role: "Super Admin",
    roleClass: "text-purple-700",
    textColor: "#690571",
    bgColor: "#F4ECFB",
    email: "lisa_g@mail.com",
    lastActive: "10 mins ago",
  },
  {
    avatar: avatar2,
    name: "Mohammed Karim",
    role: "Super Admin",
    roleClass: "text-purple-700",
    textColor: "#690571",
    bgColor: "#F4ECFB",
    email: "m_karim@mail.com",
    lastActive: "10 mins ago",
  },
  {
    avatar: avatar3,
    name: "Mohammed Karim",
    role: "Super Admin",
    roleClass: "text-purple-700",
    textColor: "#690571",
    bgColor: "#F4ECFB",
    email: "m_karim@mail.com",
    lastActive: "10 mins ago",
  },
  {
    avatar: avatar4,
    name: "John Bushmill",
    role: "Content Admin",
    roleClass: "text-purple-700",
    email: "john_b@mail.com",
    textColor: "#FF2BEA",
    bgColor: "#FFEFFE",
    lastActive: "10 mins ago",
  },
  {
    avatar: avatar5,
    name: "Josh Adam",
    role: "Challenge Admin",
    roleClass: "text-purple-700",
    email: "josh_adam@mail.com",
    textColor: "#FF2BEA",
    bgColor: "#FFEFFE",
    lastActive: "10 mins ago",
  },
  {
    avatar: avatar6,
    name: "Linda Blair",
    role: "User Admin",
    roleClass: "text-purple-700",
    email: "lindablair@mail.com",
    textColor: "#FF2BEA",
    bgColor: "#FFEFFE",
    lastActive: "10 mins ago",
  },
]);
</script>
