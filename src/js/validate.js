export const valiadteName = (value) => {
  if (!/^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(value)) {
    console.log("a1");
    return false;
  } else {
    return true;
  }
};

export const validatePhoneNumer = (value) => {
  if (!/^(0[1-9]\d{8}|\+94[1-9]\d{8})$/.test(value)) {
    console.log("a2");
    return false;
  } else {
    return true;
  }
};

export const validateDateOrTime = (value) => {
  if (!value) {
    console.log("a5");
    return false;
  } else {
    return true;
  }
};

export const validatePetType = (value) => {
  if (!value) {
    console.log("a6");
    return false;
  } else {
    return true;
  }
};
