  
<template>
  <div v-if="show" class="container">
    <div class="modal">
      <button v-on:click="close">
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <slot></slot>
    </div>
    <div class="modal-wrapper"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  bottom: 0;
  height: 30vh;
  width: 100%;
  border-radius: 32px;
  background-color: white;
}
.container {
  display: relative;
}
.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.6;
  -webkit-filter: blur(4px);
  -moz-filter: blur(4px);
  -o-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px) grayscale(50%);
  z-index: 40;
}
.icon {
  width: 32px;
  height: 32px;
}
</style>