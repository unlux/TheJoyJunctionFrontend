"use client";
import { HttpTypes } from "@medusajs/types";
import { Container } from "@medusajs/ui";
import Image from "next/image";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map((image, index) => {
          return (
            <Lens key={image.id}>
              <Container
                key={image.id}
                className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
                id={image.id}
              >
                {!!image.url && (
                  <Image
                    src={image.url}
                    priority={index <= 2 ? true : false}
                    className="absolute inset-0 rounded-rounded"
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                )}
              </Container>
            </Lens>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
