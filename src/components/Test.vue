

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const a = document.querySelectorAll(".test");
  const c = new IntersectionObserver(
    (e) => {
      e.forEach((e1) => {
        if (e1.isIntersecting) {
          e1.target.classList.add("yes");
        } else {
          e1.target.classList.remove("yes");
        }
      });
    },
    { threshold: 0.5 }
  );
  a.forEach((a1) => c.observe(a1));
});
</script>

<template>
  <div class="container">
    <div class="div-1 test"></div>
    <div class="div-2 test"></div>
    <div class="div-3 test"></div>
    <div class="div-4 test"></div>
    <div class="div-5 test"></div>
    <div class="div-6 test"></div>
  </div>
</template>

<style lang="css" scoped>
.div-1 {
  background-color: yellow;
  width: 150px;
  height: 150px;
  opacity: 0;
  transform: translateX(-200px);
  transition: all 0.2s ease-in-out;
}

.div-1.yes {
  opacity: 1;
  transform: translateX(0);
}
.div-2 {
  background-color: rgb(255, 183, 0);
  width: 150px;
  height: 150px;
}
.div-3 {
  background-color: rgb(140, 0, 255);
  width: 150px;
  height: 150px;
}
.div-4 {
  background-color: rgb(0, 106, 255);
  width: 150px;
  height: 150px;
}
.div-5 {
  background-color: rgb(255, 0, 93);
  width: 150px;
  height: 150px;
}
.div-6 {
  background-color: rgb(0, 255, 110);
  width: 150px;
  height: 150px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
}
</style>
