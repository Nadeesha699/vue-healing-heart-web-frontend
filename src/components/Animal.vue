<script setup>
import Icon from "@/assets/images/arrow-circle-right.png";
import { onMounted } from "vue";
import {observeElements} from '@/js/intersectionObserver.js'
onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="animal-container">
    <label class="animal-txt-1 test">What's your pet ?</label>
    <div class="animal-div-1">
      <div class="animal-div-2 test">
        <label class="animal-txt-2 test">Dog</label>
        <img alt="icon" :src="Icon" class="home-img-1" />
      </div>
      <div class="animal-div-3 test">
        <label class="animal-txt-2 test">Cat</label>
        <img alt="icon" :src="Icon" class="home-img-1" />
      </div>
      <div class="animal-div-4 test">
        <label class="animal-txt-2 test">Rabbit</label>
        <img alt="icon" :src="Icon" class="home-img-1" />
      </div>
      <div class="animal-div-5">
        <div class="animal-div-6 test">
          <label class="animal-txt-2 test">Bird</label>
          <img alt="icon" :src="Icon" class="home-img-1" />
        </div>
        <div class="animal-div-7 test">
          <label class="animal-txt-2 test">Rodent</label>
          <img alt="icon" :src="Icon" class="home-img-1" />
        </div>
      </div>
    </div>
  </div>
</template>

