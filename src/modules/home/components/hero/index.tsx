"use client";
import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import Hero3 from "@/modules/home/components/hero/Hero3";
import CategorySection from "./CategorySection";
import { Quicksand } from "next/font/google";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";

const quicksand = Quicksand({ subsets: ["latin"] });

const categories = [
  {
    image: "/cardtastic-fun.jpg",
    title: "Card-Tastic Fun",
  },
  {
    image: "/flashcard-fun.jpg",
    title: "Flashcard Fun",
  },
  {
    image: "/kids-development-games.jpg",
    title: "Kid's Development Games",
  },
  {
    image: "/wooden-wonders.png",
    title: "Wooden Wonders",
  },
];
const ageCategories = [
  {
    image: "/age-2-4.jpg",
    title: "2 - 4",
  },
  {
    image: "/age-4-6.jpg",
    title: "4 - 6",
  },
  {
    image: "/age-6-8.jpg",
    title: "6 - 8",
  },
  {
    image: "/age-8-plus.jpg",
    title: "8+",
  },
];

const Hero = () => {
  return (
    <>
      <div className={quicksand.className}>
        <div className=" w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
          <CategorySection
            heading={`We design toys not just for kids\nbut with kids`}
            subheading="Categories"
            items={categories}
          />
          <hr />
          <CategorySection
            heading="Shop By Age"
            subheading="JJ Toys & Games"
            items={ageCategories}
          />
          {/* <Hero4 /> */}
          <Hero3></Hero3>
        </div>
      </div>
      <HeroHighlight className="h-full">
        <motion.h1
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
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          With insomnia, nothing&apos;s real. Everything is far away. Everything
          is a{" "}
          <Highlight className="text-black dark:text-white">
            copy, of a copy, of a copy.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </>
  );
};

export default Hero;
