<script setup>
import Animal01 from "@/assets/images/dog.png";
import Animal02 from "@/assets/images/cat.png";
import Animal03 from "@/assets/images/rabbit.png";
import Animal04 from "@/assets/images/cockatoo.png";
import Animal05 from "@/assets/images/rat.png";
import Animal06 from "@/assets/images/cow.png";
import Add from "@/assets/images/add.png";

import { onMounted, ref } from "vue";
import { observeElements } from "@/js/intersectionObserver";
import "vue3-toastify/dist/index.css";
import { submitAppointment,appointmentForm } from "@/api/api";


let checked = ref({
  dog: false,
  cat: false,
  parrot: false,
  rabbit: false,
  rat: false,
  other: false,
});

onMounted(() => {
  observeElements();
});


const setPetType = (petName) => {
  for (const pet in checked.value) {
    checked.value[pet] = false;
  }
  switch (petName) {
    case "Dog":
      checked.value.dog = true;
      break;
    case "Cat":
      checked.value.cat = true;
      break;
    case "Parrot":
      checked.value.parrot = true;
      break;
    case "Rabbit":
      checked.value.rabbit = true;
      break;
    case "Rat":
      checked.value.rat = true;
      break;
    case "Other":
      checked.value.other = true;
      break;
  }

  appointmentForm.value.petType = petName;
};
</script>

<template>
  <div class="appointment-container">
    <label class="appointment-txt-1 test">Make an appointment</label>
    <div class="appointment-div-1">
      <div class="appointment-div-7">
        <div class="appointment-div-3 test">
          <label class="appointment-txt-2">Your Name</label>
          <input v-model="appointmentForm.name" />
        </div>
        <div class="appointment-div-3 test">
          <label class="appointment-txt-2">Your phone</label>
          <input v-model="appointmentForm.phoneNummber" />
        </div>
      </div>
      <div class="appointment-div-5 test">
        <label class="appointment-txt-2">Your Pet</label>
        <div class="appointment-div-2">
          <div
            class="appointment-card"
            :class="checked.dog ? 'yes' : ''"
            @click="setPetType('Dog')"
          >
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Dog</label
              ><img :src="Animal01" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div
            class="appointment-card"
            :class="checked.cat ? 'yes' : ''"
            @click="setPetType('Cat')"
          >
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Cat</label
              ><img :src="Animal02" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div
            class="appointment-card"
            :class="checked.rabbit ? 'yes' : ''"
            @click="setPetType('Rabbit')"
          >
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Rabbit</label
              ><img :src="Animal03" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div
            class="appointment-card"
            :class="checked.parrot ? 'yes' : ''"
            @click="setPetType('Parrot')"
          >
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Parrot</label
              ><img :src="Animal04" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div
            class="appointment-card"
            :class="checked.rat ? 'yes' : ''"
            @click="setPetType('Rat')"
          >
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Rat</label
              ><img :src="Animal05" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div
            class="appointment-card"
            :class="checked.other ? 'yes' : ''"
            @click="setPetType('Other')"
          >
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Other</label
              ><img :src="Animal06" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
        </div>
      </div>
      <div class="appointment-div-7">
        <div class="appointment-div-3 test">
          <label class="appointment-txt-2">Date</label
          ><input type="date" v-model="appointmentForm.appointmentDate" />
        </div>
        <div class="appointment-div-3 test">
          <label class="appointment-txt-2">Time</label
          ><input type="time" v-model="appointmentForm.appointmentTime" />
        </div>
      </div>
      <button class="test" @click="submitAppointment()">select a doctor</button>
    </div>
  </div>
</template>
