<template>
  <div class="card-row">
    <!-- Loop through the cards array and render each card -->
    <div v-for="(card, index) in doctorData" :key="index" class="card">
        <img :src="`data:image/jpeg;base64,${card.image}`" :alt="card.title" class="card-image" />
      <div class="card-content">
        <h3>{{ card.name }}</h3>
        <p>{{ card.position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const doctorData = ref([]);

const loadData = async () => {
  const response = await axios.get("http://127.0.0.1:8000/view-all-doctors");
  doctorData.value = response.data.data;
};

onMounted(async () => {
  await loadData();
});
</script>

<style scoped>
.card-row {
  display: flex;
  flex-direction: row; /* Arrange cards in a row */
  gap: 20px; /* Space between cards */
}

.card {
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 200px; /* Set a fixed width for each card */
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 10px;
}

.card-content h3 {
  margin: 0;
  font-size: 1.2rem;
}

.card-content p {
  font-size: 1rem;
  color: #555;
}
</style>
