import { useState } from "react";

import Feedback from "../Feedback/Feedback.jsx";
const ClickCounter = ({ children }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <button onClick={handleClick}>{children}</button>

      {/* <p>
        {children}: {clicks}
      </p> */}
      {/* <button onClick={handleClickNeutral}>Neutral</button>
      <p>Good: {clicks}</p>
      <button onClick={handleClickBad}>Bad</button>
      <p>Good: {clicks}</p> */}
    </>
  );
};

export default ClickCounter;
