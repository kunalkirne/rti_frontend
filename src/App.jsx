import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import OpenEntry from "./pages/openEntry";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newEntry" element={<NewEntry />} />
        <Route path="/openEntry" element={<OpenEntry />} />
      </Routes>
    </BrowserRouter>
  );
}
