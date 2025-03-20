import { useState } from "react";
import "./QuestionBox.css";
import { questions } from "../../questions";
const QuestionBox = () => {
  const [allQuestions, setAllQuestions] = useState(questions);
  const [counter, setCounter] = useState(1);
  return (
    <>
      <div className="questionBox  p-6 rounded-2xl w-[70%]">
        <div className="questionBox__titleBox ">
          <h2 className="titleBox__title text-center mb-2">
            Wie kann man Geräte, die in unserem Computer verknüpft sind, sehen
            und kontrollieren ?
          </h2>
        </div>
        <div className="questionBox__itemsBox flex gap-4 flex-wrap mx-auto">
          <div className="questionBox__itemsBox__item">
            Die ist ein Beispiel für einen Blindtext, der geschrieben ist. Es
            gibt noch viele weitere Arten des Hauses,
          </div>{" "}
          <div className="questionBox__itemsBox__item">
            Die ist ein Beispiel für einen Blindtext, der geschrieben ist. Es
            gibt noch viele weitere Arten des Hauses,
          </div>
          <div className="questionBox__itemsBox__item">
            Die ist ein Beispiel für einen Blindtext, de geschrieben ist. Es
            gibt noch viele weitere Arten des Hauses,
          </div>
          <div className="questionBox__itemsBox__item">
            Die ist ein Beispiel für einen Blindtext, geschrieben ist. Es gibt
            noch viele weitere Arten des Hauses,
          </div>
        </div>
      </div>
    </>
  );
};
export default QuestionBox;
