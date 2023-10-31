import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

const Nav = ({ isAdmin = false }) => {
  const { isAuth } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);
  function toggleNav() {
    setShowNav((prev) => {
      return !prev;
    });
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {isAdmin ? "Admin" : "Basketball"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={showNav ? "navbar-collapse" : "navbar-collapse collapse"}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/active-games">
                Active Games
              </NavLink>
            </li>
            {!isAuth && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Admin Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Admin Register
                  </NavLink>
                </li>
              </>
            )}
            {isAuth && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Admin Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/create-game">
                    Create Game
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/my-games">
                    My Game
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
