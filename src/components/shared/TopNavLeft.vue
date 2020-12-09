<template>
  <div class="nav-container mt-12 -mb-16 ">
    
      <router-link :to="{ name: 'profile' }">
        <div class="rounded-full p-4 border-2">
      <img class="w-6 h-6 " src="@/assets/Arrow - Left 2.png" alt="" /></div>
      </router-link>
      <div> </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  margin-left: 24px;
}
</style>
