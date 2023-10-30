import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/active-games">Active Games</NavLink>
          </li>
          <li>
            <NavLink to="/login">Admin Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Admin Register</NavLink>
          </li>
          <li>
            <NavLink to="/game/33">Game</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;