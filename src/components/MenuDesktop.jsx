import { features, company } from "../constants";
import { Features, Company } from "../components";
import { useState } from "react";
import { arrowDown, arrowUp } from "../assets";

const MenuDesktop = () => {
  const [featureActive, setFeatureActive] = useState(false);

  const [companyActive, setCompanyActive] = useState(false);

  function featureToggle() {
    setFeatureActive((prev) => !prev);
  }

  function companyToggle() {
    setCompanyActive((prev) => !prev);
  }

  return (
    <div>
      <nav>
        <ul className="flex items-center gap-10">
          <div
            onClick={featureToggle}
            className="flex gap-2 items-center cursor-pointer relative"
          >
            <li className="text-snap-gray hover:text-snap-black transition-all">
              Features
            </li>
            <img src={`${featureActive ? arrowUp : arrowDown}`} alt="" />
            <div
              className={`${
                featureActive ? "" : "hidden"
              } absolute bottom-0 left-0 flex flex-col p-6 rounded-xl gap-3 bg-white shadow-xl translate-y-[105%] translate-x-[-42.5%]`}
            >
              {features.map((feature) => (
                <Features key={feature.id} {...feature} />
              ))}
            </div>
          </div>
          <div
            className="cursor-pointer flex gap-2 items-center relative"
            onClick={companyToggle}
          >
            <li className="text-snap-gray hover:text-snap-black transition-all">
              Company
            </li>
            <img src={`${companyActive ? arrowUp : arrowDown}`} alt="" />
            <div
              className={`${
                companyActive ? "" : "hidden"
              } absolute bottom-0 left-0 flex flex-col p-6 rounded-xl gap-3 bg-white shadow-xl translate-y-[105%]`}
            >
              {company.map((comp) => (
                <Company key={comp.id} {...comp} />
              ))}
            </div>
          </div>
          <li className="cursor-pointer text-snap-gray hover:text-snap-black transition-all">
            Careers
          </li>
          <li className="cursor-pointer text-snap-gray hover:text-snap-black transition-all">
            About
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuDesktop;
