import { useNavigate } from "react-router-dom";

export function Notes(props) {
  const naivgate = useNavigate();
  return (
    <div>
      Notes Page
      <button onClick={() => naivgate("/")}>Go Back</button>
    </div>
  );
}
