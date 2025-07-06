// src/App.jsx
import React from 'react';
import AdminDashboard from "./pages/AdminDashboard";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import ReportPage from './pages/ReportPage';
import ReportConfirmPage from './pages/ReportConfirmPage';
import StatusPage from './pages/StatusPage';

import GolferRoutes from './routes/GolferRoutes'; // <<< Import GolferRoutes

function App() {
  return (
    <Router>
      <Routes>
        {/* ส่วนของ Admin */}
        <Route path="/admin" element={<div className="min-h-screen">
          <AdminDashboard /></div>} />

        {/* ส่วนของ Starter */}
        <Route path="/starter" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="report-confirm" element={<ReportConfirmPage />} />
          <Route path="status" element={<StatusPage />} />
        </Route>

        {/* ส่วนของ Golfer ที่ถูกย้ายไปจัดการโดย GolferRoutes */}
        <Route path="/*" element={<GolferRoutes />} />

      </Routes>
    </Router>
  );
}

export default App;