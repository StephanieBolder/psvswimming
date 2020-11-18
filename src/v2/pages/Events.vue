<template>
  <div class="content">
    <top-nav />
    <events-header />
    <events />
  </div>
</template>

<script>
import Events from "../components/events/Events.vue";
import EventsHeader from "../components/events/EventsHeader.vue";
import TopNav from "../shared/TopNav.vue";
export default {
  components: { Events, EventsHeader, TopNav },
};
</script>

<style>
.content {
  padding: 0px 20px;
  overflow-y: scroll;
}
</style>
