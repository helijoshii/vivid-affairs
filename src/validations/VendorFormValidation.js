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

  const experienceYears = formData.experienceYears?.toString().trim() || "";
  const experienceMonths = formData.experienceMonths?.toString().trim() || "";

  const yearsValid =
    !validator.isEmpty(experienceYears) &&
    validator.isInt(experienceYears, { min: 0, max: 99 });

  const monthsValid = validator.isInt(experienceMonths, { min: 0, max: 11 });

  if (!yearsValid) {
    newErrors.experienceYears = "Enter valid years of experience.";
  }

  if (!monthsValid) {
    newErrors.experienceMonths = "Enter valid months (0–11).";
  }

  if (
    validator.isInt(experienceYears, { min: 0 }) &&
    validator.isInt(experienceMonths, { min: 0 }) &&
    parseInt(experienceYears) === 0 &&
    parseInt(experienceMonths) === 0
  ) {
    newErrors.experienceMonths = "Experience cannot be zero.";
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
