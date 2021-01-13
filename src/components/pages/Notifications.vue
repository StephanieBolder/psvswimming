<template>
  <div class="content">
      <top-nav-left />
    <heading class="mt-8 ml-12 text-xl w-4/12 mb-8">Notifications</heading>
    <div class="notifications-container">
      <notification-card class="mt-4"
        :title="notification.title"
        :content="notification.content"
        v-for="(notification, i) in notifications"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import NotificationCard from "../notifications/NotificationsCard";
import Heading from '../shared/Heading';
import TopNavLeft from '../shared/TopNavLeft.vue';

export default {
  components: { NotificationCard, Heading, TopNavLeft},
  data() {
    return {
      notifications: [
        { title: "Pictures of the PSV Swimmers", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis." },
        { title: "New Event Registered", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis." },
       
      ],
    };
  },
};
</script>

<style scoped>
.content {
  padding: 0px 20px;
  overflow-y: scroll;
}
</style>