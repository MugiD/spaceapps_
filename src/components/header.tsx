import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="mx-16 mt-5 flex justify-between items-center">
      <div>
        <Image src="/logo.svg" alt="logo" width={150} height={75} />
      </div>
      <div>
        <Link href="./">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
