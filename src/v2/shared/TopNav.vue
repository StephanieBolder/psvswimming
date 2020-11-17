<template>
  <div class="nav-container">
    <div></div>
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
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  margin: 32px 0px;
}

.shield {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 6px;
  border-radius: 9999px;
  border: 1px solid black;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
