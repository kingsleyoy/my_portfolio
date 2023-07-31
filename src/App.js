import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Hero/IntroSection";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Choose from "./components/Chooseme/Choose";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className=" w-full h-screen  overflow-x-hidden">
      <Navbar />
      <IntroSection />
      <About />
      <Experience />
      <Project />
      <Choose />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
