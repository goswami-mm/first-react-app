import { Greetings } from "../Greeting/Greetings";
import { AgeCounter } from "../AgeCounter";
import "../global.css";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  function hello(value) {
    alert("Hello world alert: " + value);
  }

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="h1">Hello Divya I love you! forever</h1>
      <Greetings
        name={"Manmohan"}
        image={<img src="https://picsum.photos/200" />}
      ></Greetings>
      <AgeCounter alertClick={hello} />
      <button className="box" onClick={() => navigate("/notes")}>
        Send Btn txt
      </button>
    </div>
  );
}
