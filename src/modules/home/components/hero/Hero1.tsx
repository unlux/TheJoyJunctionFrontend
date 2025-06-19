import CategoryCard from "@/components/category-card";

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

export default function Hero1() {
  const gridCols = "grid-cols-2 md:grid-cols-4"; // default
  const className = "";
  return (
    <section className={`relative px-4 py-12 text-center`}>
      <h2 className="text-5xl md:text-6xl font-bold text-blue-900 max-w-6xl mx-auto mb-10 whitespace-pre-line">
        We design toys not just for kids but with kids
      </h2>
      <p className="uppercase text-base tracking-widest text-blue-700 mb-2">
        Categories
      </p>
      <div className={`grid ${gridCols} gap-6 max-w-6xl pt-5 mx-auto`}>
        {categories.map((item, i) => (
          <CategoryCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
