"use client";

import ModelViewer from "./ModelViewer";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <motion.div
      className="lg:flex justify-between items-center block lg:mx-16 mx-4 mt-10"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h1 className="font-bold lg:text-4xl text-2xl">
          SOLAR SYSTEM IS NOT FAR <br className="none lg:block" />
          AWAY ANYMORE
        </h1>
        <h3 className="font-regular text-xl my-6">
          Phalanx of Fate will help you to choose your destination
        </h3>
        <Link href="./planets">
          <button className="gap-4 flex font-bold justify-center items-center border-[3px] mt-5 hover:bg-[#BC4627] transition-[5s] border-[#BC4627] w-32 rounded-md py-2 px-2">
            <span>Explore</span>
            <ArrowLongRightIcon className="h-6 w-6 inline-block" />
          </button>
        </Link>
      </div>
      <ModelViewer scale={40} modelPath={"/models/mars.glb"} />
    </motion.div>
  );
}

export default Hero;
