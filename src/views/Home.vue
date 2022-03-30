<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="bg-black h-56">
        <div class="flex justify-between gap-4 h-full px-4">
          <img
            class="object-cover w-16 h-16 mt-22 my-auto rounded-full"
            style="box-shadow: 0 0 0 3px white"
            :src="profileImage"
            alt="Profile image"
          />

          <div class="my-auto grow">
            <div class="text-white font-thin -mb-1">Hello,</div>
            <div
              class="
                -mb-2
                uppercase
                text-white
                font-bold
                tracking-wider
                w-25
                text-2xl
              "
            >
              {{ firstName }}
            </div>
            <div
              class="
                uppercase
                text-white
                font-bold
                tracking-wider
                w-25
                text-2xl
              "
            >
              {{ lastName }}
            </div>
          </div>

          <div class="my-auto flex gap-4">
            <ion-icon
              color="light"
              style="font-size: 30px"
              :icon="settingsOutline"
            />
            <ion-icon
              color="light"
              style="font-size: 30px"
              :icon="menuOutline"
            />
          </div>
        </div>

        <div
          class="
            bg-white
            rounded-md
            border border-gray-400 border-solid
            h-32
            mx-4
            -mt-12
            p-4
            flex
          "
        >
          <div class="my-auto w-full">
            <div class="text-sm pb-3">Next class in:</div>
            <div class="flex justify-between w-full">
              <div class="text-md">No next class avaialble.</div>
              <div class="flex">
                <div class="my-auto text-md font-extrabold" @click="bookNow">
                  BOOK NOW
                </div>
                <ion-icon
                  class="my-auto"
                  color="black"
                  :icon="chevronForwardOutline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  chevronForwardOutline,
  settingsOutline,
  menuOutline,
} from "ionicons/icons";
import { IonPage, IonContent, IonIcon, alertController } from "@ionic/vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonPage,
    IonIcon,
  },
  data() {
    return {
      profileImage: "/assets/images/profile.png",
      firstName: "Samatha",
      lastName: "Nicole",
    };
  },
  setup() {
    return {
      chevronForwardOutline,
      settingsOutline,
      menuOutline,
      steps: [
        {
          target: "#passes-button", // We're using document.querySelector() under the hood
          header: {
            title: "Get Started",
          },
          content: `Discover <strong>Vue Tour</strong>!`,
        },
      ],
    };
  },
  methods: {
    async bookNow() {
      const alert = await alertController.create({
        header: "UH OH...",
        message:
          "Looks like you don't have any<br> passes yet to use. Tap the <br> icon below to purchase.",
        buttons: [
          {
            text: "OKAY, I UNDERSTAND",
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>

<style >
/* Alert */

.alert-head {
  padding-top: 28px !important;
  text-align: left !important;
}

.alert-title {
  font-weight: 900 !important;
  letter-spacing: 0.05em;
  padding-bottom: 16px;
}

.alert-message {
  text-align: left !important;
  font-size: 14px !important;
}

.alert-button-inner {
  display: inline !important;
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
