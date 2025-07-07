// src/pages/auth/components/RegisterForm.jsx

import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa'; // ไอคอนสำหรับตาเปิด/ปิด และเครื่องหมายถูก

/**
 * RegisterForm Component:
 * แสดงฟอร์มสำหรับให้ผู้ใช้กรอกข้อมูลเพื่อลงทะเบียน
 */
export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ตัวอย่าง state สำหรับ form inputs (คุณสามารถเชื่อมต่อกับ form libraries เช่น Formik/React Hook Form ได้ในอนาคต)
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Form Submitted:', formData);
    // ที่นี่คุณจะเรียก API สำหรับการลงทะเบียน
  };

  return (
    // Container หลักของฟอร์ม
    // bg-white rounded-3xl shadow-lg: พื้นหลังสีขาว, ขอบโค้งมน, เงา
    // p-8 sm:p-10 md:p-12: Padding รอบด้าน
    // w-full max-w-md: กำหนดความกว้างสูงสุด
    // mb-8: Margin ด้านล่าง
    <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 md:p-12 w-full max-w-md mb-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Input */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
          <div className="relative">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Smith"
              className="input input-bordered w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            {/* ไอคอนเครื่องหมายถูก (แสดงเมื่อมีข้อมูล) */}
            {formData.fullName && (
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FaCheckCircle className="text-green-500" />
              </span>
            )}
          </div>
        </div>

        {/* Phone or Gmail Input */}
        <div>
          <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-500 mb-1">Phone or Gmail</label>
          <div className="relative">
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Joydeo@gmail.com"
              className="input input-bordered w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            {/* ไอคอนเครื่องหมายถูก (แสดงเมื่อมีข้อมูล) */}
            {formData.emailOrPhone && (
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FaCheckCircle className="text-green-500" />
              </span>
            )}
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="input input-bordered w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-500 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="input input-bordered w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          // ใช้ DaisyUI btn class และปรับแต่งด้วย Tailwind เพื่อให้ได้ gradient background และ rounded-full ตามรูป
          className="btn w-full bg-gradient-to-br from-[#7B004F] via-[#B2006F] to-[#FC4445] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-[#FC4445] hover:to-[#B2006F] transition-all duration-300 ease-in-out text-lg"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}