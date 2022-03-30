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
        slidesPerView="1.5"
        :coverflowEffect="{
          rotate: 0,
          stretch: -50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :modules="[EffectCoverflow]"
        class=""
      >
        <swiper-slide
          class="bg-[#f2f2f2] flex"
          v-for="(item, index) in [0, 1, 2, 3, 4]"
          :key="index"
        >
          <div class="mt-10 w-full">
            <div class="flex justify-between -mb-4">
              <div class="bg-[#f2f2f2] w-8 h-8 -ml-3 rounded-full"></div>
              <div class="bg-[#f2f2f2] w-8 h-8 -mr-3 rounded-full"></div>
            </div>
            <div class="bg-white shadow-md h-auto rounded-b-md">
              <div class="bg-black p-4 py-8">
                <ion-icon
                  color="light"
                  class="text-2xl -mb-2"
                  :icon="bicycle"
                ></ion-icon>

                <div class="flex justify-between">
                  <div
                    class="text-white font-bold text-sm my-auto tracking-wider"
                  >
                    5 PASSES
                  </div>
                  <ion-icon
                    @click="addPass(4750)"
                    color="light"
                    class="text-3xl my-auto"
                    :icon="addCircle"
                  ></ion-icon>
                </div>
              </div>
              <div class="px-4 -mt-1">
                <div
                  style="border-top-width: 10px"
                  class="border-gray-200 border-dotted w-full"
                ></div>
              </div>
              <div class="p-4 gap gap-2">
                <div class="grid gap-2">
                  <div class="text-xs font-thin text-gray-400">Price</div>
                  <div class="font-extrabold tracking-wider text-black">
                    PHP 4,750
                  </div>
                </div>
                <div class="grid gap-2">
                  <div class="text-xs font-thin text-gray-400">Expiration</div>
                  <div class="font-extrabold tracking-wider text-black">
                    45 Days
                  </div>
                </div>
                <div class="grid gap-2">
                  <div class="text-xs font-thin text-gray-400">Pack</div>
                  <div class="font-extrabold tracking-wider text-black">
                    5 - PACK
                  </div>
                </div>
                <div class="grid gap-2">
                  <div class="text-xs font-thin text-gray-400">Mode</div>
                  <div class="font-extrabold tracking-wider text-black">
                    SHAREABLE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="text-center fixed z-30 w-full" style="bottom: 117px">
        Entitles you to 5 PERIGON rides
      </div>
      <div class="bg-white fixed bottom-0 z-30 w-full p-4">
        <div class="flex gap-8 justify-between">
          <div class="flex flex-col my-auto">
            <div class="text-xs font-thin text-gray-400">Total</div>
            <div class="font-extrabold tracking-wider text-black">
              PHP {{ displayedTotal }}
            </div>
          </div>
          <ion-button
            size="large"
            expand="block"
            :color="total ? 'dark' : 'light'"
            :class="`
              grow
              font-bold
              rounded-md
              tracking-wider
              text-sm
              h-14
             ${total ? '' : 'obrder border-black border-solid'}
            `"
            :disabled="total ? false : true"
            @click="gotoSummary"
            >CHECKOUT</ion-button
          >
        </div>
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
} from "@ionic/vue";

import {
  arrowBackOutline,
  person,
  shield,
  checkmark,
  addCircle,
  bicycle,
} from "ionicons/icons";

import { defineComponent } from "vue";
import { useIonRouter } from "@ionic/vue";

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
    return {
      displayedTotal: "0",
      total: 0,
    };
  },

  setup() {
    const ionRouter = useIonRouter();

    return {
      arrowBackOutline,
      person,
      shield,
      checkmark,
      EffectCoverflow,
      addCircle,
      bicycle,
      ionRouter,
    };
  },

  methods: {
    gotoSummary() {
      this.ionRouter.navigate("/u/purchase-summary");
    },
    addPass(value: any) {
      this.total += value;
      this.displayedTotal = new Intl.NumberFormat("en-US", {
        currency: "PHP",
      }).format(this.total);
    },
  },
  computed: {},
});
</script>

