// src/pages/auth/RegisterPage.jsx

import React from 'react';
import AuthHeader from './components/AuthHeader';
import RegisterForm from './components/RegisterForm';
import AuthFooter from './components/AuthFooter';

/**
 * RegisterPage Component:
 * หน้าสำหรับให้ผู้ใช้ลงทะเบียนสร้างบัญชีใหม่
 * ประกอบด้วยส่วนหัว, ฟอร์มลงทะเบียน, และส่วนท้ายสำหรับลิงก์เข้าสู่ระบบ
 */
export default function RegisterPage() {
  return (
    // Container หลักของหน้า Register
    // bg-gradient-to-br from-[#FF6B6B] to-[#FFD166]: สร้าง Gradient Background ตามรูป
    // min-h-screen: ทำให้สูงเต็มหน้าจอ
    // flex flex-col items-center justify-center: จัดเนื้อหาให้อยู่ตรงกลางทั้งแนวตั้งและแนวนอน
    <div className="bg-gradient-to-br from-[#7B004F] via-[#B2006F] to-[#FC4445] min-h-screen flex flex-col items-center justify-center p-4"> {/* ปรับสี gradient ให้เข้ากับรูป */}
      {/* AuthHeader สำหรับหัวข้อ "Create Your Account" */}
      <AuthHeader title="Create Your Account" />

      {/* RegisterForm สำหรับฟอร์มกรอกข้อมูล */}
      <RegisterForm />

      {/* AuthFooter สำหรับ "Don't have account? Sign In" */}
      <AuthFooter />
    </div>
  );
}