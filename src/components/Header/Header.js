import "./header.css";
import { useState } from "react";
import Scoreboard from "./../Body/Scoreboard";

const Header = (props) => {
  const [scoreboard, setScoreboard] = useState(false);

  const clickHandler = () => {
    setScoreboard(true);
  };

  const backHandler = () => {
    setScoreboard(false);
  };

  return (
    <div className="header-container">
      <div onClick={clickHandler} className="score">
        View Highscores
      </div>
      <div id="timeHolder"></div>
      {scoreboard ? (
        <Scoreboard score={props.scored} back={backHandler}></Scoreboard>
      ) : null}
    </div>
  );
};

export default Header;
