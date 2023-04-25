import { Outlet } from "react-router-dom";
import "./global.css";

export function App() {
  return (
    <div>
      App
      <Outlet />
    </div>
  );
}
