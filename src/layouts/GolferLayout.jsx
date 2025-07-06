// src/layouts/GolferLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/golfer/components/Navbar'; // Path นี้ควรถูกต้อง

function GolferLayout() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar /> {/* Navbar ถูกแสดงที่นี่ */}
      <main className="pt-[120px]"> {/* ปรับค่า pt เพื่อหลบ Navbar และโลโก้ */}
        <Outlet /> {/* ใช้ Outlet เพื่อแสดง Component ลูก (เช่น GolferHomePage) */}
      </main>
      {/* ถ้ามี Footer ของ Golfer ก็ใส่ตรงนี้ */}
    </div>
  );
}

export default GolferLayout;