// src/pages/golfer/home/components/VisitUsSection.jsx
import React from 'react';

export default function VisitUsSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 mb-20">
      <h2 className="text-center text-2xl font-semibold mb-4">Visit Us</h2>
      <p className="text-center mb-6 text-gray-700">
        Eden Golf Club ตั้งอยู่ใกล้มหาวิทยาลัยราชภัฏนครปฐม
        <br />
        50 ถนนเพชรเกษม ตำบลนครปฐม อำเภอเมือง จังหวัดนครปฐม 73000
      </p>
      <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Nakhon Pathom Rajabhat University Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.344727973501!2d100.0653118153113!3d13.819183490356382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a2f041a7ee39%3A0x456bd50b23e87c0f!2sNakhon%20Pathom%20Rajabhat%20University!5e0!3m2!1sen!2sth!4v1687628393531!5m2!1sen!2sth"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}