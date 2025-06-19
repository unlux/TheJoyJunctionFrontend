import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";
interface CategoryItem {
  image: string;
  title: string;
  onClick?: () => void;
}

interface CategorySectionProps {
  heading: string;
  subheading?: string;
  items: CategoryItem[];
  gridCols?: string; // like "grid-cols-2 md:grid-cols-4"
  className?: string; // optional external padding/margin etc
}

// export default function CategorySection({
//   heading,
//   subheading,
//   items,
//   gridCols = "grid-cols-2 md:grid-cols-4", // default
//   className = "",
// }: CategorySectionProps) {
//   return (
//     <HeroHighlight>
//       <motion.h1
//         initial={{
//           opacity: 0,
//           y: 20,
//         }}
//         animate={{
//           opacity: 1,
//           y: [20, -5, 0],
//         }}
//         transition={{
//           duration: 0.5,
//           ease: [0.4, 0.0, 0.2, 1],
//         }}
//         className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
//       >
//         <section className={`px-4 py-12 text-center  ${className}`}>
//           <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-10 whitespace-pre-line">
//             {heading}
//           </h2>
//           {subheading && (
//             <p className="uppercase text-base tracking-widest text-blue-700 mb-2">
//               {subheading}
//             </p>
//           )}
//           <div className={`grid ${gridCols} gap-6 max-w-6xl pt-5 mx-auto`}>
//             {items.map((item, i) => (
//               <CategoryCard key={i} {...item} />
//             ))}
//           </div>
//         </section>
//       </motion.h1>
//     </HeroHighlight>
//   );
// }
