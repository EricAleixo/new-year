"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun } from "lucide-react";

export const ThiagoMessage = () => {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-yellow-900 via-amber-800 to-yellow-700 flex items-center justify-center p-4 overflow-hidden">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10"
      >
        {/* Título */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Obrigado, Thiago! ☀️
        </motion.h1>

        {/* Texto principal (INALTERADO) */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-yellow-50 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Bem, Thiago, Gostaria de agradecer pelos ensinamentos e ajuda que o
          senhor disponibilizou nesse tempo de estágio. Foi curto, mas foi um
          ótimo aprendizado, e as pessoas sempre são as melhores partes.
          <br />
          <br />
          agradeço pela paciência e disponibilidade do dia a dia, é ótimo saber
          que conheci uma pessoa incrível como você.
          <br />
          <br />
          Sempre que precisar, estarei a disposição também.
        </motion.p>

        {/* Espaço para foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border border-white/20"
        >
          <img
            src="/images/thiago.png"
            alt="Foto com Thiago"
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Fechamento (INALTERADO) */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-yellow-50 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Um feliz ano novo! que esse 2026 seja o passaporte para portas que ainda
          estão fechadas, mas logo se abrirão! Muito obrigado pelo ano, que Deus
          abençõe o senhor hoje e sempre.
          <br />
          <br />
          <strong>Feliz ano novo!</strong>
        </motion.p>

        {/* Ícones finais */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Sparkles className="w-6 h-6 text-yellow-300" />
          <Sun className="w-7 h-7 text-amber-400" />
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </motion.div>
      </motion.div>
    </main>
  );
};
