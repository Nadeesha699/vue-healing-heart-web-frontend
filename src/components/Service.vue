<script setup>
import PinOut from "@/assets/images/pin.png";
import PinIn from "@/assets/images/pin1.png";
import { ref } from "vue";

const changePostion01 = ref(false);
const changePostion02 = ref(false);
const changePostion03 = ref(false);
const changePostion04 = ref(false);
const changePostion05 = ref(false);
const changePostion06 = ref(false);
const changePostion07 = ref(false);

const changeButtonIcon01 = ref(false);
const changeButtonIcon02 = ref(false);
const changeButtonIcon03 = ref(false);
const changeButtonIcon04 = ref(false);
const changeButtonIcon05 = ref(false);
const changeButtonIcon06 = ref(false);
const changeButtonIcon07 = ref(false);

function clickPin(value) {
  switch (value) {
    case 1: {
      changePostion01.value = !changePostion01.value;
      changeButtonIcon01.value = !changeButtonIcon01.value;
      break;
    }
    case 2: {
      changePostion02.value = !changePostion02.value;
      changeButtonIcon02.value = !changeButtonIcon02.value;
      break;
    }
    case 3: {
      changePostion03.value = !changePostion03.value;
      changeButtonIcon03.value = !changeButtonIcon03.value;
      break;
    }
    case 4: {
      changePostion04.value = !changePostion04.value;
      changeButtonIcon04.value = !changeButtonIcon04.value;
      break;
    }
    case 5: {
      changePostion05.value = !changePostion05.value;
      changeButtonIcon05.value = !changeButtonIcon05.value;
      break;
    }
    case 6: {
      changePostion06.value = !changePostion06.value;
      changeButtonIcon06.value = !changeButtonIcon06.value;
      break;
    }
    case 7: {
      changePostion07.value = !changePostion07.value;
      changeButtonIcon07.value = !changeButtonIcon07.value;
      break;
    }
  }
}

import { onMounted } from "vue";
import { observeElements } from "@/js/intersectionObserver.js";
onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="service-container" id="service">
    <label class="appointment-txt-1 test">OUR SERVICES</label>
    <div
      class="service-div-1 test"
      :class="{ 'service-div-1-pin': changePostion01 }"
    >
      <label class="service-txt-1">01</label>
      <div class="service-div-1-1">
        <label>Endoscopy</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti
          nisi, ut praesentium velit libero dicta numquam enim omnis minus
          atque, repellat quas iure voluptatum maiores repudiandae doloribus
          odit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloribus reiciendis, autem provident explicabo illum voluptas
          voluptatibus aspernatur laborum? Itaque voluptas temporibus voluptatem
          et, eaque magni. Quae minus ex culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur necessitatibus mollitia odit
          temporibus. Dolor cum, sunt numquam quaerat tempore molestiae
          necessitatibus praesentium accusantium nam, quis, amet ratione error
          quasi aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eos corrupti nisi, ut praesentium velit libero dicta numquam
          enim omnis minus atque, repellat quas iure voluptatum maiores
          repudiandae doloribus odit quia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos doloribus reiciendis, autem
          provident explicabo illum voluptas voluptatibus aspernatur laborum?
          Itaque voluptas temporibus voluptatem et, eaque magni. Quae minus ex
          culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur necessitatibus mollitia odit temporibus. Dolor cum, sunt
          numquam quaerat tempore molestiae necessitatibus praesentium
          accusantium nam, quis, amet ratione error quasi aspernatur.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eos corrupti nisi, ut
          praesentium velit libero dicta numquam enim omnis minus atque,
          repellat quas iure voluptatum maiores repudiandae doloribus odit quia?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
          reiciendis, autem provident explicabo illum voluptas voluptatibus
          aspernatur laborum? Itaque voluptas temporibus voluptatem et, eaque
          magni. Quae minus ex culpa! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consectetur necessitatibus mollitia odit temporibus.
          Dolor cum, sunt numquam quaerat tempore molestiae necessitatibus
          praesentium accusantium nam, quis, amet ratione error quasi
          aspernatur.
        </p>
      </div>
      <img
        :src="changeButtonIcon01 ? PinIn : PinOut"
        class="service-img-1"
        @click="clickPin(1)"
      />
    </div>
    <div
      class="service-div-2 test"
      :class="{ 'service-div-2-pin': changePostion02 }"
    >
      <label class="service-txt-1">02</label>
      <div class="service-div-1-1">
        <label>Online Consultation</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti
          nisi, ut praesentium velit libero dicta numquam enim omnis minus
          atque, repellat quas iure voluptatum maiores repudiandae doloribus
          odit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloribus reiciendis, autem provident explicabo illum voluptas
          voluptatibus aspernatur laborum? Itaque voluptas temporibus voluptatem
          et, eaque magni. Quae minus ex culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur necessitatibus mollitia odit
          temporibus. Dolor cum, sunt numquam quaerat tempore molestiae
          necessitatibus praesentium accusantium nam, quis, amet ratione error
          quasi aspernatur.
        </p>
      </div>
      <img
        :src="changeButtonIcon02 ? PinIn : PinOut"
        class="service-img-1"
        @click="clickPin(2)"
      />
    </div>
    <div
      class="service-div-3 test"
      :class="{ 'service-div-3-pin': changePostion03 }"
    >
      <label class="service-txt-1">03</label>
      <div class="service-div-1-1">
        <label>Dentistry</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti
          nisi, ut praesentium velit libero dicta numquam enim omnis minus
          atque, repellat quas iure voluptatum maiores repudiandae doloribus
          odit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloribus reiciendis, autem provident explicabo illum voluptas
          voluptatibus aspernatur laborum? Itaque voluptas temporibus voluptatem
          et, eaque magni. Quae minus ex culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur necessitatibus mollitia odit
          temporibus. Dolor cum, sunt numquam quaerat tempore molestiae
          necessitatibus praesentium accusantium nam, quis, amet ratione error
          quasi aspernatur.
        </p>
      </div>
      <img
        :src="changeButtonIcon03 ? PinIn : PinOut"
        class="service-img-1"
        @click="clickPin(3)"
      />
    </div>
    <div
      class="service-div-4 test"
      :class="{ 'service-div-4-pin': changePostion04 }"
    >
      <label class="service-txt-1">04</label>
      <div class="service-div-1-1">
        <label>Zoopsychologhy</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti
          nisi, ut praesentium velit libero dicta numquam enim omnis minus
          atque, repellat quas iure voluptatum maiores repudiandae doloribus
          odit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloribus reiciendis, autem provident explicabo illum voluptas
          voluptatibus aspernatur laborum? Itaque voluptas temporibus voluptatem
          et, eaque magni. Quae minus ex culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur necessitatibus mollitia odit
          temporibus. Dolor cum, sunt numquam quaerat tempore molestiae
          necessitatibus praesentium accusantium nam, quis, amet ratione error
          quasi aspernatur.
        </p>
      </div>
      <img
        :src="changeButtonIcon04 ? PinIn : PinOut"
        class="service-img-1"
        @click="clickPin(4)"
      />
    </div>
    <div
      class="service-div-5 test"
      :class="{ 'service-div-5-pin': changePostion05 }"
    >
      <label class="service-txt-1">05</label>
      <div class="service-div-1-1">
        <label>Blood Database</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti
          nisi, ut praesentium velit libero dicta numquam enim omnis minus
          atque, repellat quas iure voluptatum maiores repudiandae doloribus
          odit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloribus reiciendis, autem provident explicabo illum voluptas
          voluptatibus aspernatur laborum? Itaque voluptas temporibus voluptatem
          et, eaque magni. Quae minus ex culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur necessitatibus mollitia odit
          temporibus. Dolor cum, sunt numquam quaerat tempore molestiae
          necessitatibus praesentium accusantium nam, quis, amet ratione error
          quasi aspernatur.
        </p>
      </div>
      <img
        :src="changeButtonIcon05 ? PinIn : PinOut"
        class="service-img-1"
        @click="clickPin(5)"
      />
    </div>
    <div
      class="service-div-6 test"
      :class="{ 'service-div-6-pin': changePostion06 }"
    >
      <label class="service-txt-1">06</label>
      <div class="service-div-1-1">
        <label>Diagonostics</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti
          nisi, ut praesentium velit libero dicta numquam enim omnis minus
          atque, repellat quas iure voluptatum maiores repudiandae doloribus
          odit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloribus reiciendis, autem provident explicabo illum voluptas
          voluptatibus aspernatur laborum? Itaque voluptas temporibus voluptatem
          et, eaque magni. Quae minus ex culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur necessitatibus mollitia odit
          temporibus. Dolor cum, sunt numquam quaerat tempore molestiae
          necessitatibus praesentium accusantium nam, quis, amet ratione error
          quasi aspernatur.
        </p>
      </div>
      <img
        :src="changeButtonIcon06 ? PinIn : PinOut"
        class="service-img-1"
        @click="clickPin(6)"
      />
    </div>
    <div
      class="service-div-7 test"
      :class="{ 'service-div-7-pin': changePostion07 }"
    >
      <label class="service-txt-1">07</label>
      <div class="service-div-1-1">
        <label>Surgery</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti
          nisi, ut praesentium velit libero dicta numquam enim omnis minus
          atque, repellat quas iure voluptatum maiores repudiandae doloribus
          odit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloribus reiciendis, autem provident explicabo illum voluptas
          voluptatibus aspernatur laborum? Itaque voluptas temporibus voluptatem
          et, eaque magni. Quae minus ex culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur necessitatibus mollitia odit
          temporibus. Dolor cum, sunt numquam quaerat tempore molestiae
          necessitatibus praesentium accusantium nam, quis, amet ratione error
          quasi aspernatur.
        </p>
      </div>
      <img
        :src="changeButtonIcon07 ? PinIn : PinOut"
        class="service-img-1"
        @click="clickPin(7)"
      />
    </div>
    <div class="service-div-8 test">
      <label class="service-txt-1">08</label>
      <div class="service-div-1-1">
        <label>Oncology</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti
          nisi, ut praesentium velit libero dicta numquam enim omnis minus
          atque, repellat quas iure voluptatum maiores repudiandae doloribus
          odit quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos doloribus reiciendis, autem provident explicabo illum voluptas
          voluptatibus aspernatur laborum? Itaque voluptas temporibus voluptatem
          et, eaque magni. Quae minus ex culpa! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur necessitatibus mollitia odit
          temporibus. Dolor cum, sunt numquam quaerat tempore molestiae
          necessitatibus praesentium accusantium nam, quis, amet ratione error
          quasi aspernatur.
        </p>
      </div>
      <img :src="PinOut" class="service-img-1" />
    </div>
  </div>
</template>

