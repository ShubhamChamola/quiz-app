import Card from "./../Card";
import "./Scoreboard.css";
import { useState } from "react";

let scored = [
  { name: "SJ", s: 48 },
  { name: "AJ", s: 32 },
];

let edit = true;
let previous = [];
const Scoreboard = (props) => {
  const [scores, setScore] = useState(scored);

  if (props.score && edit) {
    console.log(previous);
    if (scored.indexOf(props.score) > -1) {
      console.log(null);
    } else if (previous.indexOf(props.score) == -1) {
      scored.push(props.score);
      setScore(scored);
    }
  }

  const clearHandler = () => {
    scored = [];
    setScore((prev) => {
      console.log(prev);
      previous = prev;
      return scored;
    });
    edit = false;
  };

  const onClickHandler = () => {
    props.back();
    edit = true;
  };

  return (
    <div className="scoreboard-container">
      <Card>
        <h2>Highscores</h2>
        <ul>
          {scores
            ? scores.map((score, index) => {
                return (
                  <li key={index}>
                    {index + 1}. {score.name} - {score.s}
                  </li>
                );
              })
            : null}
        </ul>
        <div>
          <button onClick={onClickHandler} type="submit">
            GO Back
          </button>
          <button type="submit" onClick={clearHandler}>
            Clear Highscores
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Scoreboard;
