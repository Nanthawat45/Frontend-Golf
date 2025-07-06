// src/pages/golfer/home/components/Navbar.jsx
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // ใช้ HiOutlineMenuAlt3
import { FaTimes } from "react-icons/fa"; // ยังคงใช้ FaTimes สำหรับปุ่มปิดเมนู

import { Link } from "react-router-dom"; // ต้องมี Link ถ้าใช้ Link component

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center relative min-h-[100px]">

      {/* Logo - อยู่ตรงกลาง และติดขอบด้านบน */}
      <Link
        to="/"
        className="absolute top-0 left-1/2 transform -translate-x-1/2" // โลโก้ติดขอบบน (top-0) และอยู่ตรงกลางแนวนอน
      >
        <img
          src="/logo-project.jpeg" // ตรวจสอบว่าไฟล์ /logo-project.jpeg มีอยู่ในโฟลเดอร์ public/
          alt="Logo"
          className="w-48 h-auto object-contain" // ปรับความกว้างให้ใหญ่ขึ้นและรักษาสัดส่วน
        />
      </Link>

      {/* Hamburger Icon (แสดงเฉพาะใน Mobile) */}
      <button
        // เปลี่ยน text-3xl เป็น text-4xl หรือ text-5xl เพื่อให้ใหญ่ขึ้น
        className="text-gray-800 text-4xl md:hidden absolute right-4 top-4" // <<< ปรับตรงนี้
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <HiOutlineMenuAlt3 />}
      </button>

      {/* Mobile Menu Overlay (แสดงเมื่อ menuOpen เป็น true) */}
      {menuOpen && (
        <nav className="fixed top-0 left-0 w-full h-full bg-white z-40 p-4">
          <div className="flex justify-end mb-4">
            <button
              className="text-gray-800 text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="space-y-4 text-gray-800 font-medium text-base text-center">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>หน้าแรก</Link></li>
            <li><Link to="/golfer/profile" onClick={() => setMenuOpen(false)}>โปรไฟล์</Link></li>
            <li><Link to="/register" onClick={() => setMenuOpen(false)}>สมัครสมาชิก</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>เข้าสู่ระบบ</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}