"use client";
import Slider from "react-infinite-logo-slider";

import Image from "next/image";

const SliderOne = () => {
  return (
    <div>
      <Slider width="200px" duration={60}>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-230.svg"
          alt=""
          width={100}
          height={100}
          className="md:w-20 h-20 text-gray-500"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-235.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-250.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-259.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-260.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-269.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-284.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-285.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-286.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-287.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-288.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-289.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-290.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-291.svg"
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

export default SliderOne;
