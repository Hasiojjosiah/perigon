<template>
  <div class="bg-white h-full">
    <div class="m-auto text-black">
      <swiper class="h-screen" :modules="modules" :slides-per-view="1">
        <swiper-slide>
          <div class="h-full flex justify-between">
            <div class="m-auto">
              <div class="flex flex-col">
                <img
                  class="bg-black mx-auto mb-10 rounded-full p-4"
                  src="assets/images/icons8-ticket-100.png"
                />
                <div class="text-center font-bold">BUY PASSES</div>
                <div class="text-center text-sm font-light tracking-wide px-12">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Pulvinar<br />
                  ac neque, enim cursus est fascilisis.
                </div>

                <div class="flex gap-2 my-12 mx-auto">
                  <div class="bg-black p-1 rounded-full"></div>
                  <div class="bg-[#C4C4C4] p-1 rounded-full"></div>
                  <div class="bg-[#C4C4C4] p-1 rounded-full"></div>
                </div>
              </div>

              <div class="flex flex-col">
                <button
                  class="bg-black text-white px-16 py-3 mx-auto rounded-md text-sm"
                >
                  NEXT
                </button>

                <button
                  class="text-black px-16 py-3 mx-auto rounded-md text-sm"
                >
                  SKIP
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Swiper core and required modules
import { Navigation, EffectFade } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";
// Import Swiper styles

import "swiper/css";

export default defineComponent({
  name: "IntroPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = useSwiper();

    return {
      swiper,
      EffectFade,
      modules: [Navigation],
    };
  },
});
</script>
