// src/App.jsx

import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Components และ Layouts สำหรับ Admin และ Starter
import AdminDashboard from "./pages/AdminDashboard";
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import ReportPage from './pages/ReportPage';
import ReportConfirmPage from './pages/ReportConfirmPage';
import StatusPage from './pages/StatusPage';

// Routes สำหรับ Golfer
import GolferRoutes from './routes/GolferRoutes';

// *** Import RegisterPage ที่นี่ ***
import RegisterPage from './pages/auth/RegisterPage';

/**
 * App Component:
 * เป็นจุดเริ่มต้นของแอปพลิเคชัน จัดการ Routing หลัก
 * แยกเส้นทางสำหรับ Admin, Starter และ Golfer
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* เส้นทางสำหรับ Admin */}
        <Route
          path="/admin"
          element={
            <div className="min-h-screen bg-gray-100">
              <AdminDashboard />
            </div>
          }
        />

        {/* เส้นทางสำหรับ Starter */}
        <Route path="/starter" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="report-confirm" element={<ReportConfirmPage />} />
          <Route path="status" element={<StatusPage />} />
        </Route>

        {/* เส้นทางสำหรับ Golfer (และเส้นทางอื่นๆ ที่ GolferRoutes ยังไม่ครอบคลุม) */}
        <Route path="/*" element={<GolferRoutes />} />

        {/* *** เพิ่มเส้นทางสำหรับหน้า Register ที่นี่ *** */}
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </Router>
  );
}

export default App;