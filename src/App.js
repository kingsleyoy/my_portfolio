import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Hero/IntroSection";

function App() {
  return (
    <div className="dark:bg-[#232931] h-screen overflow-x-hidden">
      <Navbar />
      <div className="  max-w-[90%] md:max-w-[80%] mx-auto">
        <IntroSection />
      </div>
    </div>
  );
}

export default App;
