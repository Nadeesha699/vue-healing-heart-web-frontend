<script setup>
import Icon from "@/assets/images/arrow-circle-right.png";
import Logo from "@/assets/images/heartworm.png";
</script>

<template>
  <div class="home-container">
    <div class="home-div-2">
      <div class="home-div-3">
        <div class="home-div-8">
          <div class="home-div-6">
            <img alt="icon" :src="Logo" class="home-img-2" />
            <h1 class="home-txt-4">Healing Hearts</h1>
          </div>
          <div class="home-div-7">
            <a href="/" class="home-a-1">About</a>
            <a href="#service" class="home-a-1">Service</a>
            <a href="#testimonials" class="home-a-1">Testimonials</a>
            <a href="#doctor" class="home-a-1">Doctors</a>
          </div>
        </div>
        <label class="home-txt-3">+94 711764232</label>
      </div>
      <div class="home-div-4">
        <label class="home-txt-1">
          Loving care for your furry family members
        </label>
        <div class="home-div-5">
          <div class="home-card-1">
            <label class="home-txt-2">Make an appointment</label>
            <div class="home-div-6">
              <img alt="icon" :src="Icon" class="home-img-1" />
            </div>
          </div>
          <div class="home-card-1">
            <label class="home-txt-2">Call a doctor at home</label>
            <div class="home-div-6">
              <img alt="icon" :src="Icon" class="home-img-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-div-1">
      <div>
        <label class="home-txt-5"
          >20<span class="home-txt-6">years</span></label
        >
        <hr />
        <p class="home-txt-7">
          is the clinic's history, saving animals since 2003
        </p>
      </div>
      <div>
        <label class="home-txt-5"
          >3,000<span class="home-txt-6">per year</span></label
        >
        <hr />
        <p class="home-txt-7">
          the annual number of vaccinations given to the pets
        </p>
      </div>
      <div>
        <label class="home-txt-5">$50,000</label>
        <hr />
        <p class="home-txt-7">
          inveted in state-of-the-art equipment in the last 3 years
        </p>
      </div>
      <div>
        <label class="home-txt-5"
          >6,500<span class="home-txt-6">animals</span></label
        >
        <hr />
        <p class="home-txt-7">
          the average number of patients the clinic treat per year
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.home-container {
  max-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.473);
}

.home-div-1 {
  background-color: white;
  height: 30%;
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding-left: 2%;
  padding-right: 2%;
  justify-content: center;
  align-items: center;
}

.home-div-2 {
  height: 70%;
  display: flex;
  flex-direction: column;
  padding-left: 2%;
  padding-right: 2%;
  justify-content: space-around;
}

.home-div-3 {
  height: 70%;
}

.home-div-4 {
  height: 30%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
}

.home-div-5 {
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.home-txt-1 {
  width: 80%;
  font-size: 55px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.home-card-1 {
  background-color: rgba(255, 255, 255, 0.393);
  border-radius: 10%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 2%;
  padding-right: 2%;
}

.home-txt-2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.home-img-1 {
  width: 25px;
  height: 25px;
}

.home-img-2 {
  width: 50px;
  height: 50px;
}

.home-div-6 {
  text-align: right;
  width: 100%;
}

.home-div-3 {
  padding-top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.home-txt-3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  background-color: rgba(255, 255, 255, 0.393);
  border-radius: 20px;
  padding: 0.5%;
  font-size: 15px;
  font-weight: bold;
}

.home-txt-4 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
}

.home-div-6 {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.home-div-7 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.home-a-1 {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.home-div-8 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.home-txt-5 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(0, 0, 0);
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 50px;
}

.home-txt-6 {
  padding-left: 10px;
  font-size: 20px;
}

.home-txt-7 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(0, 0, 0);
  font-size: 14px;
  letter-spacing: 2px;
}
</style>
