import s from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.feedbacks}>
      <p> Good: {feedbacks.good}</p>
      <p> Neutral: {feedbacks.neutral}</p>
      <p> Bad: {feedbacks.bad}</p>
      <p> Total: {totalFeedback}</p>
      <p> Positive feedbacks: {positiveFeedback} %</p>
    </div>
  );
};

export default Feedback;
