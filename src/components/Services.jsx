const Services = () => {
  return (
    <div className="container">
      <div>
        <h5 className="font-poppins text-xl font-normal uppercase text-center text-primary-500">
          Services
        </h5>
        <h2 className="font-arapey text-5xl font-normal text-center uppercase mt-4 text-primary-500">
          What we offer
        </h2>
      </div>
      <div className="mt-20">
        {/* 01 */}
        <div className="flex justify-between ">
          <div className="w-1/2">
            <div className="flex items-center gap-8">
              <h2 className="font-arapey text-5xl font-normal text-primary-500">
                01.
              </h2>
              <img src="/public/services/04_services.png" alt="" />
            </div>
            <div className="flex flex-col gap-4 mt-8 w-4/6">
              <h4 className="font-arapey text-3xl font-normal uppercase text-primary-500">
                Wedding Planning
              </h4>
              <p className="font-poppins text-base font-normal text-textColor leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
          <div>
            <img
              src="/public/services/01_services.jpg"
              alt=""
              className="h-[400px] w-[653px] object-cover object-bottom rounded-3xl"
            />
          </div>
        </div>
        {/* 02 */}
        <div className="flex justify-between mt-24">
          <div className="">
            <img
              src="/public/services/02_services.jpg"
              alt=""
              className="h-[400px] w-[653px] object-cover object-bottom rounded-3xl"
            />
          </div>
          <div className="w-1/2 pl-16">
            <div className="flex items-center gap-8">
              <h2 className="font-arapey text-5xl font-normal text-primary-500">
                02.
              </h2>
              <img src="/public/services/05_services.png" alt="" />
            </div>
            <div className="flex flex-col gap-4 mt-8 w-4/6">
              <h4 className="font-arapey text-3xl font-normal uppercase text-primary-500">
                Corporate Event
              </h4>
              <p className="font-poppins text-base font-normal text-textColor leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="flex justify-between mt-24">
          <div className="w-1/2">
            <div className="flex items-center gap-8">
              <h2 className="font-arapey text-5xl font-normal text-primary-500">
                03.
              </h2>
              <img src="/public/services/06_services.png" alt="" />
            </div>
            <div className="flex flex-col gap-4 mt-8 ">
              <h4 className="font-arapey text-3xl font-normal uppercase text-primary-500">
                Parties and Celebrations
              </h4>
              <p className="font-poppins text-base font-normal text-textColor leading-6 w-8/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Utenim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
          <div>
            <img
              src="/public/services/03_services.jpg"
              alt=""
              className="h-[400px] w-[653px] object-cover object-bottom rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
