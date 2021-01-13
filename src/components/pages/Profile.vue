<template>
  <div class="content">
      <top-nav-right />
      <div class="flex justify-center">
      <heading class="text-xl">John Doe</heading>
      </div>
    <profile-content />
  </div>
</template>

<script>
import ProfileContent from "../../components/profile/ProfileContent.vue";
import TopNavRight from '../../components/shared/TopNavRight.vue';
import Heading from '../../components/shared/Heading.vue';

export default {
  components: {
    ProfileContent,
    TopNavRight,
    Heading
  },
};
</script>

<style>
.content {
  padding: 0px 20px;
  overflow-y: scroll;
}
</style>
