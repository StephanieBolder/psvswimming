<template>
  <card class="">
    <div class="">
      <div class="ml-8">
        <events-titles class="font-bold bg-blauw ">{{ title }}</events-titles>
        <p class="text-sm">{{ content }}</p>
        <p class="font-light text-xs">{{ date }}</p>
      </div>
    </div>
  </card>
</template>

<script>
import Card from '../shared/Card';
import EventTitles from '../shared/EventsTitles';

export default {
  components: {
    Card, EventTitles,
    
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Title",
    },
    content: {
      type: String,
      default: "Lorem ipsum example",
    },
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
};
</script>

<style scoped>

</style>