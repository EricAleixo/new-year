"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import TreasureChest from "./TreasureChest";
import { StarBackground } from "./StarBackground";

type ChestConfig = {
  name: string;
  color: "gold" | "silver" | "purple";
  password: string;
};

export default function NewYearPage() {
  const chests: ChestConfig[] = [
  { name: "Marcos", color: "gold", password: "voltaratomarbomba" },
  { name: "Emily", color: "silver", password: "ressucitado" },
  { name: "Gustavo", color: "purple", password: "obaacaiteria" },
  { name: "Júlia", color: "gold", password: "01/12/2007" },
  { name: "Emmaely", color: "silver", password: "floquinho" },
  { name: "Jamilly", color: "purple", password: "aprovadaenem" },
  { name: "Valter", color: "gold", password: "atevoinhafaz" },
  { name: "Ayrton", color: "silver", password: "rockstar" },
  { name: "Ittalo", color: "purple", password: "flamengoo" },
  { name: "Anael", color: "gold", password: "humanamenteimpossivel" },
  { name: "Renan", color: "purple", password: "tropadocorinthians" },
  { name: "Bea", color: "gold", password: "palmeirasnaotemmundial" },
  { name: "João Victor", color: "silver", password: "trompeteiro" },
  { name: "Matheus", color: "purple", password: "vortix" },
  { name: "Thiago", color: "gold", password: "jornalismocampina" },
  { name: "Léo", color: "silver", password: "printevariavel" },
  { name: "Yuri", color: "purple", password: "garotodeprograma" },
  { name: "Emmanuel", color: "gold", password: "capivara" },
  { name: "Klécio", color: "silver", password: "perfect" },
  { name: "Jordan", color: "purple", password: "flamenguista" },
  { name: "Gabriel", color: "gold", password: "hollowknight" },
  { name: "Elionais", color: "silver", password: "vereador" },
];



  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-01-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsNewYear(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen px-4 py-20">
      <StarBackground />

      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-300 to-amber-200 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {isNewYear ? "✨ Feliz 2026! ✨" : "Contagem Regressiva para 2026"}
        </motion.h1>

        <AnimatePresence>
          {!isNewYear && (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {[
                { label: "Dias", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="text-4xl font-bold text-amber-300">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-blue-200 mt-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {isNewYear && (
            <motion.p
              className="mt-8 text-xl text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              🎉 Os baús abaixo estão prontos para serem abertos 🎁
            </motion.p>
          )}
        </AnimatePresence>
      </section>

      {/* BAÚS */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-26">
          {chests.map((chest) => (
            <motion.div
              key={chest.name}
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <TreasureChest
                friendName={chest.name}
                color={chest.color}
                password={chest.password}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
