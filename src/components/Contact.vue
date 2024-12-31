<script setup>
import Logo from "@/assets/images/heartworm.png";
import Contact01 from "@/assets/images/phone.png";
import Contact02 from "@/assets/images/mail.png";
import Contact03 from "@/assets/images/location-pin.png";

import { onMounted } from "vue";
import { observeElements } from "@/js/intersectionObserver";

onMounted(() => {
  observeElements();
});

</script>

<template>
  <div class="contact-container">
    <div class="contact-container-card">
      <div class="contact-div-1 test">
        <div class="contact-div-4">
          <img :src="Logo" width="20px" height="20px" /><label
            >Healing Hearts</label
          >
        </div>
        <div class="contact-div-3">
          <a href="">Github</a>
          <a href="">Facebook</a>
          <a href="">Youtube</a>
          <a href="">LinkedIn</a>
        </div>
        <label>2024@Nadeesha699</label>
      </div>
      <div class="contact-div-2 test">
        <div class="contact-div-9">
          <div class="contact-div-6">
            <label class="contact-txt-2">About</label>
            <label class="contact-txt-1">History</label>
            <label class="contact-txt-1">Mission and values</label>
            <label class="contact-txt-1">Achievement</label>
            <label class="contact-txt-1">Technologies</label>
          </div>
          <div class="contact-div-6">
            <label class="contact-txt-2">Service and price</label>
            <label class="contact-txt-1">Counseling</label>
            <label class="contact-txt-1">Diagnosis</label>
            <label class="contact-txt-1">Procedures</label>
            <label class="contact-txt-1">Prevention</label>
          </div>
          <div class="contact-div-6">
            <label class="contact-txt-2">Doctors</label>
            <label class="contact-txt-1">Our specialized</label>
            <label class="contact-txt-1">Reviews of doctors</label>
          </div>
        </div>
        <div class="contact-div-5">
          <div class="contact-div-8">
            <img :src="Contact01" /><label>+94 711764232</label>
          </div>
          <div class="contact-div-8">
            <img :src="Contact02" /><label>nadeesharuwandima@gmail.com</label>
          </div>
          <div class="contact-div-8">
            <img :src="Contact03" /><label
              >Peragawatta, Ganadara, Sri Lanka</label
            >
          </div>
        </div>
        <div class="contact-div-7">
          <label>Privacy policy</label><label>Term of use</label>
        </div>
      </div>
    </div>
  </div>
</template>

