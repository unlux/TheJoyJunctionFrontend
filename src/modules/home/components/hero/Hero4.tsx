import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Hero4() {
  const cardData = [
    {
      id: 1,
      text: "Ages 2-4",
      image: "/age-2-4.jpg",
      alt: "Toys for ages 2-4",
    },
    {
      id: 2,
      text: "Ages 4-6",
      image: "/age-4-6.jpg",
      alt: "Toys for ages 4-6",
    },
    {
      id: 3,
      text: "Ages 6-8",
      image: "/age-6-8.jpg",
      alt: "Toys for ages 6-8",
    },
    {
      id: 4,
      text: "Ages 8+",
      image: "/age-8-plus.jpg",
      alt: "Toys for ages 8 and up",
    },
  ];

  return (
    <div className="grid grid-cols-4 text-center gap-5 px-5">
      {cardData.map((card) => (
        <Card key={card.id} className="p-4 hover:shadow-lg transition-shadow">
          <div className="space-y-3">
            <div className="relative h-32 w-full">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="font-medium text-lg">{card.text}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
