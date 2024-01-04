import Image from "next/image"

const FourthSection = () => {
  return (
    <div className="md:py-10">
        <div className="px-10 md:text-center space-y-4">
            <div className="text-3xl md:text-7xl md:justify-center font-medium pt-20">
                Accelerate the flow of information
            </div>
            <p className="text-[#3b394e] text-xl md:text-3xl font-light md:w-3/4 md:mx-auto leading-normal">
                Deliver detailed information up to 2x faster than it takes to present it
            </p>
            <div className="py-10 md:pt-20">
            <Image
              alt="image"
              src={"/images/video.svg"}
              width={1920}
              height={500}
              className="object-cover rounded-[30px] md:rounded-[60px] md:w-3/4 md:mx-auto w-full md:p-20"
            />
            </div>
        </div>
    </div>
  )
}

export default FourthSection;