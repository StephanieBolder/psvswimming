<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style>
.btn {
  background-image: linear-gradient(#daf4ff, #f8f5f5);
  color: black;
  font-weight: 600;
  border-radius: 9999px;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>
