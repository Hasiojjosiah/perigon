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
        <ion-title>Verify Account</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="p-4 grid gap-4">
        <div class="text-md text-center pt-4">
          Thank you for registring with us! We <br />
          have sent a verification code to your <br />
          <b> email {{ email }}. </b>
        </div>
        <div class="text-sm text-center">
          Kindly check your email to verify your <br />
          account.
        </div>

        <form class="grid gap-4">
          <div
            class="
              rounded-md
              border border-solid
              bg-white
              flex
              border-gray-300
              h-12
              mb-4
              mt-16
            "
          >
            <ion-input
              class="text-sm font-bold text-center m-auto tracking-widest"
              type="text"
              v-model="code"
            ></ion-input>
          </div>

          <ion-button
            size="large"
            expand="block"
            color="primary"
            class="
              bg-black
              font-bold
              text-white
              rounded-md
              tracking-wider
              text-sm
              mb-4
              h-14
            "
            @click="verifyCode"
            >VERIFY CODE</ion-button
          >
          <div class="text-center text-md font-light tracking-wider py-4">
            If you cannot locate the verification email <br />
            in your main inbox. please check your <br />
            junk or spam mailbox. if you still can't <br />
            <div class="font-bold underline" @click="resendCode">
              Resend Code
            </div>
          </div>
        </form>
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
  IonInput,
  alertController,
  loadingController,
  useIonRouter,
} from "@ionic/vue";

import { arrowBackOutline } from "ionicons/icons";
import { defineComponent } from "vue";

import "swiper/css";

export default defineComponent({
  name: "VerifyAccount",
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
    IonInput,
  },
  data() {
    return {
      email: "samantha.nicole@gmail.com",
      code: "982882",
    };
  },

  setup() {
    const ionRouter = useIonRouter();
    return { ionRouter, arrowBackOutline };
  },

  methods: {
    async resendCode() {
      const alert = await alertController.create({
        header: "SENT",
        message: "OTP sent successfully!",
        buttons: [
          {
            text: "OKAY",
          },
        ],
      });
      return alert.present();
    },
    async verifyCode() {
      const loading = await loadingController.create({
        cssClass: "my-custom-class",
        message: "Please wait...",
      });

      await loading.present();

      setTimeout(async () => {
        loading.dismiss();
        const alert = await alertController.create({
          header: "VERIFIED",
          message: "OTP successfully verified. please login to continue!",
          buttons: [
            {
              text: "OKAY",
              handler: () => {
                window.location.replace("/login");
              },
            },
          ],
        });
        return alert.present();
      }, 1000);
    },
  },

  computed: {},
  // mounted: {},
});
</script>
