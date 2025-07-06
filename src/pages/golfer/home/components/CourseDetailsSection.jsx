// src/pages/golfer/home/components/CourseDetailsSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function CourseDetailsSection() {
  return (
    <div className="max-w-4xl mx-auto mb-20 px-4">
      <details className="border rounded-xl p-4 shadow-md cursor-pointer">
        <summary className="font-semibold text-lg text-center">
          สนามกอล์ฟ
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed text-center">
          The Eden Golf Club เป็นหนึ่งในสนามกอล์ฟที่เก่าแก่และโดดเด่นที่สุดของนครชัยศรี
          <br />
          สนามกอล์ฟ 18 หลุม พาร์ 72 แห่งนี้ มาพร้อมกับเลย์เอาต์ที่ท้าทาย ท่ามกลางความงดงามของธรรมชาติ
        </p>

        <div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.5}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              768: { slidesPerView: 3.5 },
            }}
          >
            {Array.from({ length: 18 }, (_, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center">
                  <img
                    src={`/Hole${i + 1}.avif`}
                    alt={`PAR ${i + 1}`}
                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-2xl shadow mb-2"
                  />
                  <span className="text-sm font-medium">PAR {i + 1}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8">
          <img
            src="/map-golf.jpg"
            alt="full golf course"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </details>
    </div>
  );
}