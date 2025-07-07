// src/pages/auth/components/AuthFooter.jsx

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * AuthFooter Component:
 * แสดงข้อความและลิงก์สำหรับผู้ใช้ที่ต้องการเข้าสู่ระบบ
 */
export default function AuthFooter() {
  return (
    // Container สำหรับส่วนท้าย
    // text-white text-sm: สีและขนาดข้อความ
    // text-center: จัดกลาง
    <div className="text-white text-sm text-center">
      Don't have account?{' '}
      <Link to="/login" className="font-bold hover:underline">
        Sign In
      </Link>
    </div>
  );
}