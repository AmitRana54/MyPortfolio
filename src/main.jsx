import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./Components/Header/Navbar.jsx";
import About from "./Components/About/About.jsx";
import ErrorElement from "./Components/ErrorElement.jsx"
import Skill from "./Components/Skill/Skill.jsx";
import Projects from "./Components/Projects/Projects.jsx";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorElement />}>
      <Route path="/" element={<Navbar />} errorElement={<ErrorElement />} />
      <Route
        path="/about"
        element={<About />}
        errorElement={<ErrorElement />}
      /><Route
      path="/Skill"
      element={<Skill />}
      errorElement={<ErrorElement />}
    /><Route
    path="/Projects"
    element={<Projects />}
    errorElement={<ErrorElement />}
  />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
