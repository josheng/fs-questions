import React, { useState } from "react";

function Button() {
  // state variable to store click counters
  const [counter, setCounter] = useState(0);
  // the text to be displayed after 3 clicks
  const text = <h1>You have clicked the button {counter} times.</h1>;

  // display text when counter reach 3
  // reset counter during forth click
  return (
    <div>
      {counter === 3 && text}
      {counter === 4 && setCounter(0)}
      <button className="btn" onClick={() => setCounter(counter + 1)}>
          Times Clicked: {counter}
      </button>
    </div>
  );
}

export default Button;
