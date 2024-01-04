"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TenthSection = () => {
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
    <div className="py-20 md:pb-20 flex flex-col items-center justify-center pb-32">
      <Slider {...settings} className="w-full">
        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#e3f3ff] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-212.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;My new daily email habit. Begin writing an email. Get to the
              second paragraph and think 'what a time suck.' Record a Llum
              instead. Feel like 😎.&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"https://randomuser.me/api/portraits/women/60.jpg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Sam Thompkins</div>
                <div className="text-sm">Chief Marketing Officer, Flameon</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#e7e0ff] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-213.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Llum has been the light of my life since you showed me it.’
              – I never tire of hearing this from folks. Not even an investor...
              yet..&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"https://randomuser.me/api/portraits/women/70.jpg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Sophia Matthews</div>
                <div className="text-sm">Design Lead, Dynamite</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#ffede3] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-236.svg"}
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
                  src={"https://randomuser.me/api/portraits/women/20.jpg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Ann Settins</div>
                <div className="text-sm">VP of Marketing, Spoton</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#fffce3] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-213.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;My teammates and I love using Loom! It has saved us hundreds
              of hours by creating informative video tutorials instead of long
              emails or 1-on-1 trainings with customers.&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"https://randomuser.me/api/portraits/men/40.jpg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Lee Thompkins</div>
                <div className="text-sm">HR Officer, RewindLab</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="rounded-[60px] md:rounded-[80px] p-10 md:p-20 flex flex-col bg-[#f4e3ff] md:items-center space-y-10 mb-10 mx-6">
            <div>
              <Image
                alt="logo"
                src={"/logos/logoipsum-236.svg"}
                width={500}
                height={500}
                className="w-40"
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Llum amplifies my communication with the team like nothing
              else has. It's a communication tool that should be in every
              executive's toolbox.&quot;
            </div>
            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  alt="image"
                  src={"https://randomuser.me/api/portraits/men/20.jpg"}
                  width={500}
                  height={500}
                  className="object-cover rounded-full h-full md:h-12 md:w-12"
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Paul Gimmick</div>
                <div className="text-sm">Founder, NotFourOhFour</div>
              </div>
            </div>
          </div>
        </>
      </Slider>
    </div>
  );
};

export default TenthSection;
