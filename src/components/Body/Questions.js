import Question from "./Question";
import { useState } from "react";
import EditScore from "./EditScore";
const Questions = (props) => {
  const [scored, setScored] = useState(0);
  const [index, setIndex] = useState(0);

  const correctChossen = () => {
    setIndex((prevState) => {
      return prevState + 1;
    });
  };

  const addScore = (data) => {
    props.score(data);
    setIndex(0);
  };

  const questions = [
    {
      key: "1",
      question: "Commonly used data types do not include:",
      options: ["strings", "boolenas", "alerts", "numbers"],
      correctAnswer: "alerts",
    },
    {
      key: 2,
      question: "Arrays in Javascript can be used to store _____.",
      options: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
      correctAnswer: "all of the above",
    },
    {
      key: 3,
      question:
        "Array in Javascipt are defined by which of the following statements?",
      options: [
        "It's an ordered list of values",
        "It's an ordered list of obects",
        "It's an ordered list of string",
        "It's an ordered list of functions",
      ],
      correctAnswer: "It's an ordered list of values",
    },
    {
      key: 4,
      question: "In which element we put javascript?",
      options: ["javascript", "scripting", "script", "none of the above"],
      correctAnswer: "script",
    },
    {
      key: 5,
      question: "_____ operator is used to assign a value to a variable?",
      options: ["*", "x", "=", "+"],
      correctAnswer: "=",
    },
    {
      key: 6,
      question:
        "Which of the following event occurs when user click on an html element?",
      options: ["onmouseclick", "onmouseover", "onclick", "none"],
      correctAnswer: "onclick",
    },
    {
      key: 7,
      question: "Which of the following terminates javascript statement",
      options: ["semicolon", "fullstop", "comma", "slash"],
      correctAnswer: "semicolon",
    },
    {
      key: 8,
      question: "_____ statements is used to declare variable in javascript",
      options: ["Executable", "Declaration", "Conditional", "Assignment"],
      correctAnswer: "Declaration",
    },
  ];

  const scoreHandler = (time) => {
    setIndex(8);
    setScored(time);
  };

  return (
    <div>
      {index <= 7 ? (
        <Question
          current={index}
          allQuestions={questions}
          done={correctChossen}
          score={scoreHandler}
        ></Question>
      ) : (
        <EditScore score={addScore} userScore={scored}></EditScore>
      )}
    </div>
  );
};

export default Questions;
