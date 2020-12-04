<template>
  <div class="content">
    <top-nav />
    <events-header />
    <events :events="events" />
  </div>
</template>

<script>
import Events from "../components/events/Events.vue";
import EventsHeader from "../components/events/EventsHeader.vue";
<<<<<<< HEAD
import TopNav from "../shared/TopNav.vue";
export default {
  components: { Events, EventsHeader, TopNav },
=======
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
>>>>>>> api-integration
};
</script>

<style>
.content {
  padding: 0px 20px;
  overflow-y: scroll;
}
</style>
