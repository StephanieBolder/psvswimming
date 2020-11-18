<template>
  <card class="margin-card">
    <div class="card-container">
      <div class="card-image">
        <div class="shield">
          <img class="icon" src="@/assets/Camera.png" alt="" />
        </div>
      </div>
      <div class="card-content">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ content }}</p>
        <p class="card-date">{{ date }}</p>
      </div>
    </div>
  </card>
</template>

<script>
import Card from "../../shared/Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Title",
    },
    content: {
      type: String,
      default: "Lorem ipsum example",
    },
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
};
</script>

<style scoped>
.margin-card {
  margin-bottom: 16px;
}

.card-container {
  display: flex;
}
.card-image {
  margin-right: 16px;
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.shield {
  background-color: #daf4ff;
  padding: 8px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-date {
  font-weight: 200;
  font-size: 12px;
  color: #666666;
  text-align: right;
  margin-bottom: -12px !important;
  margin-right: 12px;
}

.card-title {
  font-weight: bold;
  font-size: 16px;
}

.card-text {
  font-size: 14px;
  font-weight: 300;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
