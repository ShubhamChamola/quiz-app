import "./intro.css";
import Card from "./../Card";
const Intro = (props) => {
  return (
    <Card className="intro">
      <h2>Coding Quiz Challenge</h2>
      <p>
        Try to answer to following code related questions within the time limit.
      </p>
      <p>
        Keep in mind that incorrect answers will penalize your score/time by ten
        seconds
      </p>
      <button type="submit" onClick={props.onButtonClick}>
        Start Quiz
      </button>
    </Card>
  );
};

export default Intro;
