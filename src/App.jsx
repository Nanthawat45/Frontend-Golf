import AdminDashboard from "./pages/AdminDashboard";

import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Starter/Dashboard";
import ReportPage from "./pages/Starter/ReportPage";
import ReportConfirmPage from "./pages/Starter/ReportConfirmPage";
import StatusPage from "./pages/Starter/StatusPage";
import BookingPage from "./pages/Caddy/BookingPage";
import ProcessGolfPage from "./pages/Caddy/ProcessGolfPage";

function App() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <div className="min-h-screen">
            <AdminDashboard />
          </div>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/starter" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="report-confirm" element={<ReportConfirmPage />} />
        <Route path="status" element={<StatusPage />} />
      </Route>
      <Route path="/caddy" element={<MainLayout />}>
        <Route index element={<BookingPage />} />
        <Route path="process" element={<ProcessGolfPage />} />
      </Route>
    </Routes>
  );
}

export default App;
