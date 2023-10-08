import Image from "next/image";
import Link from "next/link";
import Login from "./login-btn";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-black lg:px-16 px-4 py-5 flex justify-between items-center">
      <div >
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
