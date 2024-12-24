<script setup>
 import Logo from '@/assets/images/heartworm.png'
 import Contact01  from '@/assets/images/phone.png';
 import Contact02  from '@/assets/images/mail.png';
 import Contact03  from '@/assets/images/location-pin.png';
</script>

<template>
  <div class="contact-container">
    <div class="contact-container-card">
    <div class="contact-div-1">
      <div class="contact-div-4"><img :src="Logo" width="20px" height="20px"/><label>Healing Hearts</label></div>
      <div class="contact-div-3">
        <a href="">Github</a>
        <a href="">Facebook</a>
        <a href="">Youtube</a>
        <a href="">LinkedIn</a>
      </div>
      <label>2024@Nadeesha699</label>
    </div>
    <div class="contact-div-2">
      <div class="contact-div-5">
        <div class="contact-div-6">
          <label class="contact-txt-2">About</label>
          <label class="contact-txt-1">History</label>
          <label class="contact-txt-1">Mission and values</label>
          <label class="contact-txt-1">Achievement</label>
          <label class="contact-txt-1">Technologies</label>
        </div>
        <div class="contact-div-6">
          <label class="contact-txt-2">Service and price</label>
          <label class="contact-txt-1">Counseling</label>
          <label class="contact-txt-1">Diagnosis</label>
          <label class="contact-txt-1">Procedures</label>
          <label class="contact-txt-1">Prevention</label>
        </div>
        <div class="contact-div-6">
          <label class="contact-txt-2">Doctors</label>
          <label class="contact-txt-1">Our specialized</label>
          <label class="contact-txt-1">Reviews of doctors</label>
        </div>
      </div>
      <div class="contact-div-5">
        <div class="contact-div-8"><img :src="Contact01"/><label>+94 711764232</label></div>
        <div class="contact-div-8"><img :src="Contact02" /><label>nadeesharuwandima@gmail.com</label></div>
        <div class="contact-div-8"><img :src="Contact03" /><label>Peragawatta, Ganadara, Sri Lanka</label></div>
      </div>
      <div class="contact-div-7"><label>Privacy policy</label><label>Term of use</label></div>
    </div>
  </div>
  </div>
</template>

<style lang="css" scoped>
.contact-container{
  background-color: white;
  width: 100%;
  padding: 2%;
}
.contact-container-card{
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: rgb(255, 72, 118);
padding: 2%;
height: 400px;
border-radius: 20px;
}

.contact-div-1, .contact-div-2{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-div-1{
  width: 30%;
  align-items: flex-start;
}

.contact-div-1 label{
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: capitalize;
  color: white;
}

.contact-div-2{
  width: 70%;
  align-items: flex-end;
}

.contact-div-3{
  display: flex;flex-direction: row;
  width: 100%;
  justify-content: space-between; 
}

.contact-div-3 a{
  text-decoration: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.contact-div-4{
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.contact-div-4 img{
  width: 40px;
  height: 40px;
}

.contact-div-4 label{
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: capitalize;
  font-weight: bolder;
  color: white;
  font-size: 30px;
}

.contact-div-5{
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

.contact-div-6{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 10px;

}

.contact-div-7{
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

.contact-div-8{
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
}

.contact-div-8 img{
  width: 20px;
  height: 20px;
}

.contact-div-8 label{
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.contact-div-7 label{
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.contact-txt-1{
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.contact-txt-2{
  font-weight: bolder;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 5px;
}
</style>
