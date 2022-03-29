<template>
  <div class="h-full flex flex-col justify-around">
    <div></div>
    <div class="flex flex-col">
      <div class="bg-black mx-auto mb-10 rounded-full p-4">
        <img class="p-2" :src="`assets/images/${icon}`" />
      </div>

      <div class="text-center text-black text-xl font-extrabold py-2">
        {{ title }}
      </div>
      <div
        class="text-center text-gray-500 text-sm tracking-wide px-12"
        v-html="descriptions"
      ></div>
    </div>

    <div class="flex flex-col">
      <div class="flex gap-2 my-12 mx-auto">
        <div
          class="bg-black p-1 rounded-full"
          :class="0 === position ? 'bg-black' : 'bg-[#C4C4C4]'"
        ></div>
        <div
          class="p-1 rounded-full"
          :class="1 === position ? 'bg-black' : 'bg-[#C4C4C4]'"
        ></div>
        <div
          class="p-1 rounded-full"
          :class="2 === position ? 'bg-black' : 'bg-[#C4C4C4]'"
        ></div>
      </div>

      <ion-button
        color="primary"
        class="
          bg-black
          font-extrabold
          text-white
          px-16
          mx-auto
          rounded-md
          text-sm
        "
        @click="swiper.slideNext()"
        >NEXT</ion-button
      >

      <ion-button
        fill="clear"
        color="primary"
        class="text-black font-extrabold px-16 py-3 mx-auto rounded-md text-sm"
        >SKIP</ion-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSwiper } from "swiper/vue";

export default defineComponent({
  name: "IntroSliderContainer",
  props: {
    position: Number,
    icon: String,
    title: String,
    descriptions: String,
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
