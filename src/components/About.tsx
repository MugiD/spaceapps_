"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="mt-10"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl text-center font-bold">ABOUT THE PROJECT</h1>
      <div className="lg:flex justify-between block items-center mx-16">
        <Image
          src="./astro.svg"
          alt="astro"
          width={500}
          height={500}
          className="brightness-110"
        />
        <div>
          <div className="mb-10">
            <h1 className="font-bold text-2xl mb-4">The goal of the project</h1>
            <p>
              To make space travel accessible, unique, and educational for a
              wide audience, fostering exploration and understanding of the
              universe, as well as inspiring people to form a deeper connection
              with space and science, with the goal of contributing to the
              preservation and advancement of space exploration and
              environmental sustainability.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-4">Our mission</h1>
            <p>
              To pioneer the future of space exploration by providing accessible
              and immersive experiences that ignite curiosity, promote
              scientific understanding, and inspire a profound connection with
              the cosmos. We are dedicated to making space travel a
              transformative and educational journey for all, fostering a
              sustainable and innovative approach to space exploration while
              contributing to a deeper appreciation of our universe.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
