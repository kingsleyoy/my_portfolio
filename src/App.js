import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Hero/IntroSection";

const App = () => {
  return (
    <div className=" w-full h-screen dark:bg-[#232931] overflow-x-hidden ">
      <Navbar />
      <IntroSection />
    </div>
  );
};

export default App;
