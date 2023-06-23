import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Hero/IntroSection";
import About from "./components/About/About";

const App = () => {
  return (
    <div className=" w-full h-screen dark:bg-[#232931] overflow-x-hidden ">
      <Navbar />
      <IntroSection />
      <About />
    </div>
  );
};

export default App;
