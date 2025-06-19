import CategoryCard from "@/components/category-card";

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

export default function Hero2() {
  const gridCols = "grid-cols-2 md:grid-cols-4"; // default
  const className = "";
  return (
    <section className={`px-4 pb-12 text-center `}>
      <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-10 whitespace-pre-line">
        Shop By Age
      </h2>
      <p className="uppercase text-base tracking-widest text-blue-700 mb-2">
        Categories
      </p>
      <div className={`grid ${gridCols} gap-6  pt-5 mx-auto`}>
        {ageCategories.map((item, i) => (
          <CategoryCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
