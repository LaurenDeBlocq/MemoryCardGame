import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
