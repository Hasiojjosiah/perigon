<template>
  <div class="font-extrabold text-xl tracking-wider py-4">
    PERSONAL INFORMATION
  </div>

  <form class="grid gap-4">
    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">First Name</ion-label>
      <ion-input
        class="text-sm"
        type="text"
        v-model="personalInformation.firstName"
      ></ion-input>
    </ion-item>
    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">Last Name</ion-label>
      <ion-input
        class="text-sm"
        type="text"
        v-model="personalInformation.lastName"
      ></ion-input>
    </ion-item>
    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">Birtdate</ion-label>
      <ion-input
        class="text-sm"
        type="date"
        v-model="personalInformation.birthdate"
      ></ion-input>
    </ion-item>

    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">Mobile Number</ion-label>
      <div class="grid grid-flow-col gap-1">
        <div class="text-sm text-gray-400 my-auto">+63</div>
        <ion-input
          class="text-sm my-auto"
          maxlength="10"
          type="tel"
          placeholder="XX-XXXX-XXX"
          v-model="personalInformation.mobileNumber"
        >
        </ion-input>
      </div>
    </ion-item>
  </form>

  <div class="font-extrabold text-xl tracking-wider pt-12 pb-4">
    EMERGENCY CONTACT INFORMATION
  </div>
  <form class="grid gap-4">
    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">Full Name</ion-label>
      <ion-input
        class="text-sm"
        type="text"
        v-model="emergencyContactInformation.fullName"
      ></ion-input>
    </ion-item>

    <ion-item
      class="rounded-md border border-solid border-gray-300 h-16"
      lines="none"
    >
      <ion-label position="stacked">Mobile Number</ion-label>
      <div class="grid grid-flow-col gap-1">
        <div class="text-sm text-gray-400 my-auto">+63</div>
        <ion-input
          class="text-sm my-auto"
          maxlength="10"
          type="tel"
          placeholder="XX-XXXX-XXX"
          v-model="emergencyContactInformation.mobileNumber"
        >
        </ion-input>
      </div>
    </ion-item>
    <div class="grid grid-flow-col gap-2">
      <ion-checkbox></ion-checkbox>
      <div class="text-xs">
        I agree to recieve emails from news, announcement and promotional offers
        from <b>PERIGON</b> via email
      </div>
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
        mb-2
        h-14
      "
      @click="swiper.slideNext()"
      >NEXT</ion-button
    >
    <div
      @click="gotoLogin"
      class="text-center text-xs font-light tracking-wider py-4 underline"
    >
      Already signed up?
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSwiper } from "swiper/vue";
import {
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  useIonRouter,
  IonCheckbox,
} from "@ionic/vue";

export default defineComponent({
  name: "PersonalInformation",
  components: {
    IonInput,
    IonLabel,
    IonItem,
    IonButton,
    IonCheckbox,
  },
  props: {
    // position: Number,
    // icon: String,
    // title: String,
    // descriptions: String,
  },
  data() {
    return {
      personalInformation: {
        firstName: "Samantha Nicole",
        lastName: "Chavez",
        birthdate: "11-16-1990",
        email: "samantha.nicole@email.com",
        mobileNumber: "9123456789",
      },
      emergencyContactInformation: {
        fullName: "Larry Boy Santos",
        mobileNumber: "9123456789",
      },
    };
  },
  setup() {
    const swiper = useSwiper();
    const ionRouter = useIonRouter();

    return {
      ionRouter,
      swiper,
    };
  },
  methods: {
    gotoLogin() {
      this.ionRouter.navigate("/login");
    },
  },
});
</script>
