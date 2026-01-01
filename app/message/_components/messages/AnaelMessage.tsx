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
  { content: `Feliz ano novo, Anael!!`, image: "/images/anael-1.png" },
  { content: `É incrível como o tempo passa, um dia, estávamos em 2023, hoje, estamos em 2026.`, image: "/images/anael-4.png" },
  { content: `Onde uma nova geração de alunos entra na Dom Marcelo, enquanto outros saem.`, image: "/images/anael-3.png" },
  { content: `Não sei como consigo expressar a gratidão que sinto, é fascinante saber que amadurecemos, crescemos, e de repente chegou a hora de ir embora...` },
  { content: `
2026 é a porta para muita gente, espero que nesse ano, se tiver algum sonho pendente, que o senhor realize. E continue a realizar os feitos que fez esse ano. Um gesto de gentileza pode gerar uma onda, não é mesmo?

Muito obrigado, professor, pelo tempo, pela paciência, pelo trabalho.

Desejo ao senhor um ano novo próspero e cheio de virtudes. Que Deus te abençoe nesse ano.`, image: "/images/anael-2.png", isLast: true },
];

export const AnaelMessage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    if (slides[currentSlide].isLast) {
      const textToType = "Feliz 2026!!!";
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
    <main className="relative min-h-screen bg-linear-to-br from-black via-white to-black flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Botão voltar */}
      <motion.button
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </motion.button>

      {/* Indicador de slide */}
      <div className="fixed top-4 right-4 z-50 text-white/70 text-sm">
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
            className="bg-black/70 backdrop-blur-xl rounded-3xl border border-red-700/40 shadow-2xl p-6 sm:p-10 flex flex-col items-center"
          >
            {/* Imagem vertical */}
            {slides[currentSlide].image && (
              <motion.img
                src={slides[currentSlide].image}
                alt="Imagem vertical"
                className="w-64 sm:w-80 md:w-96 h-96 sm:h-112 md:h-144 lg:h-160 rounded-2xl object-cover mb-6 border border-red-700/50 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
            )}

            {/* Texto do slide */}
            {slides[currentSlide].isLast ? (
              <>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-red-400 via-white to-red-400 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
                >
                  {typedText}
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-white leading-relaxed whitespace-pre-line mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: typedText === "Feliz 2026!!!" ? 1 : 0, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {slides[currentSlide].content.replace("Feliz 2026!!!", "")}
                </motion.p>
              </>
            ) : (
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-white leading-relaxed whitespace-pre-line"
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
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </motion.button>

              <motion.button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white text-sm"
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
