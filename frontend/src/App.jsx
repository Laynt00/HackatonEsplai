import "./App.css";
import Comunication from "./pages/Comunication/Comunication";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Peques from "./pages/Peques/Peques";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login /> } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/peques" element={<Peques />} />
          <Route path="/comunication" element={<Comunication />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
