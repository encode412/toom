import Navbar from "@/components/ui/navbar/navbar";
import React from "react";
import FirstSection from "./_components/first-section";
import Sliders from "./_components/slider/sliders";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Sliders />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
};

export default LandingPage;
