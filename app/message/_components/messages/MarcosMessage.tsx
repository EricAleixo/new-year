"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export const MarcosMessage = () => {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-sky-950 via-blue-900 to-indigo-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10"
      >
        {/* Título animado */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-linear-to-r from-sky-200 via-blue-300 to-indigo-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Feliz 2026!!!! ✨
        </motion.h1>

        {/* Texto inicial */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-sky-50 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Olá, <strong>Marcos</strong>!!!
          <br />
          <br />
          Tudo bem? Passando aqui pra te desejar um ótimo ano novo. Que Deus
          abençoe você e sua linda família, dá um oi pra sua filha por mim.
        </motion.p>

        {/* Espaço para foto (posição intermediária) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative w-full h-200 rounded-2xl overflow-hidden mb-6 border border-white/20"
        >
          {/* Se quiser usar imagem, basta trocar o src */}
          <img
            src="/images/marcos-renan.png"
            alt="Foto do Marcos"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Texto de agradecimento */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-sky-50 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Gostaria de agradecer por ter sido uma das pessoas a tornar meu 2025
          mais leve. Tenha certeza que te levarei em meu coração.
        </motion.p>

        {/* Fechamento emocional */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-200 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Com carinho, irmão Eric 💙
        </motion.p>

        {/* Mensagem final — ANIMADA */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-200 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Que seja um ano de conquistas, glória e muito aprendizado contínuo.
          <br />
          Você não vai começar do zero, vai retornar de onde parou.
        </motion.p>

        {/* Ícones finais */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <Sparkles className="w-6 h-6 text-sky-300" />
          <Heart className="w-7 h-7 text-blue-400 fill-blue-400" />
          <Sparkles className="w-6 h-6 text-sky-300" />
        </motion.div>
      </motion.div>
    </main>
  );
};
