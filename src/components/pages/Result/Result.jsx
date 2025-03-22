import "./Result.css";
const Result = ({ skiped, note }) => {
  return (
    <>
      <div className="resultBox w-[60%] h-[50%] mx-auto mt-[10rem] flex flex-col justify-between backdrop-blur-2xl bg-indigo-900 border-4 border-black shadow-xs rounded-3xl">
        <div className="title text-center text-white p-12 text-6xl">
          Sie haben Prüfung getan!
        </div>
        <div className="resultsShow w-[100%]  flex flex-row justify-between pb-32">
          <div className="skipedBox">
            <h3 className="titleBox">ungeantwortete Fragen</h3>
            <span className="itemValue">{skiped}</span>
          </div>
          <div className="noteBox">
            {" "}
            <h3 className="titleBox">korrekte Antworten</h3>
            <span className="itemValue">{note}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Result;
