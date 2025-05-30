const About = () => {
  return (
    <div className="container flex ">
      <div className="w-1/2 relative">
        <img
          src="/public/about/01_about.png"
          alt=""
          className="h-[411px] z-50 absolute left-0 "
        />
        <img
          src="/public/about/02_about.png"
          alt=""
          className="h-[444px] rounded-full absolute z-40 right-0 -bottom-12"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-5 my-[108px] pl-7">
        <p className="font-poppins text-xl font-normal text-primary-500 uppercase">
          About Us
        </p>
        <h2 className="font-arapey text-5xl font-normal uppercase text-primary-500 leading-[64px]">
          It’s Not Just a party It’s an Affair.
        </h2>
        <p className="font-poppins text-base font-normal text-textColor leading-6 w-5/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
    </div>
  );
};

export default About;
