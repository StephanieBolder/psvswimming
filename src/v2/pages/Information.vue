<template>
  <div>
    <v-window v-model="onboarding">
    <v-window-item>
        <div class="flex-col">
            <router-link :to="{ name: 'profile' }">
              <div class="skip-information">Skip</div>
              </router-link>
            <div class=""><div class="titel">Easily register for events</div></div>
            <img class="info-illustration" src="@/assets/info1.jpg" alt="">
            <div class="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>

        </div>
    </v-window-item>
      <v-window-item>
        <div class="flex-col">
            <router-link :to="{ name: 'profile' }">
              <div class="skip-information">Skip</div>
              </router-link>
            <div class=""><div class="titel">Check out your results, agenda and training schedule</div></div>
            <img class="info-illustration" src="@/assets/info2.jpg" alt="">
            <div class="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>

        </div>
    </v-window-item>
    <v-window-item>
        <div class="flex-col">
            <router-link :to="{ name: 'profile' }">
              <div class="skip-information">Skip</div>
              </router-link>
            <div class=""><div class="titel">Get notifications from your club</div></div>
            <img class="info-illustration" src="@/assets/info3.jpg" alt="">
            <div class="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>

        </div>
    </v-window-item>
    <v-card-actions class="justify-space-between">
        <v-btn
          text
          @click="prev"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn
              :input-value="active"
              icon
              @click="toggle"
            >
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          text
          @click="next"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-window>
</div>

</template>

<script>

export default {
  components: {  },
  data() {
      return {
          onboarding: 0,
          length: 3,
      }
  },
  methods: {
      next() {
           this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
      },
      prev() {
            this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
      }
  }
};
</script>

<style>

.skip-information {
    text-align: right;
    font-weight: 400;
    margin-top: 48px;
    margin-right: 16px;
}

.info-illustration {
    width: 70%;
    display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
  margin-top: 12px;
}

  .titel {
      text-align: center;
      font-weight: 700;
      font-size: 20px;
      margin-top: 12px;
  }

  .flex-col {
      display: flex;
      flex-direction: column;
  }

  .info-text {
      font-weight: 200;
      width: 70%;
      text-align: center;
      display: block;
      margin-left: auto;
      margin-right: auto;
  }

  .v-btn {
      color: red;
  }

</style>
