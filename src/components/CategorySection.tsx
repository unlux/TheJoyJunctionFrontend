import CategoryCard from "./CategoryCard"

interface CategoryItem {
  image: string
  title: string
  onClick?: () => void
}

interface CategorySectionProps {
  heading: string
  subheading?: string
  items: CategoryItem[]
  gridCols?: string // like "grid-cols-2 md:grid-cols-4"
  className?: string // optional external padding/margin etc
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
      {subheading && (
        <p className="uppercase text-sm tracking-widest text-blue-700 mb-2">
          {subheading}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 whitespace-pre-line">
        {heading}
      </h2>
      <div className={`grid ${gridCols} gap-6 max-w-6xl mx-auto`}>
        {items.map((item, i) => (
          <CategoryCard key={i} {...item} />
        ))}
      </div>
    </section>
  )
}
