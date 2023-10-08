import Image from "next/image";
import Link from "next/link";
import Login from "./login-btn";

export default function Header() {
  return (
    <div className="lg:mx-16 mx-4 mt-5 flex justify-between items-center">
      <div>
        <Link href="./">
          <Image src="/logo.svg" alt="logo" width={150} height={75} />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link href="/planets" className="hover:underline transition-[2s]">
          Explore
        </Link>
        <Login />
      </div>
    </div>
  );
}
