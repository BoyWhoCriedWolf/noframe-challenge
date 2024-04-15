import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../pages/dashboard";
import Earn from "../pages/earn";
import EarnDetail from "../pages/earn/earn-detail";
import Markets from "../pages/markets";
import MarketDetail from "../pages/markets/market-detail";
import Redeem from "../pages/redeem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },

      //   markets
      { path: "/markets", element: <Markets /> },
      { path: "/market/:market-id?", element: <MarketDetail /> },

      //   earn
      { path: "/earn", element: <Earn /> },
      { path: "/earn/:earn-id?", element: <EarnDetail /> },

      //   redeem
      { path: "/redeem", element: <Redeem /> },
    ],
  },
]);
