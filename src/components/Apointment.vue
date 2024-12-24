<script setup>
import Animal01 from '@/assets/images/dog.png';
import Animal02 from '@/assets/images/cat.png';
import Animal03 from '@/assets/images/rabbit.png';
import Animal04 from '@/assets/images/cockatoo.png';
import Animal05 from '@/assets/images/rat.png';
import Animal06 from '@/assets/images/cow.png';
import Add from '@/assets/images/add.png';
</script>

<template>
  <div class="appointment-container">
    <label class="appointment-txt-1">Make an appointment</label>
    <div class="appointment-div-1">
      <div class="appointment-div-2">
        <div class="appointment-div-3">
          <label class="appointment-txt-2">Your Name</label>
          <input />
        </div>
        <div class="appointment-div-3">
          <label class="appointment-txt-2">Your phone</label>
          <input />
        </div>
      </div>
      <div>
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
        <div class="appointment-div-3">
          <label class="appointment-txt-2">Date</label><input type="date" />
        </div>
        <div class="appointment-div-3">
          <label class="appointment-txt-2">Time</label><input type="time" />
        </div>
      </div>
      <button>select a doctor</button>
    </div>
  </div>
</template>

<style scoped>
.appointment-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2%;
  background-color:white
}

.appointment-div-1 {
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  gap: 20px;
}

.appointment-div-2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.appointment-div-3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.appointment-div-3 input {
  width: 95%;
  padding: 2%;
  border-radius: 10px;
}

.appointment-img-1 {
  width: 40px;
  height: 40px;
}

.appointment-img-2 {
  width: 30px;
  height: 30px;
}

.appointment-card {
  width: 10%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1%;
  border-radius: 10px;
  box-shadow: 0px 0px 3px black;
  cursor: pointer;
}

.appointment-div-4 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.appointment-div-1 button {
  padding: 1%;
  border-radius: 10px;
  border-style: none;
  background-color: rgb(255, 0, 89);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: white;
  letter-spacing: 2px;
}

.appointment-txt-1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 30px;
  text-transform: uppercase;
}

.appointment-txt-2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}
</style>
