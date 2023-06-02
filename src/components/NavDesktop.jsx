import { logo } from "../assets";
import { MenuDesktop, Button } from "../components";

const NavDesktop = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-6">
        <div className="flex items-center gap-12">
          <img src={logo} alt="snap-logo" />
          <MenuDesktop />
        </div>
        <div className="flex gap-4">
          <Button border={false} title={"Login"} />
          <Button border={true} title={"Register"} />
        </div>
      </div>
    </>
  );
};

export default NavDesktop;
