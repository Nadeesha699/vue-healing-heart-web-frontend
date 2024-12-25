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

<style scoped>
.animal-container {
  background-color: white;
  height: 100vh;
}

.animal-txt-1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  letter-spacing: 20px;
  font-size: 30px;
  text-transform: uppercase;
  padding-left: 2%;
  transition: all 1s ease-in-out;
  opacity: 0;
}

.animal-txt-1.yes{
  opacity: 1;
 letter-spacing: 2px;
}


.animal-txt-2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(255, 255, 255);
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 20px;
  letter-spacing: 2px;
  transition: all 1.4s ease-in-out;
  opacity: 0;
  transform: translateY(-200px);
}

.animal-txt-2.yes {
  opacity: 1;
  transform: translateY(0);
}

.animal-div-1 {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  height: 86%;
  padding: 2%;
  column-gap: 2%;
  row-gap: 6%;
}

.animal-div-2, .animal-div-3, .animal-div-4{
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 290px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5%;
  opacity: 0;
  transform: translateX(-200px);
  transition: all 1s ease-in-out;
}

.animal-div-2 {
  background-image: url(../assets/images/2150797206.jpg);
}

.animal-div-2.yes,
.animal-div-3.yes,
.animal-div-4.yes,
.animal-div-6.yes,
.animal-div-7.yes {
  opacity: 1;
  transform: translateX(0);
}

.animal-div-3 {
  background-image: url(../assets/images/cute-halloween-3d-cat.jpg);
}

.animal-div-4 {
  background-image: url(../assets/images/233988850_11111682.jpg);
}

.animal-div-5 {
  width: 100%;
  height: 290px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  gap: 1%;
  justify-content: space-between;
}

.animal-div-6,
.animal-div-7 {
  width: 49%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transform: translateX(-200px);
  transition: all 1s ease-in-out;
}

.animal-div-6 {
  background-image: url(../assets/images/2151002249.jpg);
}

.animal-div-7 {
  background-image: url(../assets/images/151099632_10473850.jpg);
}

.home-img-1 {
  width: 25px;
  height: 25px;
}
</style>
