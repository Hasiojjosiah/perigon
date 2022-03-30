<template>
  <ion-page>
    <div class="h-full flex">
      <div class="m-auto">
        <div class="text-center font-perigon text-6xl tracking-wider">
          PERIGON
        </div>
        <div class="text-center text-xs font-light tracking-wider">
          The Undercover Athletes
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { IonPage } from "@ionic/vue";
export default defineComponent({
  name: "SplashScreen",
  components: { IonPage },
  mounted() {
    setTimeout(() => {
      this.router.replace("/login");
    }, 1000);
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>
