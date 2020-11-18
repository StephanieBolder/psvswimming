<template>
  <div class="nav-container">
    <div> </div>
      <router-link :to="{ name: 'notifications' }">
      <img class="icon" src="@/assets/Notification.png" alt="" />
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
  margin: 32px 0px;
}


.icon {
  width: 16px;
  height: 16px;
}
</style>
