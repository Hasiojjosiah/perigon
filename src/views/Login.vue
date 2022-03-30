<template>
  <ion-page>
    <div class="bg-gray-400 h-full flex login-bg">
      <div class="m-auto p-4">
        <div
          class="
            text-center
            font-perigon font-semibold
            text-5xl
            mb-16
            tracking-wider
          "
        >
          PERIGON
        </div>
        <div class="text-left text-1xl font-semibold tracking-wider py-4 px-3">
          LOGIN ACCOUNT
        </div>
        <ion-item class="rounded-t-md border-b border-solid" lines="none">
          <ion-label position="stacked" color="text-xs">Email</ion-label>
          <ion-input
            type="email"
            v-model="auth.email"
            class="tracking-wider"
          ></ion-input>
        </ion-item>

        <ion-item class="rounded-b-md" lines="none">
          <ion-label position="stacked">Password</ion-label>
          <ion-input
            type="password"
            v-model="auth.password"
            class="text-3xl tracking-wider"
          ></ion-input>
        </ion-item>
        <div class="text-left text-xs font-light tracking-wider py-4 px-3">
          Forgot password?
        </div>

        <ion-button
          size="large"
          expand="block"
          color="primary"
          class="
            bg-black
            font-bold
            text-white
            mx-auto
            rounded-md
            tracking-wider
            text-sm
            my-8
            h-14
          "
          @click="login"
          >LOGIN</ion-button
        >
        <div
          class="text-center text-xs font-light tracking-wider py-4"
          @click="createAccount"
        >
          Don't have an account?
          <span class="font-bold underline">Create account</span>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import {
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
  useIonRouter,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  components: { IonLabel, IonInput, IonItem, IonButton, IonPage },
  data() {
    return {
      auth: {
        email: "samantha.nicole@email.com",
        password: "password",
      },
    };
  },
  setup() {
    const ionRouter = useIonRouter();
    return {
      ionRouter,
    };
  },

  methods: {
    login() {
      this.ionRouter.navigate("/u/home", "forward", "replace");
    },
    createAccount() {
      this.ionRouter.navigate("/create-account", "forward");
    },
  },
});
</script>

<style scoped>
.login-bg {
  background-image: url("../../public/assets/images/login-bg.gif");
  background-size: cover;
  background-position: center;
}
</style>
