<template>
  <div class="bg-gray-400 h-full flex ">
    <div class="m-auto p-4">
      <div class="text-center font-perigon font-semibold text-5xl mb-16 tracking-wider">
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
          font-extrabold
          text-white
          mx-auto
          rounded-md
          tracking-wider
          text-sm
          my-8
          h-14
        "
        >LOGIN</ion-button
      >
      <div class="text-center text-xs font-light tracking-wider py-4">
        Don't have an account?
        <span class="font-bold underline">Create account</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IonLabel, IonInput, IonItem } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  components: { IonLabel, IonInput, IonItem },

  setup() {
    return {
      auth: {
        email: "samantha.nicole@email.com",
        password: "password",
      },
    };
  },

  methods: {},
});
</script>

<style scoped>
ion-input {
  --padding-bottom: 0px !important;
  --padding-top: 0px !important;
  margin-top: -14px;
}
</style>
