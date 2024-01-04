import { Check } from "lucide-react";

const FifthSection = () => {
  return (
    <div className="pb-40 bg-[#111019]">
      <div className="md:text-center items-center md:justify-center flex-col px-10">
        <div className="md:text-6xl flex md:justify-center font-medium pb-10 text-3xl text-[#f1f0f3]">
          Enterprise-grade data protection
        </div>
        <p className="text-[#bbb6c8] md:text-3xl font-light md:w-1/2 md:mx-auto leading-loose text-xl">
          Llum protects any and all data on your platforms so you can
          communicate with confidence.
        </p>
      </div>
      <div className="md:flex items-center justify-center pt-10 md:py-20 px-10">
        <div className="space-y-8 md:w-1/3">
          <div className="flex md:gap-6">
            <div className="bg-[#f1f0f3] h-14 w-14 p-4 items-center justify-center flex rounded-full">
              <Check className="text-4xl" />
            </div>
            <div className="md:text-xl text-[#bbb6c6] px-10 md:w-3/4">
              Secured with encrypted data and industry-standard security
              frameworks
            </div>
          </div>

          <div className="flex md:gap-6">
            <div className="bg-[#f1f0f3] h-14 w-14 p-4 items-center justify-center flex rounded-full">
              <Check className="text-4xl" />
            </div>
            <div className="md:text-xl text-[#bbb6c6] px-10 md:w-3/4">
              Secured with encrypted data and industry-standard security
              frameworks
            </div>
          </div>
        </div>
        <div className="py-10 md:py-0 items-center justify-center space-y-8 md:w-1/3">
          <div className="flex md:gap-6">
            <div className="bg-[#f1f0f3] h-14 w-14 p-4 items-center justify-center flex rounded-full">
              <Check className="text-4xl" />
            </div>
            <div className="md:text-xl text-[#bbb6c6] px-10 md:w-3/4">
              Secured with encrypted data and industry-standard security
              frameworks
            </div>
          </div>

          <div className="flex md:gap-6">
            <div className="bg-[#f1f0f3] h-14 w-14 p-4 items-center justify-center flex rounded-full">
              <Check className="text-4xl" />
            </div>
            <div className="md:text-xl text-[#bbb6c6] px-10 md:w-3/4">
              Secured with encrypted data and industry-standard security
              frameworks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
