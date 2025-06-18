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

interface CategoryCardProps {
  image: string;
  title: string;
  onClick?: () => void; // optional interactivity
}

function CategoryCard({ image, title, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 bg-white"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    </div>
  );
}

export default function CategorySection({
  heading,
  subheading,
  items,
  gridCols = "grid-cols-2 md:grid-cols-4", // default
  className = "",
}: CategorySectionProps) {
  return (
    <section className={`px-4 py-12 text-center bg-gray-50 ${className}`}>
      <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-10 whitespace-pre-line">
        {heading}
      </h2>
      {subheading && (
        <p className="uppercase text-base tracking-widest text-blue-700 mb-2">
          {subheading}
        </p>
      )}
      <div className={`grid ${gridCols} gap-6 max-w-6xl pt-5 mx-auto`}>
        {items.map((item, i) => (
          <CategoryCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
