// src/pages/golfer/components/Navbar.jsx

import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * Navbar Component:
 * แถบนำทางด้านบนของหน้าเว็บไซต์สำหรับผู้ใช้งาน Golfer (เน้น Mobile First)
 * ประกอบด้วย Logo (ซ้ายบน) และ ปุ่ม Hamburger (ขวาบน) สำหรับเปิดเมนูแบบ Full-screen Overlay
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Header หลักของ Navbar:
    // - bg-white: กำหนดพื้นหลังสีขาวให้ Navbar (ตามรูปตัวอย่าง)
    // - w-full: *** สำคัญ: ทำให้ Header กินพื้นที่เต็มความกว้างของหน้าจอ ***
    // - py-2: Padding แนวตั้ง
    // - flex justify-between items-start: จัด Logo และ Hamburger icon ให้ชิดซ้าย-ขวา และชิดด้านบน
    // - relative min-h-[70px]: กำหนดความสูงขั้นต่ำ
    <header className="bg-white w-full py-2 flex justify-between items-start relative min-h-[70px]">

      {/* Container สำหรับเนื้อหา Navbar ที่ต้องการจำกัดความกว้างและมี padding ด้านข้าง */}
      {/* max-w-6xl mx-auto px-4: ย้ายคลาสเหล่านี้มาที่นี่ เพื่อควบคุม padding และความกว้างสูงสุดของเนื้อหาภายใน Navbar */}
      <div className="max-w-6xl mx-auto w-full flex justify-between items-start px-4"> {/* <<< การเปลี่ยนแปลงที่สำคัญ */}
        {/* Logo ที่ใหญ่และโดดเด่นพร้อมขอบโค้งมน (แสดงตลอด) */}
        <Link to="/" className="flex items-center pt-1">
          <img
            src="/eden Logo.png"
            alt="The eden golf club Logo"
            className="w-20 h-20 object-contain rounded-full"
          />
        </Link>

        {/* Hamburger Icon (แสดงตลอดสำหรับ Mobile First) */}
        <button
          className="text-gray-800 text-4xl z-30 mt-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <nav className="fixed top-0 left-0 w-full h-full bg-white z-40 p-4 overflow-auto">
          {/* ปุ่มปิด Mobile Menu */}
          <div className="flex justify-end mb-8">
            <button
              className="text-gray-800 text-3xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* รายการลิงก์ใน Mobile Menu */}
          <ul className="space-y-6 text-gray-800 font-medium text-xl text-center">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2">
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link to="/golfer/profile" onClick={() => setMenuOpen(false)} className="block py-2">
                โปรไฟล์
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setMenuOpen(false)} className="block py-2">
                สมัครสมาชิก
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-4 mx-auto max-w-xs rounded-full border border-gray-300 bg-white text-gray-800 font-medium text-lg hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                MEMBER LOG IN
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}