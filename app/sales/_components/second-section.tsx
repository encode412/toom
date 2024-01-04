import Image from "next/image";
const SecondSection = () => {
  return (
    <div>
      <div className="items-center justify-center flex md:space-x-20">
        <div className="w-full bg-[#eff0ff]">
          <div className="md:py-40 py-16">
            <div className="px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse md:flex">
              <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                <div className="flex">
                  <div className="space-y-10">
                    <div className="space-y-1 md:text-md">
                      <div className="text-[#2b1c50] font-medium md:leading-normal md:text-4xl">
                      Kick things off with a click
                      </div>
                      <div className="pt-4 text-sm md:text-md text-[#3d2e7c] leading-6 md:leading-10 font-light md:w-4/5">
                      Hit record and send a video message to capture a prospect’s attention and build a personal connection right from the start.
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Make it personal
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      Add a personal touch to your targeted outreach by recording your screen to guide your customer through a presentation, product, or website.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Share it anywhere
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      Send helpful async videos in emails or chats by sharing an instantly generated link, or embed those videos easily on the web.
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Surface the next step
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      Link out to your calendar, pitch deck, or website from any Loom video by adding customizable CTAs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 mt-10">
                <Image
                  alt="image"
                  src={"/images/sales-1.svg"}
                  width={1920}
                  height={1080}
                  className="object-cover md:rounded-[60px] rounded-[40px] w-full p-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
