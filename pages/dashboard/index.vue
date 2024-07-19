<script setup lang="ts">
const router = useRouter()
definePageMeta({
  layout: "dashboard",
  // middleware: ['auth']
});

onMounted(() => {
  router.push('/dashboard/team')
})
</script>
