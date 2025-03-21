import { useState } from "react";
import "./Home.css";
import QuestionBox from "../QuestionBox/QuestionBox";
const Home = () => {
  const [questionsStatus, setQuestionsStatus] = useState(false);
  return (
    <>
      <div className="home">
        {!questionsStatus ? (
          <div className="formFragen">
            <div className="titleBox">
              <h1 className="text-5xl text-[#FFA725] text-center mt-32">
                Möchtest du Fragen von Lpic1 soeben anfangen ?
              </h1>
            </div>
            <div className="titleBox_buttons flex gap-9 justify-center mt-12">
              <button
                type="button"
                className="cursor-pointer border-2 border-red-500 hover:border-[#FFA725] hover:bg-red-500"
                onClick={() => setQuestionsStatus(false)}
              >
                Na ja, gib mir mehre Rücksprachen{" "}
              </button>
              <button
                type="button"
                className="cursor-pointer border-2 border-green-400 hover:bg-green-400 hover:border-[#FFA725]"
                onClick={() => setQuestionsStatus(true)}
              >
                Ja
              </button>
            </div>
            <div className="captions__home text-center mt-44 max-w-[60%] mx-auto mb-52 text-white">
              Die ist ein Beispiel für einen Blindtext, der auf deutsch
              geschrieben ist. Es gibt noch viele weitere Arten des Hauses,
              wobei die ersten Menschen heute nicht sind. Zudem sind Beispiele
              jetzt noch frei, denn man sollte bedenken, der Text macht wenig
              Sinn. Mit brausender Geschwindigkeit war der Titel des neuen Boots
              in naher Ferne, weshalb sich der Briefträger einen roten Mantel
              zur Reinigung brachte. Ein weiterer Punkt wäre es, die
              verständliche Blindtexte heute noch anzurufen denn der Tisch steht
              im Gang. Zur damaligen Zeit war es eher üblich, die gebrauchten
              Handtücher mittels Fensterreiniger auszulüften, um auch die
              Wanduhr als Beispiel
            </div>
          </div>
        ) : (
          <div className="home__questionBox flex items-center justify-center h-[100vh] ">
            <QuestionBox />
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
