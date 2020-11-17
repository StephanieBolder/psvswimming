<template>
  <div>
    <event-registration-header />
    <event-registration-info />
    <event-registration-form />
  </div>
</template>

<script>
import EventRegistrationForm from "../components/event-registration/EventRegistrationForm.vue";
import EventRegistrationHeader from "../components/event-registration/EventRegistrationHeader";
import EventRegistrationInfo from "../components/event-registration/EventRegistrationInfo.vue";
export default {
  components: {
    EventRegistrationHeader,
    EventRegistrationForm,
    EventRegistrationInfo,
  },

  methods: {
    fetchEvent(eventName) {},
  },
};
</script>

<style></style>
