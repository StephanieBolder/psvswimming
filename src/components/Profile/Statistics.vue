<template>
  <div class="w-full flex flex-col justify-center mt-8">
    <div class="mb-4 flex justify-center mx-8" v-for="train in trainings" :key="train.id">
      <dropdown>
          <template #header>
            <div class="text-sm flex justify-center">
                <div class="">
                    <div class=""></div>
                        <events-titles class="">
                        {{ train.date }}
                        </events-titles>
                </div>
            </div>
          </template>
          <template #content>
              <div class="items-center flex justify-center mt-4">
              <div class="w-4/12 bg-black rounded-sm py-1 px-2 text-white text-xs text-center ">Wijzigen
              </div>
              </div>
          </template>
      </dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from '../shared/Dropdown.vue';
import EventsTitles from '../shared/EventsTitles.vue';

export default {
  components: { Dropdown, EventsTitles },
  data() {
    return {
      trainings: [
        { id: 1, date: "19 november 2020", location: "Eindhoven" },
        { id: 2, date: "27 december 2020", location: "Tilburg" },
        { id: 3, date: "03 januari 2021", location: "Eindhoven" },
        { id: 4, date: "05 januari 2021", location: "Tilburg" },
        { id: 4, date: "10 januari 2021", location: "Tilburg" },
        
      ],
    };
  },
};
</script>

<style scoped>

.tab-content {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
}

</style>