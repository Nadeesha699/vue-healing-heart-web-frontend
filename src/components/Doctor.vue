<script setup>
import Avatar01 from "@/assets/images/2150797606.jpg";
import Avatar02 from "@/assets/images/portrait-3d-male-doctor.jpg";
import Avatar03 from "@/assets/images/2151107332.jpg";
import Avatar04 from "@/assets/images/2151107363.jpg";
import { onMounted } from "vue";
import { observeElements } from "@/js/intersectionObserver.js";
onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="doctor-container" id="doctor">
    <label class="doctor-txt-3 test">Our specialized</label>
    <div class="doctor-div-1">
      <div class="doctor-card test">
        <img alt="icon" :src="Avatar01" />
        <label class="doctor-txt-1">Kamal Weera</label>
        <label class="doctor-txt-2">Surgeon</label>
      </div>
      <div class="doctor-card test">
        <img alt="icon" :src="Avatar02" />
        <label class="doctor-txt-1">Amal Singha</label>
        <label class="doctor-txt-2">Therapist</label>
      </div>
      <div class="doctor-card test">
        <img alt="icon" :src="Avatar03" />
        <label class="doctor-txt-1">Bimal Kodi</label>
        <label class="doctor-txt-2">Dentist</label>
      </div>
      <div class="doctor-card test">
        <img alt="icon" :src="Avatar04" />
        <label class="doctor-txt-1">Susuil jaye</label>
        <label class="doctor-txt-2">Zoopsychologhist</label>
      </div>
    </div>
  </div>
</template>

