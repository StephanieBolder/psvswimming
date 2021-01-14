<template>
  <div class="w-full flex flex-col mt-8">
    <div class="mb-4 mx-8" v-for="train in trainings" :key="train.id">
      <dropdown>
          <template #header>
            <div class="text-sm">
                <div class="">
                    <div class="flex flex-row">
                        <events-titles class="ml-4">
                        {{ train.name }}
                        </events-titles>
                        <p class="text-xs mr-6"> {{train.date}} </p>
                        <p class="font-bold text-xs mr-12"> {{train.endplace}} </p>
                        </div>
                </div>
            </div>
          </template>
          <template #content>
              <div class="items-center flex justify-center mt-4">
              <div class="w-4/12 bg-black rounded-sm py-1 px-2 text-white text-xs text-center ">Informatie
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
        { id: 1, name: "Dutch Masters", date: "20 - 23 nov", location: "Eindhoven", endplace: "2e" },
        { id: 2, name: "Zwemmerschaps", date: "02 - 04 dec", location: "Eindhoven", endplace: "7e" },
        { id: 3, name: "PSV Zwemmen", date: "19 - 21 dec", location: "Eindhoven", endplace: "1e" },
        { id: 4, name: "Dutch Masters", date: "09 - 12 jan", location: "Eindhoven", endplace: "2e" },
        { id: 5, name: "Tilburgse zwem", date: "18 - 22 feb", location: "Eindhoven", endplace: "4e" },
        
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