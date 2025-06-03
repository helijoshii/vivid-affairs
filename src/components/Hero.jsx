const Hero = () => {
  return (
    <div className="relative min-h-screen bg-hero bg-no-repeat bg-[position:center_bottom] md:bg-[position:center] md:bg-cover flex flex-col justify-end md:h-[900px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end flex-col container w-full gap-6 md:gap-4 md:mb-24 mb-16">
        <h1 className="font-antic text-3xl md:text-6xl text-white uppercase text-center leading-tight tracking-wide w-full">
          Let’s create
          <br /> unforgettable moments,
          <br /> that last forever, <br />
          tailored just for you.
        </h1>

        <p className="md:w-3/4 w-full text-center text-backgroundColor font-poppins text-xs md:text-base leading tracking-wide font-normal">
          At Vivid Affairs, we believe every celebration deserves a story worth
          telling — from intimate gatherings to grand affairs. We craft
          unforgettable experiences rooted in creativity, culture, and class. We
          bring your vision to life seamlessly, beautifully, and beyond
          expectations.
          <span className="block mt-2">
            Because every celebration deserves elegance, emotion, and a touch of
            magic.
          </span>
        </p>
      </div>

      {/* Bottom image */}
      <img
        src={"/hero/02_Hero.png"}
        alt="Decorative bottom banner"
        className="absolute bottom-0 w-full object-cover"
      />
    </div>
  );
};

export default Hero;
