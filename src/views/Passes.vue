<template>
  <swiper
    ref="slideSwiper"
    class="bg-white h-screen"
    :options="swiperOptions"
    :slides-per-view="1"
    :modules="modules"
    effect="fade"
    :auto-destroy="true"
    :delete-instance-on-destroy="true"
    :cleanup-styles-on-destroy="true"
  >
    <swiper-slide
      v-for="(intro, index) in introContent"
      :key="index"
      :virtualIndex="index"
      class="bg-white"
    >
      <IntroSliderContainer
        :position="index"
        :icon="intro.icon"
        :title="intro.title"
        :descriptions="intro.description"
      ></IntroSliderContainer>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IntroSliderContainer from "@/components/IntroSliderContainer.vue";

import { Virtual, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default defineComponent({
  name: "PassesPage",
  components: {
    Swiper,
    SwiperSlide,
    IntroSliderContainer,
  },

  setup() {
    return {
      introContent: [
        {
          icon: "icons8-ticket-100.png",
          title: "BUY PASSES",
          description:
            "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Pulvinar<br/> ac neque, enim cursus est fascilisis.",
        },
        {
          icon: "icons8-stationary-bike-100.png",
          title: "BOOK A RIDE",
          description:
            "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Pulvinar<br/> ac neque, enim cursus est fascilisis.",
        },
        {
          icon: "icons8-mobile-banking-100.png",
          title: "PAY AT YOUR CONVINENCE",
          description:
            "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Pulvinar<br/> ac neque, enim cursus est fascilisis.",
        },
      ],
      modules: [EffectFade, Virtual],

      swiperOptions: {
        //loop: true,
        //loopedSlides: 5, // looped slides should be the same
        spaceBetween: 30,
        centeredSlides: true,
        slidesOffsetBefore: "100px",
        slidesOffsetAfter: "100px",
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  methods: {
    nextSlides() {
      console.log("Test");
    },
  },
});
</script>
