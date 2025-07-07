// src/pages/auth/components/AuthHeader.jsx

import React from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi"; // ใช้ไอคอนจุดสามจุด

/**
 * AuthHeader Component:
 * แสดงหัวข้อหลักของหน้า (เช่น "Create Your Account") และปุ่มไอคอนเพิ่มเติม
 * @param {string} title - ข้อความหัวข้อที่จะแสดง
 */
export default function AuthHeader({ title }) {
  return (
    // Container สำหรับส่วนหัว
    // w-full max-w-md: กำหนดความกว้างสูงสุด
    // flex justify-between items-center: จัดหัวข้อและปุ่มให้ชิดซ้ายและขวา
    // mb-8: Margin ด้านล่าง
    <div className="w-full max-w-md flex justify-between items-center px-4 sm:px-0 mb-8">
      <h1 className="text-white text-3xl sm:text-4xl font-bold">{title}</h1>
      <button className="text-white text-3xl focus:outline-none" aria-label="More options">
        <HiOutlineDotsHorizontal />
      </button>
    </div>
  );
}