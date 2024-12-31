import axios from "axios";
import {
  valiadteName,
  validatePhoneNumer,
  validateDateOrTime,
  validatePetType,
} from "@/js/validate";
import {ref } from "vue";

import { toast } from "vue3-toastify";

export let appointmentForm = ref({
  name: "",
  phoneNummber: "",
  petType: "",
  appointmentDate: "",
  appointmentTime: "",
});

export const doctorData = ref([]);


export const loadTestimonials = async () => {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/view-all-customer-feedback"
  );
  return response.data.data;
};

export const loadService = async () => {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/view-all-services"
  );
  return response.data.data;
};


export const submitAppointment = async () => {
  if (
    valiadteName(appointmentForm.value.name) === false ||
    validatePhoneNumer(appointmentForm.value.phoneNummber) === false ||
    validatePetType(appointmentForm.value.petType) === false ||
    validateDateOrTime(appointmentForm.value.appointmentDate) === false ||
    validateDateOrTime(appointmentForm.value.appointmentTime) === false
  ) {
    toast.error("Please fill the all feilds", {
      autoClose: 5000,
      theme: "colored",
    });
  } else {
    await axios
      .post("http://127.0.0.1:8000/api/add-appointment", {
        name: appointmentForm.value.name,
        phone_number: appointmentForm.value.phoneNummber,
        pet_type: appointmentForm.value.petType,
        appointment_date: appointmentForm.value.appointmentDate,
        appointment_time: appointmentForm.value.appointmentTime,
      })
      .then((res) => {
        toast.success(res.data.message, { autoClose: 5000, theme: "colored" });
        appointmentForm = {
          name: "",
          phoneNummber: "",
          petType: "",
          appointmentDate: "",
          appointmentTime: "",
        };
      });
  }
};


export const loadDoctors = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/view-all-doctors");
  doctorData.value = response.data.data;
};