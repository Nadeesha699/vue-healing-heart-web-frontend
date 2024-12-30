<script setup>
import { onMounted, ref } from "vue";
import { observeElements } from "@/js/intersectionObserver.js";
import axios from "axios";

const doctorData = ref([]);

const loadDoctors = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/view-all-doctors");
  doctorData.value = response.data.data;
};

onMounted(async () => {
  await loadDoctors();
  observeElements();
});
</script>

<template>
  <div class="doctor-container" id="doctor">
    <label class="doctor-txt-3 test">Our specialized</label>
    <div class="doctor-div-1 test">
      <div class="doctor-card test" v-for="a in doctorData" :key="a.id">
        <img alt="icon" :src="`data:image/jpeg;base64,${a.image}`" />
        <label class="doctor-txt-1">{{ a.name }}</label>
        <label class="doctor-txt-2">{{ a.position }}</label>
      </div>
    </div>
  </div>
</template>
