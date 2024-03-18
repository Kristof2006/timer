import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div id="majdideteszemazappot">
      <div
        style={{
          margin: "0.5rem",
        }}
      >
        <NavBar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        {/* the children of root comes here */}
        <Outlet />
      </div>
    </div>
  );
}
