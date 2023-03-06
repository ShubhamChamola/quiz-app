import Intro from "./Intro";
import { useState } from "react";
import Questions from "./Questions";

const Body = (props) => {
  const [introRead, setIntroRead] = useState(false);
  const clickHandler = () => {
    setIntroRead(true);
  };
  const addScore = (data) => {
    props.score(data);
    setIntroRead(false);
  };

  return (
    <div>
      {!introRead ? <Intro onButtonClick={clickHandler}></Intro> : null}
      {introRead ? <Questions score={addScore}></Questions> : null}
    </div>
  );
};

export default Body;
