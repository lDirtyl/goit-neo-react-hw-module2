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
  return (
    <>
      <Title />
      <Options>Good</Options>
      <Options>Neutral</Options>
      <Options>Bad</Options>

      <Feedback>Good</Feedback>
    </>
  );
}

export default App;
