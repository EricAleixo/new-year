"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

interface Slide {
  title?: string;
  content: string;
  image?: string;
  gif?: string;
  isLastSlide?: boolean;
}

const slides: Slide[] = [
  {
    title: "Para Emmaely 💙",
    content:
      "Bem... Feliz ano novo, Emmaely!!!\nQuando escrevi a carta para Emily, em paralelo, pensei em você. Estou no momento da minha vida que mais fiquei no que realmente importa, e um dos motivos para eu justamente fazer EJC foi você. Como eu estou cansado de falar... Brincadeira, não canso.",
    image: "/images/emmaely-1.png",
  },
  {
    content:
      "Aqueles dias foram os 3, melhores da minha vida, e só tenho a te agradecer por isso. A experiência incrível só foi possível por sua causa.\n\nSim, ainda leio versículos, e recentemente, comecei a estudar a bíblia. Quero entender mais sobre minha própria religião, e os seres humanos se apaixonam ainda mais pelo que conhecem.",
  },
  {
    content:
      "Muito obrigado por ter tornado 2025 o melhor ano da minha vida até agora. Você és uma pessoa maravilhosa, e vai se tornar uma pessoa mais incrível ainda. Mesmo distantes, espero que nossa amizade possa crescer mais.",
  },
  {
    content:
      "E como diz Valter: xeiro no coração \n\nQue Deus continue abençoando a senhorita. Independente de quanto tempo passe, ao olhar para uma cruz ou uma bíblia também me lembrarei de você, e terá um lugar especial em meu coração.",
  },
  {
    title: "Feliz 2026 ✨",
    content:
      "Feliz 2026!!! Que esse ano seja seu ano de conquistas, bençãos e ótimas companhias. Fique com Cristo, amém!!!",
    gif: "/images/emmaely-2026.gif",
    isLastSlide: true,
  },
];

export const EmmaelyMessage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <main className="relative min-h-screen bg-linear-to-b from-indigo-950 via-blue-950 to-blue-900 overflow-hidden flex items-center justify-center p-4 sm:p-6">
      
      {/* Botão Voltar da página */}
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
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-10 flex flex-col items-center"
          >
            {/* Imagem ou GIF */}
            {slides[currentSlide].image && (
              <motion.img
                src={slides[currentSlide].image}
                alt="Imagem do slide"
                className="w-56 md:w-72 lg:w-80 h-auto mb-6 rounded-3xl border-2 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.8)]"
                initial={{ opacity: 0, y: 50, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: [0.85, 1, 1.02, 1] }}
                transition={{ duration: 1 }}
              />
            )}

            {slides[currentSlide].gif && (
              <motion.img
                src={slides[currentSlide].gif}
                alt="GIF do slide"
                className="w-56 md:w-72 lg:w-80 h-auto mb-6 rounded-3xl border-2 border-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.9)]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: [0.8, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            )}

            {/* Título */}
            {slides[currentSlide].title && (
              <motion.h2
                className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-sky-400 to-indigo-300 mb-6"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
                transition={{ duration: 1 }}
              >
                {slides[currentSlide].title}
              </motion.h2>
            )}

            {/* Conteúdo */}
            <p className="text-base sm:text-lg md:text-xl text-center text-blue-100 leading-relaxed whitespace-pre-line">
              {slides[currentSlide].content.split("\n").map((line, idx) => {
                if (line.includes("E como diz Valter: xeiro no coração")) {
                  return (
                    <motion.span
                      key={idx}
                      className="block text-yellow-300 font-bold text-xl md:text-2xl my-2"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      {line}
                    </motion.span>
                  );
                }
                return <span key={idx}>{line}<br/></span>;
              })}
            </p>

            {/* Botões de navegação */}
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
