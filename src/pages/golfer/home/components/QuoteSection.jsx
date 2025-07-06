// src/pages/golfer/home/components/QuoteSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-center mb-12 px-4"
    >
      <h3 className="text-sm uppercase tracking-wider text-gray-600">
        Experience the Perfect Blend
      </h3>
      <p className="italic text-lg mt-1 text-gray-900 font-medium">
        Swing, Savor, and Unwind
      </p>
    </motion.div>
  );
}