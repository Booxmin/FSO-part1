import Unicafe from "./Unicafe";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    );
  };

  const Total = (props) => {
    {
      /* chatGPT */
    }
    const totalExercises = course.parts.reduce(
      (sum, part) => sum + part.exercises,
      0
    );
    return (
      <div>
        <p>Number of exercises {totalExercises}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      {course.parts.map((part, index) => (
        <Content key={index} part={part.name} exercises={part.exercises} />
      ))}
      <Total />
      <Unicafe/>
    </div>
  );
};

export default App;
