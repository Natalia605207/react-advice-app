import { useState, useEffect } from "react";
import './App.css';
import TopWords from "./components/TopWords";
import Button from "./components/Button";
import BottomPart from "./components/BottomPart";

function App() {

  const [activity, setActivity] = useState("");
  const [activityType, setActivityType] = useState("");
  const [participantsNumber, setParticipantsNumber] = useState("");

  useEffect(() => {
    getAdvice()
  },[])

  const getAdvice = async () => {
    const response = await fetch(`https://bored.api.lewagon.com/api/activity/`);
    const data = await response.json();
    setActivity(data.activity);
    setActivityType(data.type);
    setParticipantsNumber(data.participants);
  }

  return (
    <div className="App">
      <TopWords />
      <Button getAdvice={getAdvice} />
      <div className="advice">
        <h2>"{activity}"</h2>
      </div>
      <p className="wordsBelowImage">Type of activity: <span className="bold">{activityType}</span></p>
      <p className="wordsBelowImage">Number of participants: <span className="bold">{participantsNumber}</span></p>
      <BottomPart />
    </div>
  );
}

export default App;
