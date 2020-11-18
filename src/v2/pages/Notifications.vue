<template>
  <div class="content">
    <top-nav />
    <page-header><template #heading>Notifications</template> </page-header>
    <div class="notifications-container">
      <notification-card
        :title="notification.title"
        :content="notification.content"
        v-for="(notification, i) in notifications"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import NotificationCard from "../components/notifications/NotificationCard.vue";
import PageHeader from "../shared/PageHeader.vue";
import TopNav from "../shared/TopNav.vue";

export default {
  components: { NotificationCard, PageHeader, TopNav },
  data() {
    return {
      notifications: [
        { title: "Pictures of the PSV Swimmers", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis." },
        { title: "New Event Registered", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis." },
        { title: "Results are in!", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis." },
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
