import React, { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DataMen } from "../data/DataMen";
import { DataWomen } from "../data/DataWomen";
import Button from "./Button";
import Image from "./Image";
import imgCart from "../images/icon-cart.svg";
import { MainContext } from "../Context/MainContext";

export default function Product() {
  const slug = Number(useParams().slug);
  const [changeQuantity, setChangeQuantity] = useState(0);
  const [indexImage, setIndexImage] = useState(0);
  const { stateBtnAddToCart, setStateBtnAddToCart } = useContext(MainContext);

  const HandlerThumbnail = (index) => {
    setIndexImage(index);
  };

  const product = useLocation().pathname.includes("/men/")
    ? DataMen.filter((_, index) => index === slug)[0]
    : DataWomen.filter((_, index) => index === slug)[0];

  return (
    <div className="mt-20 grid grid-cols-2 gap-8">
      <div className="w-full flex flex-col">
        <Image
          src={product.srcImage[indexImage]}
          className={`mx-auto w-[30rem] h-[30rem] rounded-xl`}
        />

        <div className="mt-5 mx-auto flex justify-around w-[30rem]">
          {product.srcThumbnailImage.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-[5rem] h-[5rem] ${
                  indexImage === index &&
                  "rounded-xl border border-2 border-orange-400"
                }`}
              >
                <Button
                  onClick={() => {
                    HandlerThumbnail(index);
                  }}
                >
                  <Image
                    src={item}
                    className={`rounded-lg cursor-pointer  ${
                      indexImage === index && `opacity-40`
                    }`}
                  />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" text-left mt-12 ">
        <span className="text-sm font-semibold uppercase text-orange-400">
          {product.company}
        </span>

        <h1 className="font-bold text-4xl mt-3">{product.title}</h1>

        <p className="text-zinc-500 mt-3 w-2/3">{product.description}</p>

        <div className="mt-6 flex items-center">
          <div className="flex items-start">
            <span className="text-lg leading-7">$</span>
            <span className="text-4xl font-semibold leading-none px-0.5">
              {product.price.dollars}
            </span>
            <span className="text-lg leading-7">{product.price.cents}</span>
          </div>

          {product.oldPrice && (
            <span className="ml-5 py-0.5 px-2 bg-orange-100 rounded-md text-orange-400 font-bold">
              -
              {100 -
                Math.floor(
                  Number(product.price.dollars) /
                    (Number(product.oldPrice.dollars) / 100)
                )}
              %
            </span>
          )}
        </div>

        {product.oldPrice && (
          <div className="mt-3 flex items-start text-zinc-500">
            <span className="text-sm leading-5">$</span>
            <span className="text-2xl font-semibold leading-none px-0.5 line-through">
              {product.oldPrice.dollars}
            </span>
            <span className="text-sm leading-5">{product.oldPrice.cents}</span>
          </div>
        )}

        <div className="h-14 mt-6 flex justify-start items-center">
          <div className="h-full w-1/4 flex items-center justify-between rounded-lg bg-zinc-50">
            <Button
              onClick={() => {
                if (changeQuantity > 0) setChangeQuantity(changeQuantity - 1);
              }}
              className="h-auto p-2 text-xl font-bold text-orange-400 hover:text-orange-300"
            >
              -
            </Button>

            <span className="h-auto text-lg font-bold">{changeQuantity}</span>

            <Button
              onClick={() => {
                if (changeQuantity < 10) setChangeQuantity(changeQuantity + 1);
              }}
              className="h-auto p-2 text-xl font-bold text-orange-400 hover:text-orange-300"
            >
              +
            </Button>
          </div>

          <Button
            onClick={() => {
              changeQuantity &&
                setStateBtnAddToCart([
                  ...stateBtnAddToCart,
                  {
                    count: changeQuantity,
                    idProduct: slug,
                  },
                ]);
            }}
            className="h-full w-1/2 flex justify-center items-center text-md rounded-lg transition-[background] duration-300 bg-orange-400 hover:bg-orange-300 text-white ml-4"
          >
            <Image src={imgCart} className="grayscale brightness-[3]" />
            <span className="font-semibold ml-5">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
