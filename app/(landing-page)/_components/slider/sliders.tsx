import SliderOne from "./_components/slider-one";
import SliderThree from "./_components/slider-three";
import SliderTwo from "./_components/slider-two";

const Sliders = () => {
  return (
    <div className="py-32">
      <div className="px-6 md:w-3/5 mx-auto text-center text-[#2b1c50] flex justify-center items-center text-3xl md:text-5xl font-medium">
        More Than 21 Million People Across 120,000 Companies Choose Llum
      </div>
      <div className="pt-20">
        <SliderOne />
        <SliderTwo />
        <SliderThree />
      </div>
    </div>
  );
};

export default Sliders;
