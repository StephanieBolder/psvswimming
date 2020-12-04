<template>
  <div>
    <vue-tabs>
      <!-- new events -->
      <v-tab title="New">
<<<<<<< HEAD

<!-- card 1 -->
        <div class="card-margin">
          <dropdown>
            <template #header>
  <div class="trainings">
    <div class="training-container">
      <card>
        <div class="training-details-wrapper">
          <div class="training-details">
            <div class="circle"></div>
            <div class="test">
            <p class="font-bold z-index">
              Dutch Masters
            </p>
            <p class="location-text">
              27 nov 2020, Eindhoven
            </p>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
            </template>
            <template #content>
              <v-divider style="margin-bottom: 8px;"></v-divider>
              <div class="loremipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                </div>
                <div class="button">
                   <router-link :to="{ name: 'eventDetail' }">
                <button class="modal-button">Register</button>
              </router-link>
                </div>
              </template>
        
          </dropdown>
        </div>

<!-- card 2 -->
        <div  class="card-margin">
          <dropdown>
            <template #header>
  <div class="trainings">
    <div class="training-container">
      <card>
        <div class="training-details-wrapper">
          <div class="training-details">
            <div class="circle"></div>
            <p class="training-details-text">
              Eindhoven PSV champ.
            </p>
            <p class="location-text">
              2 dec 2020, Eindhoven
            </p>
          </div>
        </div>
      </card>
    </div>
  </div>
            </template>
            <template #content>
              <v-divider style="margin-bottom: 8px;"></v-divider>
              <div class="loremipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                </div>
                <div class="button">
                <router-link :to="{ name: 'eventDetail' }">
                <button class="modal-button">Register</button>
              </router-link>
                </div>
              </template>
        
          </dropdown>
        </div>
      

<!-- card 3 -->
        <div class="card-margin">
          <dropdown>
            <template #header>
  <div class="trainings">
    <div class="training-container">
      <card>
        <div class="training-details-wrapper">
          <div class="training-details">
            <div class="circle"></div>
            <p class="training-details-text">
              Tilburgse Zwemmerschap
            </p>
            <p class="location-text">
              19 jan 2020, Tilburg
            </p>
          </div>
        </div>
      </card>
    </div>
  </div>
            </template>
            <template #content>
              <v-divider style="margin-bottom: 8px;"></v-divider>
              <div class="loremipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
=======
        <!-- card 1 -->
        <div v-for="event in newEvents" :key="event.id">
          <div class="card-margin">
            <dropdown>
              <template #header>
                <div class="trainings">
                  <div class="training-container">
                    <card>
                      <div class="training-details-wrapper">
                        <div class="training-details">
                          <div class="circle"></div>
                          <p class="training-details-text">
                            {{event.name}}
                          </p>
                          <p>
                            27 nov 2020, {{event.location}}
                          </p>
                        </div>
                      </div>
                    </card>
                  </div>
                </div>
              </template>
              <template #content>
                <v-divider style="margin-bottom: 8px;"></v-divider>
                <div class="loremipsum">
                  {{event.description}}
>>>>>>> api-integration
                </div>
                <div class="button">
                  <primary-button class="modal-button">Register</primary-button>
                </div>
              </template>
<<<<<<< HEAD
        
          </dropdown>
        </div>

<!-- card 4 -->
        <div class="card-margin">
          <dropdown>
            <template #header>
  <div class="trainings">
    <div class="training-container">
      <card>
        <div class="training-details-wrapper">
          <div class="training-details">
            <div class="circle"></div>
            <p class="training-details-text">
              Dutch Masters
            </p>
            <p class="location-text">
              20 jan 2020, Rotterdam
            </p>
            
          </div>
        </div>
      </card>
    </div>
  </div>
            </template>
            <template #content>
              <v-divider style="margin-bottom: 8px;"></v-divider>
              <div class="loremipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                </div>
                <div class="button">
                <router-link :to="{ name: 'eventDetail' }">
                <button class="modal-button">Register</button>
              </router-link>
                </div>
              </template>
        
          </dropdown>
        </div>
        </v-tab>

=======
            </dropdown>
          </div>
        </div>
      </v-tab>
>>>>>>> api-integration

      <!-- registered events -->
      <v-tab title="Registered">
        <!-- card 1 -->
<<<<<<< HEAD
        <div class="card-margin">
          <dropdown>
            <template #header>
  <div class="trainings">
    <div class="training-container">
      <card>
        <div class="training-details-wrapper">
          <div class="training-details">
            <div class="circle"></div>
            <p class="training-details-text">
              Dutch Masters
            </p>
            <p class="location-text">
              07 nov 2020, Rotterdam
            </p>
          </div>
        </div>
      </card>
    </div>
  </div>
            </template>
            <template #content>
              <v-divider style="margin-bottom: 8px;"></v-divider>
              <div class="loremipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                </div>
                <div class="flex-row">
                  <p>Status:</p>
                  <p class="bold">Registered</p>
                  
                </div>
              </template>
        
          </dropdown>
        </div>


<!-- card 2 -->
        <div class="card-margin">
          <dropdown>
            <template #header>
  <div class="trainings">
    <div class="training-container">
      <card>
        <div class="training-details-wrapper">
          <div class="training-details">
            <div class="circle"></div>
            <p class="training-details-text">
              Bredase kampioenschappen
            </p>
            <p class="location-text">
              20 nov 2020, Breda
            </p>
          </div>
        </div>
      </card>
    </div>
  </div>
            </template>
            <template #content>
              <v-divider style="margin-bottom: 8px;"></v-divider>
              <div class="loremipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
=======
        <div v-for="event in registeredEvents" :key="event.id">
          <div class="card-margin">
            <dropdown>
              <template #header>
                <div class="trainings">
                  <div class="training-container">
                    <card>
                      <div class="training-details-wrapper">
                        <div class="training-details">
                          <div class="circle"></div>
                          <p class="training-details-text">
                            Dutch Masters
                          </p>
                          <p>
                            07 nov 2020, Rotterdam
                          </p>
                        </div>
                      </div>
                    </card>
                  </div>
                </div>
              </template>
              <template #content>
                <v-divider style="margin-bottom: 8px;"></v-divider>
                <div class="loremipsum">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis.
>>>>>>> api-integration
                </div>
                <div class="flex-row">
                  <p>Status:</p>
                  <p class="bold">Registered</p>
                </div>
              </template>
            </dropdown>
          </div>
        </div>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import Dropdown from "../../shared/Dropdown.vue";
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import EventService from "../../../services/EventService";
const eventService = new EventService();

export default {
  components: { Dropdown, VueTabs, VTab },

  data() {
    return {
      newEvents: [{name: 'Dutch masters', location: "Eindhoven", description:"Lorem Ipsum"},{name: 'Wemeldinge masters', location: "Wemeldinge", description:"Lorem Ipsum"},{name: 'Dutch masters', location: "Eindhoven", description:"Lorem Ipsum"}],
      registeredEvents: [],
    };
  },
  mounted() {
    console.log("hello");
    this.getNewEvents();
    this.getAllEventsWhereAthleteIsParticipating(14);
  },
  methods: {
    getNewEvents() {
      eventService.getAllEligibleEventsForCurrentUser().then((response) => {
        if (response.status == 200) {
          this.newEvents = response.data;
          console.log(response.data);
        }
      });
    },
    getAllEventsWhereAthleteIsParticipating(athleteId) {
      eventService
        .getAllEventsWhereAthleteIsParticipating(athleteId)
        .then((response) => {
          if (response.status == 200) {
            this.registeredEvents = response.data;
            console.log(response.data);
          }
        });
    },
  },
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

.event-name {
  z-index: 5;
  font-weight: 800;
}

.training-details-text {
  z-index: 5;
  font-weight: 700;
}

.training-details {
  width: 90%;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 5;
  align-items: center;
}

.training-details-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  margin-left: -12px;
  position: absolute;
  z-index: 1;
  width: 32px;
  height: 32px;
  border-radius: 2000px;
  background: linear-gradient(#daf4ff, #f4fafd);
}

.training-container {
  margin: 0px 0px;
}

.loremipsum {
  font-weight: 200;
  width: 95%;
  margin-left: 16px;
}

.button {
  display: flex;
  justify-content: center;
  color: linear-gradient(#daf4ff, #f4fafd);
}

.card-margin {
  margin-bottom: 20px;
}

.v-btn {
  margin-bottom: -12px;
  margin-top: 12px;
}

.bold {
  font-weight: 700;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px 0px;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  text-align: center;
}

.modal-button {
  margin-top: 16px;
}
<<<<<<< HEAD

.location-text {
  font-weight: 100;
  font-size: 12px;
}

.test {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

=======
>>>>>>> api-integration
</style>
