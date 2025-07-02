import AdminDashboard from "./pages/AdminDashboard";

import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
function App() {
  return (
    <Routes>
      <Route path="/admin" element={<div className="min-h-screen">
        <AdminDashboard /></div>} />
         <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
