import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedbaks }) => {
  return (
    <div className={s.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => resetFeedbaks("reset")}>Reset</button>
    </div>
  );
};
export default Options;
