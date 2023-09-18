import { Dispatch, SetStateAction } from "react";

type setState = Dispatch<SetStateAction<number>>;

interface IAnswer {
  text: string;
  isTrue: boolean;
}

// =================

type initialQuiz = {
  title: string;
  answers: {
    text: string;
    isTrue: boolean;
  }[];
}[];

interface card {
  numberQuiz: number;
  initialQuiz: initialQuiz;
  percent: number;
}

// =================

interface currentQuiz {
  title: string;
  answers: IAnswer[];
}

// =================

interface ITypesCard {
  currentQuiz?: currentQuiz;
  initialQuiz: initialQuiz;
  numberQuiz: number;
  setNumberQuiz: setState;
  result?: number;
  setResult?: setState;
  percent: number;
  setPercent?: setState;
  styles?: {
    [key: string]: string;
  };
}

export type { ITypesCard, card };
