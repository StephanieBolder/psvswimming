<template>
  <div class="app" id="app">
    <v-app>
      <router-view class="app_content"></router-view>
      <bottom-nav />
    </v-app>
    <div class="modal micromodal-slide" id="modal" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <header class="modal__header">
            <span class="modal__title" id="modal-title" />
            <button
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            ></button>
          </header>
          <main class="modal__content">
            <span id="modal-content" />
          </main>
          <footer class="modal__footer">
            <button
              class="modal__btn"
              id="modal-btn-close"
              data-micromodal-close
              aria-label="Close this dialog window"
            >
              Close
            </button>
            <button
              class="modal__btn"
              id="modal-btn-confirm"
              data-micromodal-close
              aria-label="Confirm"
            >
              Yes
            </button>
            <button
              class="modal__btn"
              id="modal-btn-cancel"
              data-micromodal-close
              aria-label="Cancel"
            >
              No
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MicroModal from "micromodal";
import { initializeModal } from "./util/modal";
import BottomNav from "./v2/shared/BottomNav.vue";

export default {
  name: "App",

  components: { BottomNav },

  mounted() {
    MicroModal.init({});
    initializeModal();
  },

  data: () => ({}),
};
</script>
<style lang="scss">
@import "main.scss";
</style>
