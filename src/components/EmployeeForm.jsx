import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EmployeeForm({ onCancel, onAddEmployee }) {
  const [formData, setFormData] = useState({
    position: "",
    employeeCode: "",
    status: "",
    prefix: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach(field => {
      if (!formData[field]) {
        newErrors[field] = "โปรดกรอกข้อมูล";
      }
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("เพิ่มพนักงาน:", formData);
      onAddEmployee(formData);   // ✅ เพิ่มพนักงานจริงๆ
      setFormData({
        position: "",
        employeeCode: "",
        status: "",
        prefix: "",
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center flex-col md:flex-row gap-8">
      <div className="flex justify-center">
        <div className="bg-white p-4 rounded shadow-md w-52 h-fit">
          <img src="/Images/Profile.jpg" className="rounded-full w-40 h-40 mx-auto object-cover" />
          <Button className="w-full mt-4">อัปโหลดรูปภาพ</Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md space-y-4">
        <h2 className="text-lg text-center font-semibold text-gray-700 border-b pb-1">ข้อมูลตำแหน่งงาน</h2>

        <div>
          <Label>ตำแหน่งงาน</Label>
          <select
            value={formData.position}
            onChange={(e) => handleChange("position", e.target.value)}
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          >
            <option value="">-- กรุณาเลือกตำแหน่งงาน --</option>
            <option value="General">general</option>
            <option value="Admin">admin</option>
            <option value="Caddie">caddie</option>
            <option value="Starter">starter</option>
          </select>
          {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
        </div>

        <div>
          <Label>รหัสพนักงาน</Label>
          <Input
            value={formData.employeeCode}
            onChange={(e) => handleChange("employeeCode", e.target.value)}
            placeholder="กรุณากรอกรหัสพนักงาน"
          />
          {errors.employeeCode && <p className="text-red-500 text-sm mt-1">{errors.employeeCode}</p>}
        </div>

        <div>
          <Label>สถานะ</Label>
          <select
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          >
            <option value="">-- กรุณาเลือกสถานะ --</option>
            <option value="ทำงานอยู่">ทำงานอยู่</option>
            <option value="ออกแล้ว">ออกแล้ว</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
        </div>

        <h2 className="text-lg text-center font-semibold text-gray-700 border-b pb-1">ข้อมูลส่วนตัว</h2>

        <div>
          <Label>คำนำหน้า</Label>
          <select
            value={formData.prefix}
            onChange={(e) => handleChange("prefix", e.target.value)}
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          >
            <option value="">-- กรุณาเลือกคำนำหน้า --</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
          {errors.prefix && <p className="text-red-500 text-sm mt-1">{errors.prefix}</p>}
        </div>

        <div>
          <Label>ชื่อ - นามสกุล</Label>
          <Input
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="กรุณากรอกชื่อ - นามสกุล"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label>เบอร์โทรศัพท์</Label>
          <Input
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="กรุณากรอกเบอร์โทรศัพท์"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <Label>อีเมล</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="กรุณากรอกอีเมล"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label>รหัสผ่าน</Label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="กรุณากรอกรหัสผ่าน"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div>
          <Label>ยืนยันรหัสผ่าน</Label>
          <Input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            placeholder="กรุณายืนยันรหัสผ่าน"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        <div className="flex justify-center gap-2">
          <Button type="button" onClick={onCancel}>ยกเลิก</Button>
          <Button type="submit">เพิ่มพนักงาน</Button>
        </div>
      </form>
    </div>
  );
}

