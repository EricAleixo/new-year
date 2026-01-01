"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export const ElionaisMessage = () => {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-emerald-950 via-teal-900 to-cyan-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Card único */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 text-center"
      >
        {/* Ícones */}
        <motion.div
          className="flex justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles className="w-8 h-8 text-emerald-300" />
          <Heart className="w-10 h-10 text-cyan-400 fill-cyan-400" />
          <Sparkles className="w-8 h-8 text-emerald-300" />
        </motion.div>

        {/* Feliz 2026 — ANIMADO */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-emerald-200 via-cyan-300 to-teal-300"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: [1.1, 0.95, 1],
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          Feliz 2026!!!
        </motion.h1>

        {/* Texto principal */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-emerald-50 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Opa, <strong>Elionais</strong>! Feliz ano novo, cara!
          <br />
          <br />
          Muito obrigado por todos os momentos que você proporcionou à sala,
          e a mim também. Você é uma pessoa que é amigo de todo mundo,
          e isso é um dom incrível.
        </motion.p>

        {/* Último parágrafo — ANIMADO */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
        >
          Desejo um feliz ano novo a você, com paz e felicidades sempre.
        </motion.p>

        {/* Assinatura */}
        <motion.p
          className="mt-10 text-emerald-200 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Com carinho, Eric 💙
        </motion.p>
      </motion.div>
    </main>
  );
};
