import { arrowDown, arrowUp } from "../assets";
import { features, company } from "../constants";
import { useState } from "react";
import { Features, Company, Button } from "../components";

const MenuMobile = ({ navActive }) => {
  const [featureActive, setFeatureActive] = useState(false);

  const [companyActive, setCompanyActive] = useState(false);

  function featureToggle() {
    setFeatureActive((prev) => !prev);
  }

  function companyToggle() {
    setCompanyActive((prev) => !prev);
  }

  return (
    <div
      className={`${
        navActive ? "" : "hidden"
      } absolute top-0 right-0 w-screen h-screen bg-snap-opaque z-0 flex justify-end`}
    >
      <div className="h-screen w-[240px] bg-snap-white flex flex-col">
        <nav className="mt-20 mx-8">
          <ul className="flex flex-col gap-4">
            <div
              className="flex gap-4 items-center cursor-pointer"
              onClick={featureToggle}
            >
              <li className="hover:text-snap-black text-body text-snap-gray">
                Features
              </li>
              <img src={`${featureActive ? arrowUp : arrowDown}`} alt="" />
            </div>
            <ul
              className={`flex flex-col gap-3 ml-6 my-2 ${
                featureActive ? "" : "hidden"
              }`}
            >
              {features.map((feature) => (
                <Features key={feature.id} {...feature} />
              ))}
            </ul>
            <div
              className="flex gap-4 items-center cursor-pointer"
              onClick={companyToggle}
            >
              <li className="hover:text-snap-black text-body text-snap-gray">
                Company
              </li>
              <img src={`${companyActive ? arrowUp : arrowDown}`} alt="" />
            </div>
            <ul
              className={`flex flex-col gap-3 ml-6 my-2 ${
                companyActive ? "" : "hidden"
              }`}
            >
              {company.map((comp) => (
                <Company key={comp.id} {...comp} />
              ))}
            </ul>
            <li className="cursor-pointer hover:text-snap-black text-body text-snap-gray">
              Careers
            </li>
            <li className="cursor-pointer hover:text-snap-black text-body text-snap-gray">
              About
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-4 mx-8 mt-4">
          <Button border={false} title={"Login"} />
          <Button border={true} title={"Register"} />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
