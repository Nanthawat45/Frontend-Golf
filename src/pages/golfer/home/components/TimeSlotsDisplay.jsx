// src/pages/golfer/home/components/TimeSlotsDisplay.jsx
import React from 'react';

export default function TimeSlotsDisplay({ timeSlots, reservedTimes }) {
  // สร้าง Set ของเวลาที่ถูกจอง เพื่อให้การค้นหาทำได้เร็วขึ้น O(1)
  // จาก [{id:1, time:"06:00"}, {id:2, time:"06:45"}] จะกลายเป็น Set {"06:00", "06:45"}
  const reservedTimeSet = new Set(reservedTimes.map(item => item.time));

  return (
    <div className="text-center mt-10">
      <div className="max-w-md mx-auto grid grid-cols-5 gap-2 px-4">
        {timeSlots.map(slot => { // เปลี่ยนชื่อ parameter จาก time เป็น slot เพื่อความชัดเจนว่านี่คือ object
          const isReserved = reservedTimeSet.has(slot.time); // <<< แก้ไขการตรวจสอบ
          return (
            <div
              key={slot.id} // <<< แก้ไขตรงนี้: ใช้ slot.id เป็น key
              className={`px-3 py-1 text-sm rounded-full text-white ${
                isReserved ? "bg-red-500" : "bg-green-600"
              }`}
            >
              {slot.time} {/* <<< แก้ไขตรงนี้: แสดงผลแค่ slot.time */}
            </div>
          );
        })}
      </div>
    </div>
  );
}