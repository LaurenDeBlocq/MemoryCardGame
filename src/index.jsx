// import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./error-page";
import StartPage from "./pages/startPage";
import GamePage from "./pages/GamePage";
import Leaderboard from "./pages/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "game/",
        element: <GamePage />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
