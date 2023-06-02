import { NavMobile, NavDesktop, Hero } from "./components";

function App() {
  return (
    <div className="bg-snap-white min-h-[100vh]">
      <div className="md:hidden">
        <NavMobile />
      </div>
      <div className="hidden md:block max-w-[1500px] mx-auto">
        <NavDesktop />
      </div>
      <main className="max-w-[1250px] mx-auto">
        <Hero />
      </main>
    </div>
  );
}

export default App;
