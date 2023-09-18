import React from "react";
import Image from "./Image";

interface DataMen {
  srcImage: string[];
  srcThumbnailImage: string[];
  company: string;
  description: string;
  title: string;
  price: {
    dollars: string;
    cents: string;
  };
  oldPrice?: {
    dollars: string;
    cents: string;
  };
}
interface DataWomen {
  srcImage: string[];
  srcThumbnailImage: string[];
  company: string;
  description: string;
  title: string;
  price: {
    dollars: string;
    cents: string;
  };
  oldPrice?: {
    dollars: string;
    cents: string;
  };
}

type Card = {
  product: DataMen | DataWomen;
  id?: number;
};

export default function Card({ product }: Card) {
  const lg = "lg:w-[430px] lg:h-[600px]";
  const xl = "xl:w-[370px] ";
  const xl2 = "2xl:w-[450px]";

  return (
    <div
      className={`${lg} ${xl} ${xl2} w-[550px] h-[750px] cursor-pointer border border-0.5 rounded-md border-gray-100 col-span-1`}
    >
      <Image src={product.srcImage[0]} className="rounded-md" />
      <div className="m-3">
        <span className="text-xl font-normal">{product.title}</span>

        <div className="mt-3 flex items-start">
          <span className="text-md leading-5">$</span>

          <span className="text-3xl font-semibold leading-none px-0.5">
            {product.price.dollars}
          </span>

          <span className="text-md leading-5">{product.price.cents}</span>

          {product.oldPrice && (
            <div className="ml-3 flex items-start text-zinc-500">
              <span className="text-sm leading-4">$</span>
              <span className="text-xl font-semibold leading-none px-0.5 line-through">
                {product.oldPrice.dollars}
              </span>
              <span className="text-sm leading-4">
                {product.oldPrice.cents}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
