<template>
  <div class="event-wrapper">
    <div class="eventmeta-wrapper">
      <div class="circle"></div>
      <p class="event-name">{{ event.name }}</p>
      <p>{{ event.date }}, {{ event.location }}</p>
    </div>
    <p class="eventinfo-wrapper">
      {{ event.info }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        name: "Dutch masters",
        date: new Date().toLocaleDateString(),
        location: "Eindhoven",
        info: "Lorem ipsum yolo swaggins gandalf the white",
      },
    };
  },
};
</script>

<style scoped>
.eventmeta-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 8px;
}

.eventinfo-wrapper {
  margin-bottom: 16px !important;
  font-size: 14px;
  font-weight: 300;
}

.event-wrapper {
  width: calc(95% * 0.9);
  margin: 0 auto;
}

.event-name {
  font-weight: bold;
  font-size: 18px;
  z-index: 5;
}

.circle {
  margin-left: -16px;
  position: absolute;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 2000px;
  background: linear-gradient(#daf4ff, #f4fafd);
}
</style>
