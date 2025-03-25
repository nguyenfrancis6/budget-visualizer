import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Landing from "./pages/Landing/Landing";
import Choice from "./pages/Choice";
import BudgetInput from "./pages/BudgetInput";
import FinanceInput from "./pages/FinanceInput";
import Visualization from "./pages/Visualization";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/choice',
        element: <Choice />,
      },
      {
        path: '/budget',
        element: <BudgetInput />,
      },
      {
        path: '/finance',
        element: <FinanceInput />,
      },
      {
        path: '/visualization',
        element: <Visualization />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
