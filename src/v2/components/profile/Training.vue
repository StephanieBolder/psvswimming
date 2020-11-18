<template>
  <div class="trainings">
    <div class="training-container" v-for="train in trainings" :key="train.id">
      <card>
        <div class="training-details-wrapper">
          <div class="training-details">
            <div class="circle"></div>
            <p class="training-details-location">
              {{ train.location }}
            </p>
            <p class="training-details-date">
              {{ train.date }}
            </p>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "../../shared/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      trainings: [
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
}

.training-details-date {
  z-index: 5;
  font-weight: 200;
  font-size: 14px;
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
  margin-left: -12px;
  position: absolute;
  z-index: 1;
  width: 32px;
  height: 32px;
  border-radius: 2000px;
  background: linear-gradient(#daf4ff, #f4fafd);
}

.training-container {
  margin: 20px 0px;
}
</style>
