import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, isReset }) => {
  return (
    <div className={s.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && <button onClick={isReset}>Reset</button>}
    </div>
  );
};
export default Options;
