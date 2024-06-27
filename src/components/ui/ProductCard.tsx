import React, { FC } from "react";
import { singleProductType } from "../utils/type";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlForImage } from "../../../sanity/lib/image";

export const ProductCard: FC<{ product: singleProductType }> = ({ product }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="relative h-48 lg:h-48 md:h-36 w-full">
          {product.image && product.image[0] && (
            <Image
              className="object-cover object-center lg:h-48 md:h-36 w-full"
              src={urlForImage(product.image[0]).url()}
              alt={product.productname}
              height={1000}
              width={1000}
            />
          )}
        </div>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            CATEGORY
          </h2>
          <h2 className="text-lg font-medium text-gray-900 mb-3">
            {product.productname}
          </h2>
          <p className="leading-relaxed mb-3 truncate">
            {product.productname}
          </p>
          <div className="flex items-center">
            <Link href= {'/brief/${product.slug.current}'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn more
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              1.2k
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
