import { useState, useEffect } from "react";
import Notification from "./components/Notification/Notification.jsx";

import Title from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback !== null) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  useEffect(() => {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    if (totalFeedback > 0) {
      localStorage.setItem("feedback", JSON.stringify(feedback));
    }
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <div>
        <Title />
        <Options
          onFeedback={updateFeedback}
          onReset={resetFeedback}
          total={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given yet." />
        )}
      </div>
    </>
  );
}

export default App;
