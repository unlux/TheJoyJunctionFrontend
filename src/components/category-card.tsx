interface CategoryCardProps {
  image: string;
  title: string;
  onClick?: () => void; // optional interactivity
}

export default function CategoryCard({
  image,
  title,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 "
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    </div>
  );
}
