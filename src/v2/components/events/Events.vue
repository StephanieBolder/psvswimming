<template>
  <div>
    <vue-tabs>
      <v-tab title="New">
        <div>
          <dropdown>
            <template #header>
              <div
                style="display: flex; justify-content: space-between; align-items: center"
              >
                <p>
                  Hello
                </p>
                <p>
                  Datum
                </p>
              </div>
            </template>
            <template #content>Hello</template>
          </dropdown>
        </div>
      </v-tab>
      <v-tab title="Registered">
        <div>
          <dropdown>
            <template #header>Helddlo</template>
            <template #content>Hello</template>
          </dropdown>
        </div>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import Dropdown from "../../shared/Dropdown.vue";
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
export default {
  components: { Dropdown, VueTabs, VTab },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.active_tab {
  border: none !important;
  color: black !important;
  font-weight: 500 !important;
}

.vue-tabs .nav-tabs {
  border-bottom: none !important;
  margin-bottom: 32px;
  font-family: inherit;
}

.active {
  border-bottom: 2px solid #707070;
}

p {
  margin-bottom: 0px !important;
}
</style>
