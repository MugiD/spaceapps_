import Hero from '@/components/Hero'
import Image from "next/image";
import About from '@/components/About'
import Team from '@/components/Team'

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Team />
    </>
  )
}
