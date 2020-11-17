<template>
  <div>
    <events-header />
    <events />
  </div>
</template>

<script>
import Events from "../components/events/Events.vue";
import EventsHeader from "../components/events/EventsHeader.vue";
export default {
  components: { Events, EventsHeader },
};
</script>

<style></style>
