<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  background-color: white;
  width: 100%;
  padding: 24px 8px;
  border: solid 1px #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
