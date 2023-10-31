import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const Admin = () => {
  return (
    <>
      <Nav isAdmin={true} />
      <Outlet></Outlet>
    </>
  );
};

export default Admin;
