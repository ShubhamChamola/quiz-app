import Card from "./../Card";
import "./editscore.css";

const EditScore = (props) => {
  const userData = {};

  const onClickHandler = (event) => {
    userData["name"] = document.querySelector("input").value;
    userData["s"] = props.userScore;
    event.preventDefault();
    props.score(userData);
  };

  return (
    <Card className="score-container">
      <h2>All Done!</h2>
      <p>Your final score is {props.userScore}</p>
      <form>
        <label htmlFor="initials">Enter initials: </label>
        <input type="text" id="initials" />
        <button onClick={onClickHandler} type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default EditScore;
