import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { router } from "./router/Routes";

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
