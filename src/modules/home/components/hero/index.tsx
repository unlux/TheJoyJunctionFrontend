"use client";
import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import Hero3 from "@/modules/home/components/hero/Hero3";
// import CategorySection from "./CategorySection";
import { Quicksand } from "next/font/google";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Yeti from "./yeti-section";
import { FirstSlider } from "./first-slider";
const quicksand = Quicksand({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      className={`items-center justify-center w-full border-b border-ui-border-base relative bg-ui-bg-subtle ${quicksand.className}`}
    >
      <HeroHighlight>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <FirstSlider />
          <Hero1 />
          <Hero2 />
          <Yeti />
          {/* <hr /> */}
          {/* <CategorySection heading="Shop By Age" subheading="JJ Toys & Games" items={ageCategories} /> */}
          {/* <Hero4 /> */}
          {/* <Hero3></Hero3> */}
        </motion.div>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
