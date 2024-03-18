import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <div>
        <Link to="/">Back to Homepage</Link>
      </div>
      <div>
        <Link to="/pomodoro">Indit Pomodoro program</Link>
      </div>
      <div>
        <Link to="/stopper">Indit Stopper program</Link>
      </div>
    </div>
  );
}
