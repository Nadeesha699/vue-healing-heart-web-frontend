<script setup>
import Animal01 from "@/assets/images/dog.png";
import Animal02 from "@/assets/images/cat.png";
import Animal03 from "@/assets/images/rabbit.png";
import Animal04 from "@/assets/images/cockatoo.png";
import Animal05 from "@/assets/images/rat.png";
import Animal06 from "@/assets/images/cow.png";
import Add from "@/assets/images/add.png";

import { onMounted } from "vue";
import { observeElements } from "@/js/intersectionObserver";

onMounted(() => {
  observeElements();
});

</script>

<template>
  <div class="appointment-container">
    <label class="appointment-txt-1 test">Make an appointment</label>
    <div class="appointment-div-1">
      <div class="appointment-div-2">
        <div class="appointment-div-3 test">
          <label class="appointment-txt-2">Your Name</label>
          <input />
        </div>
        <div class="appointment-div-3 test">
          <label class="appointment-txt-2">Your phone</label>
          <input />
        </div>
      </div>
      <div class="appointment-div-5 test">
        <label class="appointment-txt-2">Your Pet</label>
        <div class="appointment-div-2">
          <div class="appointment-card">
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Dog</label
              ><img :src="Animal01" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div class="appointment-card">
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Cat</label
              ><img :src="Animal02" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div class="appointment-card">
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Rabbit</label
              ><img :src="Animal03" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div class="appointment-card">
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Parrot</label
              ><img :src="Animal04" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div class="appointment-card">
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Rat</label
              ><img :src="Animal05" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
          <div class="appointment-card">
            <div class="appointment-div-4">
              <label class="appointment-txt-2">Other</label
              ><img :src="Animal06" class="appointment-img-1" />
            </div>
            <img :src="Add" class="appointment-img-2" />
          </div>
        </div>
      </div>
      <div class="appointment-div-2">
        <div class="appointment-div-3 test">
          <label class="appointment-txt-2">Date</label><input type="date" />
        </div>
        <div class="appointment-div-3 test">
          <label class="appointment-txt-2">Time</label><input type="time" />
        </div>
      </div>
      <button class="test">select a doctor</button>
    </div>
  </div>
</template>

