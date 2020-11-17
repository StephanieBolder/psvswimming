<template>
  <form v-on:submit.prevent class="form">
    <div class="wrapper" v-for="part in event.parts" :key="part.id">
      <div class="distance-container">
        <div v-for="(distance, i) in part.distances" :key="i">
          <div class="distance">
            <p>{{ part.name }}</p>
            <p>
              {{ distance }}
            </p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <button @click="showModal">Register</button>
    </div>
    <modal :show="show" @close="show = false">
      <div class="modal-content">
        <h3 class="modal-header">
          You have registered for the following events:
        </h3>
        <p>Test</p>
        <p>test</p>
        <primary-button class="modal-button">Continue</primary-button>
      </div>
    </modal>
  </form>
</template>

<script>
import Modal from "../../shared/Modal.vue";
import PrimaryButton from "../../shared/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton,
    Modal,
  },
  data() {
    return {
      show: false,
      event: {
        name: "Dutch masters",
        date: new Date(),
        location: "Location",
        parts: [
          {
            id: 1,
            name: "Breaststroke",
            distances: ["500m", "100m", "200m"],
          },
          {
            id: 2,
            name: "Backstroke",
            distances: ["500m", "100m", "200m"],
          },
          {
            id: 3,
            name: "Sidestroke",
            distances: ["500m", "100m", "200m"],
          },
        ],
      },
    };
  },
  methods: {
    showModal() {
      this.show = true;
    },
  },
};
</script>

<style>
.form {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.distance-container {
  padding: 25px 0px;
  border-bottom: 1px solid #e0e0e0;
}
.distance {
  display: grid;
  margin: 4px 0px;
  grid-template-columns: 40% 40% 20%;
  align-items: center;
  justify-items: center;
  width: 100%;
}

.wrapper:first-child {
  border-top: 1px solid #e0e0e0;
}

.wrapper {
  width: 90%;
  margin: 0 auto;
}

.btn-wrapper {
  margin-top: 32px;
  width: 40%;
  display: flex;
  justify-content: center;
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
</style>
