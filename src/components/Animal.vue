<template>
    <div class="animal-container">
      <label class="animal-txt-1">What's your pet ?</label>
      <div class="animal-div-1">
        <div class="animal-div-2">
          <label class="animal-txt-2">Dog</label>
          <img
            alt="icon"
            src="../images/arrow-circle-right.png"
            class="home-img-1"
          />
        </div>
        <div class="animal-div-3">
          <label class="animal-txt-2">Cat</label>
          <img
            alt="icon"
            src="../images/arrow-circle-right.png"
            class="home-img-1"
          />
        </div>
        <div class="animal-div-4">
          <label class="animal-txt-2">Rabbit</label>
          <img
            alt="icon"
            src="../images/arrow-circle-right.png"
            class="home-img-1"
          />
        </div>
        <div class="animal-div-5">
          <div class="animal-div-6">
            <label class="animal-txt-2">Bird</label>
            <img
              alt="icon"
              src="../images/arrow-circle-right.png"
              class="home-img-1"
            />
          </div>
          <div class="animal-div-7">
            <label class="animal-txt-2">Rodent</label>
            <img
              alt="icon"
              src="../images/arrow-circle-right.png"
              class="home-img-1"
            />
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
  letter-spacing: 2px;
  font-size: 30px;
  text-transform: uppercase;
  padding-left: 2%;
}

.animal-txt-2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(255, 255, 255);
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 20px;
  letter-spacing: 2px;
}

.animal-div-1 {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  height: 86%;
  padding: 2%;
  column-gap: 2%;
}

.animal-div-2 {
  background-color: rgb(83, 83, 255);
  width: 80%;
  height: 160px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10%;
}

.animal-div-3 {
  background-color: rgb(255, 166, 58);
  width: 80%;
  height: 160px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10%;
}

.animal-div-4 {
  background-color: rgb(255, 83, 229);
  width: 80%;
  height: 160px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10%;
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

.animal-div-6 {
  width: 49%;
  background-color: yellow;
  border-radius: 30px;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.animal-div-7 {
  width: 49%;
  background-color: rgb(0, 174, 255);
  border-radius: 30px;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>