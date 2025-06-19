"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

export function FirstSlider() {
  const images = [
    "./juno-slide1.jpg",
    "./juno-slide2.jpg",
    "./juno-slide3.jpg",
  ];
  return (
    <ImagesSlider className="w-screen h-[45rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 pb-3 backdrop-blur-xl border bg-black/10 border-black/20 text-white mx-auto text-center rounded-full relative mt-4 items-center">
          <span className="text-4xl ">Shop Now →</span>
          <div className="absolute inset-x-5  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-700 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
