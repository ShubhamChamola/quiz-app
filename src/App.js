import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./app.css";
import { useState, useContext } from "react";
import TimeContext from "./components/store/time-context";

function App() {
  const [userScore, setUserScore] = useState(null);
  const timer = useContext(TimeContext);

  const addScore = (data) => {
    setUserScore(() => {
      return data;
    });
  };

  setInterval(() => console.log(timer.value), 1000);

  return (
    <div className="app">
      <Header scored={userScore}></Header>
      <Body score={addScore}></Body>
    </div>
  );
}

export default App;
