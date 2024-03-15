import { useState } from "react";

const Display = (props) => (
  <div>
    {props.name}: {props.value}
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Unicafe = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    console.log("value now", newValue);
    setGood(newValue);
  };

  const setToNeutral = (newValue) => {
    console.log("value now", newValue);
    setNeutral(newValue);
  };

  const setToBad = (newValue) => {
    console.log("value now", newValue);
    setBad(newValue);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Display value={good} name="Good" />
      <Display value={neutral} name="Neutral" />
      <Display value={bad} name="Bad" />
      <Display value={good + neutral + bad} name="All" />
      <Display
        value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
        name="Average"
      />
      <Display
        value={(good / (good + neutral + bad)) * 100 + " %"}
        name="Positive"
      />
    </div>
  );
};

export default Unicafe;
