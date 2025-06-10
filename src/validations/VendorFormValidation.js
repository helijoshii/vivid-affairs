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

  if (validator.isEmpty(formData.district)) {
    newErrors.district = "Please select a district.";
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

  if (!validator.isInt(formData.experienceMonths, { min: 0, max: 11 })) {
    newErrors.experienceMonths = "Enter valid months (0–11).";
  }

  return { newErrors, isValid: Object.keys(newErrors).length === 0 };
};

export default vendorFormValidation;
