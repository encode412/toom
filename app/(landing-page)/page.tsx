import Navbar from "@/components/ui/navbar/navbar";
import Sliders from "./_components/slider/sliders";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import FifthSection from "./_components/fifth-section";
import SixthSection from "./_components/sixth-section";
import SeventhSection from "./_components/seventh-section";
import EightSection from "./_components/eight-section";
import NinthSection from "./_components/ninth-section";
import TenthSection from "./_components/tenth-section";
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";

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
      <EightSection />
      <NinthSection />
      <TenthSection />
      <BottomCard />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
