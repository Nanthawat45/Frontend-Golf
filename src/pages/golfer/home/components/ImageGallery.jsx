// src/pages/golfer/home/components/ImageGallery.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ImageGallery({ images }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-4 max-w-md mx-auto my-12 px-4"
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`w-full aspect-[3/2] object-cover transform transition-transform duration-500 hover:-translate-y-2 hover:scale-105 ${img.className}`}
        />
      ))}
    </motion.div>
  );
}