import Title from "./components/Description/Description.jsx";
import CounterClick from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Title />
      <CounterClick>Good</CounterClick>
      <CounterClick>Neutral</CounterClick>
      <CounterClick>Bad</CounterClick>

      <Feedback>Good</Feedback>
    </>
  );
}

export default App;
