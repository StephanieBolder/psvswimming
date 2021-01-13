<template>
  <card class="">
    <div class="w-full">
      <div class="header">
        <div class="header-content">
          <slot name="header"></slot>
        </div>
        <button class="dropdown-button" v-on:click="open = !open">
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
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      <div class="" v-if="open">
        <slot name="content"></slot>
      </div>
    </div>
  </card>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.header-content {
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  width: 100%;
}

.content {
  padding: 16px 0px;
}

.dropdown-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px;
}
</style>
