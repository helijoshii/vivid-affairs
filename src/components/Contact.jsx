import { useState } from "react";
import { TABS_OPTIONS } from "../utils/constant";
import ContactUsForm from "./ContactUsForm";
import VendorForm from "./VendorForm";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div
      className={`${
        activeTab === "contact" ? "bg-contactUsOne" : "bg-contactUsTwo"
      } bg-no-repeat bg-cover bg-center transition-all duration-300 ease-in-out z-10 relative animate-fade-in`}
      style={{ animationDuration: "1.8s" }}
    >
      <div className="container h-full">
        <div className="pt-10">
          <div className="flex items-center justify-center">
            <div className="flex gap-2 bg-backgroundColor rounded-[100px] h-[50px] p-1 x:w-2/5 w-full animate-slide-up opacity-0 [animation-fill-mode:forwards]">
              {TABS_OPTIONS?.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full h-full rounded-full tracking-wide transition-all duration-300 font-arapey font-normal whitespace-nowrap md:text-base text-sm px-2 md:px-auto
                    ${
                      activeTab === tab.id
                        ? "bg-primary-500 text-backgroundColor"
                        : "text-primary-500"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="pb-24 animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
            {activeTab === "contact" ? <ContactUsForm /> : <VendorForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
