import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import { element } from "prop-types";
import DefaultProfile from "./DefaultProfile";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },//diff between elem and error?
  {
    path: "profile",
    element: <DefaultProfile/>,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;
