import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin">Admin Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/create-game">Create Game</NavLink>
          </li>
          <li>
            <NavLink to="/admin/edit-game/33">Edit Game</NavLink>
          </li>
          <li>
            <NavLink to="/admin/update-game/33">Update Game</NavLink>
          </li>
          <li>
            <NavLink to="/admin/my-games">My Game</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Admin;
