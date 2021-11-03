import React, { useState } from "react";

function App() {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="Give Feedback" />
      <Content
        setGood={setGood}
        good={good}
        setNeutral={setNeutral}
        neutral={neutral}
        setBad={setBad}
        bad={bad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content({ setGood, good, setNeutral, neutral, setBad, bad }) {
  return (
    <div>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
    </div>
  );
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>;
}

function Statistics({ good, neutral, bad }) {
  /*
  yhteenlasketun määrän, 
  keskiarvon (hyvän arvo 1, neutraalin 0, huonon -1) 
  kuinka monta prosenttia palautteista on ollut positiivisia:
  */
  const all = good + neutral + bad;
  const avg = (good-bad)/all;
  const positivePros = good/all*100;

  return (
    <div>
      <h2>Statistics</h2>
      <p>
        Good: {good}
        <br />
        Neutral: {neutral}
        <br />
        Bad: {bad}
        <br />
        All: {all}
        <br />
        Avg: {avg}
        <br />
        Positive: {positivePros}%
      </p>
    </div>
  );
}

export default App;
