import { Metadata } from "next";

import FeaturedProducts from "@/modules/home/components/featured-products";
import Hero from "@/modules/home/components/hero";
import { listCollections } from "@/lib/data/collections";
import { getRegion } from "@/lib/data/regions";

export const metadata: Metadata = {
  title: "The Joy Junction | Home",
  description: "Home Page of The Joy Junction, the best toy store ever.",
};

export default async function Home(props: {
  params: Promise<{ countryCode: string }>;
}) {
  const params = await props.params;

  const { countryCode } = params;

  const region = await getRegion(countryCode);

  const { collections } = await listCollections({
    fields: "id, handle, title",
  });

  if (!collections || !region) {
    return null;
  }

  return (
    <>
      <Hero />
      {/* <div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}
    </>
  );
}
