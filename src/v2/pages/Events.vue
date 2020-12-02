<template>
  <div>
    <events-header />
    <events :events="events" />
  </div>
</template>

<script>
import Events from "../components/events/Events.vue";
import EventsHeader from "../components/events/EventsHeader.vue";
import EventService from "../../services/EventService";
const eventService = new EventService();
export default {
  components: { Events, EventsHeader },
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.getEvents();
  },

  methods: {
    getEvents() {
      eventService.getAllEligibleEventsForCurrentUser().then((response) => {
        if (response.status == 200) {
          this.events = response.data;
          console.log(response.data);
        }
      });
    },
  },
};
</script>

<style></style>
