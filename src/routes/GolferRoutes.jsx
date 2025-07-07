// src/routes/GolferRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout และ Components สำหรับ Golfer
import GolferLayout from '../layouts/GolferLayout';
import GolferHomePage from '../pages/golfer/home/GolferHomePage';
import GolferBookingPage from '../pages/golfer/booking/GolferBookingPage';
// import GolferProfilePage from '../pages/golfer/profile/GolferProfilePage'; // เปิดใช้งานเมื่อต้องการใช้

/**
 * GolferRoutes Component:
 * จัดการเส้นทางย่อยทั้งหมดที่เกี่ยวข้องกับผู้ใช้งานประเภท Golfer
 * ใช้ GolferLayout เป็นโครงสร้างหลักสำหรับเส้นทางเหล่านี้
 */
function GolferRoutes() {
  return (
    <Routes>
      {/*
        เส้นทางหลักสำหรับ Golfer:
        เส้นทางย่อยทั้งหมดภายในนี้จะใช้ GolferLayout
        เช่น / (สำหรับ GolferHomePage), /booking
      */}
      <Route path="/" element={<GolferLayout />}>
        {/* หน้าแรกของ Golfer (แสดงเมื่อเข้าถึง /) */}
        <Route index element={<GolferHomePage />} />
        {/* หน้าสำหรับการจอง (แสดงเมื่อเข้าถึง /booking) */}
        <Route path="booking" element={<GolferBookingPage />} />
        {/* ตัวอย่างเส้นทางย่อยอื่นๆ ของ Golfer ( uncomment เพื่อเปิดใช้งาน ) */}
        {/* <Route path="profile" element={<GolferProfilePage />} /> */}
      </Route>
    </Routes>
  );
}

export default GolferRoutes;