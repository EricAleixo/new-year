"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export const JordanMessage = () => {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-indigo-950 via-blue-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10"
      >
        {/* Título */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-200 via-indigo-300 to-purple-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Feliz ano novo, Jordan! ✨
        </motion.h1>

        {/* Texto 1 */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-slate-50 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Tô aqui pra agradecer pela sua amizade e companhia nesses últimos anos,
          Jordan. Nos aproximamos mais do segundo e terceiro ano, mas só tenho a
          agradecer por Deus ter colocado um cara tão gente boa como você. Que
          abençõe a sua vida, e tenha certeza que seu futuro é sinônimo de
          sucesso.
        </motion.p>

        {/* IMAGEM 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 border border-white/20"
        >
          <img
            src="/images/jordan-1.png"
            alt="Momento com o Jordan"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Texto 2 */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-slate-50 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Feliz ano novo, Jordan! Que Deus ajude você sempre na sua caminhada, fé
          nele sempre, que o impossível se torna possível. Muito obrigado por
          tudo.
        </motion.p>

        {/* IMAGEM 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="relative w-full h-64 md:h-100 rounded-2xl overflow-hidden mb-6 border border-white/20"
        >
          <img
            src="/images/jordan-2.png"
            alt="Mais um momento com o Jordan"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Fechamento */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Feliz 2026, Jordan!!! 💙
        </motion.p>

        {/* Ícones */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Sparkles className="w-6 h-6 text-indigo-300" />
          <Heart className="w-7 h-7 text-blue-400 fill-blue-400" />
          <Sparkles className="w-6 h-6 text-indigo-300" />
        </motion.div>
      </motion.div>
    </main>
  );
};
