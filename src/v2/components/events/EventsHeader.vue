<template>
<div>
  <router-link :to="{ name: 'notifications' }">
    <div class="float-right">
        <div class="rounded-full p-4 border-2 w-16 mt-10">
      <img class="w-6 h-6 " src="@/assets/Notification.png" alt="" /></div></div></router-link>
  <page-header>
    
    <template #heading>
      <div class="text-3xl font-bold ">
            Meets
          </div>
        <div class="bg-red-400 z-40 -mt-3 -ml-1 py-1 w-16 "></div></template>
    <template #support>Check meets and register</template>
  </page-header>
</div>
</template>

<script>
import PageHeader from "../../shared/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>

<style scoped></style>
