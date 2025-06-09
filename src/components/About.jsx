const About = () => {
  return (
    <div className="relative">
      <img
        src="/about/06_about.png"
        alt=""
        className="absolute right-0 top-0 xl:hidden"
      />
      <div className="relative md:mx-auto pt-20">
        <p className="font-poppins md:text-xl text-sm font-normal text-primary-500 text-center uppercase xl:hidden mb-5 animate-fade-in">
          About Us
        </p>
        <div className="container flex flex-col xl:flex-row mx-auto">
          <div className="xl:w-1/2 flex relative md:w-11/12 animate-fade-in">
            <img
              src="/about/01_about.png"
              alt="about image"
              className="xl:h-[411px] z-40 relative right-0 md:left-16 xl:absolute xl:left-0 h-[280px] md:h-3/5 animate-float"
            />

            <img
              src="/about/02_about.png"
              alt=""
              className="xl:h-[444px] rounded-full absolute z-30 md:right-0 xl:-bottom-12 top-16 right-0 w-56 md:w-7/12 xl:left-auto xl:w-auto xl:top-16 animate-float"
              style={{ animationDelay: "1s" }}
            />
            <img
              src="/about/04_about.png"
              alt=""
              className="absolute -bottom-20 md:block hidden animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          <div className="relative md:hidden">
            <img
              src="/about/07_about.png"
              alt=""
              className="absolute left-5 top-3 animate-fade-in"
            />
          </div>
          <div className="xl:w-1/2 flex flex-col gap-5 md:my-[108px] md:pl-7 relative mt-20 md:mt-44">
            <p className="font-poppins text-xl font-normal text-primary-500 uppercase hidden xl:block animate-slide-up opacity-0 [animation-fill-mode:forwards]">
              About Us
            </p>
            <h2 className="font-arapey text-2xl md:text-4xl xl:text-5xl font-normal uppercase mx-auto text-primary-500 md:leading-[64px] text-center xl:text-left w-3/4 md:w-auto animate-slide-up opacity-0 [animation-fill-mode:forwards]">
              It’s Not Just a Party, It’s an Affair.
            </h2>
            <p className="font-poppins md:text-base font-normal text-textColor leading-6 xl:w-5/6 text-center text-sm xl:text-left animate-slide-up opacity-0 [animation-fill-mode:forwards]">
              We don’t just plan events, we create meaningful experiences for
              you. Every moment is crafted with care because for us no
              celebration is too small, no dream too big, every story deserves
              to be told beautifully.
            </p>
          </div>
          <img
            src="/about/05_about.png"
            alt=""
            className="absolute right-0 -bottom-72 hidden md:block animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          />
        </div>
        <img
          src="/about/04_about.png"
          alt=""
          className="absolute md:left-52 md:-bottom-36 md:-right-12 -right-10 hidden md:hidden animate-fade-in"
        />
        <img
          src="/about/03_about.png"
          alt=""
          className="absolute left-0 -top-16 md:hidden xl:block hidden animate-fade-in"
        />
      </div>
    </div>
  );
};

export default About;
