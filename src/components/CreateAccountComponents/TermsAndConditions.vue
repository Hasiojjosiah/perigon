<template>
  <div class="font-extrabold text-xl tracking-wider py-4">
    TERMS AND CONDITIONS
  </div>
  <div class="grid gap-4">
    <div class="text-sm">
      The following terms and conditions shall be known as the "Agreement" and
      shall govern the use of PERIGON's website www.perigon.co (the "Website")
      and the PERIGON Mobile Application (the "App" ), the purchase of PERIGON
      classes, cancellation of purchase of PERIGON classes, registration for
      classes, purchase of merchandise, communication, with PERIGON, and use of
      and attendance at PERIGON's studios.
      <br />
      <br />
      These Terms of Service incorporates by reference PERIGON's Privacy Policy.
      <br />
      <br />

      The following terms and conditions shall be known as the "Agreement" and
      shall govern the use of PERIGON's website www.perigon.co (the "Website")
      and the PERIGON Mobile Application (the "App" ), the purchase of PERIGON
      classes, cancellation of purchase of PERIGON classes, registration for
      classes, purchase of merchandise, communication, with PERIGON, and use of
      and attendance at PERIGON'S studios.

      <br />
      <br />
      These Terms of Service incorporates by reference PERIGON's Privacy Policy.
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
      >I ACCEPT
    </ion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSwiper } from "swiper/vue";

export default defineComponent({
  name: "TermsAndConditions",
  components: {},
  props: {},
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

    return {
      swiper,
    };
  },
  // mounted() {},
  // methods: {},
});
</script>
