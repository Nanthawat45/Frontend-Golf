import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import Header from "../../components/Caddy/Header";

const ProcessGolfPage = () => {
  const [step, setStep] = useState(1);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedDate, selectedTime } = location.state || {};

  const stepTexts = [
    "เริ่มออกรอบกอล์ฟ",
    "จบการเล่นกอล์ฟ",
    "เปลี่ยนแบตรถกอล์ฟสำเร็จ",
  ];

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // ส่งสถานะวันที่+เวลา กลับ BookingPage เพื่อแสดงติ๊กถูก
      navigate("/", {
        state: {
          completedSchedule: {
            date: selectedDate,
            time: selectedTime,
          },
        },
      });
    }
  };

  const handleCancelClick = () => {
    setShowCancelConfirm(true);
  };

  const handleConfirmCancel = () => {
    setShowCancelConfirm(false);
    navigate("/"); // กลับหน้า BookingPage
  };

  const handleCloseCancel = () => {
    setShowCancelConfirm(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-4 py-6 sm:px-8 sm:py-10">
      {/* Header */}
      <Header />

      {/* ปุ่มหลัก */}
      <div className="mt-4 flex justify-center">
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm sm:text-base">
          ออกรอบกอล์ฟ
        </button>
      </div>

      {/* Step Progress */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2 sm:gap-4">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${
                  step >= i ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
              {i < 3 && (
                <div
                  className={`w-8 sm:w-12 h-1 ${
                    step > i ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* กล่องเนื้อหา */}
      <div className="mt-6 flex flex-col items-center">
        <div className="bg-[#324441] text-white rounded-2xl w-full max-w-sm py-6 px-4 text-center">
          <p className="text-base sm:text-lg font-medium">
            {stepTexts[step - 1]}
          </p>
          <button
            className="mt-4 bg-black text-white text-xs sm:text-sm px-6 py-1 rounded-full hover:bg-gray-800"
            onClick={handleNextStep}
          >
            ยืนยัน
          </button>
        </div>
      </div>

      {/* ปุ่มยกเลิกล่างขวา */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleCancelClick}
          className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600"
        >
          ยกเลิก
        </button>
      </div>

      {/* Popup ยืนยันยกเลิก */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-3xl shadow-md text-center w-[80%] max-w-xs">
            <p className="text-lg font-semibold mb-4">คุณแน่ใจหรือไม่?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmCancel}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
              >
                ตกลง
              </button>
              <button
                onClick={handleCloseCancel}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessGolfPage;
