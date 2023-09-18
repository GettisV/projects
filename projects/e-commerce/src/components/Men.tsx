import React from "react";
import Card from "./Card";
import { DataMen } from "../data/DataMen.js";
import { NavLink } from "react-router-dom";

export default function Men() {
  return (
    <div className="my-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-max gap-5 place-content-start place-items-center">
      {DataMen &&
        DataMen.map((item, index) => {
          return (
            <NavLink key={index} to={`${index}`}>
              <Card id={index} product={item} />
            </NavLink>
          );
        })}
    </div>
  );
}
