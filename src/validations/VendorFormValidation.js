import validator from "validator";

const vendorFormValidation = ({ formData }) => {
  const newErrors = {};

  if (validator.isEmpty(formData.name.trim())) {
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

  if (
    validator.isEmpty(formData.experienceYears) ||
    !validator.isInt(formData.experienceYears, { min: 0, max: 99 })
  ) {
    newErrors.experienceYears = "Enter valid years of experience.";
  }

  if (!validator.isInt(formData.experienceMonths, { min: 1, max: 12 })) {
    newErrors.experienceMonths = "Enter valid months (1–12).";
  }

  if (
    validator.isEmpty(formData.portfolio) ||
    (!validator.isURL(formData.portfolio) &&
      !validator.isFQDN(formData.portfolio))
  ) {
    newErrors.portfolio = "Enter a valid portfolio URL or domain.";
  }

  return { newErrors, isValid: Object.keys(newErrors).length === 0 };
};

export default vendorFormValidation;
