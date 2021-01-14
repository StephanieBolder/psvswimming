<template>
<div>
    <div v-for="event in events" :key="event.appId">
        <div class="flex flex-col mx-12">
    <div class="flex flex-row justify-between mt-8 ">
      <events-titles class="">
          {{event.name}}
      </events-titles>

      <div v-for="session in event.sessions" :key="session.id">
          {{session.date.join(' ')}}, {{event.city}}
      </div>
    </div>
      <div class="text-sm mt-4">
         Deadline: {{event.deadline.join(' ')}}
      </div>
        </div>
    </div>

        <div v-for="event in events" :key="event.appId">
          <div class="ml-8 w-10/12 flex justify-center">
          <div class="card-margin w-full ">
            <dropdown>
              <template #header>
                <card class="">
                    <events-titles class="ml-8 ">
                              <div v-for="session in event.sessions" :key="session.id">
                             <p> {{session.name}} </p>
                           </div>
                       </events-titles>
                    </card>
              </template>
              <template #content>
                <div class="flex flex-row">
                  <div v-for="session in event.sessions" :key="session.id">
                    <div v-for="sessionEvent in session.events" :key="sessionEvent.id">
                      <div class="flex flex-row">

                    <p class="text-xs mx-4"> {{sessionEvent.type}}</p>
                    <p class="text-xs mx-4"> {{sessionEvent.gender}}</p>
                </div>
                </div>
                </div>
                </div>
                <div class="button">
                  <router-link to="meetsregister">
                  <button class="rounded-sm text-xs bg-black py-1 px-3 mt-2 text-white font-light">Registreer</button>
                  </router-link>
                </div>
              </template>
            </dropdown>
            </div>
          </div>
        </div>
</div>
</template>

<script>
import Dropdown from "../../components/shared/Dropdown.vue";
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import EventsTitles from '../../components/shared/EventsTitles.vue';

export default {
  components: { Dropdown, VueTabs, VTab, EventsTitles, },
  props: {
    events: Array,
  },
  data() {
    return {
      event: {
        name: "Dutch ",
        date: "20 - 23 november",
        location: "Eindhoven",
        deadline: "12 november",
        parts: [
          {
            id: 1,
            date: "20 november",
            name: "Breaststroke",
            distances: ["500m", "100m", "200m"],
            gender: "M & V",
          },
          {
            id: 2,
            date: "21 november",
            name: "Backstroke",
            distances: ["500m", "100m", "200m"],
          },
          {
            id: 3,
            date: "22 november",
            name: "Sidestroke",
            distances: ["500m", "100m", "200m"],
          },
          {
            id: 4,
            date: "23 november",
            name: "Backstroke",
            distances: ["500m", "100m", "200m"],
          },
        ],
      },
    };
  },
};
</script>

<style>

</style>
