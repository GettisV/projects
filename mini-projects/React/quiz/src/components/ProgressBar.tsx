import { useContext } from "react";
import { ITypesCard } from "../models/MainTypes";
import CardContext from "../context/CardContext";

export default function ProgressBar(): JSX.Element {
  const { numberQuiz, initialQuiz, percent }: ITypesCard =
    useContext(CardContext);
  const initialLengthQuiz = initialQuiz.length - 1;

  return numberQuiz <= initialLengthQuiz ? (
    <div className="w-full bg-gray-00 rounded-full dark:bg-gray-700">
      <div
        className={`${
          percent ? `bg-blue-400` : `bg-transparent`
        } text-xs font-medium text-white px-3 py-0.5 text-center leading-none rounded-full`}
        style={{ width: `${percent}%` }}
      >
        {percent + "%"}
      </div>
    </div>
  ) : (
    <></>
  );
}
