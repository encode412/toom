import Image from "next/image";

const FifthSection = () => {
  return (
    <div className="bg-[#ffedec] mx-auto">
      <div className="py-4">
        <div className="md:flex md:space-y-0 items-center md:p-40">
          <div className="md:order-1 md:pr-0">
            <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">
              <div className="order-2 md:order-1 w-full md:w-1/2">
                <Image
                  alt="image"
                  src={"/images/undraw-1.svg"}
                  width={700}
                  height={700}
                  className="object-cover rounded-md w-full p-10"
                />
              </div>
              <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-10">
                <div className="space-y-1 text-md">
                  <div className="text-[#6f1f1d] font-medium leading-normal text-2xl md:text-4xl pb-4">
                  Train your team while staying aligned
                  </div>
                  <div className="text-md text-[#6f1f1d] md:leading-8 font-light">
                  Use Llum to share updates, coordinate on accounts, and easily document and share product knowledge.
                  </div>
                </div>
                <div className="space-y-1 text-[#6f1f1d]">
                  <div className="text-xl font-medium leading-normal">
                  Seamlessly transition accounts
                  </div>
                  <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                  Share context and key information for smooth hand-offs between Sales and Success teams.
                  </div>
                </div>
                <div className="space-y-1 text-[#6f1f1d]">
                  <div className="text-xl font-medium leading-normal">
                  Ramp new reps faster
                  </div>
                  <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                  Record training sessions, product demos, and enablement content to get new hires up to speed and ready to sell.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
