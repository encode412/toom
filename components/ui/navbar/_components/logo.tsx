import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src="/logos/default.png"
          alt="logo"
          width={150}
          height={150}
          className="w-60"
        />
      </Link>
    </div>
  );
};

export default Logo;
