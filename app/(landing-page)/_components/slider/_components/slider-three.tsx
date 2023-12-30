"use client";
import Slider from "react-infinite-logo-slider";

import Image from "next/image";

const SliderThree = () => {
  return (
    <div className="mt-16">
      <Slider width="200px" duration={100} blurBorders={true}>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-327.svg"
          alt=""
          width={100}
          height={100}
          className="md:w-20 h-20 text-gray-500"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-329.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-330.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-331.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-332.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-229.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-226.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-225.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-224.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-222.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-220.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-213.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-212.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-211.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      </Slider>
    </div>
  );
};

export default SliderThree;
