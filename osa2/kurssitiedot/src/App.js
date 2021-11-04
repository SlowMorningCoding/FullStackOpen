function App() {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
}

function Course({ course }) {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  );
}

function Header({ course }) {
  return <h1>{course.name}</h1>;
}

function Content({ course }) {
  return (
    <div>
      {course.parts.map((part, i) => {
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
  return <p>{"total of " + total + " exercises"}</p>;
}

export default App;
