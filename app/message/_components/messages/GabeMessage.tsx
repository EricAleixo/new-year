"use client";

import { motion } from "framer-motion";
import React from "react";

export const GabeMessage = () => {
  const [typedText, setTypedText] = React.useState("");

  React.useEffect(() => {
    const textToType = "Feliz ano novo mano!!";
    let i = 0;
    const typeNext = () => {
      setTypedText(textToType.slice(0, i + 1));
      i++;
      if (i < textToType.length) {
        setTimeout(typeNext, 100);
      }
    };
    typeNext();
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        className="max-w-3xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* GIF vertical */}
        <motion.img
          src="/images/gab.gif"
          alt="Gabe GIF"
          className="w-64 sm:w-80 md:w-96 h-96 sm:h-[28rem] md:h-[36rem] rounded-2xl object-cover mb-6 border border-white/30 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Texto principal */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-white leading-relaxed whitespace-pre-line mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Fala Gabee!!! Feliz ano novo mano!

          Você foi uma das primeiras pessoas a conversar comigo na escola, sou grato por isso, foi um dos meus pontapés para ser quem eu sou hoje;

          Aprendi muito com o seu jeito único de ser e fazer as coisas, guardo você no coração. Muito obrigado por tudo
        </motion.p>

        {/* Texto de felicitação digitado */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        >
          {typedText}
        </motion.h2>

        {/* Imagem vertical final */}
        <motion.img
          src="/images/gab-1.png"
          alt="Gabe Feliz 2026"
          className="w-64 sm:w-80 md:w-96 h-96 sm:h-[28rem] md:h-[36rem] rounded-2xl object-cover mb-6 border border-white/30 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </motion.div>
    </main>
  );
};
