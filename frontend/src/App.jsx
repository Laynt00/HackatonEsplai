import "./App.css";
import Comunication from "./pages/Comunication/Comunication";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Peques from "./pages/Peques/Peques";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/peques" element={<Peques />} />
          <Route path="/comunication" element={<Comunication />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
