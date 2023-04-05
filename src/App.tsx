import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
