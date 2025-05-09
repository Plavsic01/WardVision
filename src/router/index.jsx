import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Summoner from "../pages/Summoner";
import Champions from "../pages/Champions";
import { ChampionContext } from "../context/ChampionContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/summoners/:region/:gameName", element: <Summoner /> },
      {
        path: "/champions",
        element: (
          <ChampionContext>
            <Champions />
          </ChampionContext>
        ),
      },
    ],
  },
]);

export default router;
