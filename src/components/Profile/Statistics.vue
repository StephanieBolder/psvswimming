<template>
<div>
    <div v-for="event in newEvents" :key="event.id">
          <div class="card-margin">
            <dropdown>
              <template>
                <div class="trainings">
                  <div class="training-container">
                    <card>
                      <div class="training-details-wrapper">
                        <div class="training-details">
                          <div class="circle"></div>
                          <p class="training-details-text">
                            test
                          </p>
                          <p>
                            27 nov 2020
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
                  test
                </div>
                <div class="button">
                  <primary-button class="modal-button">Register</primary-button>
                </div>
              </template>
            </dropdown>
          </div>
        </div>








</div>
</template>







<script>
import Card from "../shared/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      statistics: [
        { id: 1, date: "27 nov 2020", location: "Eindhoven" },
        { id: 2, date: "7 dec, 2020", location: "Tilburg" },
        { id: 3, date: "14 dec, 2020", location: "Eindhoven" },
        { id: 4, date: "21 dec, 2020", location: "Tilburg" },
      ],
    };
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

.training-details-location {
  z-index: 5;
  font-weight: 500;
  margin-left: 20px;
}

.training-details-date {
  z-index: 5;
  font-weight: 200;
  font-size: 14px;
  margin-right: 20px;
}

.training-details {
  width: 90%;
  position: relative;
  display: flex;
  z-index: 5;
  align-items: center;
}

.training-details-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  margin-left: 8px;
  position: absolute;
  z-index: 1;
  width: 32px;
  height: 32px;
  border-radius: 2000px;
  background: linear-gradient(#daf4ff, #f4fafd);
}

.training-container {
  margin: 13px 0px;
  display: flex;
  justify-content: center;
}
</style>
