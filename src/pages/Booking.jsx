import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState("2025-02-07");
  const [selectedHole, setSelectedHole] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // ฟังก์ชันช่วยสร้างเวลาเป็นช่วง 15 นาที
  const generateTimeOptions = (startTime, endTime) => {
    const pad = (num) => num.toString().padStart(2, "0");
    const times = [];
    let [hour, minute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    while (hour < endHour || (hour === endHour && minute <= endMinute)) {
      times.push(`${pad(hour)}:${pad(minute)}`);
      minute += 15;
      if (minute >= 60) {
        hour++;
        minute -= 60;
      }
    }

    return times;
  };

  // เวลาไม่ว่างของแต่ละหลุม
  const unavailableTimes9 = ["13:45", "16:00", "17:30"];
  const unavailableTimes18 = ["07:15", "08:30", "11:45"];

  // กำหนดเวลาจองและเวลาไม่ว่างตามหลุมที่เลือก
  let timeOptions = [];
  let unavailableTimes = [];
  if (selectedHole === 9) {
    timeOptions = generateTimeOptions("12:15", "18:00");
    unavailableTimes = unavailableTimes9;
  } else if (selectedHole === 18) {
    timeOptions = generateTimeOptions("06:00", "12:00");
    unavailableTimes = unavailableTimes18;
  }

  return (
    <div className="min-h-screen bg-white pt-24 px-4 font-sans">
      <Navbar />

      <div className="max-w-md mx-auto space-y-8">
        {/* รูปสนามกอล์ฟ */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <img
            src="golf booking.jpg"
            alt="Course"
            className="w-full h-80 object-cover shadow"
          />
        </div>

        {/* เลือกวันที่ */}
        <div className="border rounded-xl shadow p-4 text-center">
          <p className="text-sm font-medium mb-1">วันที่จอง</p>
          <p className="text-sm font-light mb-3">
            วันที่ {new Date(selectedDate).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" })}
          </p>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-center"
          />
        </div>

        {/* เลือกจำนวนหลุม */}
        <div className="flex justify-around">
          {[9, 18].map((hole) => (
            <button
              key={hole}
              onClick={() => {
                setSelectedHole(hole);
                setSelectedTime(null); // รีเซ็ตเวลาเมื่อเปลี่ยนหลุม
              }}
              className={`w-24 h-12 border rounded-md text-sm transition-colors duration-200 ${
                selectedHole === hole ? "bg-black text-white" : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {hole} หลุม
            </button>
          ))}
        </div>

        {/* เลือกเวลา */}
        {selectedHole && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2 text-center">เลือกเวลา</p>
            <div className="grid grid-cols-3 gap-2">
              {timeOptions.map((time) => {
                const isUnavailable = unavailableTimes.includes(time);
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    disabled={isUnavailable}
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-md px-2 py-2 text-xs font-medium shadow transition-colors duration-200
                      ${
                        isUnavailable
                          ? "bg-red-500 text-white cursor-not-allowed"
                          : isSelected
                          ? "bg-blue-500 text-white"
                          : "bg-green-700 text-white hover:bg-green-800"
                      }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ตารางราคา */}
        <div className="border rounded-xl p-4 shadow text-center">
          <h2 className="font-medium text-base mb-2">อัตราการให้บริการ Eden Golf Club</h2>
          <p className="text-sm">
            วันธรรมดา <br />
            <strong>2,200 บาท</strong> ต่อท่าน
          </p>
          <p className="text-sm mt-3">
            วันหยุด/วันหยุดนักขัตฤกษ์ <br />
            <strong>4,000 บาท</strong> ต่อท่าน
          </p>
        </div>

        {/* ปุ่มย้อนกลับ และ จองต่อ */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => window.history.back()}
            className="bg-neutral-800 text-white rounded-[10px] w-24 h-9 shadow-md hover:bg-neutral-900 transition-colors"
          >
            ย้อนกลับ
          </button>
          <button
            disabled={!selectedHole || !selectedTime}
            className={`w-24 h-9 rounded-[10px] shadow-md text-white ${
              selectedHole && selectedTime ? "bg-neutral-800 hover:bg-neutral-900" : "bg-gray-400 cursor-not-allowed"
            } transition-colors`}
            onClick={() => {
              // ตัวอย่างการกดปุ่มจอง — คุณสามารถเพิ่ม logic ส่งข้อมูลได้ตรงนี้
              alert(
                `จองสนาม ${selectedHole} หลุม วันที่ ${selectedDate} เวลา ${selectedTime}`
              );
            }}
          >
            จองต่อ
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-600 text-white text-[10px] font-light py-6 px-6">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex justify-between">
            <div>
              <div className="font-medium">เวลาทำการ</div>
              <div>เปิด-ปิด</div>
              <div>6:00 - 18.00 น.</div>
              <div>วันจันทร์ - วันอาทิตย์</div>
            </div>
            <div>
              <div className="font-medium">ติดต่อ</div>
              <div>อีเมล edengolfculb@gmail.com</div>
              <div>โทร 081-000-0000</div>
            </div>
          </div>
          <p className="text-center text-neutral-400 text-xs">
            Design with love © The Eden Golf Club 2020. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
