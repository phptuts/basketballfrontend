import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav isAdmin={false} />
      <Outlet></Outlet>
      <footer>
        <ul>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/basketball"
              title="basketball icons"
            >
              Basketball icons created by Freepik - Flaticon
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
