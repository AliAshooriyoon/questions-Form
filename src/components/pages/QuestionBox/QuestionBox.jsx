import { useState } from "react";
import "./QuestionBox.css";
import { questions } from "../../questions";
const QuestionBox = () => {
  const [allQuestions, setAllQuestions] = useState(questions);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="questionBox  p-6 rounded-2xl w-[70%]">
        <div className="questionBox__titleBox flex flex-wrap gap-6">
          <h2 className="titleBox__title text-center mb-2 mx-auto">
            {allQuestions[counter].title}
          </h2>
          {allQuestions[counter].options.map((i) => {
            return <div className="questionBox__itemsBox__item">{i}</div>;
          })}
        </div>
      </div>
    </>
  );
};
export default QuestionBox;
