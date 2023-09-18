import React from "react";

export default function PanelCart({ children }) {
  return (
    <div className="right-[5%] xl:right-[5%] 2xl:right-[10%] top-[80px] absolute bg-white w-[22rem] max-h-96 h-auto scroll-smooth overflow-hidden overflow-y-auto rounded-lg drop-shadow-xl">
      <div className="w-full border-b-[0.5px] border-b-slate-200">
        <h2 className="p-4 text-lg font-extrabold">Cart</h2>
      </div>
      {children}
    </div>
  );
}
