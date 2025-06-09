const Services = () => {
  return (
    <div className="">
      <div>
        <h5 className="font-poppins xl:text-xl font-normal uppercase text-center text-primary-500 text-sm animate-slide-up opacity-0 [animation-fill-mode:forwards]">
          Services
        </h5>
        <h2 className="font-arapey xl:text-5xl font-normal text-center uppercase mt-4 text-primary-500 text-2xl animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.2s" }}>
          What we offer
        </h2>
      </div>

      <div className="xl:mt-20 relative mt-5">
        {/* 01 */}
        <div className="flex justify-between container flex-col xl:flex-row animate-fade-in" style={{ animationDuration: "1.8s" }}>
          <div className="xl:w-1/2">
            <div className="flex items-center gap-8 justify-center xl:justify-start">
              <h2 className="font-arapey text-5xl font-normal text-primary-500 hidden xl:block animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
                01.
              </h2>
              <img src="/services/04_services.png" alt="" className="animate-float" />
              <img
                src="/services/10_services.png"
                alt=""
                className="absolute -top-4 right-0 md:hidden animate-fade-in"
              />
            </div>
            <div className="flex flex-col xl:gap-4 xl:mt-8 mt-2 xl:w-3/4 gap-2">
              <div className="flex items-end justify-center xl:justify-start">
                <h2 className="font-arapey md:text-5xl font-normal text-primary-500 text-4xl xl:hidden block animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
                  01.
                </h2>
                <h4 className="font-arapey md:text-3xl font-normal uppercase text-primary-500 text-2xl animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.4s" }}>
                  Wedding Planning
                </h4>
              </div>
              <p className="font-poppins text-base font-normal text-textColor leading-6 text-center xl:text-left animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.5s" }}>
                At Vivid Affairs we believe in crafting moments that stays with
                you forever. From the venue to the décor, the rituals to the
                guest experience, everything is thoughtfully woven together with
                love, warmth, and elegance.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-auto">
            <img
              src="/services/01_services.jpeg"
              alt=""
              className="md:h-[400px] xl:w-[653px] object-cover object-bottom rounded-3xl h-56 md:w-full w-full animate-slide-up opacity-0 [animation-fill-mode:forwards]" 
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
        <img
          src="/services/07_services.png"
          alt=""
          className="absolute left-16 top-96 hidden md:block animate-float"
        />
        {/* 02 */}
        <div className="flex justify-between xl:mt-24 relative container flex-col-reverse xl:flex-row mt-12 animate-fade-in" style={{ animationDelay: "0.2s", animationDuration: "1.8s" }}>
          <div className="mt-5">
            <img
              src="/services/02_services.jpg"
              alt=""
              className="xl:h-[400px] object-cover object-bottom rounded-3xl md:w-full animate-slide-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: "0.7s" }}
            />
          </div>
          <div className="xl:w-1/2 xl:pl-16">
            <div className="flex items-center gap-8 justify-center xl:justify-start">
              <h2 className="font-arapey text-5xl font-normal text-primary-500 hidden xl:block animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
                02.
              </h2>
              <img src="/services/05_services.png" alt="" className="animate-float" />
              <img
                src="/services/11_services.png"
                alt=""
                srcset=""
                className="absolute left-0 md:hidden animate-fade-in"
              />
            </div>
            <div className="flex flex-col gap-4 md:mt-8">
              <div className="flex items-end xl:justify-start justify-center">
                <h2 className="font-arapey text-4xl font-normal text-primary-500 md:text-5xl xl:hidden animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
                  02.
                </h2>
                <h4 className="font-arapey text-3xl font-normal uppercase text-primary-500 animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.4s" }}>
                  Corporate Events
                </h4>
              </div>
              <p className="font-poppins text-base font-normal text-textColor leading-6 text-center xl:text-left animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.5s" }}>
                Keeping a perfect balance of professionalism, precision, and
                style. Whether it's a corporate gathering, product launch, or
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
          className="absolute bottom-52 hidden md:block animate-float"
          style={{ animationDelay: "1s" }}
        />
        {/* 03 */}
        <div className="flex justify-between mt-24 container flex-col xl:flex-row animate-fade-in" style={{ animationDelay: "0.4s", animationDuration: "1.8s" }}>
          <div className="xl:w-1/2">
            <div className="flex items-center gap-8 justify-center xl:justify-start ">
              <h2 className="font-arapey text-5xl font-normal text-primary-500 hidden xl:block animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
                03.
              </h2>
              <img src="/services/06_services.png" alt="" className="animate-float" />
              <img
                src="/services/12_services.png"
                alt=""
                srcset=""
                className="absolute right-0 md:hidden animate-fade-in"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-end justify-center xl:justify-start">
                <h2 className="font-arapey md:text-5xl font-normal text-primary-500 text-4xl xl:hidden block animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
                  03.
                </h2>
                <h4 className="font-arapey md:text-3xl font-normal uppercase text-primary-500 text-2xl animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.4s" }}>
                  Parties and Celebrations
                </h4>
              </div>
              <p className="font-poppins text-base font-normal text-textColor leading-6 xl:w-3/4 text-center md:text-left animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.5s" }}>
                At Vivid Affairs from cozy cocktail evenings to extravagant
                themed parties, we do it all with style. A celebration that
                reflects your personality, we transform moments into memories
                that truly belong to you — vibrant, joyful, and unforgettable.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/services/03_services.jpg"
              alt=""
              className="md:h-[400px] xl:w-[653px] object-cover md:object-bottom rounded-3xl w-full h-64 object-top mt-5 animate-slide-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>

        <img
          src="/services/09_services.png"
          alt=""
          className="absolute right-0 z-0 -bottom-36 hidden animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </div>
  );
};

export default Services;
