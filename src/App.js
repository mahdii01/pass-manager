import React from "react";
import { useRoutes } from "react-router-dom";
import { Login } from "./Page/Login/Login";
import routes from "./routes";
import "./App.css";
import "./responsive.css";
export default function App() {
  let router = useRoutes(routes);
  return (
    <>
    {router}
    </>
  );
}
