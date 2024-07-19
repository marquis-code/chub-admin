   <template>
    <div class="bg-white rounded-lg border border-gray-50 shadow-md p-4">
      <h2 class="text-xl font-bold mb-4">Activity</h2>
      <div class="relative space-y-4">
        <div class="absolute left-2 top-6 bottom-6 w-px border-dashed border-gray-300 border"></div>
        <div v-for="(activity, index) in activities" :key="index" class="relative flex items-start">
          <span class="w-4 h-4 bg-purple-700 rounded-full mt-1 mr-4 relative z-10"></span>
          <div class="flex-1">
            <p class="font-semibold text-base text-[#1D1F2C]">{{ activity.title }}</p>
            <p class="text-sm text-[#4A4C56]  pt-1">{{ activity.description }}</p>
            <div v-if="activity.roleFrom && activity.roleTo" class="flex items-center mt-2 space-x-2">
              <span class="text-xs font-medium bg-[#FFEFFE] text-[#FF2BEA] rounded-xl py-1 px-2">{{ activity.roleFrom }}</span>
              <span class="text-xs font-medium text-gray-500">→</span>
              <span class="text-xs font-medium bg-[#F4ECFB] text-[#690571] rounded-xl py-1 px-2">{{ activity.roleTo }}</span>
            </div>
          </div>
          <span class="text-gray-400 text-xs ml-4">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activities = ref([
    {
      title: 'Lisa Role Changed',
      description: 'You change the status to “Super Admin”',
      roleFrom: 'Content Admin',
      roleTo: 'Super Admin',
      time: '2 days ago'
    },
    {
      title: 'Lisa Role Changed',
      description: 'You change the status to “Super Admin”',
      roleFrom: 'Content Admin',
      roleTo: 'Super Admin',
      time: '2 days ago'
    },
    {
      title: 'Greg created new challenge',
      description: 'Greg created a challenge “25 squats”',
      roleFrom: '',
      roleTo: '',
      time: '2 days ago'
    },
    {
      title: 'New Role Created',
      description: 'You created new role “Challenge Manager”',
      roleFrom: '',
      roleTo: '',
      time: '5 Jan 2023, 15:15'
    },
    {
      title: 'Greg created new challenge',
      description: 'Greg created a challenge “25 squats”',
      roleFrom: '',
      roleTo: '',
      time: '2 days ago'
    },
    {
      title: 'New Role Created',
      description: 'You created new role “Challenge Manager”',
      roleFrom: '',
      roleTo: '',
      time: '5 Jan 2023, 15:15'
    },
  ]);
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  