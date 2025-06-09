import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/helper";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`fixed bg-primary-500 h-14 w-14 rounded-full flex justify-center items-center right-6 bottom-6 cursor-pointer shadow-md hover:bg-primary-600 hover:shadow-lg transition-all duration-500 z-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <img
        src="/footer/02_Top_arrow.png"
        alt="Scroll to top"
        className="w-6 h-6 cursor-pointer animate-float"
      />
    </button>
  );
};

export default ScrollToTop;
