// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Dashboard from "./Pages/dashboard";
import Login from "./Pages/login";
import Register from "./Pages/register";
import DashboardAdmin from "./Pages/dashboard-admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<DashboardAdmin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
