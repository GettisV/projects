import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Image from "./Image";
import Button from "./Button";
import PanelCart from "./PanelCart";

import imgLogo from "../images/logo.svg";
import imgCart from "../images/icon-cart.svg";
import imgAvatar from "../images/image-avatar.png";

import iconDelete from "../images/icon-delete.svg";
import { MainContext } from "../Context/MainContext";
import { DataMen } from "../data/DataMen";
import { DataWomen } from "../data/DataWomen";
import ItemPanelCart from "./ItemPanelCart";

export default function Header() {
  const linkClassname =
    "h-full text-zinc-500 text-sm flex px-1.5 items-center border-b-4 border-transparent hover:border-orange-400 cursor-pointer hover:text-black transition-all";
  const isActiveShowBorder = ({ isActive }): string => {
    return isActive
      ? `${linkClassname} border-orange-400 text-black`
      : linkClassname;
  };
  const stateBtnAddToCart = useContext(MainContext).stateBtnAddToCart.filter(
    (item) => item.idProduct != undefined
  );
  const setStateBtnAddToCart = useContext(MainContext).setStateBtnAddToCart;
  const { clickCart, setClickCart } = useContext(MainContext);
  const location = useLocation();

  const HandlerClickCart = () => {
    setClickCart(!clickCart);
  };

  return (
    <header className="h-24 border-b-2 border-slate-100 grid grid-rows-1 gap-5 grid-cols-12 items-center whitespace-nowrap">
      <Image
        src={imgLogo}
        className={
          "flex items-center font-bold text-2xl col-span-2 text-start border-b-4 border-transparent"
        }
        alt={"Logo"}
      />

      <nav className="h-full flex items-center justify-start col-span-8">
        <NavLink to="/men" className={isActiveShowBorder}>
          Men
        </NavLink>
        <NavLink to="women" className={isActiveShowBorder}>
          Women
        </NavLink>
        <NavLink to="about" className={isActiveShowBorder}>
          About us
        </NavLink>
        <NavLink to="contacts" className={isActiveShowBorder}>
          Contacts
        </NavLink>
      </nav>

      <div>
        <Button
          className="relative col-span-1 ml-auto w-5 h-5 cursor-pointer"
          onClick={HandlerClickCart}
        >
          <Image src={imgCart} alt="Cart" />
          {!!stateBtnAddToCart.length && (
            <span className="top-[-6px] left-[8px] text-[11px] text-white absolute bg-orange-400 w-5 h-3 rounded-full flex justify-center items-center">
              {stateBtnAddToCart.length ? stateBtnAddToCart.length : ""}
            </span>
          )}
        </Button>

        {clickCart && (
          <PanelCart>
            {stateBtnAddToCart.length ? (
              stateBtnAddToCart.map((item, index) => {
                const { idProduct, count } = item;
                const data = location.pathname.includes("/men/")
                  ? DataMen[idProduct]
                  : DataWomen[idProduct];

                return (
                  <ItemPanelCart
                    key={index}
                    id={index}
                    srcImg={data.srcThumbnailImage[0]}
                    iconDelete={iconDelete}
                    title={data.title}
                    price={data.price.dollars}
                    count={count}
                    product={stateBtnAddToCart}
                    deleteItem={setStateBtnAddToCart}
                  />
                );
              })
            ) : (
              <ItemPanelCart title="Пусто" />
            )}
          </PanelCart>
        )}
      </div>

      <Button className="col-span-1 ml-auto w-12 h-12 cursor-pointer rounded-full border-2 border-transparent hover:border-orange-400 transition-all">
        <Image src={imgAvatar} alt="Profile" />
      </Button>
    </header>
  );
}
