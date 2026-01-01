"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const paragraphs = [
  `Feliz ano novo, sr. Klécio!`,

  `Venho aqui agradecer pelas dicas, conselhos e por ser a pessoa prestativa que o senhor realmente é. Ao longo do tempo, aprendi que suas orientações vão muito além do conteúdo em sala de aula. Elas ajudam a gente a pensar melhor, a ter mais responsabilidade e a enxergar as situações com mais maturidade.`,

  `Mesmo com esse jeito “chato” que já virou marca registrada, o senhor consegue ser descolado à sua maneira, sempre sincero, direto e presente quando alguém precisa. Isso faz toda a diferença, porque mostra que o senhor se importa de verdade com seus alunos e com o futuro de cada um.`,

  `Obrigado por ser um ótimo professor e um conselheiro em quem dá para confiar.`,

  `Feliz 2026! O senhor é um exemplo de conquista, superação e desempenho.`,
];

export const KlecioMessage = () => {
  const [current, setCurrent] = useState(0);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    if (current >= paragraphs.length) return;

    const text = paragraphs[current];
    let i = 0;

    const type = () => {
      setTyped(text.slice(0, i + 1));
      i++;

      if (i < text.length) {
        setTimeout(type, 28);
      } else {
        setTimeout(() => {
          setDone((prev) => [...prev, text]);
          setTyped("");
          setCurrent((prev) => prev + 1);
        }, 800);
      }
    };

    type();
  }, [current]);

  return (
    <main className="relative min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-blue-400/20 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12"
      >
        {/* FOTO */}
        <div className="relative w-full h-64 md:h-140 rounded-2xl overflow-hidden mb-10 border border-blue-400/20">
          <img
            src="/images/klecio.jpeg"
            alt="Foto do professor Klécio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* PARÁGRAFOS FINALIZADOS */}
        <div className="space-y-8 mb-6">
          {done.map((text, i) => {
            const isFirst = i === 0;
            const isLast = i === paragraphs.length - 1;

            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-center leading-relaxed ${
                  isFirst
                    ? "text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-300"
                    : isLast
                    ? "text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-blue-300 to-indigo-300"
                    : "text-lg sm:text-xl md:text-2xl text-slate-200"
                }`}
              >
                {text}
              </motion.p>
            );
          })}
        </div>

        {/* PARÁGRAFO SENDO DIGITADO */}
        {typed && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center leading-relaxed ${
              current === 0
                ? "text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-300"
                : current === paragraphs.length - 1
                ? "mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-blue-300 to-indigo-300"
                : "text-lg sm:text-xl md:text-2xl text-slate-200"
            }`}
          >
            {typed}
            <span className="ml-1 animate-pulse text-blue-400">|</span>
          </motion.p>
        )}
      </motion.div>
    </main>
  );
};
