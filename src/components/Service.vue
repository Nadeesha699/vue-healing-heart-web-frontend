<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { observeElements } from "@/js/intersectionObserver.js";
import { loadService } from "@/api/api";

let loadServiceData = ref([]);

onMounted(async () => {
  observeElements();
  loadServiceData.value = await loadService();
});
</script>

<template>
  <div class="service-container" id="service">
    <label class="appointment-txt-1 test">OUR SERVICES</label>
    <div
      :class="`service-div-${item.id} test`"
      v-for="(item, index) in loadServiceData"
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
