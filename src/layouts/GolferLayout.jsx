// src/layouts/GolferLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/golfer/components/Navbar'; // ตรวจสอบ Path ว่าถูกต้องเสมอ

/**
 * GolferLayout Component:
 * เป็น Layout หลักสำหรับเส้นทางทั้งหมดของ Golfer
 * ประกอบด้วย Navbar ที่ด้านบน และ Outlet สำหรับแสดงเนื้อหาของหน้าย่อยๆ
 */
function GolferLayout() {
  return (
    <div className="min-h-screen font-sans bg-white flex flex-col"> {/* เพิ่ม flex-col เพื่อจัดการ Layout */}
      {/* Navbar ถูกแสดงที่นี่ และจะอยู่ด้านบนสุด */}
      <Navbar />

      {/*
        Main Content Area:
        ใช้ Outlet เพื่อแสดง Component ลูก (เช่น GolferHomePage, GolferBookingPage)
        *** สำคัญ: ลบคลาส padding-top (pt-[120px]) ที่ทำให้เนื้อหาถูกดันลงมา
        ตอนนี้เนื้อหาจะอยู่ติดกับ Navbar มากขึ้น
      */}
      <main className="flex-grow"> {/* ใช้ flex-grow เพื่อให้ main ขยายเต็มพื้นที่ที่เหลือ */}
        <Outlet />
      </main>

      {/* ถ้ามี Footer ของ Golfer ก็สามารถใส่ตรงนี้ได้ */}
      {/* <Footer /> */}
    </div>
  );
}

export default GolferLayout;