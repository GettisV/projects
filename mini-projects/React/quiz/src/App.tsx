import { useState } from "react";
import CardContext from "./context/CardContext";
import quiz from "./data/quiz";
import styles from "./App.module.scss";
import Quiz from "./components/Quiz";

function App() {
  const [numberQuiz, setNumberQuiz] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [percent, setPercent] = useState<number>(0);
  const initialQuiz = quiz;

  return (
    <div className="App font-sans flex justify-center">
      <CardContext.Provider
        value={{
          currentQuiz: quiz[numberQuiz],
          initialQuiz,
          numberQuiz,
          setNumberQuiz,
          result,
          setResult,
          percent,
          setPercent,
          styles,
        }}
      >
        <Quiz />
      </CardContext.Provider>
    </div>
  );
}

export default App;
