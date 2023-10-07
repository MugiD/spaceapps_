'use client'

import ModelViewer from "./ModelViewer";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="flex justify-between items-center mx-16 mt-4"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h1 className="font-bold text-4xl">
          SOLAR SYSTEM IS NOT FAR <br />AWAY ANYMORE
        </h1>
        <h3 className="font-regular text-xl my-6">
          Phalanx of Fate will help you to choose your destination
        </h3>
        <button className="gap-4 flex font-bold justify-center items-center border-[3px] mt-5 hover:bg-[#BC4627] transition-[5s] border-[#BC4627] w-32 rounded-md py-2 px-2">
          <span>Explore</span>
          <ArrowLongRightIcon className="h-6 w-6 inline-block" />
        </button>
      </div>
      <ModelViewer scale={40} modelPath={"/mars.glb"} />
    </motion.div>
  );
}

export default Hero;
