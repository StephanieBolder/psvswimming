<template>
  <div class="trainings">
    <div class="training-container" v-for="train in trainings" :key="train.id">
      <card>
        <div class="training-details-wrapper">
          <div class="training-details">
            <div class="circle"></div>
            <p class="training-details-text">
              {{ train.location }} {{ train.date }}
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
        { id: 1, date: new Date().toLocaleString(), location: "Eindhoven" },
        { id: 2, date: new Date().toLocaleString(), location: "Einoven" },
        { id: 3, date: new Date().toLocaleString(), location: "Eindhoven" },
        { id: 4, date: new Date().toLocaleString(), location: "Eindhoven" },
        { id: 5, date: new Date().toLocaleString(), location: "Einoven" },
        { id: 6, date: new Date().toLocaleString(), location: "Eindhoven" },
        { id: 7, date: new Date().toLocaleString(), location: "Eindhoven" },
        { id: 8, date: new Date().toLocaleString(), location: "Einoven" },
        { id: 9, date: new Date().toLocaleString(), location: "Eindhoven" },
      ],
    };
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

.training-details-text {
  z-index: 5;
  font-weight: 500;
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
