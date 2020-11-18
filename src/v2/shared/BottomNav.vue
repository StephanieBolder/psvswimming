<template>
  <div class="nav-height">
    <v-bottom-navigation class="nav">
      <router-link :to="{ name: 'home' }">
        <img class="icon" src="@/assets/Home.png" alt="" />
      </router-link>
      <router-link :to="{ name: 'notifications' }">
        <img class="icon" src="@/assets/Activity.png" alt="" />
      </router-link>
      <router-link :to="{ name: 'profile' }">
        <img class="icon" src="@/assets/Profile.png" alt="" />
      </router-link>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  box-shadow: none !important;
}

.icon {
  width: 32px;
  height: 32px;
}

.nav-height {
  height: 50px;
}
</style>
