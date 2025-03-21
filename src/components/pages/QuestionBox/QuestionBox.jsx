import { useState } from "react";
import "./QuestionBox.css";
import { questions } from "../../questions";
import { useEffect } from "react";
import { useRef } from "react";
const QuestionBox = () => {
  //disable-eslint-next-line
  const [allQuestions, setAllQuestions] = useState(questions);
  //disable-eslint-next-line
  const [counter, setCounter] = useState(1);
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const changeTimer = setInterval(() => {
      console.log(timer);
      setTimer((time) => (time > 0 ? time - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(changeTimer);
    };
  });
  return (
    <>
      <div className="questionBox  p-6 rounded-2xl w-[70%]">
        <div className="timer w-[60%]  border-4 h-10 mx-auto mb-6 rounded-2xl">
          {/* {timer} {timer > 1 ? "Sekunden" : "Sekunde"} */}
          <div
            className={`colorFiler bg-indigo-800 h-full rounded-2xl text-center`}
            style={{ width: `${timer * 20}%` }}
          ></div>
        </div>
        <div className="questionBox__titleBox flex flex-wrap gap-6">
          <h2 className="titleBox__title text-center mb-2 mx-auto">
            {allQuestions[counter].title}
          </h2>
          {allQuestions[counter].options.map((i) => {
            return (
              <div
                className="questionBox__itemsBox__item"
                onClick={() => setCounter(counter + 1)}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default QuestionBox;
