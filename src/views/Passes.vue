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
        <ion-title>Purchase Passes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        slidesPerView="2"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :pagination="true"
        :modules="[EffectCoverflow]"
        class="mySwiper h-screen"
      >
        <swiper-slide
          class="bg-[#f2f2f2] py-4"
          style=" -webkit-mask-image: radial-gradient(circle 10px at 0 10px, transparent 0, transparent 20px, black 20px);"
          v-for="(item, index) in [0, 1, 2, 3, 4]"
          :key="index"
        >
        

          <div class="bg-white shadow-md h-60 rounded-b-md"></div>
        </swiper-slide>
      </swiper>
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

import { arrowBackOutline, person, shield, checkmark } from "ionicons/icons";

import { defineComponent } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { EffectCoverflow } from "swiper";

import "swiper/css";

export default defineComponent({
  name: "PassesPage",
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
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },

  setup() {
    return {
      arrowBackOutline,
      person,
      shield,
      checkmark,
      EffectCoverflow,
    };
  },

  methods: {
    onSlideChange(swiper: any) {
      // const activeIndex = swiper.activeIndex;
      // const previousIndex = swiper.previousIndex;
      // if (previousIndex < activeIndex) {
      //   this.wizardIndicator[activeIndex].active = true;
      //   swiper.updateAutoHeight(500);
      //   if (activeIndex === 2) {
      //     this.presentAlertConfirm();
      //   }
      // } else {
      //   this.wizardIndicator[previousIndex].active = false;
      // }
    },

    async presentAlertConfirm() {
      const alert = await alertController.create({
        header: "SCROLL DOWN",
        message:
          "Before you can proceed you must scroll to accept the latest Terms  & Privacy Policy",
        buttons: [
          {
            text: "OKAY, GOT IT",
          },
        ],
      });
      return alert.present();
    },
  },
  computed: {},
  // mounted: {},
});
</script>
