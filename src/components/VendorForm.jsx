import { useState } from "react";
import { DEPARTMENTS_OPTIONS, DISTRICTS_OPTIONS } from "../utils/constant";
import vendorFormValidation from "../validations/VendorFormValidation";
import { ChevronDown, Check } from "lucide-react";

const VendorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    department: "",
    experienceYears: "",
    experienceMonths: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict to numbers only
    if (
      ["phone", "experienceYears", "experienceMonths"].includes(name) &&
      !/^\d*$/.test(value)
    ) {
      return; // block invalid character
    }

    // Restrict name to alphabets and spaces only
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // block invalid character
    }

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
        district: "",
        department: "",
        experienceYears: "",
        experienceType: "",
      });
      setErrors({});
    }
    setErrors(newErrors);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="md:mt-[40px] mt-5">
      <h3 className=" font-arapey font-normal md:text-xl text-sm uppercase text-white text-center animate-fade-in">
        Let's create timeless moments
      </h3>

      <form
        className="w-full mx-auto bg-formBackgroundColor rounded-[30px] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-5 md:p-16 md:mt-[30px] mt-3 p-8 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="col-span-2 lg:col-span-1 animate-slide-up opacity-0 [animation-fill-mode:forwards]">
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
        <div className="col-span-2 lg:col-span-1 animate-slide-up opacity-0 [animation-fill-mode:forwards]">
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
              {errors.email}
            </p>
          )}
        </div>
        {/* Phone */}
        <div className="col-span-2 lg:col-span-1 animate-slide-up opacity-0 [animation-fill-mode:forwards]">
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
        <div className="relative col-span-2 lg:col-span-1 animate-slide-up opacity-0 [animation-fill-mode:forwards]">
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
                className={`w-full bg-transparent border-0 border-b font-poppins border-white border-opacity-30 text-base py-3 px-0 pr-6 outline-none appearance-none cursor-pointer transition-all duration-300 
    ${formData.state === "" ? "text-placeHolderColor" : "text-white"} 
    focus:border-white focus:border-opacity-80`}
              >
                <option value="" className="bg-amber-900 text-white">
                  Select State
                </option>
                {Object?.keys(DISTRICTS_OPTIONS).map((state) => (
                  <option
                    key={state}
                    value={state}
                    className="bg-amber-900 text-white"
                  >
                    {state}
                  </option>
                ))}
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

            {/* Districts */}
            <div className="relative w-full">
              <select
                name="district"
                value={formData.district}
                title={formData.state === "" && "Please select state first"}
                disabled={formData.state === ""}
                onChange={handleChange}
                className={`w-full bg-transparent border-0 border-b border-white border-opacity-30 text-base py-3 px-0 pr-6 outline-none font-poppins appearance-none cursor-pointer transition-all duration-300
    ${formData.district === "" ? "text-placeHolderColor" : "text-white"}
    focus:border-white focus:border-opacity-80 focus:text-white ${
      formData.state === "" && "cursor-not-allowed"
    }`}
              >
                <option value="" className="bg-amber-900 text-backgroundColor">
                  Select District
                </option>

                {DISTRICTS_OPTIONS[formData.state]?.map((district) => (
                  <option
                    key={district}
                    value={district}
                    className="bg-amber-900 text-backgroundColor"
                  >
                    {district}
                  </option>
                ))}
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
              {errors?.district && (
                <p className="text-red-400 text-sm mt-1 font-poppins">
                  {errors.district}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Department */}
        <div className="relative z-10 animate-slide-up opacity-0 [animation-fill-mode:forwards]">
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Department *
          </label>

          <div className="relative">
            <div
              className="border-b bg-transparent cursor-pointer border-placeHolderColor focus:border-white"
              onClick={toggleDropdown}
            >
              <div className="flex items-center justify-between py-3 font-poppins">
                <div
                  className={`text-base ${
                    selectedItems.length > 0
                      ? "text-white"
                      : "text-placeHolderColor"
                  }`}
                >
                  {selectedItems.length > 0
                    ? selectedItems.join(", ")
                    : "Select Department"}
                </div>
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
              </div>
            </div>

            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-amber-900 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto ">
                {/* Individual Items */}
                {DEPARTMENTS_OPTIONS?.map((option) => {
                  const isSelected = selectedItems.includes(option);
                  return (
                    <div
                      key={option}
                      className={`flex items-center p-3 cursor-pointer ${
                        isSelected
                          ? "bg-blue-600 border-b-[.5px] border-backgroundColor"
                          : "hover:bg-blue-600"
                      }`}
                      onClick={() => toggleItem(option)}
                    >
                      <div className="relative ">
                        <div
                          className={`w-4 h-4 border-2 rounded ${
                            isSelected
                              ? "bg-blue-500 border-blue-500 "
                              : "border-gray-300"
                          }`}
                        >
                          {isSelected && (
                            <Check className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
                          )}
                        </div>
                      </div>
                      <span className="ml-3 text-white font-poppins">
                        {option}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {errors?.department && (
            <p className="text-red-400 text-sm mt-1 font-poppins">
              {errors.department}
            </p>
          )}
        </div>

        {/* Work Experience */}
        <div className="relative col-span-2 lg:col-span-1 animate-slide-up opacity-0 [animation-fill-mode:forwards]">
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
            Work Experience *
          </label>
          <div className="flex gap-2">
            {/* Years */}
            <div className="relative w-full">
              <input
                type="text"
                name="experienceYears"
                className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 font-poppins placeholder:text-placeHolderColor"
                placeholder="Years"
                value={formData.experienceYears}
                onChange={handleChange}
                maxLength={2}
              />
              {errors?.experienceYears && (
                <p className="text-red-400 text-sm mt-1 font-poppins">
                  {errors.experienceYears}
                </p>
              )}
            </div>
            <div className="relative w-full">
              <input
                type="text"
                name="experienceMonths"
                className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 font-poppins placeholder:text-placeHolderColor"
                placeholder="Months"
                value={formData.experienceMonths}
                onChange={handleChange}
                maxLength={2}
              />
              {errors?.experienceMonths && (
                <p className="text-red-400 text-sm mt-1 font-poppins">
                  {errors.experienceMonths}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="col-start-1 col-end-3 animate-slide-up opacity-0 [animation-fill-mode:forwards] z-0">
          <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey ">
            Portfolio
          </label>
          <input
            type="text"
            name="portfolio"
            className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 font-poppins placeholder:text-placeHolderColor"
            placeholder="Eg. Website or social media link"
            value={formData.portfolio}
            onChange={handleChange}
          />
        </div>
        <div className="pt-4 animate-slide-up opacity-0 [animation-fill-mode:forwards] z-0">
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
