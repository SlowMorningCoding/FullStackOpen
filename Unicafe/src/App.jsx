import { useState } from 'react';
import PropTypes from 'prop-types';

function App() {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="Give Feedback" />
      <Content setGood={setGood} good={good} setNeutral={setNeutral} neutral={neutral} setBad={setBad} bad={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Content({ setGood, good, setNeutral, neutral, setBad, bad }) {
  return (
    <div>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
    </div>
  );
}
Content.propTypes = {
  setGood: PropTypes.func.isRequired,
  good: PropTypes.string.isRequired,
  setNeutral: PropTypes.func.isRequired,
  neutral: PropTypes.string.isRequired,
  setBad: PropTypes.func.isRequired,
  bad: PropTypes.string.isRequired,
};

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>;
}
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

function Statistics({ good, neutral, bad }) {
  /*
  yhteenlasketun määrän, 
  keskiarvon (hyvän arvo 1, neutraalin 0, huonon -1) 
  kuinka monta prosenttia palautteista on ollut positiivisia:
  */
  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const positivePros = (good / all) * 100;

  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Avg" value={avg} />
          <StatisticLine text="Positive" value={positivePros + '%'} />
        </tbody>
      </table>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
};

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}
StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default App;
