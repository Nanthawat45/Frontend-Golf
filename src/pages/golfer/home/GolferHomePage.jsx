// src/pages/golfer/home/GolferHomePage.jsx

import React from "react";
// ไม่จำเป็นต้อง import Link ที่นี่ เพราะไม่ได้ใช้โดยตรงใน GolferHomePage นี้
// import { Link } from "react-router-dom";

// Components ที่ใช้ในหน้า GolferHomePage
import HeroSection from "./components/HeroSection";
import TimeSlotsDisplay from "./components/TimeSlotsDisplay";
import QuoteSection from "./components/QuoteSection";
import ImageGallery from "./components/ImageGallery";
import CourseDetailsSection from "./components/CourseDetailsSection";
import VisitUsSection from "./components/VisitUsSection";
import DiamondDivider from "./components/DiamondDivider";

// ข้อมูลจำลองสำหรับ Time Slots (สามารถเปลี่ยนไปใช้ API ได้ในอนาคต)
import golfData from '../../../data/golfData.json';
const { timeSlots, reservedTimes } = golfData;

/**
 * GolferHomePage Component:
 * เป็นหน้าหลักสำหรับผู้ใช้งานประเภท Golfer
 * แสดงส่วนต่างๆ เช่น Hero Section, ตารางเวลา, แกลเลอรีรูปภาพ และรายละเอียดสนามกอล์ฟ
 */
export default function GolferHomePage() {
  return (
    // Div หลักที่ครอบเนื้อหาทั้งหมดของหน้า GolferHomePage
    // ไม่ต้องมี padding-top หรือ margin-top ที่นี่ เพราะ GolferLayout จัดการแล้ว
    <div className="flex flex-col"> {/* ใช้ flex-col เพื่อจัดเรียง Component ย่อยๆ ในแนวตั้ง */}
      {/*
        Hero Section:
        แสดงรูปภาพพื้นหลังขนาดใหญ่พร้อมปุ่มจอง
        โดยตอนนี้จะอยู่ติดกับ Navbar มากขึ้น เพราะ GolferLayout ไม่มี padding-top แล้ว
      */}
      <HeroSection />

      {/* Diamond Divider - คั่นส่วนบนของ TimeSlotsDisplay */}
      <DiamondDivider />

      {/* Time Slots Display Section */}
      <section className="py-8 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          ไทม์ไลน์เวลาวันนี้
        </h2>
        {/*
          TimeSlotsDisplay Component:
          แสดงตารางเวลาและสถานะการจอง
        */}
        <TimeSlotsDisplay timeSlots={timeSlots} reservedTimes={reservedTimes} />
      </section>

      {/* Diamond Divider - คั่นส่วนล่างของ TimeSlotsDisplay */}
      <DiamondDivider />

      {/* Image Gallery Section (Top) */}
      <section className="py-8 bg-gray-50">
        <ImageGallery
          images={[
            { src: "/slide-1.avif", alt: "golf", className: "rotate-[-3deg]" },
            { src: "/slide-2.jpg", alt: "course", className: "rotate-[2deg] mx-auto w-11/12" },
          ]}
        />
      </section>

      {/* Quote Section */}
      <QuoteSection />

      {/* Image Gallery Section (Bottom) */}
      <section className="py-8 bg-gray-50">
        <ImageGallery
          images={[
            { src: "/slide-3.avif", alt: "golfer", className: "rotate-[-2deg] mx-auto w-11/12" },
            { src: "/slide-4.avif", alt: "relax", className: "rotate-[3deg]" },
          ]}
        />
      </section>

      {/* Golf Course Details Section */}
      <CourseDetailsSection />

      {/* Visit Us Section (แผนที่และข้อมูลติดต่อ) */}
      <VisitUsSection />
    </div>
  );
}