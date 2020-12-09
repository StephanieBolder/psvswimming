<template>
  <div class="nav-container">
    <div> </div>
      <router-link :to="{ name: 'notifications' }">
        <div class="rounded-full p-4 border-2">
      <img class="w-6 h-6 " src="@/assets/Notification.png" alt="" /></div>
      </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  margin-right: 24px;
}
</style>
