
<template>
  <div class="nav-height">
    <v-bottom-navigation class="nav">
      <v-btn>
         <img class="icon" src="@/assets/Home.png" alt="">
      </v-btn>
      <v-btn>
        <img class="icon" src="@/assets/Activity.png" alt="">
      </v-btn>
      <v-btn>
        <img class="icon" src="@/assets/Profile.png" alt="">
      </v-btn>
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
