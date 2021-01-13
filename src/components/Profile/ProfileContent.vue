<template>
<div class="flex justify-center items-center">
  <vue-tabs class="mt-8 flex flex-col">
    <v-tab class="font-display" title="Training">
      <training />
    </v-tab>
    <v-tab title="Agenda">
      <stati />
    </v-tab>
    <v-tab title="Statistieken">
      <statistics />
    </v-tab>
  </vue-tabs>
</div>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import Training from '../profile/Training';
import Statistics from '../profile/Statistics';

export default {
  components: {
    VueTabs,
    VTab,
    Training,
    Statistics,
  },
};
</script>

<style>
.v-tab {
  background: black !important;
  justify-content: space-between;

}

.v-application .title {
  font-family: 'Josefin Sans', sans-serif !important;
  font-weight: 100 !important;
  font-size: 14px !important;
  color: black !important;
}

.active_tab .tabs__link{
  color: black !important;
}

.nav-tabs-wrapper {
  display: flex !important;
  justify-content: center !important;
}


</style>
