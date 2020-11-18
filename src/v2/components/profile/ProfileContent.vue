<template>
  <vue-tabs>
    <v-tab title="Training">
      <training />
    </v-tab>
    <v-tab title="Agenda">
      <agenda />
    </v-tab>
    <v-tab title="Statistics">
      Statistics
    </v-tab>
  </vue-tabs>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import Training from "./Training.vue";
import Agenda from "./Agenda.vue";
export default {
  components: {
    VueTabs,
    VTab,
    Training,
    Agenda,
  },
};
</script>

<style>
.nav-tabs {
  display: flex;
  justify-content: space-between;
}

.v-application .title {
  font-weight: 100 !important;
  font-size: 16px !important;
}

</style>
