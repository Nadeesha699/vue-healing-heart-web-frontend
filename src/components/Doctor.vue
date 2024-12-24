<script setup>
import Avatar01 from '@/assets/images/2150797606.jpg'
import Avatar02 from '@/assets/images/portrait-3d-male-doctor.jpg'
import Avatar03 from '@/assets/images/2151107332.jpg'
import Avatar04 from '@/assets/images/2151107363.jpg'
</script>

<template>
    <div class="doctor-container" id="doctor">
      <label class="animal-txt-1">Our specialized</label>
      <div class="doctor-div-1">
        <div class="doctor-card">
          <img alt="icon" :src='Avatar01' />
          <label class="doctor-txt-1">Kamal Weera</label>
          <label class="doctor-txt-2">Surgeon</label>
        </div>
        <div class="doctor-card">
          <img alt="icon" :src='Avatar02' />
          <label class="doctor-txt-1">Amal Singha</label>
          <label class="doctor-txt-2">Therapist</label>
        </div>
        <div class="doctor-card">
          <img alt="icon" :src='Avatar03' />
          <label class="doctor-txt-1">Bimal Kodi</label>
          <label class="doctor-txt-2">Dentist</label>
        </div>
        <div class="doctor-card">
          <img alt="icon" :src='Avatar04' />
          <label class="doctor-txt-1">Susuil jaye</label>
          <label class="doctor-txt-2">Zoopsychologhist</label>
        </div>
      </div>
    </div>
</template>

<style scoped>
.doctor-container {
  background-color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.doctor-div-1 {
  padding-top: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.doctor-card {
  width: 20%;
  height: 450px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.doctor-card img {
  width: 100%;
  height: 80%;
  border-radius: 20px;
}

.doctor-txt-1 {
  font-weight: bolder;
  letter-spacing: 2px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.doctor-txt-2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  color: rgb(126, 126, 126);
}

.animal-txt-1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 30px;
  text-transform: uppercase;
  padding-left: 2%;
}

</style>