import { useState } from "react";
import { TABS_OPTIONS } from "../utils/constant";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-contactUs h-screen bg-no-repeat bg-cover bg-center">
      <div className="container h-full">
        <div className="pt-20">
          <div className="flex items-center justify-center">
            <div className="flex gap-2 bg-white rounded-[100px] h-[50px] p-1 w-2/5">
              {TABS_OPTIONS?.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full h-full rounded-full text-base tracking-wide transition-all duration-300 font-arapey font-normal whitespace-nowrap 
                    ${
                      activeTab === tab.id
                        ? "bg-primary-500 text-white"
                        : "text-primary-500"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-[70px]">
            <h3 className="font-poppins text-xl font-normal uppercase text-white text-center">
              request a callback
            </h3>

            <form className="w-full mx-auto bg-formBackgroundColor rounded-[30px] grid grid-cols-2 gap-5 p-16 mt-[30px]">
              <div>
                <label className="block text-white text-base font-normal uppercase opacity-90 font-Arapey">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-opacity-70 text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 placeholder:text-placeHolderColor  "
                  placeholder="Jack"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label className="block text-white text-base font-normal uppercase opacity-90 font-arapey">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-opacity-70 text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 placeholder:text-placeHolderColor "
                  placeholder="+91 5759689967"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="block text-white text-base font-normal uppercase opacity-90 font-arapey">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-opacity-70 text-base py-3 px-0 outline-none focus:border-white focus:border-opacity-80 focus:text-white placeholder-white placeholder-opacity-50 transition-all duration-300 placeholder:text-placeHolderColor "
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <label className="block text-white text-base font-normal uppercase opacity-90 font-arapey ">
                  Type of Events *
                </label>
                <select
                  name="eventType"
                  className="w-full bg-transparent border-0 border-b border-white border-opacity-30 text-white text-opacity-70 text-base py-3 px-0 pr-6 outline-none focus:border-white focus:border-opacity-80 focus:text-white appearance-none cursor-pointer transition-all duration-300 placeholder:text-placeHolderColor "
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option
                    value=""
                    className="bg-amber-900text-placeHolderColor "
                  >
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
                  <option
                    value="anniversary"
                    className="bg-amber-900 text-white"
                  >
                    Anniversary
                  </option>
                  <option value="other" className="bg-amber-900 text-white">
                    Other
                  </option>
                </select>

                <div className="absolute right-0 top-9 pointer-events-none">
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
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-white bg-opacity-90 hover:bg-white text-amber-900 font-medium text-sm tracking-widest uppercase py-3 px-8 rounded-full transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Inquire Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
