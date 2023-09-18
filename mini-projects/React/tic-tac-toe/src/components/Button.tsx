import React, { useEffect } from "react";

interface IStateClicked {
  [key: string]: {
    assign: string;
    classname: string;
  };
}
type ISetStateClicked = React.Dispatch<React.SetStateAction<IStateClicked>>;

interface IProps {
  id: number;
  classTile: string;
  countClick: number;
  setCountClick: React.Dispatch<React.SetStateAction<number>>;
  stateClickedTile: IStateClicked;
  setStateClickedTile: ISetStateClicked;
  winner: string;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
}

export default function Button({
  id,
  classTile,
  winner,
  setWinner,
  countClick,
  setCountClick,
  stateClickedTile,
  setStateClickedTile,
}: IProps) {
  let playerWin: string = "";
  function checkForTheWinner(arrayOfCombinations: number[][]) {
    let playerWin: string = "";

    arrayOfCombinations.forEach((combination) => {
      let xmarkCount: number = 0;
      let circleCount: number = 0;

      combination.forEach((num) => {
        if (stateClickedTile[num]?.assign === "xmark") {
          xmarkCount += 1;

          if (xmarkCount === 3) {
            playerWin = "крестик";
            setWinner(playerWin);
            return;
          }
        }
        if (stateClickedTile[num]?.assign === "circle") {
          circleCount += 1;

          if (circleCount === 3) {
            playerWin = "нолик";
            setWinner(playerWin);
            return;
          }
        }
      });
    });

    if (!playerWin) {
      console.log(Object.keys(stateClickedTile).length);
      if (Object.keys(stateClickedTile).length === 9) {
        setWinner("Ничья");
      }
    }
  }
  useEffect(() => {
    checkForTheWinner([
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
    ]);
  }, [stateClickedTile]);

  return (
    <button
      className={classTile}
      onClick={() => {
        !stateClickedTile[id] &&
          setStateClickedTile({
            ...stateClickedTile,
            [id]: {
              classname:
                countClick % 2 === 0
                  ? "fa-solid fa-xmark"
                  : "fa-regular fa-circle",
              assign: countClick % 2 === 0 ? "xmark" : "circle",
            },
          });
        !stateClickedTile[id] && setCountClick(countClick + 1);
      }}
    >
      <i className={stateClickedTile[id]?.classname}></i>
    </button>
  );
}
