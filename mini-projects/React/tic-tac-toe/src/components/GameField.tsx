import React from "react";
import { useState } from "react";
import Button from "./Button";

export default function GameField() {
  const classTile: string =
    "flex justify-center items-center bg-white border border-gray-200 rounded-md cursor-pointer w-16 h-16";
  interface IStateClicked {
    [key: string]: {
      assign: string;
      classname: string;
    };
  }
  const [winner, setWinner] = useState<string>("");
  const [countClick, setCountClick] = useState<number>(0);
  const [stateClickedTile, setStateClickedTile] = useState<IStateClicked>({});
  let arrayButtons: JSX.Element[] = [];

  const buttons = (): JSX.Element[] => {
    for (let i = 0; i < 9; i++) {
      arrayButtons.push(
        <Button
          key={i}
          id={i}
          winner={winner}
          setWinner={setWinner}
          countClick={countClick}
          setCountClick={setCountClick}
          stateClickedTile={stateClickedTile}
          setStateClickedTile={setStateClickedTile}
          classTile={classTile}
        />
      );
    }
    return arrayButtons;
  };

  return (
    <>
      <h3 className="p-3 text-lg font-light">
        {!winner ? (countClick % 2 === 0 ? "Ход крестика" : "Ход нолика") : ""}
      </h3>
      <div className="grid grid-rows-3 grid-flow-col gap-4 w-80 h-80 text-2xl bg-slate-100 p-7 rounded-md">
        {winner ? (
          <p className="mx-auto mt-5 text-2xl font-light ">
            {" "}
            {winner !== "Ничья" && "Выйграл"} {winner}{" "}
          </p>
        ) : (
          buttons()
        )}
        {winner && (
          <button
            type="button"
            className={`${classTile} mx-auto`}
            onClick={() => {
              setCountClick(0);
              setWinner("");
              setStateClickedTile({});
            }}
          >
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        )}
      </div>
    </>
  );
}
