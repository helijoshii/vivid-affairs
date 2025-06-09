import { scrollToTop } from "../utils/helper";

const Footer = () => {
  return (
    <div className="relative animate-fade-in">
      <img
        src="/footer/06_Footer.png"
        alt=""
        className="absolute block lg:hidden right-0 -top-14 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div className="flex justify-center items-end animate-slide-up opacity-0 [animation-fill-mode:forwards]">
        <img src="/footer/01_Logo.png" alt="footer logo" className="h-32" />
      </div>

      <div className="container flex lg:justify-between lg:w-1/2 flex-col lg:flex-row justify-center items-center gap-3 animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.2s" }}>
        <div className="flex gap-2 items-center group cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-primary-30 p-2 rounded-lg">
          <img
            src="/footer/icons/01_call.png"
            alt="Phone"
            className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h4 className="font-poppins text-base font-normal text-primary-500 group-hover:font-medium transition-all duration-300">
            +91 000 000 0000
          </h4>
        </div>

        <div className="flex gap-2 items-center group cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-primary-30 p-2 rounded-lg">
          <img
            src="/footer/icons/02_mail.png"
            alt="Email"
            className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h4 className="font-poppins text-base font-normal text-primary-500 group-hover:font-medium transition-all duration-300">
            info@vividaffairs.com
          </h4>
        </div>

        <div className="flex gap-5 items-center">
          <div
            className="transform transition-all duration-300 hover:scale-125 hover:shadow-lg rounded-full p-2 hover:bg-primary-30"
            onClick={() => {
              window.open(
                "https://www.facebook.com/people/Vivid-Affairs/61576826303154/?mibextid=rS40aB7S9Ucbxw6v",
                "_blank"
              );
            }}
          >
            <img
              src="/footer/icons/03_facebook.png"
              alt="Facebook"
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          <div
            className="transform transition-all duration-300 hover:scale-125 hover:shadow-lg rounded-full p-2 hover:bg-primary-30"
            onClick={() => {
              window.open("https://www.instagram.com/vivid_affairs", "_blank");
            }}
          >
            <img
              src="/footer/icons/05_insta.png"
              alt="Instagram"
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          <div
            className="mb-1 transform transition-all duration-300 hover:scale-125 hover:shadow-lg rounded-full p-2 hover:bg-primary-30"
            onClick={() => {
              window.open("https://www.linkedin.com/company/vivid-affairs/", "_blank");
            }}
          >
            <img
              src="/footer/icons/07_linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.4s" }}>
        <h4 className="font-poppins text-base fontWeight-light text-primary-500 pb-10">
          2025 © by Vivid Affairs. All Right Reserved 2025.
        </h4>
      </div>

      <img
        src="/footer/02_Footer.png"
        alt=""
        className="absolute left-0 bottom-0 hidden lg:block animate-float"
        style={{ animationDelay: "0.2s" }}
      />

      <img
        src="/footer/04_Footer.png"
        alt=""
        className="absolute right-0 bottom-0 hidden animate-float"
        style={{ animationDelay: "0.8s" }}
      />

      <img
        src="/footer/05_Footer.png"
        alt=""
        className="absolute left-0 bottom-0 lg:hidden animate-float"
        style={{ animationDelay: "0.4s" }}
      />
    </div>
  );
};

export default Footer;
