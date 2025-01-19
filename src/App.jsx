// import { useState } from "react";
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feedback";
import Options from "./components/options/Options";

const App = () => {
  // const [feedbackType, setFeedbackType] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  return (
    <>
      <Description />
      <Feedback />
      <Options />
    </>
  );
};
export default App;
