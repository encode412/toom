"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    autoPlaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    className: "w-full",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="md:pb-20 flex flex-col items-center justify-center pb-32">
      <div className="pt-40 text-3xl px-10 pb-20 font-medium space-y-10">
        <div className="md:text-center md:text-7xl">
          What customers are saying
        </div>
        <div className="text-xl md:text-3xl md:w-3/4 md:mx-auto md:text-center text-[#575454] leading-10">
          75% of Llum users say the AI suite features are already extremely or
          very valuable to their workflows
        </div>
      </div>
      <Slider {...settings} className="w-full">
        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#e3f3ff] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-211.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Llum allows me to connect more personally with people
              without having to do 75 different one-on-one calls, which is just
              impossible at scale.&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"/images/undraw-1.svg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Lee Thompkins</div>
                <div className="text-sm">Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#e7e0ff] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-211.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Llum allows me to connect more personally with people
              without having to do 75 different one-on-one calls, which is just
              impossible at scale.&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"/images/undraw-1.svg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Lee Thompkins</div>
                <div className="text-sm">Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#ffede3] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-211.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Llum allows me to connect more personally with people
              without having to do 75 different one-on-one calls, which is just
              impossible at scale.&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"/images/undraw-1.svg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Lee Thompkins</div>
                <div className="text-sm">Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#fffce3] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-211.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Llum allows me to connect more personally with people
              without having to do 75 different one-on-one calls, which is just
              impossible at scale.&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"/images/undraw-1.svg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Lee Thompkins</div>
                <div className="text-sm">Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#f4e3ff] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-211.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Llum allows me to connect more personally with people
              without having to do 75 different one-on-one calls, which is just
              impossible at scale.&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"/images/undraw-1.svg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Lee Thompkins</div>
                <div className="text-sm">Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </>
      </Slider>
    </div>
  );
};

export default Testimonials;
