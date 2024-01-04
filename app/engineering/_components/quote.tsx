import Image from "next/image";

const Quote = () => {
  return (
    <div className="py-10">
      <div className="rounded-[80px] p-10 md:p-20 flex flex-col items-center space-y-10">
        <div>
          <Image
            alt="logo"
            src={"/logos/logoipsum-211.svg"}
            width={500}
            height={500}
            className="w-40"
          />
        </div>
        <div className="font-medium md:text-3xl text-center md:w-3/5">
          &quot;Llum allows me to connect more personally with people without
          having to do 75 different one-on-one calls, which is just impossible
          at scale.&quot;
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
          <div className="text-[#6c6684] text-center">
            <div className="font-medium">Lee Thompkins</div>
            <div className="text-sm">Chief Marketing Officer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
