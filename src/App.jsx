import { useState } from "react";
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feedback";
import Options from "./components/options/Options";
import Notification from "./components/notification/Notification";

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const resetFeedbaks = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  // const positiveFeedback = (good) => Math.round((good / totalFeedback) * 100));

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedbaks={resetFeedbaks} />

      {totalFeedback === 0 ? <Notification /> : <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />}
    </>
  );
};
export default App;
