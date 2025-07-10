import { Suspense } from "react";
import { listRegions } from "@/lib/data/regions";
import { StoreRegion } from "@medusajs/types";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";
import CartButton from "@/modules/layout/components/cart-button";
import Image from "next/image";
import { Heart, MagnifyingGlass, User, SquaresPlus } from "@medusajs/icons";

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions);

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-48 mx-auto border-b duration-200 bg-jjbase border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-white flex items-center justify-between w-full h-full text-small-regular">
          {/* Logo */}
          <div className="flex items-center">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus"
              data-testid="nav-store-link"
            >
              <Image
                src="/logo.png" // Please replace with your new logo's path
                width={220}
                height={80}
                alt="The Joy Junction Logo"
                style={{ objectFit: "contain" }}
              />
            </LocalizedClientLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden small:flex items-center gap-x-8">
            <LocalizedClientLink className="hover:text-ui-fg-disabled" href="/">
              Home
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-disabled"
              href="/store" // Assuming path
            >
              Shop by Age
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-disabled"
              href="/store" // Assuming path
            >
              Shop by Categories
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-disabled"
              href="/custom-kit" // Assuming path
            >
              Custom Kit
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-disabled"
              href="/contact" // Assuming path
            >
              Contact Us
            </LocalizedClientLink>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-x-5">
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-disabled flex gap-2"
                  href="/cart"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <LocalizedClientLink
              className="hover:text-ui-fg-disabled"
              href="/wishlist" // Assuming path
            >
              <Heart />
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-disabled"
              href="/search" // Assuming path
            >
              <MagnifyingGlass />
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-disabled"
              href="/account"
            >
              <User />
            </LocalizedClientLink>
            <button className="hover:opacity-80">
              <div className="bg-white rounded-full p-1.5">
                <SquaresPlus className="text-jjbase" />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
