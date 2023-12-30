import Navbar from "@/components/ui/navbar/navbar";
import Sliders from "./_components/slider/sliders";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import FifthSection from "./_components/fifth-section";
import SixthSection from "./_components/sixth-section";
import SeventhSection from "./_components/seventh-section";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Sliders />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
};

export default LandingPage;
