<script setup>
import Icon from "@/assets/images/arrow-circle-right.png";
import Logo from "@/assets/images/heartworm.png";

import { onMounted, ref } from "vue";
import { observeElements } from "@/js/intersectionObserver";


onMounted(async () => {
  observeElements();
});
</script>

<template>
  <div class="home-container">
    <div class="home-div-2">
      <div class="home-div-3">
        <div class="home-div-8">
          <div class="home-div-6 test">
            <img alt="icon" :src="Logo" class="home-img-2" />
            <h1 class="home-txt-4">Healing Hearts</h1>
          </div>
          <div class="home-div-7 test">
            <a href="/" class="home-a-1">About</a>
            <a href="#service" class="home-a-1">Service</a>
            <a href="#testimonials" class="home-a-1">Testimonials</a>
            <a href="#doctor" class="home-a-1">Doctors</a>
          </div>
        </div>
        <label class="home-txt-3 test">+94 711764232</label>
      </div>
      <div class="home-div-4">
        <label class="home-txt-1 test">
          Loving care for your furry family members
        </label>
        <div class="home-div-5">
          <div class="home-card-1 test">
            <label class="home-txt-2">Make an appointment</label>
            <div class="home-div-9">
              <img alt="icon" :src="Icon" class="home-img-1" />
            </div>
          </div>
          <div class="home-card-1 test">
            <label class="home-txt-2">Call a doctor at home</label>
            <div class="home-div-9">
              <img alt="icon" :src="Icon" class="home-img-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-div-1">
      <div class="test">
        <label class="home-txt-5"
          >20<span class="home-txt-6">years</span></label
        >
        <hr />
        <p class="home-txt-7">
          is the clinic's history, saving animals since 2003
        </p>
      </div>
      <div class="test">
        <label class="home-txt-5"
          >3,000<span class="home-txt-6">per year</span></label
        >
        <hr />
        <p class="home-txt-7">
          the annual number of vaccinations given to the pets
        </p>
      </div>
      <div class="test">
        <label class="home-txt-5">$50,000</label>
        <hr />
        <p class="home-txt-7">
          inveted in state-of-the-art equipment in the last 3 years
        </p>
      </div>
      <div class="test">
        <label class="home-txt-5"
          >6,500<span class="home-txt-6">animals</span></label
        >
        <hr />
        <p class="home-txt-7">
          the average number of patients the clinic treat per year
        </p>
      </div>
    </div>
  </div>
</template>
