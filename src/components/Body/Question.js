import { useState, useContext } from "react";
import ReactDOM from "react-dom";
import "./question.css";
import Card from "./../Card";
import TimeContext from "../store/time-context";

let clickTime = true;

const Question = (props) => {
  const [result, setResult] = useState(null);
  const [time, setTime] = useState(180);
  const [wrong, setWrong] = useState(false);
  const timer = useContext(TimeContext);

  const updater = () => {
    if (time > 0) {
      if (wrong) {
        if (time > 12) {
          setTime(time - 11);
          setWrong(false);
        }
      } else {
        setTime(time - 1);
      }
    }
    timer.value = time;
  };
  setTimeout(() => {
    updater();
  }, 1000);

  const onClickHandler = (event) => {
    if (clickTime) {
      clickTime = false;
      console.log("clicked");
      setTimeout(() => {
        clickTime = true;
      }, 2000);
      const userChoice = event.target.innerHTML.slice(2);
      if (userChoice === props.allQuestions[props.current].correctAnswer) {
        setResult(1);
        setResult(null);
        props.done();
        if (props.current === 7) {
          props.score(time);
        }
      } else {
        setResult(2);
        setWrong(true);
        if (time < 10) {
          console.log("yes");
          setTime(0);
        }
      }
    }
  };

  if (time === 0) {
    props.score(time);
  }

  const Time = () => {
    return (
      <>
        <div className="time">Time: {time}</div>
      </>
    );
  };
  return (
    <div className="question-container">
      <Card key={props.allQuestions[props.current].key}>
        <h2>{props.allQuestions[props.current].question}</h2>
        <ul>
          {props.allQuestions[props.current].options.map((option, ind) => {
            return (
              <li
                onClick={onClickHandler}
                key={props.allQuestions[props.current].key + ind}
              >
                {ind + 1}.{option}
              </li>
            );
          })}
        </ul>
        {result ? (
          result === 0 ? (
            <span>Correct</span>
          ) : (
            <span>Incorrect!</span>
          )
        ) : null}
      </Card>
      {ReactDOM.createPortal(
        <Time></Time>,
        document.getElementById("timeHolder")
      )}
    </div>
  );
};

export default Question;
