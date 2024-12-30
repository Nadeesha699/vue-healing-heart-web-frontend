import axios from "axios";

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
