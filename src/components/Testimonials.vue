<script setup>
  import Avatar01 from '@/assets/images/3d-cartoon-style-character.jpg'
  import Avatar02 from '@/assets/images/40523.jpg'
  import Avatar03 from '@/assets/images/2151100226.jpg'
</script>

<template>
  <div class="testimonials-container">
    <label class="animal-txt-1">Testimonials</label>
    <div class="testimonials-div-1">
      <div class="testimonials-card">
        <div class="testimonials-div-2">
          <img
            alt="icon"
            :src="Avatar01"
            class="testimonials-img"
          />
          <label class="testimonials-txt-1">Nadeesha Ruwandima</label>
        </div>
        <p class="testimonials-p">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          qui ipsa aut eaque dicta quos. Rem esse exercitationem saepe magnam
          beatae ea id vel repudiandae nemo, numquam laboriosam recusandae
          nihil."
        </p>
        <div class="testimonials-div-3">
          <label class="testimonials-txt-2">30.08.2024</label>
        </div>
      </div>
      <div class="testimonials-card">
        <div class="testimonials-div-2">
          <img
            alt="icon"
            :src="Avatar02"
            class="testimonials-img"
          />
          <label class="testimonials-txt-1">Nadeesha Ruwandima</label>
        </div>
        <p class="testimonials-p">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          qui ipsa aut eaque dicta quos. Rem esse exercitationem saepe magnam
          beatae ea id vel repudiandae nemo, numquam laboriosam recusandae
          nihil."
        </p>
        <div class="testimonials-div-3">
          <label class="testimonials-txt-2">30.08.2024</label>
        </div>
      </div>
      <div class="testimonials-card">
        <div class="testimonials-div-2">
          <img
            alt="icon"
           :src="Avatar03"
            class="testimonials-img"
          />
          <label class="testimonials-txt-1">Nadeesha Ruwandima</label>
        </div>
        <p class="testimonials-p">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          qui ipsa aut eaque dicta quos. Rem esse exercitationem saepe magnam
          beatae ea id vel repudiandae nemo, numquam laboriosam recusandae
          nihil."
        </p>
        <div class="testimonials-div-3">
          <label class="testimonials-txt-2">30.08.2024</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: white;
}

.testimonials-div-1 {
  padding-top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-bottom: 2%;
}

.testimonials-card {
  padding: 2%;
  box-shadow: 0px 0px 5px black;
  border-radius: 20px;
  width: 25%;
}

.testimonials-div-2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.testimonials-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.testimonials-txt-1 {
  font-weight: bolder;
  letter-spacing: 2px;
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.testimonials-p {
  text-align: start;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  font-weight: bold;
}

.testimonials-txt-2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  color: rgb(126, 126, 126);
}

.testimonials-div-3 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
