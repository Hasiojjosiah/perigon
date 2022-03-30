<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            class="text-white"
            :icon="arrowBackOutline"
            default-href="/"
            v-if="false"
          ></ion-back-button>
          <ion-button v-if="true">
            <ion-icon
              color="light"
              slot="icon-only"
              :icon="arrowBackOutline"
            ></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Purchase Summary</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="p-4">
        <div class="text-center text-sm py-8 font-thin">
          You're about to purchase the following <br />
          pack's:
        </div>

        <div class="bg-white border border-gray-500 rounded-md p-4 grid gap-4">
          <div class="flex justify-between">
            <div class="text-sm">Pack</div>
            <div class="flex gap-1">
              <div class="font-bold text-sm">5 PACK (5 PASSES)</div>
              <ion-icon class="text-xl" :icon="closeCircle"></ion-icon>
            </div>
          </div>
          <div class="bg-gray-400" style="height: 1px"></div>
          <div class="flex justify-between">
            <div class="text-sm">Total</div>
            <div class="font-bold text-sm">PHP 4,750</div>
          </div>
        </div>

        <div class="font-extrabold text-xl tracking-wider py-4">PAYMENT</div>
        <div class="bg-white border border-gray-500 rounded-md p-4 grid gap-4">
          <div class="grid gap-2">
            <div class="text-xs font-thin text-gray-400">Payment Method</div>
            <div class="font-extrabold tracking-wider text-sm text-black">
              CASH OR CHEQUE (OVER THE COUNTER)
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white fixed bottom-0 z-30 w-full p-4">
        <ion-button
          size="large"
          expand="block"
          color="dark"
          class="grow font-bold rounded-md tracking-wider text-sm h-14"
          @click="presentAlertConfirm"
          >PLACE ORDER</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonButton,
  IonBackButton,
  IonIcon,
  alertController,
} from "@ionic/vue";

import {
  arrowBackOutline,
  person,
  shield,
  checkmark,
  addCircle,
  bicycle,
  closeCircle,
} from "ionicons/icons";

import { defineComponent } from "vue";

// import required modules
import { EffectCoverflow } from "swiper";

import "swiper/css";

export default defineComponent({
  name: "PurchaseSummary",
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonPage,
    IonButtons,
    IonButton,
    IonBackButton,
    IonIcon,
  },
  data() {
    return {
      displayedTotal: "0",
      total: 0,
    };
  },

  setup() {
    return {
      arrowBackOutline,
      person,
      shield,
      checkmark,
      EffectCoverflow,
      addCircle,
      bicycle,
      closeCircle,
    };
  },

  methods: {
    async presentAlertConfirm() {
      const alert = await alertController.create({
        header: "SCROLL DOWN",
        message:
          "Before you can proceed you must scroll to accept the latest Terms  & Privacy Policy",
        buttons: [
          {
            text: "BOOK NOW",
          },
          {
            text: "MAYBE LATER",
            role: "cancel",
          },
        ],
      });
      return alert.present();
    },
  },
  computed: {},
});
</script>



<style >
/* Alert */

.alert-head {
  padding-top: 28px !important;
}

.alert-title {
  font-weight: 700 !important;
  letter-spacing: 0.05em;
}

.alert-button {
  /* background: black !important; */
  font-size: 13px !important;
  border: 0px !important;
  text-align: right !important;
  color: black !important;
  margin-top: 10px !important;
  /* margin: 31px !important; */
  padding-right: 16px !important;
  border-radius: 4px !important;
}
</style>