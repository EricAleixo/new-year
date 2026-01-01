"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

interface Slide {
  content: string;
  image?: string;
  isLast?: boolean;
}

const slides: Slide[] = [
  {
    content: `Fala, Leo!`,
    image: "/images/leo-1.png",
  },
  {
    content: `Um dos primeiros amigos que fiz na Dom Marcelo, e que compartilhou comigo grandes momentos.`,
    image: "/images/leo-2.png",
  },
  {
    content: `Ganhou o segundo lugar da Olimpíada de Programação comigo. Gente boa, tímida, mas verdadeira.`,
    image: "/images/leo-3.png",
  },
  {
    content: `É incrível ter amigos como você, que fazem parte da história e das conquistas. Que 2026 seja um ano de crescimento, realizações e muitas risadas!`,
    image: "/images/anael-4.png",
    isLast: true,
  },
];

export const LeoMessage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");

  const nextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => Math.max(prev - 0, 0));

  useEffect(() => {
    if (slides[currentSlide].isLast) {
      const textToType = "Feliz 2026, Leo!!!";
      let i = 0;
      setTypedText("");

      const typeNext = () => {
        setTypedText(textToType.slice(0, i + 1));
        i++;
        if (i < textToType.length) {
          setTimeout(typeNext, 100);
        }
      };
      typeNext();
    }
  }, [currentSlide]);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-600 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Botão voltar */}
      <motion.button
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 rounded-full text-black text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </motion.button>

      {/* Indicador de slide */}
      <div className="fixed top-4 right-4 z-50 text-black/70 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      <div className="max-w-3xl w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/20 backdrop-blur-xl rounded-3xl border border-yellow-700/40 shadow-2xl p-6 sm:p-10 flex flex-col items-center"
          >
            {/* Imagem vertical */}
            {slides[currentSlide].image && (
              <motion.img
                src={slides[currentSlide].image}
                alt="Imagem vertical"
                className="w-64 sm:w-80 md:w-96 h-96 sm:h-[28rem] md:h-[36rem] lg:h-[40rem] rounded-2xl object-cover mb-6 border border-yellow-700/50 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
            )}

            {/* Texto do slide */}
            {slides[currentSlide].isLast ? (
              <>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  {typedText}
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-white leading-relaxed whitespace-pre-line mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: typedText === "Feliz 2026, Leo!!!" ? 1 : 0,
                    y: 0,
                  }}
                  transition={{ duration: 1 }}
                >
                  {slides[currentSlide].content.replace(
                    "Feliz 2026, Leo!!!",
                    ""
                  )}
                </motion.p>
              </>
            ) : (
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-black leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slides[currentSlide].content}
              </motion.p>
            )}

            {/* Navegação */}
            <div className="flex justify-between w-full mt-6">
              <motion.button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 disabled:opacity-30 rounded-full text-black text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </motion.button>

              <motion.button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 disabled:opacity-30 rounded-full text-black text-sm"
              >
                Próximo
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};
