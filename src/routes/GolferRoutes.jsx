// src/routes/GolferRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GolferLayout from '../layouts/GolferLayout'; // Path ไปยัง GolferLayout.jsx
import GolferHomePage from '../pages/golfer/home/GolferHomePage';
import GolferBookingPage from '../pages/golfer/booking/GolferBookingPage';
// import GolferProfilePage from '../pages/golfer/profile/GolferProfilePage';

function GolferRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GolferLayout />}>
        <Route index element={<GolferHomePage />} />
        <Route path="booking" element={<GolferBookingPage />} />
        {/* เพิ่มเส้นทางย่อยอื่นๆ ของ Golfer ที่นี่ */}
        {/* <Route path="profile" element={<GolferProfilePage />} /> */}
      </Route>
    </Routes>
  );
}

export default GolferRoutes;