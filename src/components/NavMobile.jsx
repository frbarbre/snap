import { closeMenu, logo, menu } from "../assets";
import { useState } from "react";
import { MenuMobile } from "../components";

const NavMobile = () => {
  const [navActive, setNavActive] = useState(false);

  function navToggle() {
    setNavActive((prev) => !prev);
  }

  return (
    <>
      <div className="flex justify-between items-center px-4 py-6">
        <img src={logo} alt="snap logo" />
        <img
          onClick={navToggle}
          src={`${navActive ? closeMenu : menu}`}
          alt={`${navActive ? "menu" : "close-menu"}`}
          className="cursor-pointer relative z-10"
        />
      </div>
      <MenuMobile navActive={navActive} />
    </>
  );
};

export default NavMobile;
