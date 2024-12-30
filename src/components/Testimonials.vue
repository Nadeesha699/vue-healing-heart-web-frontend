<script setup>

import { onMounted, ref } from "vue";
import { observeElements } from "@/js/intersectionObserver.js";
import { loadTestimonials } from "@/api/api";

let testimonialsData = ref([]);


onMounted(async () => {
  observeElements();
  testimonialsData.value = await loadTestimonials();
});
</script>

<template>
  <div class="testimonials-container" id="testimonials">
    <label class="testimonials-txt-3 test">Testimonials</label>
    <div class="testimonials-div-1 test">
      <div
        class="testimonials-card"
        v-for="data in testimonialsData"
        :key="data.id"
      >
        <div class="testimonials-div-2">
          <img
            alt="icon"
            :src="`data:image/jpeg;base64,${data.profile}`"
            class="testimonials-img"
          />
          <label class="testimonials-txt-1">{{ data.customer_name }}</label>
        </div>
        <p class="testimonials-p">
          {{ data.feedback }}
        </p>
        <div class="testimonials-div-3">
          <label class="testimonials-txt-2">{{ data.feedback_date }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
