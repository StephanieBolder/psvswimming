<template>
  <div class="content">
    <profile-header />
    <profile-content />
  </div>
</template>

<script>
import ProfileContent from "../components/profile/ProfileContent.vue";
import ProfileHeader from "../components/profile/ProfileHeader.vue";
export default {
  components: {
    ProfileContent,
    ProfileHeader,
  },
};
</script>

<style>
.content {
  padding: 0px 20px;
  overflow-y: scroll;
}
</style>
