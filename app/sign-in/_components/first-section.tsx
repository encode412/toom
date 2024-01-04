import { UserCircle2 } from "lucide-react";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="px-10 w-full md:w-2/5">
        <div className="text-3xl md:text-4xl font-semibold justify-center flex">
          Sign in to Llum
        </div>
        <div className="py-10 space-y-2">
          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <Image
              src={"/logos/facebook-logo.png"}
              alt="facebook"
              width={20}
              height={20}
              className="object-cover rounded-full w-6"
            />
            <div className="text-lg font-medium">Sign in with Facebook</div>
          </div>
          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <Image
              src={"/logos/google-logo.png"}
              alt="facebook"
              width={20}
              height={20}
              className="object-cover rounded-full w-6"
            />
            <div className="text-lg font-medium">Sign in with Google</div>
          </div>
          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <Image
              src={"/logos/linkedin-logo.png"}
              alt="facebook"
              width={20}
              height={20}
              className="object-cover rounded-full w-6"
            />
            <div className="text-lg font-medium">Sign in with LinkedIn</div>
          </div>
          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <Image
              src={"/logos/twitter-logo.png"}
              alt="facebook"
              width={20}
              height={20}
              className="object-cover rounded-full w-6"
            />
            <div className="text-lg font-medium">Sign in with Twitter</div>
          </div>
          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <UserCircle2 className="w-8 h-8" />
            <div className="text-lg font-medium">Sign in with SSO</div>
          </div>
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
  );
};

export default FirstSection;
