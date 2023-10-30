import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ActiveGames from "./pages/ActiveGames.jsx";
import Admin from "./Admin.jsx";
import CreateGame from "./pages/admin/CreateGame.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import EditGame from "./pages/admin/EditGame.jsx";
import UpdateGame from "./pages/admin/UpdateGame.jsx";
import MyGames from "./pages/admin/MyGames.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Game from "./pages/Game.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/active-games",
        element: <ActiveGames />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/game/:id",
        element: <Game />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: "/",
        element: <AdminHome />,
      },
      {
        path: "/admin/create-game",
        element: <CreateGame />,
      },
      {
        path: "/admin/edit-game/:id",
        element: <EditGame />,
      },
      {
        path: "/admin/update-game/:id",
        element: <UpdateGame />,
      },
      {
        path: "/admin/my-games",
        element: <MyGames />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
