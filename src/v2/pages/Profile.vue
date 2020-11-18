<template>
  <div class="content">
    <top-nav />
    <profile-header />
    <profile-content />
  </div>
</template>

<script>
import ProfileContent from "../components/profile/ProfileContent.vue";
import ProfileHeader from "../components/profile/ProfileHeader.vue";
import TopNav from "../shared/TopNav.vue";
export default {
  components: {
    ProfileContent,
    ProfileHeader,
    TopNav,
  },
};
</script>

<style>
.content {
  padding: 0px 20px;
  overflow-y: scroll;
}
</style>
