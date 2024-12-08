import Title from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <h2>
          Please leave your feedback about our service by selecting one of the
          options below.
        </h2>
        <Options onFeedback={updateFeedback} />
        <Feedback feedback={feedback} />
      </div>
    </>
  );
}

export default App;
