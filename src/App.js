import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Hero/IntroSection";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <div className=" w-full h-screen dark:bg-[#232931] overflow-x-hidden ">
      <Navbar />
      <IntroSection />
      <About />
      <Experience />
      <Project />
    </div>
  );
};

export default App;
