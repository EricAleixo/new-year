"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

export const YuriMessage = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <main className="relative min-h-screen bg-linear-to-br from-slate-950 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 text-center">
        {/* TÍTULO — sempre visível */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-200 via-indigo-300 to-purple-300"
        >
          Feliz ano novo, Yuri!!!
        </motion.h1>

        {/* VÍDEO VERTICAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-sm mx-auto h-120 rounded-2xl overflow-hidden border border-white/20 mb-6"
        >
          <video
            src="/images/yuri.mp4"
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted={false}
            controls={false}
            onEnded={() => setVideoEnded(true)}
          />
        </motion.div>

        {/* TEXTO — SÓ APARECE DEPOIS DO VÍDEO */}
        {videoEnded && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-slate-50 leading-relaxed mb-6"
            >
              Obrigado por ter sido minha inspiração como monitor, Yuri. Pra
              sempre você será meu irmão, independente da distância.
              <br />
              <br />
              Pelos bons momentos, pela zueira, pelas conversas que marcaram…
              <br />
              <br />
              Quero te agradecer por ter sido você todo esse tempo.
              <br />
              <br />
              E como diz titio Valter:
              <br />
              <span className="italic text-indigo-200">
                Xeiro no coração
              </span>
            </motion.p>

            {/* FOTO PEQUENA — VERTICAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-40 h-56 mx-auto rounded-xl overflow-hidden border border-white/20 mb-6"
            >
              <img
                src="/images/yuri-2.png"
                alt="Foto do Yuri"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* FECHAMENTO */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-2xl font-bold text-indigo-200 mb-4"
            >
              Feliz 2026, mano! Que Deus te abençoe infinitamente 💙
            </motion.p>

            {/* ÍCONES */}
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-6 h-6 text-indigo-300" />
              <Heart className="w-7 h-7 text-blue-400 fill-blue-400" />
              <Sparkles className="w-6 h-6 text-indigo-300" />
            </motion.div>
          </>
        )}
      </div>
    </main>
  );
};
