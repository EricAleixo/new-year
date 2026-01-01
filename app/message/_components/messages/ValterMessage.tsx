"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Slide {
  title: string;
  content: string;
  image?: string;
  isLastSlide?: boolean;
}

export const ValterMessage = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides: Slide[] = [
    {
      title: "Para Professor Valter",
      content:
        "Alguns professores entram na nossa vida para ensinar um conteúdo. Outras entram para ensinar como se viver",
      image: "/images/valter-1.png",
    },
    {
      title: "Programação não era pra mim",
      content:
        "Conheci você no primeiro ano, em Introdução à Linguagem de Programação, numa fase em que tudo ainda era novo, confuso e assustador. Programar parecia distante, complicado demais para alguém que ainda tentava entender o básico. Mesmo assim, desde o começo, você sempre dizia que eu era capaz, muitas vezes, mais do que eu mesmo acreditava.",
      image: "/images/valter-2.png",
    },
    {
      title: "Não foi só comigo, foi com todos",
      content:
        "Confesso que em alguns momentos você parecia insistente, até chatinho. Mas com o tempo entendi que não era cobrança vazia, era cuidado. Era a tentativa de fazer a gente enxergar algo que ainda não conseguia ver sozinho e, hoje percebo o quanto isso muda a vida de um aluno.",
    },
    {
      title: 'O que é ser um "Professor de verdade?"',
      content:
        "Você é um exemplo claro do que é ser professor de verdade. Não ensina só o conteúdo, mas se preocupa com quem está aprendendo. Sempre brincalhão, zueiro, com provocações e um jeito leve de dar aula, consegue tornar o aprendizado mais humano. Mesmo sendo flamenguista… a gente releva",
      image: "/images/valter-3.png",
    },
    {
      title: "Pra sempre titio Valter",
      content:
        "Eu te considero como um tio. Daqueles que pegam no pé, fazem piada, mas querem ver você crescer. Alguém que observa, acompanha e torce, mesmo quando não diz isso diretamente. Essa proximidade cria confiança e confiança muda tudo.",
      image: "/images/valter-4.png",
    },
    {
      title: "Coragem",
      content:
        "Talvez você nem tenha noção disso, mas só consigo programar hoje o que estou aprendendo porque foi você quem me encorajou a tentar. Não foi apenas sobre escrever código, foi sobre perder o medo. Errar, corrigir e tentar de novo. A coragem que aprendi nas suas aulas se espalhou para outras áreas da minha vida.",
      image: "/images/valter-5.png",
    },
    {
      title: 'print("Feliz 2026 🔴")',
      content:
        "Professor Valter, obrigado por acreditar em mim antes mesmo de eu acreditar.",
      image: "/images/ittalo-5.png",
      isLastSlide: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="relative min-h-screen bg-linear-to-br from-black via-red-950 to-black overflow-hidden">
      {/* Voltar */}
      <motion.button
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </motion.button>

      {/* Indicador */}
      <div className="fixed top-4 right-4 z-50 text-white/70 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8"
            >
              {/* Imagem */}
              {slides[currentSlide].image && (
                <motion.div
                  className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden mb-6 border border-white/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <img
                    src={slides[currentSlide].image}
                    alt="Imagem do slide"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* Título */}
              <motion.h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-linear-to-r from-red-400 via-red-500 to-red-700">
                {slides[currentSlide].title}
              </motion.h2>

              <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent mx-auto mb-6" />

              {/* Conteúdo */}
              <p className="text-lg text-gray-100 text-center leading-relaxed whitespace-pre-line">
                {slides[currentSlide].content}
              </p>

              {/* ✨ FRASE FINAL ANIMADA — SOMENTE NO ÚLTIMO SLIDE */}
              {slides[currentSlide].isLastSlide && (
                <motion.p
                  className="mt-8 text-center text-lg font-semibold text-red-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  Xeiro no coração, sobrinho Eric ama o senhor ❤️
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navegação */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white"
            >
              Próximo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
