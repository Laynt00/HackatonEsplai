import "./App.css";
import Comunication from "./pages/Comunication/Comunication";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Peques from "./pages/Peques/Peques";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/peques" element={<Peques />} />
        <Route path="/comunication" element={<Comunication />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;