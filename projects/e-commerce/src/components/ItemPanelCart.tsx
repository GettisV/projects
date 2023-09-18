import React from "react";
import Button from "./Button";
import Image from "./Image";

interface IPanelCart {
  srcImg?: string;
  iconDelete?: string;
  title: string;
  price?: string;
  count?: number;
  id?: number;
  product?: { idProduct: number; count: number }[];
  deleteItem?: React.Dispatch<React.SetStateAction<{}[]>>;
}

export default function ItemPanelCart({
  srcImg,
  iconDelete,
  title,
  price,
  count,
  id,
  product,
  deleteItem,
}: IPanelCart) {
  return (
    <div className="w-full flex justify-center p-4">
      {srcImg && <Image src={srcImg} className="rounded-md w-12 h-12" alt="" />}

      <div className="flex flex-col px-4">
        <p className=" w-48 truncate text-center text-zinc-500">{title}</p>

        <p className="mt-[2px] flex">
          <span className="text-zinc-500">
            {price && `$${price} x ${count}`}
          </span>
          <span className="ml-2 font-bold">
            {price && `$${Number(price) * count}`}
          </span>
        </p>
      </div>

      <Button
        onClick={() => {
          window.confirm("Вы хотите удалить товар в корзине?") &&
            deleteItem(product.filter((_, index) => index != id));
        }}
      >
        {iconDelete && <Image src={iconDelete} className="w-3 h-4" />}
      </Button>
    </div>
  );
}
