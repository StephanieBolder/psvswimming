<template>
  <div class="container">
    <h1 class="heading">
      <slot name="heading"></slot>
    </h1>
    <p class="support">
      <slot name="support"></slot>
    </p>
  </div>
</template>

<script>
import Heading from "./Heading.vue";
export default {
  components: { Heading },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  margin-bottom: 5px;
  color: black;
  font-weight: 600;
  font-size: 24px;
}

.support {
  font-weight: 300;
}
</style>
