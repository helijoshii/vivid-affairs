const Hero = () => {
  return (
    <div className="relative min-h-screen bg-hero bg-no-repeat bg-cover bg-center flex flex-col justify-end h-[800px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end flex-col container gap-5 mb-24">
        <h1 className="font-antic text-8xl text-white uppercase text-center">
          Let’s plan <br /> your event together
        </h1>
        <p className="w-1/2 font-poppins text-white text-center text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </p>
      </div>

      {/* Bottom image */}
      <img
        src={"/public/hero/02_Hero.png"}
        alt=""
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

export default Hero;
