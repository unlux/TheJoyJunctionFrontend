interface CategoryCardProps {
  image: string
  title: string
  onClick?: () => void // optional interactivity
}

export default function CategoryCard({
  image,
  title,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 bg-white"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="text-center py-3 text-lg font-semibold text-blue-900">
        {title}
      </div>
    </div>
  )
}
