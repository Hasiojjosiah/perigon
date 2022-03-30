<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <div class="bg-[#F2F2F2] z-40">
        <div
          id="bt"
          class="
            bg-black
            mx-auto
            w-16
            h-16
            rounded-full
            p-3
            flex flex-col
            -mb-8
            duration-300
          "
        >
          <div class="m-auto">
            <ion-icon
              class="font-bold -mb-2"
              style="font-size: 30px"
              :icon="bicycleOutline"
            />
          </div>
          <div class="text-center" style="font-size: 10px">Class</div>
        </div>
      </div>

      <ion-tab-bar slot="bottom" class="z-0">
        <ion-tab-button tab="tab1" href="/u/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/u/passes" id="passes-button">
          <ion-icon :icon="ticketOutline" />
          <ion-label>Passes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab=""> </ion-tab-button>

        <ion-tab-button tab="tab3" href="/u/instructors">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Instructors</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/u/notifications">
          <ion-icon :icon="notificationsOutline" />
          <ion-label>Notifications</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  homeOutline,
  ticketOutline,
  bicycleOutline,
  peopleOutline,
  notificationsOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
    // IonButton,
  },
  // methods: {},
  setup() {
    return {
      homeOutline,
      ticketOutline,
      bicycleOutline,
      peopleOutline,
      notificationsOutline,
    };
  },
});
</script>
