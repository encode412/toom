"use client";
import Slider from "react-infinite-logo-slider";

import Image from "next/image";

const SliderTwo = () => {
  return (
    <div className="mt-16">
      <Slider width="400px" duration={60} blurBorders={true}>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-292.svg"
          alt=""
          width={100}
          height={100}
          className="md:w-20 h-20 text-gray-500"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-293.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-294.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-295.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-296.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-297.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-298.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-299.svg"
          alt=""
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-300.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-311.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-317.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-321.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-323.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-28 h-28"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src="/logos/logoipsum-325.svg"
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

export default SliderTwo;
