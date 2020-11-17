<template>
  <card>
    <div class="card-container">
      <div class="card-image">
        <div class="shield">
          <svg
            class="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
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
}

.card-title {
  font-weight: 700;
  font-size: 18px;
}

.card-text {
  font-size: 15px;
  font-weight: 300;
}
</style>
