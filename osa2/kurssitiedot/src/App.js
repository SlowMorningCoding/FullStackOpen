function App() {
  const courses = [
    {
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Header name="Web development curriculum" />
      {courses.map((course) => (
        <Course course={course} />
      ))}
    </div>
  );
}

function Header({ name }) {
  return <h1>{name}</h1>;
}

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
  return <p><b>{"total of " + total + " exercises"}</b></p>;
}

export default App;
