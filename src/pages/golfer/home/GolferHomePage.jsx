// src/pages/golfer/home/GolferHomePage.jsx
import React from "react";
import HeroSection from "./components/HeroSection";
import TimeSlotsDisplay from "./components/TimeSlotsDisplay";
import QuoteSection from "./components/QuoteSection";
import ImageGallery from "./components/ImageGallery";
import CourseDetailsSection from "./components/CourseDetailsSection";
import VisitUsSection from "./components/VisitUsSection";
import DiamondDivider from "./components/DiamondDivider"; 

import golfData from '../../../data/golfData.json'; // นำเข้าข้อมูลจากไฟล์ JSON
const { timeSlots, reservedTimes } = golfData;

export default function GolferHomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Diamond Divider - ก่อน TimeSlotsDisplay */}
      <DiamondDivider /> {/* นี่คือตำแหน่งที่ 1 */}

      {/* Time Slots Display */}
      <h2 className="text-2xl font-bold text-gray-800 text-center my-8">
        ไทม์ไลน์เวลาวันนี้
      </h2> {/* เพิ่มหัวข้อ "ไทม์ไลน์เวลาวันนี้" เหมือนในรูป */}
      <TimeSlotsDisplay timeSlots={timeSlots} reservedTimes={reservedTimes} />

      {/* Diamond Divider - หลัง TimeSlotsDisplay */}
      <DiamondDivider /> {/* นี่คือตำแหน่งที่ 2 */}

      {/* Top gallery */}
      <ImageGallery
        images={[
          { src: "/slide-1.avif", alt: "golf", className: "rotate-[-3deg]" },
          { src: "/slide-2.jpg", alt: "course", className: "rotate-[2deg] mx-auto w-11/12" },
        ]}
      />

      {/* Quote */}
      <QuoteSection />

      {/* Bottom gallery */}
      <ImageGallery
        images={[
          { src: "/slide-3.avif", alt: "golfer", className: "rotate-[-2deg] mx-auto w-11/12" },
          { src: "/slide-4.avif", alt: "relax", className: "rotate-[3deg]" },
        ]}
      />

      {/* Golf course details with slider */}
      <CourseDetailsSection />

      {/* Visit section with embedded Google Map */}
      <VisitUsSection />
    </div>
  );
}