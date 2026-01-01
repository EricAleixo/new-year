"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export const RenanMessage = () => {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-red-950 via-rose-900 to-red-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10"
      >
        {/* Título animado */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-linear-to-r from-red-200 via-rose-300 to-pink-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Renan!!! Feliz 2026 cara!!! ✨
        </motion.h1>

        {/* Texto inicial */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-red-50 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Que Deus te cubra com infinitas bençãos, irmão.
          <br />
          <br />
          O terço que te dei é um símbolo — use sempre, até a próxima vez que
          nos encontrarmos.
        </motion.p>

        {/* Espaço para foto (NÃO ALTERADO) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative w-full h-200 rounded-2xl overflow-hidden mb-6 border border-white/20"
        >
          <img
            src="/images/marcos-renan.png"
            alt="Foto do Renan"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Texto complementar */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-red-50 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Deseje um ótimo ano novo pra <strong>Anne</strong> também.
        </motion.p>

        {/* Fechamento */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold text-rose-200 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          E para os dois:
        </motion.p>

        {/* Mensagem final — ANIMADA */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-bold text-pink-200 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Feliz 2026!!! Que seja um ano de glória, conquistas, aprendizado e
          novas amizades!
        </motion.p>

        {/* Ícones finais */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <Sparkles className="w-6 h-6 text-rose-300" />
          <Heart className="w-7 h-7 text-red-400 fill-red-400" />
          <Sparkles className="w-6 h-6 text-rose-300" />
        </motion.div>
      </motion.div>
    </main>
  );
};
