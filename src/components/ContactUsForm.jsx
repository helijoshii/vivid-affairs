import { useState } from "react";
import contactUsFormValidation from "../validations/ContactUsFormValidation";
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newErrors, isValid } = contactUsFormValidation({
      formData,
    });

    if (isValid) {
      alert("Form submitted successfully");
      setFormData({ name: "", phone: "", email: "", eventType: "" });
      setErrors({});
    }

    setErrors(newErrors);
  };

  return (
    <div className="md:mt-[40px] mt-5">
      <h3 className="font-poppins md:text-xl font-normal uppercase text-white text-center text-sm">
        request a callback
      </h3>

      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto bg-formBackgroundColor rounded-[30px] grid lg:grid-cols-2 gap-5 md:p-16 md:mt-[30px] p-8 mt-3"
      >
        {/* Name */}
        <div>
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Name *
          </label>
          <input
            type="text"
            name="name"
            className={`w-full bg-transparent font-poppins border-0 border-b ${
              errors.name ? "border-red-500" : "border-white border-opacity-30"
            } text-white text-opacity-70 text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-opacity-50 transition-all duration-300 placeholder:text-placeHolderColor`}
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

        {/* Phone */}
        <div>
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Mobile Number *
          </label>
          <input
            type="tel"
            name="phone"
            className={`w-full bg-transparent border-0 font-poppins border-b ${
              errors.phone ? "border-red-500" : "border-white border-opacity-30"
            } text-white text-opacity-70 text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 placeholder:text-formPlaceHolderColor`}
            placeholder="+91 5759689967"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
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
            className={`w-full bg-transparent border-0 font-poppins border-b ${
              errors.email ? "border-red-500" : "border-white border-opacity-30"
            } text-white text-opacity-70 text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 placeholder:text-formPlaceHolderColor`}
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Event Type */}
        <div className="relative">
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Type of Events *
          </label>
          <select
            name="eventType"
            className={`w-full font-poppins bg-transparent border-0 border-b ${
              errors.eventType
                ? "border-red-500"
                : "border-white border-opacity-30"
            } text-base py-3 px-0 pr-6 outline-none appearance-none cursor-pointer transition-all duration-300
  ${formData.eventType === "" ? "text-placeHolderColor" : "text-white"}
  focus:border-white focus:border-opacity-80 focus:text-white`}
            value={formData.eventType}
            onChange={handleChange}
          >
            <option value="" className="bg-amber-900 text-formPlaceHolderColor">
              Select
            </option>
            <option value="wedding" className="bg-amber-900 text-white">
              Wedding
            </option>
            <option value="corporate" className="bg-amber-900 text-white">
              Corporate Event
            </option>
            <option value="birthday" className="bg-amber-900 text-white">
              Birthday Party
            </option>
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
          {errors.eventType && (
            <p className="text-red-400 text-sm mt-1">{errors.eventType}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-backgroundColor bg-opacity-90 font-arapey text-primary-500 font-normal text-sm md:text-base tracking-widest uppercase py-3 px-8 rounded-full transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Inquire Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
