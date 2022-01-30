import React, { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);

  const handleNextAnecdote = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length);
    console.log("Selected anecdote", newIndex);
    setSelected(newIndex);
  };

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const handleVote = (index) => {
    const handler = () => {
      // Handle Vote
      console.log("handleVote", index);
      const newPoints = [...points];
      newPoints[index] += 1;
      setPoints(newPoints);
      // Handle maxVotes
      let indexOfMaxVotes = newPoints.indexOf(Math.max(...newPoints));
      console.log("maxVotes", indexOfMaxVotes, newPoints);
      setMaxVotes(indexOfMaxVotes);
    };
    return handler;
  };

  const [maxVotes, setMaxVotes] = useState(0);

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Content text={anecdotes[selected]} />
      <Content text={"Has " + points[selected] + " votes"} />
      <Button handleClick={handleVote(selected)} text="Vote" />
      <Button handleClick={handleNextAnecdote} text="Next anecdote" />
      <Title text="Anecdote with most votes" />
      <Content text={anecdotes[maxVotes]} />
      <Content text={"Has " + points[maxVotes] + " votes"} />
    </div>
  );
}

function Title({ text }) {
  return <h1>{text}</h1>;
}

function Content({ text }) {
  return <p>{text}</p>;
}

function Button({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>;
}

export default App;
