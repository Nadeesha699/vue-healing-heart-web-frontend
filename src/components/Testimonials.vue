<script setup>
import Avatar01 from "@/assets/images/3d-cartoon-style-character.jpg";
import Avatar02 from "@/assets/images/40523.jpg";
import Avatar03 from "@/assets/images/2151100226.jpg";
import { onMounted } from "vue";
import { observeElements } from "@/js/intersectionObserver.js";
onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="testimonials-container" id="testimonials">
    <label class="testimonials-txt-3 test">Testimonials</label>
    <div class="testimonials-div-1 test">
      <div class="testimonials-card">
        <div class="testimonials-div-2">
          <img alt="icon" :src="Avatar01" class="testimonials-img" />
          <label class="testimonials-txt-1">Nadeesha Ruwandima</label>
        </div>
        <p class="testimonials-p">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          qui ipsa aut eaque dicta quos. Rem esse exercitationem saepe magnam
          beatae ea id vel repudiandae nemo, numquam laboriosam recusandae
          nihil."
        </p>
        <div class="testimonials-div-3">
          <label class="testimonials-txt-2">30.08.2024</label>
        </div>
      </div>
      <div class="testimonials-card">
        <div class="testimonials-div-2">
          <img alt="icon" :src="Avatar02" class="testimonials-img" />
          <label class="testimonials-txt-1">Nadeesha Ruwandima</label>
        </div>
        <p class="testimonials-p">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          qui ipsa aut eaque dicta quos. Rem esse exercitationem saepe magnam
          beatae ea id vel repudiandae nemo, numquam laboriosam recusandae
          nihil."
        </p>
        <div class="testimonials-div-3">
          <label class="testimonials-txt-2">30.08.2024</label>
        </div>
      </div>
      <div class="testimonials-card">
        <div class="testimonials-div-2">
          <img alt="icon" :src="Avatar03" class="testimonials-img" />
          <label class="testimonials-txt-1">Nadeesha Ruwandima</label>
        </div>
        <p class="testimonials-p">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          qui ipsa aut eaque dicta quos. Rem esse exercitationem saepe magnam
          beatae ea id vel repudiandae nemo, numquam laboriosam recusandae
          nihil."
        </p>
        <div class="testimonials-div-3">
          <label class="testimonials-txt-2">30.08.2024</label>
        </div>
      </div>
    </div>
  </div>
</template>
