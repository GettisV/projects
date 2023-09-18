import React from "react";

interface IContext {
  stateBtnAddToCart: {
    idProduct: number | undefined;
    count: number | undefined;
  }[];
  setStateBtnAddToCart: React.Dispatch<React.SetStateAction<{}[]>>;
  clickCart:boolean,
        setClickCart:React.Dispatch<React.SetStateAction<boolean>>,
}

export const MainContext = React.createContext<IContext>({
  stateBtnAddToCart: [{ idProduct: undefined, count: undefined }],
  setStateBtnAddToCart: () => {},
  clickCart: false,
  setClickCart: ()=>{},
});
