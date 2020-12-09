<template>
<div class="flex justify-center">
  <v-app id="inspire">
    <v-row justify="center">
      <v-date-picker v-model="picker"></v-date-picker>
    </v-row>
  </v-app>
</div>
</template>

<script>
export default {
  picker: new Date().toISOString().substr(0, 10),
};
</script>

<style>

.v-application .primary {
  background-color: gray !important;
}

v.application {
  height: 40px !important;
}

</style>
