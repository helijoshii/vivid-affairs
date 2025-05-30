import { NAVBAR_OPTIONS } from "../utils/constant";

const Navbar = () => {
  return (
    <div className="h-24 bg-white flex items-center container justify-between">
      <div>
        <img src="/public/navbar/01_Logo.png" alt="" className="h-full w-20" />
      </div>
      <div>
        <ul className="flex  gap-16">
          {NAVBAR_OPTIONS?.map((option) => (
            <li
              key={option.id}
              className="font-arapey text-base font-normal text-primary-500 cursor-pointer hover:bg-primary-500 hover:text-white hover:m-4"
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
