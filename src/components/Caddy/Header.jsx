import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import logo from "../../assets/logo.jpg";

const Header = ({ currentDate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isStatusPage = location.pathname === "/caddy";
  const isReportPage = location.pathname === "/caddy/report";

  return (
    <div className="space-y-4 relative">
      {/* แถบเมนูด้านซ้ายบน */}
      <div className="flex justify-between items-start">
        {/* เมนูฝั่งซ้าย */}
        <div className="flex space-x-2">
          <button
            onClick={() => navigate("/caddy")}
            className={`px-3 py-1.5 rounded-full font-semibold border transition text-sm ${
              isStatusPage
                ? "bg-gray-700 text-white border-gray-700"
                : "border-gray-400 text-gray-700 hover:bg-gray-100"
            }`}
          >
            สถานะ
          </button>
          <button
            onClick={() => navigate("/caddy/report")}
            className={`px-3 py-1.5 rounded-full font-semibold border transition text-sm ${
              isReportPage
                ? "bg-gray-700 text-white border-gray-700"
                : "border-gray-400 text-gray-700 hover:bg-gray-100"
            }`}
          >
            แจ้งปัญหา
          </button>
        </div>

        {/* ปุ่มออกจากระบบฝั่งขวา */}
        <button className="bg-[#324441] text-white px-4 py-1 rounded-full text-sm">
          ออกจากระบบ
        </button>
      </div>

      {/* โลโก้และชื่อสนาม */}
      <div className="flex flex-col items-center text-center space-y-1">
        <img src={logo} alt="Logo" className="h-20 w-auto" />
        <span className="font-bold text-lg sm:text-xl select-none">
          The Eden Golf Club
        </span>
      </div>

      {/* วันที่ */}
      <div className="flex justify-center">
        <div className="bg-[#324441] text-white rounded-full px-4 py-1 text-sm">
          {currentDate}
        </div>
      </div>

      {/* ปุ่มเมนูมือถือ (ซ่อนไว้ในเวอร์ชันนี้ แต่สามารถเพิ่มได้หากต้องการ responsive mobile) */}
    </div>
  );
};

export default Header;
