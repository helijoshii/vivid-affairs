const Services = () => {
  return (
    <div className="">
      <div>
        <h5 className="font-poppins md:text-xl font-normal uppercase text-center text-primary-500 text-sm">
          Services
        </h5>
        <h2 className="font-arapey md:text-5xl font-normal text-center uppercase mt-4 text-primary-500 text-2xl">
          What we offer
        </h2>
      </div>

      <div className="md:mt-20 relative mt-5">
        {/* 01 */}
        <div className="flex justify-between container flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="flex items-center gap-8 justify-center md:justify-start">
              <h2 className="font-arapey text-5xl font-normal text-primary-500 hidden md:block">
                01.
              </h2>
              <img src="/services/04_services.png" alt="" />
            </div>
            <div className="flex flex-col gap-4 mt-8 md:w-4/6">
              <div className="flex items-end justify-center md:justify-start">
                <h2 className="font-arapey md:text-5xl font-normal text-primary-500 text-4xl md:hidden block ">
                  01.
                </h2>
                <h4 className="font-arapey md:text-3xl font-normal uppercase text-primary-500 text-2xl ">
                  Wedding Planning
                </h4>
              </div>
              <p className="font-poppins text-base font-normal text-textColor leading-6 text-center md:text-left">
                At Vivid Affairs we believe in crafting moments that stays with
                you forever. From the venue to the décor, the rituals to the
                guest experience, everything is thoughtfully woven together with
                love, warmth, and elegance.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-auto">
            <img
              src="/services/01_services.jpg"
              alt=""
              className="md:h-[400px] md:w-[653px] object-cover object-bottom rounded-3xl h-56 w-full"
            />
          </div>
        </div>
        <img
          src="/services/07_services.png"
          alt=""
          className="absolute left-16 top-96"
        />
        {/* 02 */}
        <div className="flex justify-between mt-24 relative container flex-col-reverse md:flex-row">
          <div className="mt-5">
            <img
              src="/services/02_services.jpg"
              alt=""
              className="md:h-[400px] md:w-[653px] object-cover object-bottom rounded-3xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <div className="flex items-center gap-8 justify-center md:justify-start">
              <h2 className="font-arapey text-5xl font-normal text-primary-500 hidden md:block">
                02.
              </h2>
              <img src="/services/05_services.png" alt="" />
            </div>
            <div className="flex flex-col gap-4 md:mt-8">
              <div className="flex items-end md:justify-start justify-center">
                <h2 className="font-arapey text-4xl font-normal text-primary-500 md:text-5xl md:hidden">
                  02.
                </h2>
                <h4 className="font-arapey text-3xl font-normal uppercase text-primary-500">
                  Corporate Events
                </h4>
              </div>
              <p className="font-poppins text-base font-normal text-textColor leading-6 text-center md:text-left">
                Keeping a perfect balance of professionalism, precision, and
                style. Whether it’s a corporate gathering, product launch, or
                brand event, everything is curated to reflect your brand's
                identity with style, clarity, and impact because in the
                business, how you show up matters.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/services/08_services.png"
          alt=""
          className="absolute bottom-52"
        />
        {/* 03 */}
        <div className="flex justify-between mt-24 container flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="flex items-center gap-8 justify-center md:justify-start ">
              <h2 className="font-arapey text-5xl font-normal text-primary-500 hidden md:block">
                03.
              </h2>
              <img src="/services/06_services.png" alt="" />
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-end justify-center md:justify-start">
                <h2 className="font-arapey md:text-5xl font-normal text-primary-500 text-4xl md:hidden block">
                  03.
                </h2>
                <h4 className="font-arapey md:text-3xl font-normal uppercase text-primary-500 text-2xl">
                  Parties and Celebrations
                </h4>
              </div>
              <p className="font-poppins text-base font-normal text-textColor leading-6 md:w-8/12 text-center md:text-left">
                At Vivid Affairs from cozy cocktail evenings to extravagant
                themed parties, we do it all with style. A celebration that
                reflects your personality, we transform moments into memories
                that truly belong to you — vibrant, joyful, and unforgettable.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/services/03_services.jpg"
              alt=""
              className="md:h-[400px] md:w-[653px] object-cover md:object-bottom rounded-3xl w-full h-64 object-top mt-5"
            />
          </div>
        </div>

        <img
          src="/services/09_services.png"
          alt=""
          className="absolute right-0 z-0 -bottom-36 hidden"
        />
      </div>
    </div>
  );
};

export default Services;
