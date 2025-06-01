const Footer = () => {
  return (
    <div className="relative ">
      <img
        src="/footer/06_Footer.png"
        alt=""
        className="absolute block md:hidden right-0 -top-14"
      />
      <div className="flex justify-center items-end">
        <img src="/footer/01_Logo.png" alt="footer logo" className="h-32" />
      </div>

      <div className="container flex md:justify-between md:w-1/2 flex-col md:flex-row justify-center items-center gap-3 ">
        <div className="flex gap-2 items-center">
          <img src="/footer/icons/01_call.png" alt="" className="w-4 h-4" />
          <h4 className="font-poppins text-base font-normal text-primary-500">
            +91 000 000 0000
          </h4>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/footer/icons/02_mail.png" alt="" className="w-4 h-4" />
          <h4 className="font-poppins text-base font-normal text-primary-500">
            info@vividaffairs.com
          </h4>
        </div>

        <div className="flex gap-3 items-center cursor-pointer">
          <img
            src="/footer/icons/03_facebook.png"
            onClick={() => {
              window.open(
                "https://www.facebook.com/people/Vivid-Affairs/61576826303154/?mibextid=rS40aB7S9Ucbxw6v",
                "_blank"
              );
            }}
          />
          <img src="/footer/icons/04_twitter.png" />
          <img src="/footer/icons/05_insta.png" />
          <img src="/footer/icons/06_telegram.png" />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <h4 className="font-poppins text-base fontWeight-light text-primary-500">
          2025 © by Vivid Affairs. All Right Reserved 2025.
        </h4>
      </div>

      <div className="bg-primary-500 h-16 w-14 rounded-full flex justify-center items-center absolute right-4 bottom-24 cursor-pointer">
        <img src="/footer/02_Top_arrow.png" alt="" className="w-6 h-6" />
      </div>

      <img
        src="/footer/02_Footer.png"
        alt=""
        className="absolute left-0 bottom-0 hidden md:block"
      />

      <img
        src="/footer/04_Footer.png"
        alt=""
        className="absolute right-0 bottom-0 hidden md:block"
      />

      <img
        src="/footer/05_Footer.png"
        alt=""
        className="absolute left-0 bottom-0 md:hidden"
      />
    </div>
  );
};

export default Footer;
