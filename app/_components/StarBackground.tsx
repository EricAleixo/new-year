"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  opacity: number;
};

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 2000,
      y: Math.random() * 1200,
      opacity: Math.random(),
    }));

    setStars(generatedStars);
  }, []);

  // ⛔ Evita render no SSR
  if (stars.length === 0) return null;

  return (
    <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#05010f] via-[#0b0430] to-black">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute h-0.5 w-0.5 rounded-full bg-white/80"
          style={{
            transform: `translate(${star.x}px, ${star.y}px)`,
          }}
          initial={{ opacity: star.opacity }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
