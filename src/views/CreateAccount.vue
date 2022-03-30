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
        <ion-title>Create Account</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="p-4">
        <div class="text-md text-center">
          First base? We want to get to know you <br />
          better. Sign up for an account and we'll <br />
          take care of the rest.
        </div>
        <!-- WIZARD INDICATOR  -->
        <div class="px-4 py-8">
          <div class="flex justify-between">
            <div>
              <div class="bg-black rounded-full w-12 h-12 flex">
                <ion-icon
                  color="light"
                  :icon="person"
                  class="m-auto"
                ></ion-icon>
              </div>
            </div>

            <!-- Wizard Line -->
            <div
              :class="`
                border-t-2  border-dashed
                w-full
                grow-0
                my-auto
                ${
                  wizardIndicator[1].active
                    ? 'transition border-black'
                    : 'transition border-gray-400'
                }`"
            ></div>
            <!-- End Wizard Line -->

            <div>
              <div
                :class="`
                  
                  border border-solid
                  rounded-full
                  w-12
                  h-12
                  flex
                  ${
                    wizardIndicator[1].active
                      ? 'transition bg-black '
                      : 'transition  bg-white '
                  }
                  `"
              >
                <ion-icon
                  :color="wizardIndicator[1].active ? 'light' : 'gray'"
                  :icon="shield"
                  class="m-auto"
                ></ion-icon>
              </div>
            </div>

            <!-- Wizard Line -->
            <div
              :class="`
                border-t-2  border-dashed
                w-full
                grow-0
                my-auto
                ${
                  wizardIndicator[2].active
                    ? 'transition border-black'
                    : 'transition border-gray-400'
                }`"
            ></div>
            <!-- End Wizard Line -->

            <div>
              <div
                :class="`
                  border  border-solid
                  rounded-full
                  w-12
                  h-12
                  flex
                  ${
                    wizardIndicator[2].active
                      ? 'transition bg-black'
                      : 'transition -white border-gray-400'
                  }`"
              >
                <ion-icon
                  :color="wizardIndicator[2].active ? 'light' : 'gray'"
                  :icon="checkmark"
                  class="m-auto"
                ></ion-icon>
              </div>
            </div>
          </div>
          <div class="flex justify-between -mx-4 py-2">
            <div
              :class="`text-sm text-center ${
                wizardIndicator[0].active
                  ? 'transition font-bold'
                  : 'transition text-gray-400'
              }`"
            >
              PERSONAL <br />
              INFORMATION
            </div>
            <div
              :class="`text-sm text-center ${
                wizardIndicator[1].active
                  ? 'transition font-bold'
                  : 'transition text-gray-400'
              }`"
            >
              ACCOUNT <br />
              DETAILS
            </div>
            <div
              :class="`text-sm text-center ${
                wizardIndicator[2].active
                  ? 'transition font-bold'
                  : ' transition text-gray-400'
              }`"
            >
              TERMS AND <br />
              CONDITIONS
            </div>
          </div>
        </div>
        <swiper
          ref="slideSwiper"
          class="bg-white h-screen"
          :centeredSlides="true"
          :slidesPerView="1"
          :autoHeight="true"
          :auto-destroy="true"
          :delete-instance-on-destroy="true"
          :cleanup-styles-on-destroy="true"
          @slideChange="onSlideChange"
        >
          <swiper-slide class="bg-[#f2f2f2]">
            <PersonalInformation></PersonalInformation>
          </swiper-slide>
          <swiper-slide class="bg-[#f2f2f2]">
            <AccountDetails></AccountDetails>
          </swiper-slide>
          <swiper-slide class="bg-[#f2f2f2]">
            <TermsAndConditions></TermsAndConditions>
          </swiper-slide>
        </swiper>
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

import { arrowBackOutline, person, shield, checkmark } from "ionicons/icons";

import { defineComponent } from "vue";

import PersonalInformation from "@/components/CreateAccountComponents/PersonalInformation.vue";

import AccountDetails from "@/components/CreateAccountComponents/AccountDetails.vue";

import TermsAndConditions from "@/components/CreateAccountComponents/TermsAndConditions.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default defineComponent({
  name: "CreateAccount",
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
    PersonalInformation,
    AccountDetails,
    TermsAndConditions,
  },
  data() {
    return {
      wizardIndicator: [
        {
          active: true,
        },
        {
          active: false,
        },
        {
          active: false,
        },
      ],
    };
  },

  setup() {
    return {
      arrowBackOutline,
      person,
      shield,
      checkmark,
    };
  },

  methods: {
    onSlideChange(swiper: any) {
      const activeIndex = swiper.activeIndex;
      const previousIndex = swiper.previousIndex;

      if (previousIndex < activeIndex) {
        this.wizardIndicator[activeIndex].active = true;
        swiper.updateAutoHeight(500);

        if (activeIndex === 2) {
          this.presentAlertConfirm();
        }
      } else {
        this.wizardIndicator[previousIndex].active = false;
      }
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
  background: black !important;
  color: white !important;
  margin: 31px !important;
  border-radius: 4px !important;
}
</style>