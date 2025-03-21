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
  const [isEnd, setIsEnd] = useState(false);
  //disable-eslint-next-line
  const [submitedQuestions, setSubmitedQuestions] = useState([]);
  const [note, setNote] = useState(0);

  const answer = (obj, usrAnswer) => {
    setCounter((c) => (c < allQuestions.length ? c + 1 : 0));
    obj.id == usrAnswer ? setNote(note + 1) : setNote(note);
  };
  //disable-eslint-next-line
  const [skiped, setSkiped] = useState(0);
  useEffect(() => {
    const changeTimer = setInterval(() => {
      console.log(`Counter ist ${counter}`);
      counter != 0
        ? setTimer((time) => {
            if (time > 0 && time != 1) {
              return time - 1;
            } else if (counter < allQuestions.length) {
              console.log(`Skipped ist ${skiped}`);
              setSkiped(skiped + 1);
              setCounter(counter + 1);
            } else {
              setSkiped(skiped + 1);
              setCounter(0);
            }
          })
        : clearInterval(changeTimer);
      // console.log(`timer ist ${timer}`);
    }, 1000);
    return () => clearInterval(changeTimer);
  });
  useEffect(() => {
    // console.log(counter);
    counter == 0 && setIsEnd(true);
    setTimer(() => (!isEnd ? 5 : 0));
  }, [counter, isEnd]);
  return (
    <>
      {counter ? (
        <>
          <span className="questionNumber absolute top-32 left-32 text-4xl text-white">
            {" "}
            Frage {allQuestions[counter - 1].id}
          </span>
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
                {counter <= allQuestions.length &&
                  allQuestions[counter - 1].title}
              </h2>
              {allQuestions[counter - 1].options.map((i) => {
                return (
                  <div
                    className="questionBox__itemsBox__item"
                    onClick={() => answer(i, allQuestions[counter - 1].answer)}
                  >
                    {i.name}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="endBox">
            Skipped Teile : {skiped} <br /> Note ist : {note}{" "}
          </div>
        </>
      )}
    </>
  );
};
export default QuestionBox;
