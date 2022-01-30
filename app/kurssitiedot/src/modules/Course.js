import React from "react";

function Course({ course }) {
  return (
    <div>
      <Title name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

function Title({ name }) {
  return <h2>{name}</h2>;
}

function Content({ parts }) {
  return (
    <div>
      {parts.map((part, i) => {
        return <Part key={i} part={part} />;
      })}
    </div>
  );
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Total({ parts }) {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <b>{"total of " + total + " exercises"}</b>
    </p>
  );
}

export default Course;
