<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    {{ content }}
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { IonHeader, IonTitle, IonToolbar, IonContent } from "@ionic/vue";

export default defineComponent({
  name: "AlertModal",
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
  },
  props: {
    title: { type: String, default: "Super Modal" },
  },
  data() {
    return {
      content: "Content",
    };
  },
  setup() {
    return {};
  },
  // mounted() {},
  // methods:  {},
});
</script>
