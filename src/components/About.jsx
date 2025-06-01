const About = () => {
  return (
    <div className="relative">
      <p className="font-poppins md:text-xl text-sm font-normal text-primary-500 text-center uppercase md:hidden mb-5">
        About Us
      </p>
      <div className="container flex flex-col md:flex-row mx-auto ">
        <img
          src="/about/03_about.png"
          alt=""
          className="absolute top-0 hidden md:block"
        />
        <div className="md:w-1/2 flex relative">
          <img
            src="/about/01_about.png"
            alt="about image"
            className="md:h-[411px] z-50 relative md:absolute md:left-0 h-80"
          />
          <img
            src="/about/02_about.png"
            alt=""
            className="md:h-[444px] rounded-full absolute z-40 md:right-0 md:-bottom-12 top-28 right-5 w-64 md:left-auto md:w-auto md:top-16"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-5 md:my-[108px] md:pl-7 relative mt-32">
          <p className="font-poppins text-xl font-normal text-primary-500 uppercase hidden md:block">
            About Us
          </p>
          <h2 className="font-arapey text-2xl md:text-5xl font-normal uppercase mx-auto text-primary-500 md:leading-[64px] text-center md:text-left w-3/4 md:w-auto">
            It’s Not Just a Party, It’s an Affair.
          </h2>
          <p className="font-poppins md:text-base font-normal text-textColor leading-6 md:w-5/6 text-center text-sm md:text-left">
            We don’t just plan events, we create meaningful experiences for you.
            Every moment is crafted with care because for us no celebration is
            too small, no dream too big, every story deserves to be told
            beautifully.
          </p>
        </div>
        <img
          src="/about/05_about.png"
          alt=""
          className="absolute right-0 -bottom-72 hidden md:block"
        />
      </div>
      <img
        src="/about/04_about.png"
        alt=""
        className="absolute md:left-52 md:-bottom-36 md:-right-12 -right-10 hidden"
      />
      <img
        src="/about/03_about.png"
        alt=""
        className="absolute left-0 -top-16 md:block hidden"
      />
    </div>
  );
};

export default About;
