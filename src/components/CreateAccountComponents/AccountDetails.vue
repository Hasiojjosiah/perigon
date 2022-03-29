<template>
  <div class="font-extrabold text-xl tracking-wider py-4">ACCOUNT DETAILS</div>

  <form class="grid gap-4">
    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">Email</ion-label>
      <ion-input
        class="text-sm"
        type="text"
        v-model="accountDetails.email"
      ></ion-input>
    </ion-item>

    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">Confirm Password</ion-label>
      <ion-input
        class="text-sm"
        :type="passwordConfig.isConfirmPasswordShown ? 'text' : 'password'"
        v-model="accountDetails.confirmPassword"
      ></ion-input>
      <ion-icon
        v-if="passwordConfig.isConfirmPasswordShown"
        class="cursor-pointer my-auto"
        :icon="eyeOffOutline"
        slot="end"
        @click="togglePassword('confirm')"
      ></ion-icon>
      <ion-icon
        v-if="!passwordConfig.isConfirmPasswordShown"
        class="cursor-pointer my-auto"
        :icon="eyeOutline"
        slot="end"
        @click="togglePassword('confirm')"
      ></ion-icon>
    </ion-item>

    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">Password</ion-label>
      <ion-input
        class="text-sm"
        :type="passwordConfig.isPasswordShown ? 'text' : 'password'"
        v-model="accountDetails.password"
      ></ion-input>
      <ion-icon
        v-if="passwordConfig.isPasswordShown"
        class="cursor-pointer my-auto"
        :icon="eyeOffOutline"
        slot="end"
        @click="togglePassword()"
      ></ion-icon>
      <ion-icon
        v-if="!passwordConfig.isPasswordShown"
        class="cursor-pointer my-auto"
        :icon="eyeOutline"
        slot="end"
        @click="togglePassword()"
      ></ion-icon>
    </ion-item>

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
        mb-2
        h-14
      "
      @click="swiper.slideNext()"
      >NEXT</ion-button
    >
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSwiper } from "swiper/vue";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { IonInput, IonLabel, IonItem, IonButton, IonIcon } from "@ionic/vue";

export default defineComponent({
  name: "PersonalInformation",
  components: {
    IonInput,
    IonLabel,
    IonItem,
    IonButton,
    IonIcon,
  },
  props: {
    // position: Number,
    // icon: String,
    // title: String,
    // descriptions: String,
  },
  data() {
    return {
      accountDetails: {
        email: "samantha.nicole@email.com",
        password: "password",
        confirmPassword: "password",
      },
      passwordConfig: {
        isPasswordShown: false,
        isConfirmPasswordShown: false,
      },
    };
  },
  setup() {
    const swiper = useSwiper();
    return {
      swiper,
      eyeOffOutline,
      eyeOutline,
    };
  },
  // mounted() {},
  methods: {
    togglePassword(type: any) {
      if (type === "confirm") {
        this.passwordConfig.isConfirmPasswordShown =
          !this.passwordConfig.isConfirmPasswordShown;
      } else {
        this.passwordConfig.isPasswordShown =
          !this.passwordConfig.isPasswordShown;
      }
    },
  },
});
</script>
