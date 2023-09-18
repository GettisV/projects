import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITypesCard } from "../models/MainTypes";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import TitleAnswer from "./TitleAnswer";
import Image from "./Image";
import CardContext from "../context/CardContext";
import CustomButton from "./CustomButton";
import hash from "object-hash";
import ProgressBar from "./ProgressBar";

export default function Quiz() {
  const {
    currentQuiz,
    initialQuiz,
    numberQuiz,
    setNumberQuiz,
    result,
    setResult,
    percent,
    setPercent,
    styles,
  }: ITypesCard = useContext(CardContext);

  const [stateClick, setStateClick] = useState<boolean>(false);
  const [answerIsTrue, setAnswerIsTrue] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string | undefined>("");
  const [answerHash, _] = useState<string[] | undefined>(createAnswersHash());

  const initialLengthQuiz = initialQuiz.length - 1;

  function createAnswersHash(): string[] | undefined {
    return currentQuiz?.answers.map(() => {
      return hash(Math.random() * 10000);
    });
  }

  const handlerRestartBtn = (): void => {
    setNumberQuiz(0);
    setResult && setResult(0);
    setPercent && setPercent(0);
    setStateClick(false);
  };

  const handlerAnswerBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: { text: string; isTrue: boolean }
  ): void => {
    setCurrentKey(e.currentTarget.dataset.key);
    setAnswerIsTrue(item.isTrue);
    item.isTrue && setResult && setResult(result ? result + 1 : 1);
    setStateClick(true);
  };

  const handlerNextBtn = () => {
    const answersBtns = document.querySelectorAll(`.answer__btn`);
    answersBtns.forEach(() => {});

    percent + 100 / initialQuiz.length <= 100 &&
      setPercent &&
      setPercent(Math.floor(percent + 100 / initialQuiz.length));
    setNumberQuiz(numberQuiz + 1);
    setStateClick(false);
  };

  return (
    <div className="flex flex-col w-full lg:w-1/2 mt-3 mx-5">
      <ProgressBar />

      {numberQuiz <= initialLengthQuiz ? (
        <TitleAnswer title={currentQuiz?.title} />
      ) : (
        <>
          {(initialLengthQuiz + 1) / 2 <= Number(result) ? (
            <Image img={styles?.popper__img} />
          ) : (
            <>
              <h1 className="w-full text-center font-semibold text-2xl my-2">{`:<`}</h1>
              <h2 className="w-full text-xl sm:text-2xl font-light text-center text-gray-700 my-3">
                Увы, но вы ответили правильно на менее <b>50%</b> вопросов.
                <br /> Но может в следующий раз повезет.
              </h2>
            </>
          )}
          <h3 className="w-full text-xl sm:text-2xl font-light text-center text-gray-700 my-3">
            Правильных <b>{result}</b>
            {Number(result) >= 5 ? ` ответов` : ` ответа`} из
            <b> {initialLengthQuiz + 1}</b> вопросов
          </h3>
          <CustomButton
            key={hash(Math.random() * 10000)}
            dataKey=""
            customClass={``}
            size={`w-16 h-16`}
            indents={`mx-auto my-5 px-3`}
            border={`border border-solid rounded-full border-slate-200`}
            colors={`bg-white text-gray-700 hover:bg-gray-700 hover:text-white`}
            buttonOnClickHandler={handlerRestartBtn}
            disabled={false}
          >
            <FontAwesomeIcon icon={faArrowRotateLeft} size="xs" />
          </CustomButton>
        </>
      )}
      {currentQuiz &&
        currentQuiz.answers.map(
          (item: { text: string; isTrue: boolean }, index): React.ReactNode => {
            const dataKey: string | undefined = answerHash && answerHash[index];

            return (
              <CustomButton
                key={dataKey}
                dataKey={dataKey}
                customClass={`answer__btn ${
                  stateClick
                    ? currentKey === dataKey
                      ? answerIsTrue
                        ? "font-medium border-2 border-green-500 bg-white"
                        : "font-medium border-2 border-red-500 bg-white"
                      : "border-slate-300"
                    : "border-slate-300"
                }`}
                size={`w-full h-12`}
                indents={`mx-auto my-1 px-3`}
                border={`border border-solid rounded-lg`}
                colors={`${
                  stateClick ? "bg-slate-100" : "bg-white"
                } text-gray-700 hover:bg-gray-700 hover:text-white`}
                buttonOnClickHandler={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ): void => {
                  handlerAnswerBtn(e, item);
                }}
                disabled={stateClick}
              >
                {item.text}
              </CustomButton>
            );
          }
        )}
      {stateClick && (
        <CustomButton
          key={hash(Math.random() * 10000)}
          dataKey=""
          customClass={``}
          size={`w-1/2 h-12 sm:w-1/3`}
          indents={`ml-auto my-1.5`}
          border={`border border-solid rounded-lg border-slate-200`}
          colors={`bg-white text-gray-700 hover:bg-gray-700 hover:text-white`}
          buttonOnClickHandler={handlerNextBtn}
          disabled={false}
        >
          Далее
        </CustomButton>
      )}
    </div>
  );
}
