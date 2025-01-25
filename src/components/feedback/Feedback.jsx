import s from "./Feedback.module.css";

const Feedback = ({ feedbacks }) => {
  return (
    <div className={s.feedbacks}>
      <p> Good: {feedbacks.good}</p>
      <p> Neutral: {feedbacks.neutral}</p>
      <p> Bad: {feedbacks.bad}</p>
      <p> Total: {feedbacks.total}</p>
      {/* <p> Positive feedback: {feedbacks. }</p> */}
    </div>
  );
};

export default Feedback;
