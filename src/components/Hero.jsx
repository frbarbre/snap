import { heroDesktop, heroMobile } from "../assets";
import { Button } from "../components";
import { clients } from "../constants";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:w-[90%] md:mx-auto md:gap-10">
      <div className="md:flex-1">
        <img className="md:hidden" src={heroMobile} alt="hero-picture" />
        <img
          className="hidden md:block max-h-[80vh]"
          src={heroDesktop}
          alt="hero-picture"
        />
      </div>
      <div className="flex justify-center flex-col md:justify-between gap-6 md:max-h-[80vh] md:flex-1 ">
        <h1 className="font-bold text-[42px] md:text-[52px] lg:text-[72px] text-center md:text-left text-snap-black mt-8">
          Make remote work
        </h1>
        <h2 className="text-center md:text-left text-snap-gray w-[90%] mx-auto md:w-[60%] md:ml-[0px] mb-4">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </h2>
        <Button
          border={true}
          title={"Learn more"}
          styles={
            "w-maxcontent bg-snap-black text-snap-white font-bold hover:bg-snap-white hover:text-snap-black border-snap-black mx-auto md:ml-[0px]"
          }
        />
        <div className="flex justify-between items-center gap-4 w-full p-4">
          {clients.map((client) => (
            <img
              src={client.image}
              key={client.id}
              className="h-[40px] w-[70px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
