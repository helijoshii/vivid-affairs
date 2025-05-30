const Footer = () => {
  return (
    <div className="relative">
      <div className="flex justify-center items-end ">
        <img
          src={"/public/footer/01_Logo.png"}
          alt="footer logo"
          className="h-32"
        />
      </div>
      <div className="container flex justify-between w-1/2">
        <div className="flex gap-2 items-center">
          <img
            src="/public/footer/icons/01_call.png"
            alt=""
            className="w-4 h-4"
          />
          <h4 className="font-poppins text-base font-normal text-primary-500">
            +91 9999 999 999
          </h4>
        </div>

        <div className="flex gap-2 items-center">
          <img
            src="/public/footer/icons/02_mail.png"
            alt=""
            className="w-4 h-4"
          />
          <h4 className="font-poppins text-base font-normal text-primary-500">
            example@gmail.com
          </h4>
        </div>

        <div className="flex gap-3 items-center">
          <img src="/public/footer/icons/03_facebook.png" />
          <img src="/public/footer/icons/04_twitter.png" />
          <img src="/public/footer/icons/05_insta.png" />
          <img src="/public/footer/icons/06_telegram.png" />
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-7">
        <h4 className="font-poppins text-base fontWeight-light text-primary-500">
          2025 © by Vivid Affairs. All Right Reserved 2025.
        </h4>
      </div>
      <div className="bg-primary-500 h-16 w-14 rounded-full flex justify-center items-center absolute right-4 bottom-20 cursor-pointer">
        <img
          src="/public/footer/02_Top_arrow.png"
          alt=""
          srcset=""
          className="w-6 h-6"
        />
      </div>
    </div>
  );
};

export default Footer;
