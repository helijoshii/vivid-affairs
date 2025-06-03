import validator from "validator";

const contactUsFormValidation = ({ formData }) => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Mobile number is required";
  } else if (!validator.isMobilePhone(formData.phone, "en-IN")) {
    newErrors.phone = "Invalid mobile number";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!validator.isEmail(formData.email)) {
    newErrors.email = "Invalid email address";
  }

  if (!formData.eventType) {
    newErrors.eventType = "Event type is required";
  }

  return { newErrors, isValid: Object.keys(newErrors).length === 0 };
};

export default contactUsFormValidation;
