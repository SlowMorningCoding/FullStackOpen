import PropTypes from 'prop-types';

function Course({ course }) {
  return (
    <div>
      <Title name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}
Course.propTypes = {
  course: PropTypes.object.isRequired
};

function Title({ name }) {
  return <h2>{name}</h2>;
}
Title.propTypes = {
  name: PropTypes.string.isRequired
};


function Content({ parts }) {
  return (
    <div>
      {parts.map((part, i) => {
        return <Part key={i} part={part} />;
      })}
    </div>
  );
}
Content.propTypes = {
  parts: PropTypes.array.isRequired
};

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
Part.propTypes = {
  part: PropTypes.object.isRequired
};

function Total({ parts }) {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <b>{'total of ' + total + ' exercises'}</b>
    </p>
  );
}
Total.propTypes = {
  parts: PropTypes.array.isRequired
};

export default Course;
