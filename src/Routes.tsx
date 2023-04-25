import { createBrowserRouter } from "react-router-dom";
import GameDetialPage from "./pages/GameDetialPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //   errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetialPage /> },
    ],
  },
]);

export default router;
