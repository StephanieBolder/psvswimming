<template>
  <div>
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

export default {
  components: { NotificationCard, PageHeader },
  data() {
    return {
      notifications: [
        { title: "Test1", content: "Example1" },
        { title: "Test2", content: "Example3" },
        { title: "Test3", content: "Example3" },
      ],
    };
  },
};
</script>

<style scoped>
.notifications-container {
  margin: 0px 16px;
}
</style>
