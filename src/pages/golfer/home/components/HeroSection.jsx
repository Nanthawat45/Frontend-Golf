// src/pages/golfer/home/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * HeroSection Component:
 * ส่วนหัวของหน้าแรก (Home) ที่แสดงรูปภาพพื้นหลังขนาดใหญ่เต็มขอบ
 * พร้อมปุ่ม "จองออกรอบ" อยู่มุมขวาล่าง
 */
export default function HeroSection() {
  return (
    // Section หลักของ Hero Section:
    // - w-full: ทำให้ Section กินความกว้างเต็ม 100% ของ Parent
    // - h-[...]px: กำหนดความสูงของ Section สำหรับขนาดหน้าจอต่างๆ
    // - bg-cover bg-center bg-no-repeat: จัดการรูปภาพพื้นหลังให้เต็มพื้นที่และอยู่กึ่งกลางโดยไม่ซ้ำ
    // - relative: จำเป็นสำหรับการจัดวางปุ่มภายใน
    <section
      className="
        relative w-full h-[400px] sm:h-[500px] md:h-[600px]
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url('/HomeHeroSection1.jpg')" }}
    >
      {/*
        Container สำหรับปุ่ม "จองออกรอบ":
        - absolute inset-0: ทำให้ Div นี้ครอบคลุมพื้นที่ Hero Section ทั้งหมด
        - flex items-end justify-end: จัดปุ่มไปที่มุมล่างขวาของ Div นี้
        - p-6 sm:p-12: Padding รอบปุ่ม
      */}
      <div className="absolute inset-0 flex items-end justify-end p-6 sm:p-12">
        <Link to="/golfer/booking">
          {/*
            ปุ่ม "จองออกรอบ":
            - bg-transparent border-2 border-white: พื้นหลังโปร่งใส ขอบสีขาว
            - text-white font-bold: สีข้อความและน้ำหนักฟอนต์
            - py-3 px-8 rounded-full: Padding และขอบโค้งมนแบบเต็มวงรี
            - shadow-lg: เพิ่มเงา
            - hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out: สไตล์เมื่อ hover
            - text-lg: ขนาดข้อความ
          */}
          <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out text-lg">
            จองออกรอบ
          </button>
        </Link>
      </div>
    </section>
  );
}