<script setup>

import { ref } from "vue";
import { onMounted } from "vue";
import { observeElements } from "@/js/intersectionObserver.js";
import axios from "axios";

const serviceData = ref([]);

const loadData = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/view-all-services");
  serviceData.value = response.data.data;
  console.log(serviceData.value);
};

onMounted(async () => {
  observeElements();
  await loadData();
});
</script>

<template>
  <div class="service-container" id="service">
    <label class="appointment-txt-1 test">OUR SERVICES</label>
    <div
      :class="`service-div-${item.id} test`"
      v-for="(item, index) in serviceData"
      :key="index"
    >
      <label class="service-txt-1">0{{ item.id }}</label>
      <div class="service-div-1-1">
        <label>{{ item.service_name }}</label>
        <p>
          {{ item.service_description }}
        </p>
      </div>
    </div>
  </div>
</template>
