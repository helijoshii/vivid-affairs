import { useEffect, useState } from "react";
import { NAVBAR_OPTIONS } from "../utils/constant";
import { X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="relative h-24 flex items-center">
      <img
        src="/navbar/04_Flower.png"
        alt="daspfm"
        className="absolute top-7 lg:hidden"
      />
      <img
        src="/navbar/05_Flower.png"
        alt="daspfm"
        className="absolute right-0 top-1 lg:hidden"
      />
      <img
        src="/navbar/02_Flower.png"
        alt="daspfm"
        className="absolute top-1 hidden lg:block xl:block"
      />
      <img
        src="/navbar/03_Flower.png"
        alt=""
        className="absolute top-1 right-0 hidden xl:block lg:block"
      />

      <div className="bg-white flex items-center container justify-between w-full px-4 md:px-0">
        <div>
          <img src="/navbar/01_Logo.png" alt="" className="h-full w-20" />
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-0 xl:gap-8">
            {NAVBAR_OPTIONS?.map((option) => (
              <HashLink key={option.id} to={option.redirectTo}>
                <li
                  key={option.id}
                  className="font-arapey xl:text-base lg:text-sm md:text-base font-normal text-primary-500 cursor-pointer lg:px-4 md:px-0 py-2 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-200"
                >
                  {option.label}
                </li>
              </HashLink>
            ))}
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-primary-500 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-primary-500 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-primary-500 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay with Blur */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-md z-40 transition-all duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Modern Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-backgroundColor shadow-2xl border-l border-gray-200 z-50 transform transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-6 border-b border-primary-500">
            <h3 className="text-base font-arapey font-medium text-primary-600">
              Menu
            </h3>
            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 transition-all duration-200 group"
              aria-label="Close menu"
            >
              <X className="w-4 h-5 text-white" />
            </button>
          </div>

          {/* Scrollable Menu Items */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-2">
            {NAVBAR_OPTIONS?.map((option, index) => (
              <div
                key={option.id}
                className="transform transition-all duration-300 ease-out"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <a
                  href="#"
                  className="group relative block font-arapey text-sm font-normal text-primary-600 cursor-pointer py-4 px-2 rounded-2xl border border-transparent hover:border-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 overflow-hidden"
                  onClick={toggleMenu}
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Text with subtle animation */}
                  <span className="relative z-10 group-hover:text-primary-700 transition-colors duration-300">
                    {option.label}
                  </span>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
