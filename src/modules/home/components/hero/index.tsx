import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import CategorySection from "@/components/CategorySection";

const categories = [
  {
    image: "/images/cardtastic-fun.jpg",
    title: "Card-Tastic Fun",
  },
  {
    image: "/images/flashcard-fun.jpg",
    title: "Flashcard Fun",
  },
  {
    image: "/images/kids-development-games.jpg",
    title: "Kid's Development Games",
  },
  {
    image: "/images/wooden-wonders.png",
    title: "Wooden Wonders",
  },
];
const ageCategories = [
  {
    image: "/images/age-2-4.jpg",
    title: "2 - 4",
  },
  {
    image: "/images/age-4-6.jpg",
    title: "4 - 6",
  },
  {
    image: "/images/age-6-8.jpg",
    title: "6 - 8",
  },
  {
    image: "/images/age-8-plus.jpg",
    title: "8+",
  },
];

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <CategorySection
        heading={`We design toys not just for kids\nbut with kids`}
        subheading="Categories"
        items={categories}
      />

      <CategorySection
        heading="Shop By Age"
        subheading="JJ Toys & Games"
        items={ageCategories}
        className="bg-white"
      />
    </div>
  );
};

export default Hero;
