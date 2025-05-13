import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Summoner from "../pages/Summoner";
import Champions from "../pages/Champions";
import { ChampionContext } from "../context/ChampionContext";
import ChampionRotation from "../pages/ChampionRotation";
import Leaderboard from "../pages/Leaderboard";

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
      {
        path: "/champion-rotation",
        element: (
          <ChampionContext>
            <ChampionRotation />
          </ChampionContext>
        ),
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);

export default router;
