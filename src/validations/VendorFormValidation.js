import validator from "validator";

const vendorFormValidation = ({ formData }) => {
  const newErrors = {};

  if (validator.isEmpty(formData.name)) {
    newErrors.name = "Name is required.";
  }

  if (!validator.isEmail(formData.email)) {
    newErrors.email = "Enter a valid email.";
  }

  if (!validator.isMobilePhone(formData.phone, "en-IN")) {
    newErrors.phone = "Enter a valid phone number.";
  }

  if (validator.isEmpty(formData.state)) {
    newErrors.state = "Please select a state.";
  }

  if (validator.isEmpty(formData.city)) {
    newErrors.city = "Please select a city.";
  }

  if (validator.isEmpty(formData.department)) {
    newErrors.department = "Please select a department.";
  }

  if (validator.isEmpty(formData.experienceYears)) {
    newErrors.experienceYears = "Please select experience in years.";
  }

  if (validator.isEmpty(formData.experienceType)) {
    newErrors.experienceType = "Please select experience type.";
  }

  return { newErrors, isValid: Object.keys(newErrors).length === 0 };
};

export default vendorFormValidation;
