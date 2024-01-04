import Link from "next/link";
import Image from "next/image";

const Free = () => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <Link className="absolute top-0 left-0 z-10" href={"/"}>
        <Image
          src="/logos/logoipsum-236.svg"
          alt="logo"
          width={150}
          height={150}
          className="w-40 m-6"
        />
      </Link>
      <div className="flex flex-col justify-center items-center rounded-[40px]">
        <div className="flex items-center justify-center">
          <div className="p-10 bg-white border md:p-20 w-5/6 mx-auto rounded-[40px] z-10 mt-40">
            <div className="md:text-4xl text-3xl w-4/5 mx-auto font-medium justify-center flex text-center">
              Record your first Loom in seconds
            </div>
            <div className="py-10 space-y-4">
              <div className="border py-4 rounded-full flex justify-center items-center space-x-2">
                <Image
                  src={"/logos/facebook-logo.png"}
                  alt="facebook"
                  width={20}
                  height={20}
                  className="object-cover rounded-full w-6"
                />
                <div className="text-lg font-medium">Sign in with Google</div>
              </div>
              <div className="items-center flex">
                <hr className="w-1/2 border-gray-300" />
                <div className="mx-4">OR</div>
                <hr className="w-1/2 border-gray-300" />
              </div>
              <div className="pt-6">
                <div className="text-md font-medium">Work Email</div>
                <input
                  type="text"
                  placeholder="name@company.com"
                  className="w-full px-4 flex items-center space-x-2 text-md border py-2 mt-2 rounded-full justify-center"
                />
              </div>
              <div className="p-4 mt-4 items-center justify-center flex bg-[#ededed] rounded-full text-[#a19e9e] font-semibold">
                Continue
              </div>
              <div className="text-center text-sm mt-4">
                By signing up, you ackowledge that you have read and agree to
                Llum&apos;s Terms of Service and Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Free;
