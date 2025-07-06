// src/pages/golfer/home/components/DiamondDivider.jsx
import React from 'react';

export default function DiamondDivider() {
  return (
    <div className="relative flex items-center w-full max-w-xl mx-auto my-12"> {/* ปรับ my-12 (margin-y) ตามต้องการ */}
      {/* เพชรด้านซ้าย */}
      <div className="flex-shrink-0 mr-4"> {/* mr-4 เพื่อเว้นระยะจากเส้น */}
        <div className="w-4 h-4 bg-gray-800 transform rotate-45"></div> {/* เปลี่ยน bg-gray-400 เป็น bg-gray-800 (สีดำ) */}
      </div>

      {/* เส้นตรงกลาง */}
      <div className="flex-grow border-t-2 border-gray-800"></div> {/* เปลี่ยน border-gray-400 เป็น border-gray-800 (สีดำ) */}

      {/* เพชรด้านขวา */}
      <div className="flex-shrink-0 ml-4"> {/* ml-4 เพื่อเว้นระยะจากเส้น */}
        <div className="w-4 h-4 bg-gray-800 transform rotate-45"></div> {/* เปลี่ยน bg-gray-400 เป็น bg-gray-800 (สีดำ) */}
      </div>
    </div>
  );
}