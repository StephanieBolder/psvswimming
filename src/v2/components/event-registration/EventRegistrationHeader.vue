<template>

  <page-header>
    
    <template #heading> <div class="text-xl font-bold mt-4 ">Register for meet</div>
    <div class="bg-red-400 z-40 -mt-2.5 py-1 w-40 "></div></template>
    <template #support>Check the events you want to compete in</template>
  </page-header>
</template>

<script>
import PageHeader from "../../shared/PageHeader.vue";
import TopNav from "../../shared/TopNav.vue";


export default {
  components: {
    PageHeader,
    TopNav
  },
};
</script>

<style></style>
