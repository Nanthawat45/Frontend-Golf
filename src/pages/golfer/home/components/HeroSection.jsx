// src/pages/golfer/home/components/HeroSection.jsx
import React from 'react';
// *** สำคัญ: ต้อง import Link จาก react-router-dom ***
import { Link } from 'react-router-dom'; // <<< เพิ่มบรรทัดนี้

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/main-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}

      <div className="relative z-10 flex items-end justify-end h-full pb-12 pr-6 sm:pr-12">
        {/* ห่อปุ่มด้วย Link component */}
        <Link to="/golfer/booking"> {/* <<< แก้ไขตรงนี้: กำหนด path ไปยังหน้า Booking ของคุณ */}
          <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out text-lg">
            จองออกรอบ
          </button>
        </Link>
      </div>
    </section>
  );
}