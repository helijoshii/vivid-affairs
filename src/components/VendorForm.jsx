import { useState } from "react";
import { DEPARTMENTS_OPTIONS } from "../utils/constant";
import vendorFormValidation from "../validations/VendorFormValidation";
const VendorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    department: "",
    experienceYears: "",
    experienceType: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newErrors, isValid } = vendorFormValidation({
      formData,
    });
    if (isValid) {
      alert("Form submitted successfully");
      setFormData({
        name: "",
        phone: "",
        email: "",
        state: "",
        city: "",
        department: "",
        experienceYears: "",
        experienceType: "",
      });
      setErrors({});
    }
    setErrors(newErrors);
  };

  return (
    <div className="md:mt-[40px] mt-5">
      <h3 className="font-poppins md:text-xl text-sm font-normal uppercase text-white text-center">
        Let’s create timeless moments
      </h3>

      <form
        className="w-full mx-auto bg-formBackgroundColor rounded-[30px] grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-4 gap-5 md:p-16 md:mt-[30px] mt-3 p-8 "
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Name *
          </label>
          <input
            type="text"
            name="name"
            className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white transition-all duration-300 placeholder:text-placeHolderColor font-poppins"
            placeholder="Jack"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1 font-poppins">
              {errors.name}
            </p>
          )}
        </div>
        {/* Email */}
        <div>
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Email *
          </label>
          <input
            type="email"
            name="email"
            className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 font-poppins placeholder:text-placeHolderColor"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors?.email && (
            <p className="text-red-400 text-sm mt-1 font-poppins">
              {errors.name}
            </p>
          )}
        </div>
        {/* Phone */}
        <div>
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Mobile Number *
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 placeholder:text-placeHolderColor font-poppins"
            placeholder="+91 5759689967"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors?.phone && (
            <p className="text-red-400 text-sm mt-1 font-poppins">
              {errors.phone}
            </p>
          )}
        </div>
        {/* Location */}
        <div className="relative">
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Location *
          </label>
          <div className="flex gap-2">
            {/* State */}
            <div className="relative w-full">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b font-poppins border-white border-opacity-30 text-white text-base py-3 px-0 pr-6 outline-none focus:border-white focus:border-opacity-80 focus:text-white appearance-none cursor-pointer transition-all duration-300 placeholder:text-placeHolderColor"
              >
                <option value="" className="bg-amber-900 text-placeHolderColor">
                  Select State
                </option>
                <option value="gujarat" className="bg-amber-900 text-white">
                  Gujarat
                </option>
                <option value="maharashtra" className="bg-amber-900 text-white">
                  Maharashtra
                </option>
              </select>
              <div className="absolute right-0 top-5 pointer-events-none">
                <svg
                  className="w-4 h-3 text-white text-opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {errors?.state && (
                <p className="text-red-400 text-sm mt-1 font-poppins">
                  {errors.state}
                </p>
              )}
            </div>

            {/* City */}
            <div className="relative w-full">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-base py-3 px-0 pr-6 outline-none focus:border-white font-poppins focus:border-opacity-80 focus:text-white appearance-none cursor-pointer transition-all duration-300 placeholder:text-placeHolderColor"
              >
                <option value="" className="bg-amber-900 text-placeHolderColor">
                  Select City
                </option>
                <option value="ahmedabad" className="bg-amber-900 text-white">
                  Ahmedabad
                </option>
                <option value="mumbai" className="bg-amber-900 text-white">
                  Mumbai
                </option>
              </select>
              <div className="absolute right-0 top-5 pointer-events-none">
                <svg
                  className="w-4 h-3 text-white text-opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {errors?.city && (
                <p className="text-red-400 text-sm mt-1 font-poppins">
                  {errors.city}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Department */} {/* For this */}
        <div className="relative">
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Department *
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b font-poppins border-white border-opacity-30 text-white text-base py-3 px-0 pr-6 outline-none focus:border-white focus:border-opacity-80 focus:text-white appearance-none cursor-pointer transition-all duration-300 placeholder:text-placeHolderColor"
          >
            <option value="" className="bg-amber-900 text-placeHolderColor">
              Select Department
            </option>
            {DEPARTMENTS_OPTIONS?.map((dept, index) => (
              <option
                key={index}
                value={dept}
                className="bg-amber-900 text-white"
              >
                {dept}
              </option>
            ))}
          </select>

          <div className="absolute right-0 top-10 pointer-events-none">
            <svg
              className="w-4 h-3 text-white text-opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {errors?.department && (
            <p className="text-red-400 text-sm mt-1 font-poppins">
              {errors.department}
            </p>
          )}
        </div>
        {/* Work Experience */}
        <div className="relative">
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Work Experience *
          </label>
          <div className="flex gap-2">
            {/* Years */}
            <div className="relative w-full">
              <select
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b font-poppins border-white border-opacity-30 text-white text-base py-3 px-0 pr-6 outline-none focus:border-white focus:border-opacity-80 focus:text-white appearance-none cursor-pointer transition-all duration-300 placeholder:text-placeHolderColor"
              >
                <option value="" className="bg-amber-900 text-placeHolderColor">
                  Years
                </option>
                <option value="1" className="bg-amber-900 text-white">
                  1 Year
                </option>
                <option value="2" className="bg-amber-900 text-white">
                  2 Years
                </option>
                <option value="3" className="bg-amber-900 text-white">
                  3+ Years
                </option>
              </select>
              <div className="absolute right-0 top-5 pointer-events-none">
                <svg
                  className="w-4 h-3 text-white text-opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {errors?.experienceYears && (
                <p className="text-red-400 text-sm mt-1 font-poppins">
                  {errors.experienceYears}
                </p>
              )}
            </div>

            {/* Experience Type */}
            <div className="relative w-full">
              <select
                name="experienceType"
                value={formData.experienceType}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b font-poppins border-white border-opacity-30 text-white text-base py-3 px-0 pr-6 outline-none focus:border-white focus:border-opacity-80 focus:text-white appearance-none cursor-pointer transition-all duration-300 placeholder:text-placeHolderColor"
              >
                <option value="" className="bg-amber-900 text-placeHolderColor">
                  Experience Type
                </option>
                <option value="freelance" className="bg-amber-900 text-white">
                  Freelance
                </option>
                <option value="agency" className="bg-amber-900 text-white">
                  Agency
                </option>
                <option value="both" className="bg-amber-900 text-white">
                  Both
                </option>
              </select>
              <div className="absolute right-0 top-5 pointer-events-none">
                <svg
                  className="w-4 h-3 text-white text-opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {errors?.experienceType && (
                <p className="text-red-400 text-sm mt-1 font-poppins">
                  {errors.experienceType}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="bg-backgroundColor font-arapey bg-opacity-90 text-primary-500 font-normal text-sm md:text-base tracking-widest uppercase py-3 px-8 rounded-full transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorForm;
